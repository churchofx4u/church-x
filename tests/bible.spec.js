const { test, expect } = require("@playwright/test");
const { fixtureState, seedAndGoto, readState } = require("./helpers");

test.describe("Offline Bible (WEB)", () => {
  test("index and John book are public-domain WEB files", async ({ request }) => {
    const idx = await (await request.get("/bible/web/index.json")).json();
    expect(idx.translation).toBe("WEB");
    expect(idx.license).toBe("public-domain");
    expect(idx.books.length).toBe(66);
    const john = idx.books.find((b) => b.id === "john");
    expect(john).toBeTruthy();
    const book = await (await request.get("/bible/web/" + john.file)).json();
    expect(book["3"]["16"]).toMatch(/God so loved the world/i);
  });

  test("service worker lists bible.js, index, and cache v31", async ({ request }) => {
    const body = await (await request.get("/sw.js")).text();
    expect(body).toContain("church-x-v31");
    expect(body).toContain("./bible.js");
    expect(body).toContain("./bible/web/index.json");
  });

  test("picker adds John 3:16–17 as scripture slides", async ({ page }) => {
    await seedAndGoto(page, fixtureState());
    await expect(page.locator("#bible-book")).toBeVisible();
    await expect
      .poll(async () => page.locator("#bible-book option").count(), { timeout: 10000 })
      .toBeGreaterThan(10);

    await page.locator("#bible-book").selectOption("john");
    await expect
      .poll(async () => (await page.locator("#bible-status").innerText()).toLowerCase())
      .toMatch(/john|chapters|web/);

    await page.locator("#bible-chapter").fill("3");
    await page.locator("#bible-chapter").dispatchEvent("change");
    await page.waitForTimeout(200);
    await page.locator("#bible-from").fill("16");
    await page.locator("#bible-to").fill("17");
    await page.locator("#add-bible").click();

    await expect(page.locator("#file-note")).toContainText(/John 3:16/i);

    const state = await readState(page);
    const service = state.services.find((s) => s.id === state.activeId);
    const item = [...service.items].reverse().find((it) => it.type === "scripture" && /John 3:16/i.test(it.title));
    expect(item).toBeTruthy();
    expect(item.title).toMatch(/WEB/);
    expect(item.body).toMatch(/God so loved the world/i);
    expect(item.body).toMatch(/17\s/);
  });

  test("bible.js exposes WwmBible with no remote endpoints in source", async ({ request }) => {
    const src = await (await request.get("/bible.js")).text();
    expect(src).toContain("WwmBible");
    expect(src).not.toMatch(/api\.bible|scripture\.api|esv\.org|niv|youversion/i);
    expect(src).toMatch(/bible\/web/);
  });
});

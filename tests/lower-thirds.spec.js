const { test, expect } = require("@playwright/test");
const { fixtureState, seedAndGoto, uid } = require("./helpers");

const LIVE = "churchx.live";

test.describe("Livestream lower-thirds (OBS)", () => {
  test("service worker cache is v31 and offline fallback includes screen=lower", async ({ request }) => {
    const body = await (await request.get("/sw.js")).text();
    expect(body).toContain("church-x-v31");
    expect(body).toContain("screen=lower");
  });

  test("lower-thirds page is transparent by default and paints lyrics from LIVE", async ({ page }) => {
    const state = fixtureState();
    const service = state.services[0];
    // Ensure a hymn verse exists for lyrics
    const hymn = service.items.find((it) => it.type === "hymn");
    expect(hymn).toBeTruthy();

    await page.addInitScript(
      ({ key, firstRun, editedAt, backedUpAt, undoKey, packed, liveKey, live }) => {
        localStorage.setItem(key, packed);
        localStorage.setItem(firstRun, "done");
        localStorage.setItem(editedAt, String(Date.now()));
        localStorage.setItem(backedUpAt, String(Date.now()));
        localStorage.removeItem(undoKey);
        localStorage.setItem(liveKey, JSON.stringify(live));
      },
      {
        key: "churchx.v1",
        firstRun: "churchx.firstRun",
        editedAt: "churchx.editedAt",
        backedUpAt: "churchx.backedUpAt",
        undoKey: "churchx.undo",
        packed: JSON.stringify(state),
        liveKey: LIVE,
        live: {
          slideIndex: 2, // typically first verse after title+song title
          black: false,
          titleCard: false,
          serviceId: service.id,
          stageMessage: "",
          countdownEnd: null,
          stageTheme: "dark",
          lowerBg: "transparent"
        }
      }
    );
    await page.route("https://gc.zgo.at/**", (route) => route.abort());
    await page.goto("/index.html?screen=lower");

    await expect(page.locator("body")).toHaveClass(/lower-thirds-mode/);
    await expect(page.locator("body")).not.toHaveClass(/lt-green/);
    await expect(page.locator("#lower-thirds")).toBeVisible();
    await expect(page.locator("#lt-bar")).toBeVisible();
    await expect(page.locator("#lt-body")).not.toBeEmpty();
    const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    // transparent → rgba(0,0,0,0)
    expect(bg === "rgba(0, 0, 0, 0)" || bg === "transparent").toBeTruthy();
  });

  test("green screen mode via bg=green and booth toggle syncs LIVE", async ({ page, context }) => {
    await seedAndGoto(page, fixtureState());
    await page.getByRole("button", { name: "Present" }).click();
    // dismiss consent if any
    const dialog = page.locator("#ask-dialog");
    if (await dialog.isVisible().catch(() => false)) {
      await dialog.locator("#ask-no").click();
    }
    await expect(page.locator("#open-lower-thirds")).toBeVisible();
    await page.locator("#lower-bg-toggle").click();
    const live = await page.evaluate((k) => JSON.parse(localStorage.getItem(k)), LIVE);
    expect(live.lowerBg).toBe("green");

    const popupPromise = context.waitForEvent("page");
    await page.locator("#open-lower-thirds").click();
    const popup = await popupPromise;
    await popup.waitForLoadState("domcontentloaded");
    await expect(popup.locator("body")).toHaveClass(/lt-green/, { timeout: 8000 });
    await expect(popup.locator("#lt-bg-toggle")).toBeVisible();
    await popup.locator("#lt-bg-toggle").click();
    await expect
      .poll(async () => popup.evaluate(() => document.body.classList.contains("lt-green")))
      .toBe(false);
  });

  test("help mentions OBS Browser Source", async ({ page }) => {
    await seedAndGoto(page, fixtureState());
    await page.locator("nav button[data-view='help']").click();
    await expect(page.getByRole("heading", { name: /Livestream lower-thirds/i })).toBeVisible();
    await expect(page.locator("#view")).toContainText(/OBS/i);
    await expect(page.locator("#view")).toContainText(/Browser Source/i);
    await expect(page.locator("#view")).toContainText(/Chroma Key|green screen/i);
  });

  test("black hides the lower-third bar", async ({ page }) => {
    const state = fixtureState();
    await page.addInitScript(
      ({ key, firstRun, editedAt, backedUpAt, undoKey, packed, liveKey, live }) => {
        localStorage.setItem(key, packed);
        localStorage.setItem(firstRun, "done");
        localStorage.setItem(editedAt, String(Date.now()));
        localStorage.setItem(backedUpAt, String(Date.now()));
        localStorage.removeItem(undoKey);
        localStorage.setItem(liveKey, JSON.stringify(live));
      },
      {
        key: "churchx.v1",
        firstRun: "churchx.firstRun",
        editedAt: "churchx.editedAt",
        backedUpAt: "churchx.backedUpAt",
        undoKey: "churchx.undo",
        packed: JSON.stringify(state),
        liveKey: LIVE,
        live: {
          slideIndex: 0,
          black: true,
          titleCard: false,
          serviceId: state.activeId,
          lowerBg: "transparent"
        }
      }
    );
    await page.route("https://gc.zgo.at/**", (route) => route.abort());
    await page.goto("/index.html?screen=lower");
    await expect(page.locator("#lt-bar")).toBeHidden();
  });
});

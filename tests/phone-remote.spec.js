const { test, expect } = require("@playwright/test");
const { fixtureState, seedAndGoto } = require("./helpers");

test.describe("Phone remote (Supabase Realtime, off by default)", () => {
  test("config defaults keep remote off and reject empty credentials", async ({ page }) => {
    await seedAndGoto(page, fixtureState());
    const flags = await page.evaluate(() => {
      const c = window.WWM_CONFIG || {};
      return {
        remoteEnabled: !!c.remoteEnabled,
        url: c.supabaseUrl || "",
        key: c.supabaseAnonKey || "",
        configured: typeof wwmRemoteConfigured === "function" && wwmRemoteConfigured()
      };
    });
    expect(flags.remoteEnabled).toBe(false);
    expect(flags.url).toBe("");
    expect(flags.key).toBe("");
    expect(flags.configured).toBe(false);
  });

  test("disabled remote makes zero Supabase network calls and never injects supabase.js", async ({ page }) => {
    const hits = [];
    page.on("request", (req) => {
      const u = req.url();
      if (/supabase\.(co|in)|supabase\.js/i.test(u) && !/\/vendor\/supabase\.js$/i.test(u)) {
        hits.push(u);
      }
      // Also flag any attempt to fetch vendor/supabase.js while disabled
      if (/\/vendor\/supabase\.js/i.test(u)) hits.push(u);
    });
    await seedAndGoto(page, fixtureState());
    await page.getByRole("button", { name: "Present" }).click();
    const dialog = page.locator("#ask-dialog");
    if (await dialog.isVisible().catch(() => false)) await dialog.locator("#ask-no").click();
    await expect(page.locator(".booth-remote-controls")).toContainText(/Off|clicker/i);
    await page.waitForTimeout(500);
    // Visit remote screen too
    await page.goto("/index.html?screen=remote&room=TEST01");
    await expect(page.locator("body")).toHaveClass(/remote-mode/);
    await expect(page.locator("#remote-status")).toContainText(/off|config\.js/i);
    await page.waitForTimeout(500);
    expect(hits).toEqual([]);
    const injected = await page.evaluate(() => !!document.querySelector("script[data-wwm-supabase]"));
    expect(injected).toBe(false);
    const hasGlobal = await page.evaluate(() => typeof supabase !== "undefined");
    expect(hasGlobal).toBe(false);
  });

  test("vendor supabase UMD and remote.js are present; sw is v32", async ({ request }) => {
    const sw = await (await request.get("/sw.js")).text();
    expect(sw).toContain("church-x-v32");
    expect(sw).toContain("./remote.js");
    expect(sw).toContain("./vendor/supabase.js");
    const remote = await (await request.get("/remote.js")).text();
    expect(remote).toContain("WwmRemote");
    expect(remote).toContain("vendor/supabase.js");
    expect(remote).not.toMatch(/cdn\.jsdelivr|unpkg\.com/);
    const umd = await (await request.get("/vendor/supabase.js")).text();
    expect(umd).toContain("createClient");
    expect(umd.length).toBeGreaterThan(1000);
  });

  test("PageDown / PageUp advance slides like a USB clicker", async ({ page }) => {
    await seedAndGoto(page, fixtureState());
    await page.getByRole("button", { name: "Present" }).click();
    const dialog = page.locator("#ask-dialog");
    if (await dialog.isVisible().catch(() => false)) await dialog.locator("#ask-no").click();
    await expect(page.locator("#go-next")).toBeVisible();
    const before = await page.evaluate(() => slideIndex);
    await page.keyboard.press("PageDown");
    await expect.poll(async () => page.evaluate(() => slideIndex)).toBe(before + 1);
    await page.keyboard.press("PageUp");
    await expect.poll(async () => page.evaluate(() => slideIndex)).toBe(before);
  });

  test("mock host applies next/prev/black/goto without network", async ({ page }) => {
    await seedAndGoto(page, fixtureState());
    await page.getByRole("button", { name: "Present" }).click();
    const dialog = page.locator("#ask-dialog");
    if (await dialog.isVisible().catch(() => false)) await dialog.locator("#ask-no").click();

    await page.evaluate(() => {
      // Mock remote layer — no supabase
      window.WwmRemote = {
        configured: () => true,
        startHost: (handlers) => {
          window.__remoteHandlers = handlers;
          return Promise.resolve("MOCK01");
        },
        joinPhone: () => Promise.resolve(),
        sendCommand: () => Promise.resolve(),
        sendStatus: () => Promise.resolve(),
        leave: () => {},
        get roomCode() { return "MOCK01"; },
        get role() { return "host"; }
      };
      window.wwmRemoteConfigured = () => true;
      render();
    });
    await expect(page.locator("#remote-start")).toBeVisible();
    await page.locator("#remote-start").click();
    await expect(page.locator(".remote-code-big")).toContainText("MOCK01");

    const start = await page.evaluate(() => slideIndex);
    await page.evaluate(() => applyRemoteCommand({ cmd: "next" }));
    expect(await page.evaluate(() => slideIndex)).toBe(start + 1);
    await page.evaluate(() => applyRemoteCommand({ cmd: "prev" }));
    expect(await page.evaluate(() => slideIndex)).toBe(start);
    await page.evaluate(() => applyRemoteCommand({ cmd: "black" }));
    expect(await page.evaluate(() => black)).toBe(true);
    await page.evaluate(() => applyRemoteCommand({ cmd: "goto", index: 3 }));
    expect(await page.evaluate(() => slideIndex)).toBe(2);
    expect(await page.evaluate(() => black)).toBe(false);
  });

  test("help mentions phone remote and USB/Bluetooth clicker", async ({ page }) => {
    await seedAndGoto(page, fixtureState());
    await page.locator("nav button[data-view='help']").click();
    await expect(page.locator("#view h3").filter({ hasText: /Phone remote/i })).toBeVisible();
    await expect(page.locator("#view")).toContainText(/Supabase/i);
    await expect(page.locator("#view")).toContainText(/Page Down/i);
    await expect(page.locator("#view")).toContainText(/clicker/i);
  });
});

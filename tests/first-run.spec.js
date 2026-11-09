const { test, expect } = require("@playwright/test");
const { KEY, FIRST_RUN, UNDO_KEY, EDITED_AT } = require("./helpers");

test.describe("First-run setup", () => {
  test("wizard walks through name, theme, sample Sunday, and Done", async ({ page }) => {
    await page.addInitScript(
      ({ key, firstRun, undoKey, editedAt }) => {
        localStorage.removeItem(key);
        localStorage.removeItem(firstRun);
        localStorage.removeItem(undoKey);
        localStorage.removeItem(editedAt);
        localStorage.removeItem("churchx.live");
        localStorage.removeItem("churchx.notified");
      },
      { key: KEY, firstRun: FIRST_RUN, undoKey: UNDO_KEY, editedAt: EDITED_AT }
    );
    await page.route("https://gc.zgo.at/**", (route) => route.abort());
    await page.route("https://formsubmit.co/**", (route) =>
      route.fulfill({ status: 200, contentType: "application/json", body: '{"success":"true"}' })
    );

    await page.goto("/index.html");
    const wizard = page.locator("#wizard");
    await expect(wizard).toBeVisible();
    await expect(wizard).toContainText("What is your church called");

    await page.locator("#wiz-name").fill("First Run Church");
    await page.locator("#wiz-next").click();

    await expect(wizard).toContainText("Pick a look");
    await page.locator('[data-wiz-theme="parchment"]').click();
    await page.locator("#wiz-next").click();

    await expect(wizard).toContainText("Start with a sample Sunday");
    await page.locator("#wiz-sample").click();

    await expect(wizard).toContainText("Try Present");
    await page.locator("#wiz-next").click(); // Done

    await expect(wizard).toHaveCount(0);
    await expect(page.locator("#church-label")).toContainText("First Run Church");
    await expect(page.locator("nav button[data-view='plan']")).toBeVisible();

    const state = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)), KEY);
    expect(state.churchName).toBe("First Run Church");
    expect(state.theme).toBe("parchment");
    expect(state.services.length).toBeGreaterThanOrEqual(1);
    expect(state.services[0].items.length).toBeGreaterThan(3);

    const firstRunFlag = await page.evaluate((k) => localStorage.getItem(k), FIRST_RUN);
    expect(firstRunFlag).toBeTruthy();
  });

  test("Skip still closes the wizard and marks first run done", async ({ page }) => {
    await page.addInitScript(
      ({ key, firstRun, undoKey, editedAt }) => {
        localStorage.removeItem(key);
        localStorage.removeItem(firstRun);
        localStorage.removeItem(undoKey);
        localStorage.removeItem(editedAt);
      },
      { key: KEY, firstRun: FIRST_RUN, undoKey: UNDO_KEY, editedAt: EDITED_AT }
    );
    await page.route("https://gc.zgo.at/**", (route) => route.abort());
    await page.goto("/index.html");
    await expect(page.locator("#wizard")).toBeVisible();

    // Skip through all steps
    for (let i = 0; i < 4; i++) {
      const skip = page.locator("#wiz-skip");
      if (await skip.count()) await skip.click();
      else break;
      await page.waitForTimeout(50);
    }
    // On last step Skip also ends; if still open click Done
    if (await page.locator("#wizard").count()) {
      await page.locator("#wiz-next").click();
    }
    await expect(page.locator("#wizard")).toHaveCount(0);
    const firstRunFlag = await page.evaluate((k) => localStorage.getItem(k), FIRST_RUN);
    expect(firstRunFlag).toBeTruthy();
  });
});

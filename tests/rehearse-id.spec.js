const { test, expect } = require("@playwright/test");
const { fixtureState, seedAndGoto } = require("./helpers");

test.describe("Rehearse id vs projector overlay", () => {
  test("Rehearse uses #rehearse; projector overlay keeps #stage", async ({ page }) => {
    await seedAndGoto(page, fixtureState());
    await expect(page.locator("#rehearse")).toHaveText("Rehearse");
    await expect(page.locator("button#stage")).toHaveCount(0);
    await expect(page.locator("div#stage.stage")).toHaveCount(1);

    await page.locator("#rehearse").click();
    await expect(page.locator("div#stage.stage.on")).toBeVisible();
    await expect(page.locator("#rehearse")).toBeVisible();
    // Exit rehearsal
    await page.locator("#exit-stage").click();
    await expect(page.locator("div#stage.stage.on")).toHaveCount(0);
  });

  test("service worker cache is v29", async ({ request }) => {
    const res = await request.get("/sw.js");
    const body = await res.text();
    expect(body).toContain("church-x-v29");
  });
});

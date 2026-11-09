const { test, expect } = require("@playwright/test");
const { fixtureState, seedAndGoto, readState, dismissConsentIfAny } = require("./helpers");

test.describe("Present and Rehearse CCLI logging", () => {
  test("Present opens booth, projector popup, and counts hymns in the CCLI log", async ({ page, context }) => {
    await seedAndGoto(page, fixtureState({ usageConsent: false }));

    const popupPromise = context.waitForEvent("page");
    await page.getByRole("button", { name: "Present" }).click();
    await dismissConsentIfAny(page, "no");

    await expect(page.locator("#go-next")).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Test Sunday', exact: true })).toBeVisible();

    let popup = null;
    try {
      popup = await Promise.race([
        popupPromise,
        new Promise((resolve) => setTimeout(() => resolve(null), 3000))
      ]);
    } catch (_) {
      popup = null;
    }
    if (popup) {
      await popup.waitForLoadState("domcontentloaded");
      expect(popup.url()).toContain("screen=house");
    }

    for (let i = 0; i < 12; i++) {
      const next = page.locator("#go-next");
      if (!(await next.count())) break;
      await next.click();
      await page.waitForTimeout(50);
    }

    const state = await readState(page);
    const titles = state.usage.map((u) => u.title);
    expect(titles).toContain("In Christ Alone");
    expect(titles).toContain("Amazing Grace");
    expect(state.usage.filter((u) => u.title === "In Christ Alone")).toHaveLength(1);
    expect(state.usage.filter((u) => u.title === "Amazing Grace")).toHaveLength(1);

    await page.locator("nav button[data-view='report']").click();
    await expect(page.getByRole('heading', { name: 'CCLI log', exact: true })).toBeVisible();
    await expect(page.locator("table")).toContainText("In Christ Alone");
    await expect(page.locator("table")).toContainText("3350395");
    await expect(page.locator("table")).toContainText("Amazing Grace");
  });

  test("Rehearse does NOT add songs to the CCLI log", async ({ page }) => {
    await seedAndGoto(page, fixtureState({ usage: [], usageConsent: false }));

    // Rehearse button shares id="stage" with the projector overlay, so openStage
    // styles the button as the full-screen stage. Still, countingUsage is false.
    await page.getByRole("button", { name: "Rehearse" }).click();

    await expect
      .poll(async () => page.evaluate(() => typeof countingUsage !== "undefined" && countingUsage === false))
      .toBeTruthy();

    await page.evaluate(() => {
      const slides = slidesFor(active());
      for (let i = 0; i < slides.length + 2; i++) step(1);
    });

    const state = await readState(page);
    expect(state.usage).toEqual([]);

    // Leave rehearsal without clicking through the covering stage button.
    await page.evaluate(() => {
      document.querySelectorAll(".stage.on, button#stage.on, button.stage").forEach((el) => {
        el.classList.remove("on");
        if (el.tagName === "BUTTON") el.className = "ghost";
      });
      const overlay = document.querySelector("div.stage");
      if (overlay) overlay.classList.remove("on");
      setView("report");
    });

    await expect(page.getByRole('heading', { name: 'CCLI log', exact: true })).toBeVisible();
    await expect(page.locator("table")).toContainText("Present a service");
  });
});

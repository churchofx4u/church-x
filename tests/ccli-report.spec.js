const { test, expect } = require("@playwright/test");
const { fixtureState, seedAndGoto, readState, uid } = require("./helpers");

test.describe("CCLI report and CSV export", () => {
  test("CCLI log shows current period, exports CSV, and can start a new period", async ({ page }) => {
    const usage = [
      {
        title: "In Christ Alone",
        author: "Keith Getty, Stuart Townend",
        ccli: "3350395",
        pd: false,
        at: Date.parse("2026-11-02T10:00:00Z")
      },
      {
        title: "In Christ Alone",
        author: "Keith Getty, Stuart Townend",
        ccli: "3350395",
        pd: false,
        at: Date.parse("2026-11-09T10:00:00Z")
      },
      {
        title: "Amazing Grace",
        author: "John Newton",
        ccli: "",
        pd: true,
        at: Date.parse("2026-11-09T10:05:00Z")
      }
    ];

    await seedAndGoto(
      page,
      fixtureState({
        usage,
        usagePeriodStart: "2026-11-01",
        usagePeriods: []
      })
    );

    await page.locator("nav button[data-view='report']").click();
    await expect(page.locator("h1")).toContainText("CCLI log");
    await expect(page.locator(".period-bar")).toContainText("Current period");
    await expect(page.locator("table")).toContainText("In Christ Alone");
    await expect(page.locator("table")).toContainText("3350395");
    await expect(page.locator("table")).toContainText("2"); // times shown
    await expect(page.locator("table")).toContainText("Amazing Grace");
    await expect(page.locator("table")).toContainText("Public domain");

    // CSV export
    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.locator("#export-ccli").click()
    ]);
    expect(download.suggestedFilename()).toMatch(/ccli-report-.*\.csv$/);
    const csvPath = await download.path();
    const fs = require("fs");
    const csv = fs.readFileSync(csvPath, "utf8");
    expect(csv).toContain("Title,CCLI Song Number,Authors,Times Used,Dates");
    expect(csv).toContain("In Christ Alone");
    expect(csv).toContain("3350395");
    expect(csv).toContain("Amazing Grace");

    // Start new period
    await page.locator("#new-ccli-period").click();
    const dialog = page.locator("#ask-dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText("Start a new CCLI period");
    await dialog.locator("#ask-yes").click();

    const state = await readState(page);
    expect(state.usage).toEqual([]);
    expect(state.usagePeriods.length).toBe(1);
    expect(state.usagePeriods[0].usage.length).toBe(3);

    await expect(page.locator("table")).toContainText("Present a service");
    await expect(page.locator("text=Past periods")).toBeVisible();
    await expect(page.locator("[data-export-period]")).toHaveCount(1);

    // Export past period
    const [pastDownload] = await Promise.all([
      page.waitForEvent("download"),
      page.locator("[data-export-period]").first().click()
    ]);
    expect(pastDownload.suggestedFilename()).toMatch(/ccli-report-.*\.csv$/);
  });
});

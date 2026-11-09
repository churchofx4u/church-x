const { test, expect } = require("@playwright/test");
const { fixtureState, seedAndGoto, readState, uid } = require("./helpers");

function stateWithAnnounce() {
  const announceId = uid();
  const announce2 = uid();
  const serviceId = uid();
  return fixtureState({
    services: [
      {
        id: serviceId,
        name: "Test Sunday",
        date: "2026-11-09",
        items: [
          {
            id: announceId,
            type: "word",
            title: "Announcement: Coffee hour",
            body: "Join us in the lobby after the service."
          },
          {
            id: announce2,
            type: "word",
            title: "Announcement: Midweek",
            body: "Bible study Wednesday at 7."
          },
          {
            id: uid(),
            type: "word",
            title: "Welcome",
            body: "Hello church."
          }
        ],
        preservice: {
          label: "Service starts in",
          countdownKind: "minutes",
          minutes: 5,
          startTime: "10:30",
          loopSeconds: 3,
          selectedIds: [announceId, announce2],
          extraSlides: [],
          withCountdown: true,
          withLoop: true,
          onZero: "first"
        }
      }
    ],
    activeId: serviceId
  });
}

test.describe("Pre-service countdown and announcement loop", () => {
  test("plan shows Pre-service controls and saves settings", async ({ page }) => {
    await seedAndGoto(page, stateWithAnnounce());
    await expect(page.locator(".pre-service-card h3").first()).toContainText("Pre-service");
    await page.locator("#pre-label").fill("Gathering begins in");
    await page.locator("#pre-minutes").fill("7");
    await page.locator("#pre-save").click();
    await expect(page.locator("#file-note")).toContainText(/saved/i);
    const state = await readState(page);
    const ps = state.services.find((s) => s.id === state.activeId).preservice;
    expect(ps.label).toBe("Gathering begins in");
    expect(ps.minutes).toBe(7);
  });

  test("start countdown-only paints big timer on projector; stop starts service", async ({ page, context }) => {
    await seedAndGoto(page, stateWithAnnounce());
    await page.locator("#pre-with-loop").uncheck();
    await page.locator("#pre-with-countdown").check();
    await page.locator("#pre-minutes").fill("2");

    const popupPromise = context.waitForEvent("page");
    await page.locator("#pre-start").click();
    await expect(page.getByText("Running now")).toBeVisible();

    const popup = await popupPromise;
    await popup.waitForLoadState("domcontentloaded");
    await expect(popup.locator("#screen .pre-countdown-big")).toBeVisible({ timeout: 8000 });
    const houseText = await popup.locator("#screen").innerText();
    expect(houseText).toMatch(/\d+:\d{2}/);
    expect(houseText).toMatch(/Service starts in/i);

    await page.locator("#pre-stop").click();
    await expect(page.getByText("Running now")).toHaveCount(0);
    await expect
      .poll(async () => popup.locator("#screen .pre-countdown-big").count(), { timeout: 5000 })
      .toBe(0);
  });

  test("loop + countdown shows announcement and corner timer on projector", async ({ page, context }) => {
    await seedAndGoto(page, stateWithAnnounce());
    const popupPromise = context.waitForEvent("page");
    await page.locator("#pre-start").click();
    await expect(page.getByText("Running now")).toBeVisible();

    const popup = await popupPromise;
    await popup.waitForLoadState("domcontentloaded");
    await expect(popup.locator("#screen .pre-countdown-corner")).toBeVisible({ timeout: 8000 });
    const screen = await popup.locator("#screen").innerText();
    expect(screen).toMatch(/Coffee hour|Midweek|lobby|Wednesday/i);
    expect(screen).toMatch(/\d+:\d{2}/);
  });

  test("service worker cache is v29", async ({ request }) => {
    const res = await request.get("/sw.js");
    const body = await res.text();
    expect(body).toContain("church-x-v29");
    expect(body).not.toContain("church-x-v28");
  });
});

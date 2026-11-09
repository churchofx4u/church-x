const { test, expect } = require("@playwright/test");
const path = require("path");
const { fixtureState, seedAndGoto, readState, uid } = require("./helpers");

const FIX = path.join(__dirname, "..", "test", "fixtures");

test.describe("Song library", () => {
  test("add a licensed song and put it on Sunday", async ({ page }) => {
    const serviceId = uid();
    await seedAndGoto(
      page,
      fixtureState({
        songs: [],
        services: [
          {
            id: serviceId,
            name: "Test Sunday",
            date: "2026-11-09",
            items: []
          }
        ],
        activeId: serviceId
      })
    );

    await page.locator("nav button[data-view='songs']").click();
    await expect(page.getByRole('heading', { name: 'Songs', exact: true })).toBeVisible();

    await page.locator("#lic-title").fill("How Great Is Our God");
    await page.locator("#lic-author").fill("Chris Tomlin");
    await page.locator("#lic-ccli").fill("4348399");
    await page.locator("#lic-copy").fill("© 2004 sixsteps Music");
    await page.locator("#lic-lyrics").fill(
      "The splendor of the King,\nclothed in majesty.\n\nAnd age to age He stands,\nand time is in His hands."
    );
    await page.locator("#save-licensed").click();

    await expect(page.locator(".songs")).toContainText("How Great Is Our God");
    await expect(page.locator(".songs")).toContainText("4348399");

    let state = await readState(page);
    expect(state.songs.some((s) => s.title === "How Great Is Our God" && s.ccli === "4348399")).toBeTruthy();
    expect(state.songs.find((s) => s.title === "How Great Is Our God").verses.length).toBe(2);

    await page.locator("[data-use-song]").first().click();
    await expect(page.getByRole('heading', { name: 'Sunday', exact: true })).toBeVisible();
    await expect(page.locator(".item")).toContainText("How Great Is Our God");

    state = await readState(page);
    expect(state.services[0].items.some((i) => i.title === "How Great Is Our God")).toBeTruthy();
  });

  test("paste lyrics with section labels, preview, then save", async ({ page }) => {
    const serviceId = uid();
    await seedAndGoto(
      page,
      fixtureState({
        songs: [],
        services: [{ id: serviceId, name: "Test Sunday", date: "2026-11-09", items: [] }],
        activeId: serviceId
      })
    );

    await page.locator("nav button[data-view='songs']").click();
    const paste = require("fs").readFileSync(path.join(FIX, "paste-sample.txt"), "utf8");
    await page.locator("#lic-title").fill("Paste Sample Song");
    await page.locator("#lic-ccli").fill("5550001");
    await page.locator("#lic-lyrics").fill(paste);

    await page.locator("#preview-licensed").click();
    await expect(page.locator("#song-preview")).toContainText("Paste Sample Song");
    await expect(page.locator("#song-preview")).toContainText("Verse 1");
    await expect(page.locator("#song-preview")).toContainText("Chorus");
    await expect(page.locator("#song-preview")).toContainText("Line one of the first verse");

    await page.locator("#save-licensed").click();
    await expect(page.locator(".songs")).toContainText("Paste Sample Song");

    const state = await readState(page);
    const song = state.songs.find((s) => s.title === "Paste Sample Song");
    expect(song).toBeTruthy();
    expect(song.ccli).toBe("5550001");
    expect(song.verses.length).toBeGreaterThanOrEqual(3);
  });

  test("import SongSelect .txt file", async ({ page }) => {
    const serviceId = uid();
    await seedAndGoto(
      page,
      fixtureState({
        songs: [],
        services: [{ id: serviceId, name: "Test Sunday", date: "2026-11-09", items: [] }],
        activeId: serviceId
      })
    );

    await page.locator("nav button[data-view='songs']").click();
    await page.locator("#import-songs").setInputFiles(path.join(FIX, "songselect-sample.txt"));

    await expect(page.locator(".songs")).toContainText("River of Mercy", { timeout: 5000 });
    await expect(page.locator("#song-import-note")).toContainText(/Import finished: 1 added/);

    const state = await readState(page);
    const song = state.songs.find((s) => s.title === "River of Mercy");
    expect(song).toBeTruthy();
    expect(song.ccli).toBe("900001");
    expect(song.author).toMatch(/Ada Example/);
    expect(song.verses.length).toBeGreaterThanOrEqual(2);
  });

  test("import ChordPro .cho file", async ({ page }) => {
    const serviceId = uid();
    await seedAndGoto(
      page,
      fixtureState({
        songs: [],
        services: [{ id: serviceId, name: "Test Sunday", date: "2026-11-09", items: [] }],
        activeId: serviceId
      })
    );

    await page.locator("nav button[data-view='songs']").click();
    await page.locator("#import-songs").setInputFiles(path.join(FIX, "chordpro-sample.cho"));

    await expect(page.locator(".songs")).toContainText("Morning Light", { timeout: 5000 });

    const state = await readState(page);
    const song = state.songs.find((s) => s.title === "Morning Light");
    expect(song).toBeTruthy();
    expect(song.ccli).toBe("900002");
    expect(song.author).toMatch(/Sam Example/);
    const joined = song.verses
      .map((v) => (typeof v === "string" ? v : v.body || ""))
      .join("\n");
    expect(joined).toMatch(/Wake to the morning/);
    expect(joined).not.toMatch(/\[[A-G]/);
  });

  // Edit / search / delete UI is still not on the Songs screen.
  test.skip("edit a saved song", async () => {
    // Pending: no edit control on the Songs screen yet.
  });

  test.skip("search saved songs", async () => {
    // Pending: no search box on the Songs screen yet.
  });

  test.skip("delete a saved song", async () => {
    // Pending: no delete control on the Songs screen yet.
  });
});

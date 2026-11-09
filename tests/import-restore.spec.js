const { test, expect } = require("@playwright/test");
const path = require("path");
const fs = require("fs");
const os = require("os");
const { fixtureState, seedAndGoto, readState, uid } = require("./helpers");

function writeTempJson(obj, name) {
  const file = path.join(os.tmpdir(), name);
  fs.writeFileSync(file, JSON.stringify(obj, null, 2));
  return file;
}

function importPayload(churchName, sundayName) {
  const id = uid();
  return {
    churchName,
    pastor: "",
    publicUrl: "https://churchofx4u.github.io/church-x/",
    theme: "parchment",
    size: "regular",
    usageConsent: false,
    services: [
      {
        id,
        name: sundayName,
        date: "2026-11-16",
        items: [{ id: uid(), type: "word", title: "Imported Welcome", body: "From the file." }]
      }
    ],
    activeId: id,
    songs: [],
    usage: [],
    guests: [],
    roles: { greeter: "", sound: "", slides: "", prayer: "", preacher: "", notes: "" }
  };
}

function currentSundayState() {
  const currentId = uid();
  return fixtureState({
    churchName: "Grace Chapel",
    services: [
      {
        id: currentId,
        name: "Current Sunday",
        date: "2026-11-09",
        items: [{ id: uid(), type: "word", title: "Keep me", body: "Stay." }]
      }
    ],
    activeId: currentId,
    songs: []
  });
}

test.describe("Import Sunday, Restore backup, and undo", () => {
  test("Import Sunday can add as a new Sunday and undo", async ({ page }) => {
    await seedAndGoto(page, currentSundayState());
    await expect(page.getByRole("button", { name: "Present" })).toBeVisible();

    const file = writeTempJson(importPayload("Imported Church", "Imported Sunday"), "wwm-import-add.json");
    await page.locator("#import-sunday").setInputFiles(file);

    const dialog = page.locator("#ask-dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText("Add as new Sunday");
    await dialog.locator('[data-choice="add"]').click();

    await expect(page.locator("#import-toast")).toBeVisible({ timeout: 5000 });
    let state = await readState(page);
    expect(state.services.map((s) => s.name)).toEqual(
      expect.arrayContaining(["Imported Sunday", "Current Sunday"])
    );
    expect(state.services.length).toBeGreaterThanOrEqual(2);
    expect(state.churchName).toBe("Grace Chapel");

    const toastUndo = page.locator("#toast-undo");
    if (await toastUndo.isVisible().catch(() => false)) {
      await toastUndo.click();
    } else {
      await page.locator("nav button[data-view='help']").click();
      await page.locator("#undo-restore").click();
    }
    await expect.poll(async () => (await readState(page)).services.map((s) => s.name)).toEqual([
      "Current Sunday"
    ]);
  });

  test("Import Sunday replace everything, then undo", async ({ page }) => {
    await seedAndGoto(page, currentSundayState());

    const file = writeTempJson(importPayload("Replaced Church", "Replaced Sunday"), "wwm-import-replace.json");
    await page.locator("#import-sunday").setInputFiles(file);
    const dialog = page.locator("#ask-dialog");
    await expect(dialog).toBeVisible();
    await dialog.locator('[data-choice="replace"]').click();

    await expect(page.locator("#import-toast")).toBeVisible({ timeout: 5000 });
    let state = await readState(page);
    expect(state.churchName).toBe("Replaced Church");
    expect(state.services.map((s) => s.name)).toEqual(["Replaced Sunday"]);

    await page.locator("nav button[data-view='setup']").click();
    await expect(page.locator("#undo-restore")).toBeVisible();
    await page.locator("#undo-restore").click();
    state = await readState(page);
    expect(state.churchName).toBe("Grace Chapel");
    expect(state.services.map((s) => s.name)).toEqual(["Current Sunday"]);
  });

  test("Restore backup asks first, replaces, and can undo", async ({ page }) => {
    await seedAndGoto(page, currentSundayState());

    await page.locator("nav button[data-view='setup']").click();
    const file = writeTempJson(importPayload("Restored Church", "Restored Sunday"), "wwm-backup.json");
    await page.locator("#import-all").setInputFiles(file);

    const dialog = page.locator("#ask-dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText("Restore this backup");
    await dialog.locator('[data-choice="replace"]').click();

    await expect(page.locator("#import-toast")).toBeVisible({ timeout: 5000 });
    let state = await readState(page);
    expect(state.churchName).toBe("Restored Church");
    expect(state.services[0].name).toBe("Restored Sunday");

    await page.locator("nav button[data-view='setup']").click();
    await page.locator("#undo-restore").click();
    state = await readState(page);
    expect(state.churchName).toBe("Grace Chapel");
  });
});

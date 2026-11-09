// Shared helpers for Worship With Me Playwright tests.
// The app is plain HTML/CSS/JS; state lives in localStorage under churchx.v1.

const KEY = "churchx.v1";
const FIRST_RUN = "churchx.firstRun";
const UNDO_KEY = "churchx.undo";
const EDITED_AT = "churchx.editedAt";
const BACKED_UP_AT = "churchx.backedUpAt";

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

/** A small Sunday with one licensed hymn (CCLI) and one public-domain hymn. */
function fixtureState(overrides = {}) {
  const licensedId = uid();
  const pdId = uid();
  const serviceId = uid();
  const base = {
    churchName: "Test Chapel",
    pastor: "Pastor Test",
    publicUrl: "https://churchofx4u.github.io/church-x/",
    theme: "midnight",
    size: "regular",
    usageConsent: false,
    usagePeriodStart: "2026-11-01",
    usagePeriods: [],
    services: [
      {
        id: serviceId,
        name: "Test Sunday",
        date: "2026-11-09",
        items: [
          {
            id: uid(),
            type: "word",
            title: "Welcome",
            body: "Hello from the test suite."
          },
          {
            id: licensedId,
            type: "hymn",
            title: "In Christ Alone",
            author: "Keith Getty, Stuart Townend",
            copyright: "© 2001 Thankyou Music",
            ccli: "3350395",
            pd: false,
            verses: [
              "In Christ alone my hope is found,\nHe is my light, my strength, my song.",
              "In Christ alone, who took on flesh,\nFullness of God in helpless babe."
            ]
          },
          {
            id: pdId,
            type: "hymn",
            title: "Amazing Grace",
            author: "John Newton",
            year: "1779",
            pd: true,
            ccli: "",
            verses: ["Amazing grace! how sweet the sound\nThat saved a wretch like me!"]
          }
        ]
      }
    ],
    activeId: serviceId,
    songs: [
      {
        id: uid(),
        title: "Library Song",
        author: "Test Author",
        copyright: "© 2020 Test",
        ccli: "1111111",
        pd: false,
        verses: ["Line one of library song.\nLine two."]
      }
    ],
    usage: [],
    guests: [],
    roles: {
      greeter: "Ada",
      sound: "Ben",
      slides: "Cara",
      prayer: "Dan",
      preacher: "Eve",
      notes: "Test notes"
    }
  };
  const merged = { ...base, ...overrides };
  if (overrides.services) merged.services = overrides.services;
  if (overrides.activeId) merged.activeId = overrides.activeId;
  else if (overrides.services && overrides.services[0]) merged.activeId = overrides.services[0].id;
  return merged;
}

/**
 * Load the app with seeded localStorage so the first-run wizard stays closed
 * and the backup reminder does not cover the UI.
 */
async function seedAndGoto(page, state = fixtureState(), path = "/index.html") {
  await page.addInitScript(
    ({ key, firstRun, editedAt, undoKey, backedUpAt, packed }) => {
      localStorage.setItem(key, packed);
      localStorage.setItem(firstRun, "done");
      localStorage.setItem(editedAt, String(Date.now()));
      localStorage.setItem(backedUpAt, String(Date.now()));
      localStorage.removeItem(undoKey);
    },
    {
      key: KEY,
      firstRun: FIRST_RUN,
      editedAt: EDITED_AT,
      undoKey: UNDO_KEY,
      backedUpAt: BACKED_UP_AT,
      packed: JSON.stringify(state)
    }
  );
  await page.route("https://gc.zgo.at/**", (route) => route.abort());
  await page.route("https://formsubmit.co/**", (route) =>
    route.fulfill({ status: 200, contentType: "application/json", body: '{"success":"true"}' })
  );
  await page.goto(path);
  await page.waitForSelector("nav button[data-view='plan']");
}

async function readState(page) {
  return page.evaluate((key) => JSON.parse(localStorage.getItem(key) || "null"), KEY);
}

async function dismissConsentIfAny(page, answer = "no") {
  const dialog = page.locator("#ask-dialog");
  if (await dialog.isVisible().catch(() => false)) {
    const btn = answer === "yes" ? dialog.locator("#ask-yes") : dialog.locator("#ask-no");
    if (await btn.count()) await btn.click();
  }
}

module.exports = {
  KEY,
  FIRST_RUN,
  UNDO_KEY,
  EDITED_AT,
  BACKED_UP_AT,
  uid,
  fixtureState,
  seedAndGoto,
  readState,
  dismissConsentIfAny
};

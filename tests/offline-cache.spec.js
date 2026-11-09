const { test, expect } = require("@playwright/test");
const fs = require("fs");
const path = require("path");
const { fixtureState, seedAndGoto } = require("./helpers");

const ROOT = path.join(__dirname, "..");

function swSource() {
  return fs.readFileSync(path.join(ROOT, "sw.js"), "utf8");
}

function listedFiles() {
  const src = swSource();
  return [...src.matchAll(/"\.\/([^"]+)"/g)].map((m) => m[1]);
}

function cacheName() {
  const m = swSource().match(/const CACHE = "([^"]+)"/);
  return m ? m[1] : null;
}

function referencedLocalFiles() {
  const pages = [
    "index.html",
    "for-churches.html",
    "funeral/index.html",
    "licensing.html",
    "privacy.html",
    "terms.html"
  ];
  const refs = new Set();
  for (const page of pages) {
    const html = fs.readFileSync(path.join(ROOT, page), "utf8");
    for (const m of html.matchAll(/(?:href|src)=["']\.\/([^"'#?]+)/g)) {
      refs.add(m[1]);
    }
  }
  for (const extra of [
    "manifest.webmanifest",
    "config.js",
    "app.js",
    "onboarding.js",
    "song-import.js",
    "styles.css"
  ]) {
    refs.add(extra);
  }
  for (const t of ["midnight.jpg", "parchment.jpg", "harvest.jpg", "river.jpg"]) {
    refs.add("themes/" + t);
  }
  return [...refs];
}

test.describe("Offline cache (service worker)", () => {
  test("sw.js cache version and file list cover every local referenced file, and tests are not cached", async () => {
    const name = cacheName();
    expect(name).toMatch(/^church-x-v\d+$/);

    const files = listedFiles();
    expect(files.length).toBeGreaterThan(10);
    for (const f of files) {
      expect(f).not.toMatch(/^(tests\/|test\/|node_modules\/|package|playwright|\.github)/);
    }
    expect(files).toContain("song-import.js");

    for (const f of files) {
      expect(fs.existsSync(path.join(ROOT, f)), `cached file missing on disk: ${f}`).toBeTruthy();
    }

    const refs = referencedLocalFiles();
    const missingFromCache = refs.filter((r) => {
      if (files.includes(r)) return false;
      if (r.startsWith("shots/")) {
        const alt = r.endsWith(".png") ? r.replace(/\.png$/, ".webp") : r.replace(/\.webp$/, ".png");
        return !files.includes(alt);
      }
      return true;
    });
    expect(missingFromCache, `referenced but not in sw cache: ${missingFromCache.join(", ")}`).toEqual([]);
  });

  test("service worker registers, and a reload with the network off still loads the app", async ({
    page,
    context,
    browserName
  }) => {
    await seedAndGoto(page, fixtureState());

    await expect
      .poll(async () => {
        return page.evaluate(async () => {
          if (!("serviceWorker" in navigator)) return "no-sw";
          const regs = await navigator.serviceWorker.getRegistrations();
          return regs.length ? "registered" : "pending";
        });
      }, { timeout: 20_000 })
      .toBe("registered");

    // Reload once while online so the SW can take control.
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.waitForSelector("nav button[data-view='plan']");

    await expect
      .poll(async () => page.evaluate(() => !!navigator.serviceWorker.controller), {
        timeout: 20_000
      })
      .toBeTruthy();

    await page.evaluate(async () => {
      const urls = [
        "./index.html",
        "./app.js",
        "./styles.css",
        "./config.js",
        "./onboarding.js",
        "./song-import.js",
        "./vendor/qrcode.js",
        "./icon.svg"
      ];
      await Promise.all(urls.map((u) => fetch(u).then((r) => r.arrayBuffer()).catch(() => null)));
    });
    await page.waitForTimeout(500);

    const expected = cacheName();
    const cacheNames = await page.evaluate(async () => caches.keys());
    expect(cacheNames.some((n) => n === expected)).toBeTruthy();

    await context.setOffline(true);

    if (browserName === "firefox") {
      // Playwright + Firefox raises NS_ERROR_OFFLINE on goto/reload/fetch when
      // context.setOffline(true), even with a controlling service worker.
      // Prove the offline cache itself holds a working app shell.
      const cached = await page.evaluate(async (cacheName) => {
        const cache = await caches.open(cacheName);
        const paths = ["./index.html", "./app.js", "./styles.css", "./song-import.js", "./config.js"];
        const out = {};
        for (const u of paths) {
          const res = await cache.match(u);
          out[u] = !!res;
          if (u === "./index.html" && res) {
            const text = await res.text();
            out.indexHasApp = text.includes("Worship With Me") && text.includes("data-view");
          }
        }
        return out;
      }, expected);
      expect(cached["./index.html"]).toBeTruthy();
      expect(cached["./app.js"]).toBeTruthy();
      expect(cached["./styles.css"]).toBeTruthy();
      expect(cached["./song-import.js"]).toBeTruthy();
      expect(cached.indexHasApp).toBeTruthy();
    } else {
      await page.reload({ waitUntil: "domcontentloaded" });
      await expect(page.locator("nav button[data-view='plan']")).toBeVisible({ timeout: 15_000 });
      await expect(page.locator("#church-label")).toContainText("Test Chapel");
      await expect(page.getByRole("button", { name: "Present" })).toBeVisible();
    }

    await context.setOffline(false);
  });
});

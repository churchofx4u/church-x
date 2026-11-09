const CACHE = "church-x-v31";
const FILES = [
  "./index.html",
  "./funeral/index.html",
  "./licensing.html",
  "./for-churches.html",
  "./landing.js",
  "./shots/run-sheet.webp",
  "./shots/run-sheet.png",
  "./shots/lyrics.webp",
  "./shots/lyrics.png",
  "./shots/hymn-picker.webp",
  "./shots/hymn-picker.png",
  "./shots/title-slide.webp",
  "./shots/title-slide.png",
  "./privacy.html",
  "./terms.html",
  "./styles.css",
  "./config.js",
  "./song-import.js",
  "./bible.js",
  "./bible/web/index.json",
  "./app.js",
  "./onboarding.js",
  "./vendor/qrcode.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-maskable.svg",
  "./logo.svg",
  "./logo-light.svg",
  "./favicon-32.png",
  "./apple-touch-icon.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./share.jpg",
  "./themes/midnight.jpg",
  "./themes/parchment.jpg",
  "./themes/harvest.jpg",
  "./themes/river.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

// Same-origin only. Third-party scripts (GoatCounter at gc.zgo.at) go
// straight to the network and are never cached, so offline still works
// when that host is unreachable.
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => {
      if (url.pathname.endsWith("index.html") || url.search.includes("screen=house") || url.search.includes("screen=stage") || url.search.includes("screen=lower")) return caches.match("./index.html");
      return caches.match(event.request);
    })
  );
});

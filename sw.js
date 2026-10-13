const CACHE = "church-x-v14";
const FILES = [
  "./index.html",
  "./for-churches.html",
  "./privacy.html",
  "./terms.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
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

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => {
      const url = new URL(event.request.url);
      if (url.pathname.endsWith("index.html") || url.search.includes("screen=house")) return caches.match("./index.html");
      return caches.match(event.request);
    })
  );
});

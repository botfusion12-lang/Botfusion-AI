self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("botfusion-cache").then(cache => {
      return cache.addAll([
        "/docs/",
        "/docs/index.html",
        "/docs/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

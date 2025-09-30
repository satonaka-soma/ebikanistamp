self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('stampcard-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/bundle.js',
        '/icon-192.png',
        '/icon-512.png',
        '/manifest.webmanifest'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});

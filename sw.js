const CACHE_NAME = 'hsk-quiz-cache-v1';
const assets = [
  'index.html',
  'manifest.json'
];

// Sayt fayllarini brauzer keshiga yozish
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Internet yo'qligida keshdan olib ko'rsatish logicasi
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

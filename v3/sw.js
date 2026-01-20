// Service Worker for GoGreenIn V3
const CACHE_NAME = 'gogreenin-v3-1.0';
const urlsToCache = [
  '/gogreeninV2/v3/',
  '/gogreeninV2/v3/index.html',
  '/gogreeninV2/v3/assets/css/main.css',
  '/gogreeninV2/v3/assets/js/main.js',
  '/gogreeninV2/v3/assets/js/yearData.js',
  '/gogreeninV2/GGI_logo.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

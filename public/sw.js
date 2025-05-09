
// Service Worker for UOR Student Portfolio Subdomains

const CACHE_NAME = 'uor-student-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/qr-code.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== CACHE_NAME;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if found
        if (response) {
          return response;
        }

        // Clone the request to use it multiple times
        const fetchRequest = event.request.clone();

        // Try network request
        return fetch(fetchRequest)
          .then(response => {
            // Check for valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response to store in cache and return
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
  );
});

var CACHE_NAME = 'swapi-cache-v1';
var CACHE_URLS = [
    '/',
    '/img/l-luke_skywalker.webp',
    '/css/dist/style.min.css',
    '/offline/offline.html'
];

self.addEventListener('install', function(event) {
    console.log("SW Registered");
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(CACHE_URLS);
            })
            .then(function() {
               return self.skipWaiting()
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        // Try the cache
        caches.match(event.request).then(function(response) {
            // Fall back to network
            return response || fetch(event.request);
        })
            .catch(function(err) {
            // If both fail, show a generic fallback:
            return caches.open('swapi-cache-v1')
                .then(function (cache) {
                    // return 'we\'re offline'
                    return cache.match('/offline/offline.html')
                })
            // However, in reality you'd have many different
            // fallbacks, depending on URL & headers.
            // Eg, a fallback silhouette image for avatars.
        })
    );
});

// self.addEventListener("fetch",(e)=>{
//     const req = e.request;
//     console.log("SW fetching for", req);
//     e.respondWith(
//         caches.match(req)
//             .then(cachedRes=>{
//                 if(cachedRes){
//                     return cachedRes
//                 }
//                 return req
//             }).catch()
//     )
// });

// self.addEventListener(‘install’, function(event) {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(cache => cache.addAll(urlsToCache))
//             .then(() => self.skipWaiting())
//     )
// });
const CACHE_NAME = 'pwa-news'
const urlsToCache = [
    '/',
    '/index.html'
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=> {
            console.log('Opened cache');
            return cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener('active', event => {
    const cacheWhiteList = ['pwa-tasl-manager']
    event.waitUntil(caches.keys().then(cacheNames => Promise.all(cacheNames.map(cacheName => {
        if(cacheWhiteList.indexOf(cacheName) === -1){
            return caches.delete(cacheName)}
        })
    ))
    )
})

self.addEventListener('fetch', (event) => {
    console.log('fetch', event)
    event.respondWith(
        caches.open(CACHE_NAME).then(
            (cache)=> cache.match(event.request).then(
                (response) => response || fetch(event.request).then(
                    (response)=> {
                        cache.put(event.request, response.clone())
                        return response
        })))
    )
})
const offlinePage = {
    title: "offline page",
    urls: [
        'offline.html',
    ]
}

const cacheData = e => {
    console.log('service worker: install')
    e.waitUntil(
        caches.open(offlinePage.title)
            .then(cache => cache.addAll(offlinePage.urls))
    )
}

const fromCache = e => {
    csches.match(e.request)
        .then(response => {
            return response || fetch(e.request)
        })
}

addEventListener('install', cacheData)

addEventListener('fetch', e => {
    e.responseWith(fromCache)
})


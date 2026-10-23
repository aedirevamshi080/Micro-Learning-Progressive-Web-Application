const CACHE_NAME = "micro-learning-v2";

const urlsToCache = [

"/",
"/index.html",
"/login.html",
"/register.html",
"/dashboard.html",
"/courses.html",
"/lesson.html",
"/quiz.html",
"/certificate.html",

"/css/style.css",

"/js/auth.js",
"/js/db.js",
"/js/courses.js",
"/js/lesson.js",
"/js/dashboard.js",
"/js/quiz.js",
"/js/certificate.js"

];

self.addEventListener("install", event => {

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => {

return cache.addAll(
urlsToCache
);

})

);

});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
          return Promise.resolve();
        })
      )
    )
    .then(() => self.clients.claim())
  );
});

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
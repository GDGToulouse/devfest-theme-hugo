importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log("Yay! Workbox is loaded 🎉");

  // Cache JS
  workbox.routing.registerRoute(/\.js$/, new workbox.strategies.NetworkFirst());

  // Cache CSS
  workbox.routing.registerRoute(/\.css$/, new workbox.strategies.StaleWhileRevalidate({cacheName: 'css-cache'}));

  // Cache image
  workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 20, // Cache only 20 images.
          maxAgeSeconds: 7 * 24 * 60 * 60, // Cache for a maximum of a week.
        })
      ],
    })
  );

  // Workbox injection point
  workbox.precaching.precacheAndRoute([]);

} else {
  console.log("Boo! Workbox didn't load 😬");
}

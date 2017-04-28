importScripts('../sw-toolbox/sw-toolbox.js')


toolbox.precache(
  [
    '0.chunk.js',
    '1.chunk.js',
    '2.chunk.js',
    '3.chunk.js',
    '4.chunk.js',
    '5.chunk.js',
    '6.chunk.js',
    "/manifest.json",
    "/images/favicon-16x16.png",
    '/images/Facebook.png',
    '/images/Twitter.png',
    '/images/avatar.jpg',
    '/main-bundle.js',
    '/index.html',
    '/fonts.css',
    '/sw.js',
  ]
)

toolbox.router.default = toolbox.cacheFirst


self.addEventListener('install', event => {
  console.log("installed!")
})

# Performance Matters @cmda-minor-web · 2018-2019
### App
For this course I optimized the app I made for the previous course: "Web App From Scratch".

### Install
In your terminal: 
```
$ npm i
$ npm start
```
#### Build
 On ``$ npm start`` The app wil first run some tasks:
 1. All CSS is minified and stored in one file: style.min.css
 2. All images are compressed and for each .jpg and .png file a .webp file is created.
 
 After these tasks have finished the app will run on: localhost:3000
 
#### App info
ExpressJS is used to run the app server-side. <br/>
The app uses the template engine EJS. <br/>
__Dependencies:__
* Express
    * node-fetch
* EJS
* Compression
* imagemin
    * imagemin-webp
* gulp
    * gulp-cssnano
    * gulp-concat
    * gulp-rename

### Optimize runtime
Since this app is a copy from a non optimized app the runtime was pretty slow:

##### Non optimized runtime on slow 3G network
![Non Optimized runtime](public/readme-img/Non-optimized.png)
As you can see the total runtime of the app is 25 seconds.
This is way to slow! Any user would have left the app by now.

##### Optimized runtime on slow 3G network, with cache *disabled*
![Non Optimized runtime](public/readme-img/OptiNoCache.png)
With these optimisations the runtime for this app has been reduced to 9 seconds!

For this optimisation I used the following features: 
* g-zip compression:

```javascript
const compression = require('compression');
app.use(compression());
```
The files that are being served to the browser are compressed with the gzip format.

* CSS minify:
```javascript
const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

gulp.src('public/css/*.css')
    .pipe(concat('all.css'))
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('public/css/dist'));

console.log('Styles minified!');
```
This gulp task will select all css files and put them in one css file. After this is done the entire file is minified which 
decreases the file size. 

##### Optimized runtime on slow 3G network, with cache *enabled*
![Non Optimized runtime](public/readme-img/OptiCache.png)
With these optimisations the runtime for this app has been reduced to 2 seconds!

### Perceived performance
![Perceived performance](public/readme-img/Perceived1.png) ![Perceived performance](public/readme-img/Perceived2.png) ![Perceived performance](public/readme-img/Perceived3.png)
When the HTML has been loaded there are grey placeholder elements on the position where the images are going to be loaded.
This gives the user the sense that the page loads faster. 


### Image loading
By using ``srcset=" "`` the browser will show a differently sized image based on the device's viewport width. So a small screen will load a smaller image.
The code looks as follows:<br/>
``` 
<picture>
       <source type="image/webp" srcset="/img/l-luke_skywalker.webp" media="(min-width: 992px)">
       <source type="image/webp" srcset="/img/m-luke_skywalker.webp" media="(min-width: 768px)">
       <source type="image/webp" srcset="/img/s-luke_skywalker.webp">
       <source srcset="/img/l-luke_skywalker.jpg" media="(min-width: 992px)">
       <source srcset="/img/m-luke_skywalker.jpg" media="(min-width: 768px)">
       <source srcset="/img/s-luke_skywalker.jpg">
       <img alt="Millenium Falcon" src="/img/luke_skywalker.jpg"/>
</picture>
```

### Service worker
The service worker stores files in the cache storage of the browser. 
This ofcourse improves the runtime but you can also use them to show a result when the user is offline.

Here the service worker is registered:
```javascript
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
```

When the user does not have a working internet connection this is what the homepage looks like:
![No internet homepage](public/readme-img/offlineHomepage.png)

So with the service worker you can show the user the website even when they don't have a working internet connection!

When the user tries to fetch data from the server, the server will return the offline page:
![No internet offlinepage](public/readme-img/fetchOfflinepage.png)
















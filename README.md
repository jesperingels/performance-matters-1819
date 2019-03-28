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
 
 After these tasks the app will run on: localhost:3000
 
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
##### Non optimized runtime on slow 3G network
![Non Optimized runtime](public/readme-img/Non-optimized.png)
As you can see the total runtime of the app is 25 seconds.

##### Optimized runtime on slow 3G network, with cache *disabled*
![Non Optimized runtime](public/readme-img/OptiNoCache.png)

For this optimisation I used the following features: 
* g-zip compression
* CSS minify

##### Optimized runtime on slow 3G network, with cache *enabled*
![Non Optimized runtime](public/readme-img/OptiCache.png)
With these optimisations the runtime for this app has been reduced to 9 seconds!

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













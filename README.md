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
__Non optimized runtime on slow 3G network__
![Non Optimized runtime](public/readme-img/Non-optimized.png)
As you can see the total runtime of the app is 25 seconds.

__Optimized runtime on slow 3G network, with cache disabled__
![Non Optimized runtime](public/readme-img/OptiNoCache.png)

For this optimisation I used the following features: 
* g-zip compression
* CSS minify

__Wel geoptimaliseerde runtime op traag 3G netwerk, met cache enabled__
![Non Optimized runtime](public/readme-img/OptiCache.png)
Met deze optimalisaties is de laadtijd terug gebracht naar 9 seconden!

### Perceived performance
![Perceived performance](public/readme-img/Perceived1.png) ![Perceived performance](public/readme-img/Perceived2.png) ![Perceived performance](public/readme-img/Perceived3.png)


### Image loading
Door gebruik te maken van ``srcset=" "`` geef ik per viewport width aan welke image de browser moet tonen zodat hij op een klein scherm ook een kleinere image laat zien.
Die code ziet er vervolgens zo uit:<br/>
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













const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(['public/img/*.jpg', 'public/img/*.png'], "public/img", {
    use: [
        webp({
            quality: 75
        })
    ]
}).then(function() {
    console.log("Images converted!");
});
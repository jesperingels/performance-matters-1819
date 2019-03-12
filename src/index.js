const express = require('express');
let ejs = require('ejs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
    res.render('pages/about');
});


app.get('/', function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});


app.listen(port, () => console.log(`App listening on port ${port}!`));

app.use(express.static('public'));


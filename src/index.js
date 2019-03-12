const express = require('express');
let ejs = require('ejs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

app.use(express.static('public'));


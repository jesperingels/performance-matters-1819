const express = require('express');
let ejs = require('ejs');
const app = express();
const port = 3000;
const fetch = require('node-fetch');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/people', async (req, res) => {

    const peopleData = await data.req(api.solveUrl('people'));

    res.render('pages/people', {
        peopleData: peopleData.results
    });
});

app.get('/planets', async (req, res) => {

    const planetsData = await data.req(api.solveUrl('planets'));

    res.render('pages/planets', {
        planetsData: planetsData.results
    });
});

app.get('/species', async (req, res) => {

    const speciesData = await data.req(api.solveUrl('species'));

    res.render('pages/species', {
        speciesData: speciesData.results
    });
});



app.listen(port, () => console.log(`App listening on port ${port}!`));

app.use(express.static('public'));

const api = {
    // Set base URL for dynamic link
    solveUrl:(ID)=>{
        return `https://swapi.co/api/${ID}`
    }
};

const data = {
    req: (url)=> {
        console.log(url);
        // Fetch and return data
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(res => resolve(res))
                .catch(error => reject(error))
        })
    }
};







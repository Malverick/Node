var express = require('express');

var app = express();        //drags the express file in via the variable app
app.use(express.json());    //Handles Json and converts to usable/printable data

app.use((req, res, next) => {                   //A use request that always prints/works
    console.log('Stuff Happaned', req.url);     //logs the url extension to the console
    next();                                     //Skip to the next function
})

app.get ('/', (req, res) => {                   //A get request that 
    console.log("hello!");
    res.send("<i>Lizzardfolk 4 lyfe</i>")
});

app.get ('/a', (req, res) => {
    res.send('<h1><i>Javascript is a poorly written language.</i></h1>')
})

app.get('/b', (req, res) => {
    res.send('Bennet is a weapon')
});

app.listen(8080);
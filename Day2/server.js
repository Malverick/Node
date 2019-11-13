let express = require('express');
let router = require('./routes/item-routes');
var app = express();


app.use(express.json());

app.use((req, res, next) => {
    console.log('Loading...');
    next();
});

app.use('/item', router);

app.listen(8080);

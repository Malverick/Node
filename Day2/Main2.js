var express = require("express");
var Seq = require("sequelize");
var app = express();
//var itemRouter = require('./Router2');

app.listen(8765, () => {
    console.log("Always watching.")
});

app.use(express.json());
// app.use((req, res, next) => {
// });

//app.use('/item', itemRouter);




var sequelize = new Seq(
    'mydb',                 //Database
    'root',                 //Username
    'password',             //Password
    {
        host: 'localhost',
        dialect: 'mysql'
    });

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error("Unable to connect to the database");
    });


const Item = sequelize.define('item', {
    item: {
        type: Seq.STRING
    },
    price: {
        type: Seq.INTEGER
    }
});

Item.sync();

//Creates a new item every time the code is run.
//Item.create( {item: "phone", price: 125} );

//Adds to the table
//Keeps URL clean, passes things in via JSON
app.post('/addThing', async (req, res) => {
    await Item.create({ item: req.body.item, price: req.body.price });
    res.send("probably worked");
});

//passes things via URL, await and async make the code wait to be ready to enter data
// app.post('/addThing/:item/:price', async (req, res) => {
//     await Item.create({item: req.params.item, price: req.params.price});
//     res.send("probably worked");
// });

//delete
app.delete('/deleteThing', (req, res) => {
    Item.destroy({ where: { item: req } });
    res.send('probably worked')
});
//update
app.put('/updateThing', (req, res) => {
    Item.update({ where: { item: req } });
    res.send('probably worked')
});
//retrieve
app.get('/getThing', async (req, res) => {
    try {
        res.send(await Item.findAll());
    } catch (exc) {
        res.status(500).send('oh shit');
    }
});



//Item.destroy({ where: { item: 'something' } });
//Item.findAll({ where: { item: 'something' } });
//Item.update({ price: 1234467 }, { where: { item: 'something' } });


//Retrieves a given index item
app.get('/get/:index', (req, res) => {
    res.send(data[req.params.index]);
});
//Adds a new item to the array
app.post('/post/:addition', (req, res) => {
    data.push(req.params.addition);
    res.send(data);
});
//deletes an item of given index from the array
app.delete('/delete/:index', (req, res) => {
    data.splice(req.params.index, 1);
    res.send(data);
});
//updates an item of given index to a new given value
app.put('/update/:index/:updated', (req, res) => {
    data[req.params.index] = req.params.updated
    res.send(data);
});

// app.get('/get', async (req, res) => {
//     const x = await Item.findAll()
//     res.send(x)
// });
    //app.
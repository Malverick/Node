var express = require("express");
const models = require('../models')
var router = express.Router();
const data = ["data1", "data2", "data3", "data4"];

//Retrieves a given index item
router.get('/getThing/:id?', async (req, res) => {
    if(req.params.id==undefined){
    res.send(await models.Item.findAll())
}
    else{
        var resp = await models.Item.findAll({
            where: {
                id: req.params.id
            }
        })
        res.send(resp)}
    });
//Adds a new item to the array
router.post('/addThing', async (req, res) => {
    await models.Item.create({ item: req.body.name, price: req.body.price });
    res.send("probably worked");
});
//deletes an item of given index from the array
router.delete('/deleteThing/:name', async (req, res) => {
    await models.Item.destroy({ where: { item: req.params.name } });
    res.send('probably worked')
});
//updates an item of given index to a new given value
router.put('/updateThing/:name', (req, res) => {
    models.Item.update({item: req.body.name },{ where: { item: req.params.name } });
    res.send('probably worked')
});

module.exports = router;
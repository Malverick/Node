var express = require("express");
const models = require('../Models')
var router = express.Router();

//Table1                                                        Table1
router.get('/getThing1/:id?', async (req, res) => {
    try {
        if (req.params.id == undefined) {
            res.send(await models.table1.findAll())
        }
        else {
            var resp = await models.table1.findAll({
                where: {
                    t1_id: req.params.id
                }
            })
            res.send(resp)
        }
    }
    catch (exc) {
        res.status(500).send('Failed to \'get\'');
    }
});
router.post('/addThing1', async (req, res) => {
    try {
        await models.table1.create({ item: req.body.item, price: req.body.price });
        res.send("probably worked")
    }
    catch{
        res.status(500).send('Failed to \'post\'');
    }
});
router.delete('/deleteThing1/:item', async (req, res) => {
    try {
        await models.table1.destroy({ where: { item: req.params.item } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'delete\'');
    }
});
router.put('/updateThing1/:item', (req, res) => {
    try {
        models.table1.update({ item: req.body.item }, { where: { item: req.params.item } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'update\''); T
    }
});

//Table2                                                        Table2
router.get('/getThing2/:id?', async (req, res) => {
    try {
        if (req.params.id == undefined) {
            res.send(await models.table2.findAll())
        }
        else {
            var resp = await models.table2.findAll({
                where: {
                    t2_id: req.params.id
                }
            })
            res.send(resp)
        }
    }
    catch {
        res.status(500).send('Failed to \'get\'');
    }
});
router.post('/addThing2', async (req, res) => {
    try {
        await models.table2.create({ item: req.body.item, price: req.body.price });
        res.send("probably worked")
    }
    catch{
        res.status(500).send('Failed to \'post\'');
    }
});
router.delete('/deleteThing2/:item', async (req, res) => {
    try {
        await models.table2.destroy({ where: { item: req.params.item } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'delete\'');
    }
});
router.put('/updateThing2/:item', (req, res) => {
    try {
        models.table2.update({ item: req.body.item }, { where: { item: req.params.item } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'update\'');
    }
});

module.exports = router;
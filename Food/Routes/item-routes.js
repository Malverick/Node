var express = require("express");
const models = require('../Models')
var router = express.Router();

//Recipe                                                        Recipe
router.get('/getThing1/:id?', async (req, res) => {
    try {
        if (req.params.id == undefined) {
            res.send(await models.Recipe.findAll())
        }
        else {
            var resp = await models.Recipe.findAll({
                where: {
                    recipe_id: req.params.id
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
        await models.Recipe.create({ name: req.body.name, price: req.body.price });
        res.send("probably worked")
    }
    catch{
        res.status(500).send('Failed to \'post\'');
    }
});
router.delete('/deleteThing1/:name', async (req, res) => {
    try {
        await models.Recipe.destroy({ where: { name: req.params.name } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'delete\'');
    }
});
router.put('/updateThing1/:name', (req, res) => {
    try {
        models.Recipe.update({ name: req.body.name }, { where: { name: req.params.name } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'update\''); T
    }
});

//Ingredient                                                        Ingredient
router.get('/getThing2/:id?', async (req, res) => {
    try {
        if (req.params.id == undefined) {
            res.send(await models.Ingredient.findAll())
        }
        else {
            var resp = await models.Ingredient.findAll({
                where: {
                    ingredient_id: req.params.id
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
        await models.Ingredient.create({ name: req.body.name, price: req.body.price });
        res.send("probably worked")
    }
    catch{
        res.status(500).send('Failed to \'post\'');
    }
});
router.delete('/deleteThing2/:name', async (req, res) => {
    try {
        await models.Ingredient.destroy({ where: { name: req.params.name } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'delete\'');
    }
});
router.put('/updateThing2/:name', (req, res) => {
    try {
        models.Ingredient.update({ name: req.body.name }, { where: { name: req.params.name } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'update\'');
    }
});

module.exports = router;
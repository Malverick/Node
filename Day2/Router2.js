
var express = require("express");
var router = express.Router();
const data = ["data1", "data2", "data3", "data4"];

//Retrieves a given index item
router.get('/get/:index', (req, res) => {
    res.send(data[req.params.index]);
});
//Adds a new item to the array
router.post('/post/:addition', (req, res) => {
    data.push(req.params.addition);
    res.send(data);
});
//deletes an item of given index from the array
router.delete('/delete/:index', (req, res) => {
    data.splice(req.params.index, 1);
    res.send(data);
});
//updates an item of given index to a new given value
router.put('/update/:index/:updated', (req, res) => {
    data[req.params.index] = req.params.updated 
    res.send(data);
});

module.exports = router;


const data = ["data1", "data2", "data3", "data4"];
var express = require('express');
var app = express();

app.listen(8888, () => {
    console.log("Listening")
});
//Generic opening message
app.get('/', (req, res) => {
    console.log('Page has been accessed');
    res.send("This is a page, please use one of the designated input commands")
});
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

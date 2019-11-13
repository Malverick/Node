var express = require("express");
var Seq = require("sequelize");
var router = express.Router();
var app = express();


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
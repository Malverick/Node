const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    'mydb',                 //Database
    'root',                 //Username
    'password',             //Password
    {
        host: 'localhost',
        dialect: 'mysql'
});

const Item = sequelize.import(__dirname + '/item-model');

sequelize.sync({force: true}).then(() => {
    Item.create({item: 'shoes', price: 20.00});
});

module.exports = {
    Item
};
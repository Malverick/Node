const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    'food',                 //Database
    'root',                 //Username
    'password',             //Password
    {
        host: 'localhost',
        dialect: 'mysql'
});

const table1 = sequelize.import(__dirname + '/item-model1');
const table2 = sequelize.import(__dirname + '/item-model2');

//Many to many tables. 
// table1.associate = (table2) => {
//     table1.belongsToMany(table2.table1, {
//         through: 'Table1Table2',
//         foreignKey: 't2_id'
//     });
// };
table1.belongToMany(table2, {through: 'table1table2'});
table2.belongsToMany(table1, {through: 'table1table2'});

sequelize.sync({force: true}).then(() => {
    table1.create({item: 'test1', price: 5,}),
    table1.create({item: 'test2', price: 10,});
});
sequelize.sync({force: true}).then(() => {
    table2.create({item: 'test3', price: 15}),
    table2.create({item: 'test4', price: 20});
});

module.exports = {
    table1,
    table2
};
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    'food',                 //Database
    'root',                 //Username
    'password',             //Password
    {
        host: 'localhost',
        dialect: 'mysql'
});

const Recipe = sequelize.import(__dirname + '/recipe-model');
const Ingredient = sequelize.import(__dirname + '/ingredient-model');

//Many to many tables. 
// Recipe.associate = (Ingredient) => {
//     Recipe.belongsToMany(Ingredient.Recipe, {
//         through: 'RecipeIngredient',
//         foreignKey: 't2_id'
//     });
// };
Recipe.belongsToMany(Ingredient, {through: 'RecipesIngredients', timestamps: false});
Ingredient.belongsToMany(Recipe, {through: 'RecipesIngredients', timestamps: false});

sequelize.sync({force: true}).then(() => {
    Recipe.create({name: 'pizza', price: 5.99,}),
    Recipe.create({name: 'burger', price: 3.99})
});

sequelize.sync({force: true}).then(() => {
    Ingredient.create({name: 'Pizza Base', price: 0.99}),
    Ingredient.create({name: 'Tomato Puree', price: 0.69}),
    Ingredient.create({name: 'Cheese', price: 1.49})
});

module.exports = {
    Recipe,
    Ingredient
};
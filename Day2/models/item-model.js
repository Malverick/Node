module.exports = (sequelize, DataTypes) => {
    return sequelize.define('item', {
        item: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        }
    })
}
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ingredients', {
        ingredient_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DOUBLE
        }
    }, { timestamps: false });
}
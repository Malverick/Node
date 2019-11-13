module.exports = (sequelize, DataTypes) => {
    return sequelize.define('table1', {
        t1_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
            item: {
                type: DataTypes.STRING
            },
            price: {
                type: DataTypes.INTEGER
            }
        }, { timestamps: false });
    }
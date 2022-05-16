module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING 
        },
        password: {
            type: DataTypes.STRING 
        },
        name: {
            type: DataTypes.STRING 
        },
        wins: {
            type: DataTypes.INTEGER,
            defaultValue: 0 
        },
        losses: {
            type: DataTypes.INTEGER,
            defaultValue: 0  
        }
    }, {
        freezeTableName: true,
        timestamps: false 
    })
    return User;
}
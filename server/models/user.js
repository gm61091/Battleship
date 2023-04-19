/* This code exports a function that defines a Sequelize model for a User table in a database. The
function takes two parameters: `sequelize` and `DataTypes`, which are used to define the data types
and relationships between tables in the database. The `User` model has columns for `email`,
`password`, `name`, `wins`, `losses`, and `savedGame`. The `freezeTableName` option ensures that the
table name is not pluralized, and the `timestamps` option disables the default timestamps that
Sequelize adds to each row. Finally, the function returns the `User` model. */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      wins: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      losses: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      savedGame: {
        type: DataTypes.TEXT,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return User;
};

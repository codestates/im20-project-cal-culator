"use strict";
module.exports = (sequelize, DataTypes) => {
  var Food_users = sequelize.define(
    "Food_users",
    {
      amount: DataTypes.INTEGER,
      time: DataTypes.DATE,
    },
    {
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );

  Food_users.associate = function (models) {
    models.Food_users.belongsTo(models.Users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
    models.Food_users.belongsTo(models.Foods, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Food_users;
};

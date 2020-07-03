"use strict";

module.exports = (sequelize, DataTypes) => {
  const Foods = sequelize.define(
    "Foods",
    {
      food_name: DataTypes.STRING,
      image: DataTypes.STRING,
      calories: DataTypes.FLOAT,
      fat: DataTypes.FLOAT,
      carbohydrates: DataTypes.FLOAT,
      sugar: DataTypes.FLOAT,
      protein: DataTypes.FLOAT,
      sodium: DataTypes.FLOAT,
      cholesterol: DataTypes.FLOAT,
      iron: DataTypes.FLOAT,
      calcium: DataTypes.FLOAT,
      vitamin_A: DataTypes.FLOAT,
      vitamin_D: DataTypes.FLOAT,
      zinc: DataTypes.FLOAT,
    },
    {
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );

  Foods.associate = function (models) {
    models.Foods.hasMany(models.Food_users);
  };

  return Foods;
};

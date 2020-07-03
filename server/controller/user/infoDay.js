const { Food_users } = require("../../model");
const { Foods } = require("../../model");
const { Op } = require("sequelize");

module.exports = {
  post: (req, res) => {
    // if (!req.session.userid) {
    //   return res.status(403).send("forbidden");
    // }
    const id = req.session.userid;
    const { date } = req.body;
    const startDay = date + "T00:00:00Z";
    const endDay = date + "T23:59:59Z";
    Food_users.findAll({
      where: {
        UserId: 1,
        // time constraints exist!
        time: {
          [Op.between]: [startDay, endDay],
        },
      },
      include: [
        {
          model: Foods,
          required: true,
        },
      ],
    }).then((result) => {
      let [
        calories,
        fat,
        carbohydrates,
        sugar,
        protein,
        sodium,
        cholesterol,
        iron,
        calcium,
        vitamin_A,
        vitamin_D,
        zinc,
      ] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      result.forEach((food) => {
        calories += food.Food.calories;
        fat += food.Food.fat;
        carbohydrates += food.Food.carbohydrates;
        sugar += food.Food.sugar;
        protein += food.Food.protein;
        sodium += food.Food.sodium;
        cholesterol += food.Food.cholesterol;
        iron += food.Food.iron;
        calcium += food.Food.calcium;
        vitamin_A += food.Food.vitamin_A;
        vitamin_D += food.Food.vitamin_D;
        zinc += food.Food.zinc;
      });

      res.send({
        calories,
        fat,
        carbohydrates,
        sugar,
        protein,
        sodium,
        cholesterol,
        iron,
        calcium,
        vitamin_A,
        vitamin_D,
        zinc,
      });
    });
  },
};

// console.log(
//   calories,
//   1,
//   fat,
//   2,
//   carbohydrates,
//   3,
//   sugar,
//   4,
//   protein,
//   5,
//   sodium,
//   6,
//   cholesterol,
//   7,
//   iron,
//   8,
//   calcium,
//   9,
//   vitamin_A,
//   10,
//   vitamin_D,
//   11,
//   zinc,
//   12
// );

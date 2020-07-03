const { Foods } = require("../../model");

const axios = require("axios");

// .env에서 FOOD_API_KEY 가져오기.
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "../.env") });
// api key : FOOD_API_KEY

module.exports = {
  post: async (req, res) => {
    const { food_name } = req.body;
    let nutrition = {};
    // let test = ["pasta", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    // let food_name = "pizza";

    // findOne 하고 찾으면 database 가져다 쓰고 아니면 api 불러와서 create로 database 넣어주기.

    let foodExistenceStatus = await Foods.findOne({
      where: {
        food_name: food_name,
      },
    });

    if (foodExistenceStatus === null) {
      // TODO : 음식이 database에 존재하지 않을 때
      // 1. call api
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${food_name}&addRecipeNutrition=true&number=1&apiKey=${process.env.FOOD_API_KEY}`
        )
        .then((response) => {
          let nutritionInfo = response.data.results[0].nutrition.nutrients;

          // nutrition 객체에 food image와 nutrition 정보 넣어주기.
          nutrition["image"] = response.data.results[0].image;

          for (let i of nutritionInfo) {
            nutrition[i.title] = i.amount;
          }

          // 2. create
          Foods.create({
            food_name: food_name,
            image: nutrition["image"],
            calories: nutrition["Calories"] || 0,
            fat: nutrition["Fat"] || 0,
            carbohydrates: nutrition["Carbohydrates"] || 0,
            sugar: nutrition["Sugar"] || 0,
            protein: nutrition["Protein"] || 0,
            sodium: nutrition["Sodium"] || 0,
            cholesterol: nutrition["Cholesterol"] || 0,
            iron: nutrition["Iron"] || 0,
            calcium: nutrition["Calcium"] || 0,
            vitamin_A: nutrition["Vitamin A"] || 0,
            vitamin_D: nutrition["Vitamin D"] || 0,
            zinc: nutrition["Zinc"] || 0,
          });

          res.send(nutrition);
        });
    } else {
      // 음식이 database에 존재할 때
      res.send(foodExistenceStatus);
    }

    // api로 검색
    // insert foods table
  },
};

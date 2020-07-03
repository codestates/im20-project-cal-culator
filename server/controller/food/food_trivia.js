const axios = require("axios");

// .env에서 FOOD_API_KEY 가져오기.
const path = require("path");
const dotenv = require("dotenv");
const { response } = require("../../app");
dotenv.config({ path: path.join(__dirname, "../.env") });
// api key : FOOD_API_KEY

module.exports = {
  get: (req, res) => {
    axios
      .get(
        `https://api.spoonacular.com/food/trivia/random?apiKey=${process.env.FOOD_API_KEY}`
      )
      .then((response) => {
        res.send(response.data.text);
      });
  },
};

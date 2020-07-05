import React from "react";
import Search from "./Search";
import FoodImage from "./Consumed-food-image";
import Cart from "./Consumed-food-cart";
import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="calculator">
      <div>
        <Search />
      </div>
      <div>
        <div className="food">
          <FoodImage />
        </div>
        <div className="cart">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Calculator;

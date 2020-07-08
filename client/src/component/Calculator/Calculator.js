import React, { useEffect, useRef } from "react";
import Search from "./calculator-search";
import FoodList from "./calculator-foodlist";
import Cart from "./calculator-cart";
import axios from "axios";
import calImg from "./cal_culator.jpg";
import "./Calculator.scss";

import { Snackbar, SnackbarAction } from "@rmwc/snackbar";
import "@rmwc/snackbar/styles";

const Calculator = ({ setCurrentPageIndex, trivia }) => {
  const inputRef = useRef();
  const [searchResult, setSearchResult] = React.useState({
    calcium: 0,
    calories: 0,
    carbohydrates: 0,
    cholesterol: 0,
    createdAt: "",
    fat: 0,
    food_name: "CAL-CULATOR",
    id: 0,
    image: calImg,
    iron: 0,
    protein: 0,
    sodium: 0,
    sugar: 0,
    updatedAt: "",
    vitamin_A: 0,
    vitamin_D: 0,
    zinc: 0,
  });

  const [searchInput, setSearchInput] = React.useState({});
  const [startDate, setStartDate] = React.useState();
  const [resultSave, setResultSave] = React.useState([]);
  const [confirmData, setConfirmData] = React.useState([]);
  const [checked, setChecked] = React.useState({});
  const [value, setValue] = React.useState({});
  const [totalCalories, setTotalCalories] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [autoComplete, setAutoComplete] = React.useState([]);
  const [openError, setOpenError] = React.useState(false);

  const searchInputHandle = (e) => {
    setSearchInput({
      food_name: e,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current.children[1].value === searchInput.food_name) {
        axios
          .get("http://localhost:4000/food/foodautocomplete", {
            params: {
              query: searchInput.food_name,
            },
          })
          .then((result) => {
            setAutoComplete(result.data);
          });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchInput, inputRef]);

  const searchResultHandle = (e) => {
    setSearchResult(e);
  };

  const addDateHandle = (e) => {
    setStartDate(e);
  };

  const addToCartButton = () => {
    if (startDate === undefined) {
      setOpenError(!openError)
    } else
      if (searchResult.food_name === 'CAL-CULATOR') {
        setOpenError(!openError)
      } else {
        setResultSave((prevState) => [
          ...prevState,
          {
            id: searchResult.id,
            date: startDate,
            foodname: searchResult.food_name,
            calories: searchResult.calories,
          },
        ]);
        setChecked((prevState) => {
          let count = Object.keys(checked).length;
          return {
            ...prevState,
            [count]: false,
          };
        });
      }
  };

  const confirmButtonHandle = () => {
    for (let key in checked) {
      if (Object.keys(value).length === 0) {
        console.log("please select AMOUT of food")
      } else
        if (checked[key]) {
          setConfirmData((prevData) => [
            ...prevData,
            {
              FoodId: resultSave[key].id,
              date: resultSave[key].date,
              amount: value[key][0],
            },
          ]);
        }
    }
  };

  const userFoodSender = () => {
    axios.post('http://localhost:4000/food/addfooduser', { food_info: confirmData }, { withCredentials: true })
      .then(response => {
        if (response.data === "init response") {
          console.log("SERVER OK")
        } else if (response.data === 'success') {
          setOpen(!open)
        }
      });
  };

  useEffect(() => {
    userFoodSender();
    setResultSave((prevState) => {
      return prevState.filter((item, idx) => {
        return !checked[idx];
      });
    });

    setChecked((prevState) => {
      let checkedKeys = Object.keys(prevState);
      let count = checkedKeys.filter((item) => {
        return prevState[item] === false;
      }).length;
      let returnObj = {};
      for (let i = 0; i < count; i++) {
        returnObj[i] = false;
      }
      return returnObj;
    });
  }, [confirmData]);

  const deleteButtonHandle = () => {
    setResultSave((prevState) => {
      return prevState.filter((item, idx) => {
        return checked[idx] === false;
      });
    });

    setChecked((prevState) => {
      let checkedKeys = Object.keys(prevState);
      let count = checkedKeys.filter((item) => {
        return prevState[item] === false;
      }).length;
      let returnObj = {};
      for (let i = 0; i < count; i++) {
        returnObj[i] = false;
      }
      return returnObj;
    });
  };

  useEffect(() => {
    setCurrentPageIndex(3);
  }, []);

  useEffect(() => {
    totalCaloriesHandle();
  }, [value]);

  const totalCaloriesHandle = () => {
    for (let key in value) {
      setTotalCalories(
        resultSave[key].calories * value[key][0] + totalCalories
      );
    }
  };

  return (
    <div className='calculator'>
      <ul>
        <li className='search'>
          <Search
            searchInputHandle={searchInputHandle}
            searchResultHandle={searchResultHandle}
            searchInput={searchInput}
            inputRef={inputRef}
            autoComplete={autoComplete}
            setSearchResult={setSearchResult}
            setSearchInput={setSearchInput}
            setAutoComplete={setAutoComplete}
          />
        </li>
        <li className='food'>
          <FoodList
            searchResult={searchResult}
            addDateHandle={addDateHandle}
            addToCartButton={addToCartButton}
            openError={openError}
            setOpenError={setOpenError}
          />
        </li>
        <li className='cart'>
          <Cart
            searchResult={searchResult}
            startDate={startDate}
            resultSave={resultSave}
            confirmButtonHandle={confirmButtonHandle}
            deleteButtonHandle={deleteButtonHandle}
            checked={checked}
            setChecked={setChecked}
            value={value}
            setValue={setValue}
            totalCalories={totalCalories}
            userFoodSender={userFoodSender}
          />
        </li>
        <li>
          <div className='trivia'>
            <p use='headline1' className='home__text homeTrivia'><span className='home__text triviaTitle'>Did you know...?</span><br /><span className='home__text triviaContent'>{trivia}</span></p>
          </div>
        </li>
        <div className='snackbar'>
          <Snackbar
            open={open}
            onClose={(evt) => setOpen(false)}
            message='Successfully registerd...'
            dismissesOnAction
            action={
              <SnackbarAction
                style={{ color: "#ffff" }}
                label='Dismiss'
                onClick={() => console.log("Click Me")}
              />
            }
          />
        </div>
      </ul>
    </div>
  )
};

export default Calculator;



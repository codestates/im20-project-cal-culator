import React from "react";
import "@rmwc/textfield/styles";
import "@rmwc/button/styles";
import { Button } from "@rmwc/button";
import { TextField } from "@rmwc/textfield";
import "./Calculator.css";

const Search = () => {
  const [searchInput, setSearchInput] = React.useState();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(searchInput);
        }}
      >
        <div className="search">
          <div className="search-input">
            <TextField
              onChange={(e) => setSearchInput(e.target.value)}
              style={{ width: "30rem" }}
              outlined
              placeholder="What did you eat today...?"
            />
          </div>
          <div className="search-button">
            <Button
              type="submit"
              style={{ height: "3.5rem" }}
              label="Search"
              outlined
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import Home from "./component/Home/Home";
import SignUp from "./component/Signup";
import Summary from "./component/Summary/Summary";
import Login from "./component/Login";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Calculator from "./component/Calculator/Calculator";
import DoDont from "./component/Solution/Dodont";
import About from "./component/About/About";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const loginState = () => {
    setIsLogin(true);
  };

  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route path="/signup" render={() => <SignUp />} />
          <Route
            path="/login"
            render={() => <Login isLogin={isLogin} loginState={loginState} />}
          />
          <Route path="/about" render={() => <About />} />
          <Route path="/summary" render={() => <Summary />} />
          <Route path="/calculator" render={() => <Calculator />} />
          <Route path="/dodont" render={() => <DoDont />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import Shop from "./Shop";

import Footer from "./Footer";
import "../styles/main.scss";

const App = () => {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/" exact={true} component={Home}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;

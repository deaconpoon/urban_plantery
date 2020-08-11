import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";

import "../styles/main.scss";

const App = () => {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route path="/products/:id" component={Product}></Route>
          <Route path="/products" exact={true} component={Shop}></Route>
          <Route path="/" exact={true} component={Home}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;

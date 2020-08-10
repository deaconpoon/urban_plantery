import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Shop from "./Shop";
import ProductDetail from "./ProductDetail";

import "../styles/main.scss";

const App = () => {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/product/:id" component={ProductDetail}></Route>
          <Route path="/" exact={true} component={Home}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;

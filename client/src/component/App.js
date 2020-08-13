import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/main.scss";

import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div>
        {isOpen && <Cart isOpen={isOpen} setIsOpen={setIsOpen}></Cart>}
        <Nav isOpen={isOpen} setIsOpen={setIsOpen}></Nav>
        <Switch>
          <Route path="/products/:id" component={Product}></Route>
          <Route path="/products" exact={true} component={Shop}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/" exact={true} component={Home}></Route>
        </Switch>

        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;

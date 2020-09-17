import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/main.scss";

import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";
import Cart from "./Cart";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

import SignInUser from "./SignInUser";
import RegisterUser from "./RegisterUser";
import ProductsAdmin from "./ProductsAdmin";
import Shipping from "./Shipping";
import Payment from "./Payment";
import PlaceOrder from "./PlaceOrder";
import Order from "./Order";
import Profile from "./Profile";
import OrdersAdmin from "./OrdersAdmin";
import Menu from "./Menu";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  //Disable scroll when cart or menu is oepn
  useEffect(() => {
    isOpen || menuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen || menuOpen]);
  return (
    <Router>
      <div>
        {isOpen && <Cart isOpen={isOpen} setIsOpen={setIsOpen}></Cart>}
        {menuOpen && (
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
        )}
        <Nav
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        ></Nav>

        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/about" component={AboutUs}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/register" component={RegisterUser}></Route>
          <Route path="/signin" component={SignInUser}></Route>
          <Route path="/products/:id" component={Product}></Route>
          <Route path="/shipping" component={Shipping}></Route>
          <Route path="/payment" component={Payment}></Route>
          <Route path="/placeorder" component={PlaceOrder}></Route>
          <Route path="/order/:id" component={Order}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/products" exact={true} component={Shop}></Route>

          <Route path="/category/:id" component={Shop}></Route>

          <Route path="/productsadmin" component={ProductsAdmin}></Route>
          <Route path="/orderadmin" component={OrdersAdmin}></Route>

          <Route path="/cart" component={Cart}></Route>
        </Switch>

        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;

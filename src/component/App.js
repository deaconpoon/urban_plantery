import React, { Fragment } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Specialty from "./Specialty";
import NewProduct from "./NewProduct";
import Testimonial from "./Testimonial";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import "../styles/main.scss";

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Specialty></Specialty>
      <NewProduct></NewProduct>
      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default App;

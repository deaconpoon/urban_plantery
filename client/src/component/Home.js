import React from "react";
import Hero from "./Hero";
import About from "./About";
import Specialty from "./Specialty";
import NewProduct from "./NewProduct";
import Testimonial from "./Testimonial";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <main>
      <Hero></Hero>
      <About></About>
      <Specialty></Specialty>
      <NewProduct></NewProduct>
      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
    </main>
  );
};

export default Home;

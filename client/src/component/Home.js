import React from "react";
import Hero from "./Hero";
import About from "./About";
import Specialty from "./Specialty";
import NewProduct from "./NewProduct";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <main>
      <Hero></Hero>
      <About></About>
      <Specialty></Specialty>
      <NewProduct></NewProduct>
      <Testimonial></Testimonial>
    </main>
  );
};

export default Home;

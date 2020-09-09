import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      fade
      control={false}
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../asset/product/plant_1.jpg")}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Pothos</h3>
          <p>Beautiful cascading foilage that grows with their surrounding</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../asset/product/plant_2.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Cactus</h3>
          <p>Gentle beauty with low maintenance</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../asset/product/plant_3.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Philodendron</h3>
          <p>Low light topical gorgeous with beautiful foilage</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

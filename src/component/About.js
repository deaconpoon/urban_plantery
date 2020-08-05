import React from "react";

const About = () => {
  return (
    <div className="about section">
      <div className="about__body">
        <p className="about__body__title">
          Fill your heart with exotic tropical plants to brigthen your day.
        </p>

        <div className="about__body__main">
          <div className="about__body__main__container">
            <img
              className="about__body__main__image"
              src={require("../asset/portrait_2.jpg")}
              alt="portrait"
            ></img>
            <div className="about__body__main__text">
              {" "}
              A tropical paradise secreted in the heart of the city. This
              magical garden inhabit a plethora of exotic plants. Discover the
              wonder of botany and spice your life up with some 🌻💖{" "}
            </div>
            <div className="about__body__main__link">Shop our collection</div>
          </div>
          <div className="about__body__main__container--2">
            <img
              className="about__body__main__image"
              src={require("../asset/portrait.jpg")}
              alt="protrait-2"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
import React from "react";
import aboutImg from "../asset/aboutUs.jpg";

const AboutUs = () => {
  return (
    <body className="about-us__wrapper">
      <div className="section">
        <div className="about-us">
          <h2 className="sub-title">About us</h2>
          <p>Welcome to Urban Plantery</p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in.
          </p>
          <img alt="about-us picture" src={aboutImg}></img>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt{" "}
          </p>
        </div>
      </div>
    </body>
  );
};

export default AboutUs;

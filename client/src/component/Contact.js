import React from "react";
import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <body className="contact__wrapper">
      <div className="contact__body section">
        <div className="contact__body__card">
          <div className="contact__body__card--border">
            <h2 className="contact__body__card--title">Let's get in touch</h2>
            <p className="contact__body__card--paragraph">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem
            </p>
            <span className="contact__body__card--line"></span>

            <div className="contact__body__card__container">
              <ImLocation className="contact__body__card--icon"></ImLocation>
              <span className="contact__body__card--address">
                4460 Frankford Rd, Burnaby, Canada
              </span>
            </div>
            <div className="contact__body__card__container">
              <AiFillMail className="contact__body__card--icon"></AiFillMail>
              <a href={`mailto:info@urban-plantery.com`}>
                info@urban-plantery.com
              </a>
            </div>
            <div className="contact__body__card__container">
              <FaPhone className="contact__body__card--icon"></FaPhone>
              <span>+1 778 234 2345</span>
            </div>
            <div className="contact__body__card__container">
              <FaFacebookF className="contact__body__card--icon"></FaFacebookF>
              <a href={"https://www.facebook.com"}>Urban Plantery</a>
            </div>
            <div className="contact__body__card__container">
              <FaInstagram className="contact__body__card--icon"></FaInstagram>
              <a href={"https://www.instagram.com"}>Urban Plantery</a>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Contact;

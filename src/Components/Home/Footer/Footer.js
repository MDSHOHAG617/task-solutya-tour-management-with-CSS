import React from "react";
import "./Footer.css";
import logo from "../../../images/logo-malekairinternational 1.png";
import cell from "../../../images/cell.png";
import email from "../../../images//email-logo.png";
import location from "../../../images/location-logo.png";
import agree from "../../../images/tickmark.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-box">
        <div className="left-box">
          <img className="footer-logo" src={logo} alt="" />
          <p className="footer-lorem">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <hr className="horizontal-line"></hr>
          <div className="contact">
            <img className="cell" src={cell} alt="" />
            <p className="cell-number"> + 880 1611 66 4965</p>
          </div>
          <div className="email">
            <img className="cell email" src={email} alt="" />
            <p className="email-number"> solutya@gmail.com</p>
          </div>
          <div className="location">
            <img className="cell location" src={location} alt="" />
            <p className="location-number"> Usman center, Uttara-12</p>
          </div>
        </div>

        {/* right boxes */}
        <div className="right-box">
          <div className="box-1">
            <h1 className="box1-head">Company</h1>
            <div className="footer-routes">
              <p className="route1">About us </p>
              <p className="route2">Company Blogs </p>
              <p className="route3">Work with Us </p>
              <p className="route4">Meet the team </p>
            </div>
          </div>
          <div className="box-2">
            <h1 className="box2-head">Explore</h1>
            <div className="footer-routes">
              <p className="box-2-route1">Account </p>
              <p className="box-2-route2">Legel </p>
              <p className="box-2-route3">Contact </p>
              <p className="box-2-route4">Privacy Policy</p>
            </div>
          </div>
          {/* box three  */}
          <div className="box-3">
            {" "}
            <h1 className="box3-head">Newsletter</h1>
            <input
              className="footer-email"
              type="email"
              value="Email Address"
            />
          </div>
          <input
            className="footer-subscribe"
            type="text"
            name=""
            c
            value="Subscribe"
            id=""
          />
          <div className="agreement">
            <img className="tick" src={agree} alt="" />
            <p className="agree">I agree to all terms and condition</p>
          </div>
        </div>

        <div className="full-and-final-box">
          <div className="bottom-div"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

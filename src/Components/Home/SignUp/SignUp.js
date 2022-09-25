import React from "react";
import "./SignUp.css";
import bgImg from "../../../images/bgImg.png";
import redCircle from "../../../images/red-circle.png";
import mailSing from "../../../images/mailSign.png";

const SignUp = () => {
  return (
    <div>
      <div className="signup-box">
        <img className="bgImg" src={bgImg} alt="" />
        <div className="contact">
          <div className="contact-text">
            <h1 className="newsletter">Newsletter</h1>
            <p className="signIn-text">Sign Up to receive the best offer</p>
          </div>
          <input
            className="Destination-input"
            type="text"
            placeholder="Description"
          />
          <input className="email-input" type="email" placeholder="Email" />
          <img className="red-circle" src={redCircle} alt="" />
          <img className="mailSign" src={mailSing} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

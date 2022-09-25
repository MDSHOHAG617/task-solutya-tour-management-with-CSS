import React from "react";
import "./Review.css";
import person1 from "../../../images/first-person.png";
import person2 from "../../../images/second-person.png";
import person3 from "../../../images/third-person.png";
import redStar from "../../../images/red-star.png";
import blankStar from "../../../images/blank-star.png";
import ellips from "../../../images/Ellipse2.png";
import pinkellips from "../../../images/pink-ellips.png";

const Reviews = () => {
  return (
    <div>
      <div className="review-heading">
        <h3 className="review-top-head">Testimonials and Reviews</h3>
        <h1 className="review-second-head">What They're Saying</h1>
      </div>
      {/* avaters */}
      <div className="avatars">
        <img src={person1} alt="" />
        <img src={person2} alt="" />
        <img src={person3} alt="" />
      </div>

      {/* reviews */}
      <div className="cards">
        <div className="card">
          <div className="card-star">
            <img src={redStar} alt="" />
            <img src={redStar} alt="" />
            <img src={redStar} alt="" />
            <img src={blankStar} alt="" />
            <img src={blankStar} alt="" />
          </div>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <div className="customer-name">
            <h2 className="cust-name">Shirly Smith</h2>
            <p className="red-customer">CUSTOMER</p>
          </div>
        </div>
        <div className="card">
          <div className="card-star">
            <img src={redStar} alt="" />
            <img src={redStar} alt="" />
            <img src={redStar} alt="" />
            <img src={blankStar} alt="" />
            <img src={blankStar} alt="" />
          </div>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <div className="customer-name">
            <h2 className="cust-name">Kevin Martin</h2>
            <p className="red-customer">CUSTOMER</p>
          </div>
        </div>
        <div className="card">
          <div className="card-star">
            <img src={redStar} alt="" />
            <img src={redStar} alt="" />
            <img src={redStar} alt="" />
            <img src={blankStar} alt="" />
            <img src={blankStar} alt="" />
          </div>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <div className="customer-name">
            <h2 className="cust-name">Jecchica Brown</h2>
            <p className="red-customer">CUSTOMER</p>
          </div>
        </div>
      </div>
      <div className="next-card">
        <img className="red-ellips" src={ellips} alt="" />
        <img src={pinkellips} alt="" />
        <img src={pinkellips} alt="" />
      </div>
    </div>
  );
};

export default Reviews;

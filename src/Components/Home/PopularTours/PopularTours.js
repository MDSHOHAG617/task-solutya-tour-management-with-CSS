import React from "react";
import "./PopularTours.css";
import circle from "../../../images/circle.png";
import previous from "../../../images/left-vector.png";
import next from "../../../images/right-vector.png";
import line from "../../../images/line.png";
import austria from "../../../images/Austria.png";
import northAmerica from "../../../images/northamerica.png";
import ellips2 from "../../../images/Ellipse2.png";
import ellips_circle from "../../../images/ellips-circle.png";
import austria_vector from "../../../images/Vector 3.png";
import redStar from "../../../images/red-star.png";
import blankStar from "../../../images/blank-star.png";

const PopularTours = () => {
  return (
    <div className="tours">
      <h1 className="heading">Most Popular Tour</h1>
      <div className="divide">
        <div className="flex-div">
          <p className="loremIpsum">Lorem Ipsum is simply dummy text</p>
          <div className="right-div">
            {" "}
            <p className="view-tour">View All Tours</p>
            <div className="prev-nxt see-tour">
              <div className="prev">
                <div className="pev-line">
                  <img src={previous} alt="" />
                  <img className="line" src={line} alt="" />
                </div>
                <img className="circle1" src={circle} alt="" />
              </div>
              <div className="nxt">
                {" "}
                <div className="nxt-line">
                  <img className="letter" src={next} alt="" />
                  <img className="line" src={line} alt="" />
                </div>
                <img src={circle} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Austria and North Africa */}

      <div className="country">
        <div className="austria">
          <div className="top-austria">
            <div className="left-austria">
              <img src={ellips2} alt="" />
              <p>Austria</p>
            </div>
            <div className="right-austria">
              <img className="austria-circle" src={ellips_circle} alt="" />
              <img className="austria-vector" src={austria_vector} alt="" />
            </div>
          </div>
          <img className="austria-img" src={austria} alt="" />

          <p className="austria-lorem">Lorem Ipsum is simply dummy text.</p>
          <p className="austria-price">5 days | from $500</p>

          <div className="star">
            <img src={redStar} alt="" />
            <img src={redStar} alt="" />
            <img src={redStar} alt="" />
            <img src={blankStar} alt="" />
            <img src={blankStar} alt="" />
          </div>
          <div className="austria-review">3 reviews</div>
        </div>
        {/* north america */}
        <div className="austria">
          <div className="top-america">
            <div className="left-america">
              <img src={ellips2} alt="" />
              <p>Austria</p>
            </div>
            <div className="right-america">
              <img className="america-circle" src={ellips_circle} alt="" />
              <img className="america-vector" src={austria_vector} alt="" />
            </div>
          </div>

          {/* khela anei */}
          <img className="austria-img" src={northAmerica} alt="" />

          <p className="austria-lorem">Lorem Ipsum is simply dummy text.</p>
          <p className="austria-price">5 days | from $500</p>

          <div className="star">
            <img src={redStar} alt="" />
            <img src={redStar} alt="" />
            <img src={redStar} alt="" />
            <img src={blankStar} alt="" />
            <img src={blankStar} alt="" />
          </div>
          <div className="austria-review">3 reviews</div>
        </div>
        {/* <div className="northAmerica">
          <img className="northAmerica-img" src={northAmerica} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default PopularTours;

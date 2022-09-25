import React from "react";
import "./Navbar.css";
import bannerImg from "../../../images/photoholgic-jK9dT34TfuI-unsplash 1.png";
import logo from "../../../images/logo-malekairinternational 1.png";
import vector from "../../../images/Vector.png";
import vector2 from "../../../images/Vector2.png";
import ellips from "../../../images/Ellipse 30.png";
import ellips2 from "../../../images/Ellipse2.png";
import circle from "../../../images/circle.png";
import previous from "../../../images/left-vector.png";
import next from "../../../images/right-vector.png";
import line from "../../../images/line.png";
import BannerBox from "../BannerBox/BannerBox";
import PopularTours from "../PopularTours/PopularTours";
import Destination from "../Destination/Destination";
import Stories from "../Stories/Stories";
import Partners from "../BrandPartners/Partners";
import Reviews from "../Reviews/Reviews";
import Blogs from "../Blogs/Blogs";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
</style>;

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={bannerImg} alt="" />
      <div className="main">
        <div className="top-nav">
          <p>Support</p>
          <p className="top-nav-element">
            USD{" "}
            <span>
              <img className="vector" src={vector} alt="" />
            </span>
          </p>
          <p className="top-nav-element">
            <img src={ellips} alt="" />
            <span className="en">EN</span>
            <span>
              <img className="vector" src={vector} alt="" />
            </span>
          </p>
          <div className="signUp-signIn">
            <p>Sign Up/ Sign In</p>
          </div>
        </div>
      </div>
      <div className="routes logo">
        {" "}
        <img className="" src={logo} alt="" />
        <p className="home">HOME</p>
        <hr />
        <p>
          FEATURES{" "}
          <span>
            <img className="vector" src={vector} alt="" />
          </span>
        </p>
        <p>PAGES</p>
        <p>TOURS</p>
        <p>CARS</p>
        <p>HOTELS</p>
        <p>FLIGHTS</p>
        <p>
          <img className="vector-2" src={vector2} alt="" />
        </p>
      </div>
      <div className="un">
        <img className="ellips2" src={ellips2} alt="" />
        <p>United State of America</p>
      </div>
      <div className="arizona-asia">
        <p>Arizona</p>
        <p>Asia</p>
      </div>
      <div className="lorem">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry
      </div>
      <div className="book-now">
        <div className="left-book">
          <button className="booking-btn">Book Now</button>
          <p>Choose Tour</p>
        </div>
        <div className="prev-nxt">
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
      <BannerBox></BannerBox>
      <PopularTours></PopularTours>
      <Destination></Destination>
      <Stories></Stories>
      <Partners></Partners>
      <Reviews></Reviews>
      <Blogs></Blogs>
    </div>
  );
};

export default Navbar;

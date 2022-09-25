import React from "react";
import "./BannerBox.css";
import location from "../../../images/location.png";
import userchk from "../../../images/user-check.png";
import checkOut from "../../../images/checkout.png";
import travelers from "../../../images/travelers.png";

const BannerBox = () => {
  return (
    <div>
      <div className="main-box">
        {/* top part */}
        <div className="top-box">
          <p className="hotel">Hotel</p>
          <p>Flights</p>
          <p>Cars</p>
          <p>Packages</p>
          <p>Cruise</p>
          <p className="holiday">Holiday</p>
        </div>
        {/* End of the top  */}

        {/* rest part */}
        <div className="chk-in">
          <div className="going-to first-child">
            <img className="location-logo" src={location} alt="" />
            <p>Going to</p>
          </div>
          <div className="going-to">
            <img className="chkIn-logo" src={userchk} alt="" />
            <p>Check in</p>
          </div>
          <div className="going-to">
            <img className="checkOut-logo" src={checkOut} alt="" />
            <p>Check out</p>
          </div>
          <div className="going-to">
            <img className="traveler-logo" src={travelers} alt="" />
            <p>Travelers</p>
          </div>
        </div>

        {/*end rest part */}

        <div className="input-boxes">
          <input
            className="location-box"
            type="text"
            name=""
            placeholder="Location here"
            id=""
          />
          <input className="chkIn-box" type="date" name="" id="" />
          <input className="chkOut-box" type="date" name="" id="" />
          <input
            className="Travelers-box"
            type="text"
            placeholder="Travelers"
            name=""
            id=""
          />
          <button className="btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default BannerBox;

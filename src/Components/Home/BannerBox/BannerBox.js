import React from "react";
import "./BannerBox.css";
import location from "../../../images/location.png";

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
          <div className="going-to">
            <img className="location-logo" src={location} alt="" />
            <p>Going to</p>
          </div>
        </div>

        {/*end rest part */}
      </div>
    </div>
  );
};

export default BannerBox;

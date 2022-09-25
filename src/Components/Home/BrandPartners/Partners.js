import React from "react";
import "./Partners.css";
import partners from "../../../images/Our Partners.png";
import demos from "../../../images/demos.png";
import demosite from "../../../images/demosite.png";
import demosport from "../../../images/demosport.png";
import uparrow from "../../../images/uparrow.png";

const Partners = () => {
  return (
    <div>
      <div className="partner-div">
        <div className="brands">
          <img className="brand" src={partners} alt="" />
          <img className="brand" src={demos} alt="" />
          <img className="brand" src={demosite} alt="" />
          <img className="brand" src={demosport} alt="" />
        </div>
        <img className="up-arrow" src={uparrow} alt="" />
      </div>
    </div>
  );
};

export default Partners;

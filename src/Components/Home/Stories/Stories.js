import React from "react";
import "./Stories.css";
import russia from "../../../images/russia.png";
import flg_russia from "../../../images/flg-russia.png";
import southpole from "../../../images/sothpol.png";
import flg_southpole from "../../../images/flg-southpol.png";
import africana from "../../../images/africana.png";
import flg_arficana from "../../../images/flg-africana.png";
import greece from "../../../images/greece.png";
import flg_greece from "../../../images/flg-greece.png";

const Stories = () => {
  return (
    <div>
      <div className="top-story">
        <h2 className="heading story-heading destination">
          Interesting Stories{" "}
        </h2>
        <div className="flex-destination">
          <p className="dest-lorem stories-lorem">Watch and be inspired</p>
        </div>
      </div>
      {/* main design start */}
      <div className="another-countries">
        <div className="russia-str">
          <img src={russia} alt="" />
          <img className="flag-russia" src={flg_russia} alt="" />
          <p className="name-russia">Russia</p>
        </div>
        <div className="russia-str">
          <img src={southpole} alt="" />
          <img className="flag-southPole" src={flg_southpole} alt="" />
          <p className="name-southPole">South Pole </p>
        </div>
        <div className="russia-str">
          <img src={africana} alt="" />
          <img className="flag-africana" src={flg_arficana} alt="" />
          <p className="name-africana">Africa</p>
        </div>
        <div className="russia-str">
          <img src={greece} alt="" />
          <img className="flag-greece" src={flg_greece} alt="" />
          <p className="name-greece">Greece</p>
        </div>
      </div>
    </div>
  );
};

export default Stories;

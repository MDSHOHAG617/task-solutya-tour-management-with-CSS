import React from "react";
import "./Destination.css";
import america from "../../../images/American-hors.png";
import maldives from "../../../images/Maldives.png";
import africa from "../../../images/Africa.png";
import japan from "../../../images/japan.png";
import australia from "../../../images/Australia.png";
import india from "../../../images/India.png";

const Destination = () => {
  return (
    <div>
      <h2 className="heading destination">Top Destination</h2>
      <div className="flex-destination">
        <p className="dest-lorem">
          Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.
        </p>
        <p className="view-all-dest">View All Destination</p>
      </div>
      <div className="top-countries">
        <div className="dest-america">
          <img src={america} alt="" />
          <h1 className="dst-america">America</h1>
        </div>
        <div className="dest-america">
          <img src={maldives} alt="" />
          <h1 className="dst-maldives">Maldives</h1>
        </div>
        <div className="dest-america">
          <img src={africa} alt="" />
          <h1 className="dst-africa">Africa</h1>
        </div>
        <div className="dest-america">
          <img src={japan} alt="" />
          <h1 className="dst-japan">Japan</h1>
        </div>
        <div className="dest-america">
          <img src={australia} alt="" />
          <h1 className="dst-australia">Australia</h1>
        </div>
        <div className="dest-america">
          <img src={india} alt="" />
          <h1 className="dst-india">India</h1>
        </div>
      </div>
    </div>
  );
};

export default Destination;

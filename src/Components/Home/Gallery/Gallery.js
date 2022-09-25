import React from "react";
import "./Gallery.css";
import photo1 from "../../../images/gallery_pic1.png";
import photo2 from "../../../images/gallery_pic2.png";
import photo3 from "../../../images/gallery_pic3.png";
import photo4 from "../../../images/gallery_pic4.png";
import photo5 from "../../../images/gallery_pic5.png";

const Gallery = () => {
  return (
    <div>
      <div className="gallery">
        <img src={photo1} alt="" />
        <img src={photo2} alt="" />
        <img src={photo3} alt="" />
        <img src={photo4} alt="" />
        <img src={photo5} alt="" />
      </div>
    </div>
  );
};

export default Gallery;

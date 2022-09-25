import React from "react";
import "./Blogs.css";
import blog1 from "../../../images/blog1.png";
import blog2 from "../../../images/blog2.png";
import blog3 from "../../../images/blog3.png";
import streems from "../../../images/streem.png";
import press from "../../../images/press.png";

const Blogs = () => {
  return (
    <div>
      <div className="top-blg-head">
        <h1 className="blog-heading">Most Popular Tour</h1>
        <p className="blog-lorem">
          Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.
        </p>
      </div>

      {/* blogs images */}
      <div className="blog-images">
        <img src={blog1} alt="" />
        <img src={blog2} alt="" />
        <img src={blog3} alt="" />
      </div>
      <div className="streems">
        <img className="streems-1" src={streems} alt="" />
        <img className="streems-2" src={streems} alt="" />
        <img className="streems-3" src={press} alt="" />
      </div>
    </div>
  );
};

export default Blogs;

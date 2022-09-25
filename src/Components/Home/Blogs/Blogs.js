import React from "react";
import "./Blogs.css";
import blog1 from "../../../images/blog1.png";
import blog2 from "../../../images/blog2.png";
import blog3 from "../../../images/blog3.png";
import streems from "../../../images/streem.png";
import press from "../../../images/press.png";
import user1 from "../../../images/user1.png";
import user2 from "../../../images/user2.png";

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
      <div className="blogs-by-user">
        <div className="users users-1">
          <div className="user">
            <img src={user1} alt="" />
            <p className="blog-role">June 31th by Admin</p>
          </div>
          <p className="user-comment">
            Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.
          </p>
        </div>
        <div className="users users-2">
          <div className="user">
            <img src={user2} alt="" />
            <p className="blog-role">June 31th by Admin</p>
          </div>
          <p className="user-comment">
            Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.
          </p>
        </div>
        <div className="users users-3">
          <div className="user">
            <img src={user1} alt="" />
            <p className="blog-role">June 31th by Admin</p>
          </div>
          <p className="user-comment">
            Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

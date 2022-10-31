import React from "react";
import "./Hero.scss";
import "./Queries.scss";
import Navbar from "../Navbar/Navbar";
import Chicken from "../../assets/images/chicken.png";
import Vegetables from "../../assets/images/vegetables.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="heading">
        <h1>Frozen Protein</h1>
      </div>
      <div className="product-imgs">
        <div className="vegetables" style={{ width: "1px", height: "20px" }}>
          <img src={Vegetables} alt="vegetables" />
        </div>
        <div className="chicken">
          <img src={Chicken} alt="chicken" />
        </div>
      </div>
      <div className="btn-div">
        <a className="order-btn" href="/">
          Order Now
        </a>
      </div>
    </div>
  );
};

export default Hero;

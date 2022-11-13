import React from "react";
import "./Testimonials.scss";
import "./Queries.scss";
import Customer from "../../assets/images/customer.jpeg";
import Flower from "../../assets/images/flower.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="heading">
        <h1>What our Cutomers Say’s</h1>
      </div>
      <div className="testimonies">
        <div className="testimony-card">
          <div className="card-header">
            <div className="img">
              <img src={Customer} alt="" />
            </div>
            <div className="header-text">
              <h4>Jane Doe</h4>
              <p>C.E.O</p>
            </div>
          </div>
          <div className="text-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua tenimad
              minim veniam quis nostrud.
            </p>
            <img src={Flower} alt="" />
          </div>
        </div>
        <div className="testimony-card">
          <div className="card-header">
            <div className="img">
              <img src={Customer} alt="" />
            </div>
            <div className="header-text">
              <h4>Jane Doe</h4>
              <p>C.E.O</p>
            </div>
          </div>
          <div className="text-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua tenimad
              minim veniam quis nostrud.
            </p>
            <img src={Flower} alt="" />
          </div>
        </div>
        <div className="testimony-card">
          <div className="card-header">
            <div className="img">
              <img src={Customer} alt="" />
            </div>
            <div className="header-text">
              <h4>Jane Doe</h4>
              <p>C.E.O</p>
            </div>
          </div>
          <div className="text-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua tenimad
              minim veniam quis nostrud.
            </p>
            <img src={Flower} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

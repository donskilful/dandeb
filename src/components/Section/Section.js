import React from "react";
import "./Section.scss";
import "./Queries.scss";
import Protein from "../../assets/images/protien.png";
import Bike from "../../assets/images/bike.png";
import Offer from "../../assets/images/offer.png";

const Section = () => {
  return (
    <div className="section-div">
      <h1>Why choose us?</h1>
      <div className="main-contenet">
        <div className="content">
          <div className="icon">
            <img src={Protein} alt="protein" />
          </div>
          <h1>Fresh Proteins</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua tenimad
            minim veniam quis nostrud
          </p>
        </div>
        <div className="content">
          <div className="icon">
            <img src={Bike} alt="bike" />
          </div>
          <h1>Fast Delivery</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua tenimad
            minim veniam quis nostrud
          </p>
        </div>
        <div className="content">
          <div className="icon">
            <img src={Offer} alt="offer" />
          </div>
          <h1>Best Offer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua tenimad
            minim veniam quis nostrud
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;

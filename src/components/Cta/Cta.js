import React from "react";
import "./Cta.scss";
import "./Queries.scss";
import frozenChicken from "../../assets/images/frozenChicken.png";

const Cta = () => {
  return (
    <div className="cta">
      <div className="section">
        <div className="section-left">
          <div className="circle"></div>
          <div className="img">
            <img src={frozenChicken} alt="frozen chicken" />
          </div>
        </div>
        <div className="section-right">
          <div className="content">
            <h1>Freshly, Health, Delicious Proteins</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua tenimad
              minim veniam quis nostrud
            </p>
            <div className="btn">
              <button>
                <a href="/">Start Ordering</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;

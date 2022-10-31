import React from "react";
import "./HotDeals.scss";
import "./Queries.scss";

const HotDeals = () => {
  return (
    <div className="hot-deals">
      <div className="header">
        <div className="header-left">
          <h1>Hot deals</h1>
        </div>
        <div className="header-right">
          <button className="arrow-btn">
            <ion-icon id="back" name="arrow-back-outline"></ion-icon>
          </button>
          <button className="arrow-btn">
            <ion-icon id="front" name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
};

export default HotDeals;

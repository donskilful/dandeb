import React from "react";
import "./MenuSection.scss";
import "./Queries.scss";
import Arrow from "../../assets/images/arrow.png";
import Chef from "../../assets/images/chef.png";

const MenuSection = () => {
  return (
    <div className="menu-section">
      <div className="menu-card">
        <div className="menu-content">
          <h1>Ready! Start Ordering . . .</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="action">
            <a href="/"> View our Menu</a>
            <a href="/">
              <img src={Arrow} alt="arrow-icon" />
            </a>
          </div>
        </div>
        <div className="img">
          <img src={Chef} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MenuSection;

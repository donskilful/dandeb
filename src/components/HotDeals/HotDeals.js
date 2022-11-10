import React from "react";
import "./HotDeals.scss";
import "./Queries.scss";
import Card from "../Card/Card";
import frozenChicken from "../../assets/images/frozenChicken.jpeg";
import markerel from "../../assets/images/markerel.jpeg";
import egg from "../../assets/images/egg.jpeg";

export const hotDealItems = [
  {
    imgUrl: frozenChicken,
    title: "Chicken",
    price: "N1,200",
  },
  {
    imgUrl: frozenChicken,
    title: "Chicken",
    price: "N1,200",
  },
  {
    imgUrl: frozenChicken,
    title: "Chicken",
    price: "N1,200",
  },
  {
    imgUrl: markerel,
    title: "Markerel",
    price: "N1,200",
  },
  {
    imgUrl: egg,
    title: "Egg (Per crate)",
    price: "N1,900",
  },
  {
    imgUrl: egg,
    title: "Egg (Per crate)",
    price: "N1,900",
  },
  {
    imgUrl: egg,
    title: "Egg (Per crate)",
    price: "N1,900",
  },
  {
    imgUrl: egg,
    title: "Egg (Per crate)",
    price: "N1,900",
  },
];

const HotDeals = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    console.log("left chevron clicked");
    slider.scrollLeft = slider.scrollLeft - 425;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    console.log("right chevron clicked");
    slider.scrollLeft = slider.scrollLeft + 425;
  };

  return (
    <div className="hot-deals">
      <div className="header">
        <div className="header-left">
          <h1>Hot Deals</h1>
        </div>
        <div className="header-right">
          <button className="arrow-btn" onClick={slideLeft}>
            <ion-icon id="back" name="arrow-back-outline"></ion-icon>
          </button>
          <button className="arrow-btn" onClick={slideRight}>
            <ion-icon id="front" name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
      <div className="main-container">
        <div className="main" id="slider">
          {hotDealItems.map((item, index) => (
            <Card
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotDeals;

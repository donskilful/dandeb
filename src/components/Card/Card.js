import React from "react";
import "./Card.scss";
import "./Queries.scss";

const Card = ({ imgUrl, title, price }) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <div className="img">
          <img src={imgUrl} alt="img-description" />
        </div>
      </div>
      <div className="content">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="price">
          <p>{price}</p>
        </div>
      </div>
      <div className="btn">
        <button>
          <a href="/">Order</a>
        </button>
      </div>
    </div>
  );
};

export default Card;

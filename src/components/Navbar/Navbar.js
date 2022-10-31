import React from "react";
import "./Navbar.scss";
import "./Queries.scss";
import Logo from "../../assets/images/logo.png";
import { ReactComponent as Cart } from "../../assets/svg/cart.svg";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar-left">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <a href="/"> Home</a>
          </li>
          <li>
            <a href="/"> Menu</a>
          </li>
          <li>
            <a href="/"> Services</a>
          </li>
          <li>
            <a href="/"> Gallery</a>
          </li>
          <li>
            <a href="/"> About us</a>
          </li>
        </ul>
        <div className="cart-icon">
          <Cart />
        </div>
        <div className="order-now">Order Now</div>
      </div>
      <button className="btn-mobile-nav">
        <ion-icon id="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon id="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </div>
  );
};

export default Navbar;

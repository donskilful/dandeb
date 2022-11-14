import React from "react";
import "./Footer.scss";
import "./Queries.scss";
import Logo from "../../assets/images/logo.png";
import Facebook from "../../assets/images/facebook.png";
import LinkedIn from "../../assets/images/linkedIn.png";
import Instagram from "../../assets/images/instagram.png";
import Phone from "../../assets/images/phone.png";
import Mail from "../../assets/images/mail.png";
import Location from "../../assets/images/location.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot">
        <div className="icons">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="social-media">
            <img src={Facebook} alt="facebook" />
            <img src={LinkedIn} alt="linkedIn" />
            <img src={Instagram} alt="instagram" />
          </div>
        </div>
        <div className="services">
          <p>Services</p>
          <a href="/">Membership</a>
          <a href="/">Products</a>
        </div>
        <div className="company">
          <p>Company</p>
          <a href="/">About</a>
          <a href="/">Help</a>
          <a href="/">Feedbacks</a>
        </div>
        <div className="our-menu">
          <p>Our Menu</p>
          <a href="/">Frozen Chicken</a>
          <a href="/">Frozen Turkey</a>
          <a href="/">Egg Shawa & Kote</a>
          <a href="/">Markerel</a>
          <a href="/">Shawa & Kote</a>
        </div>
        <div className="contact-us">
          <p>Contact us</p>
          <div className="contact">
            <img src={Phone} alt="phone" />
            <div className="phones">
              <h6>+234 814 362 6256</h6>
              <h6>+234 705 244 1412</h6>
            </div>
          </div>
          <div className="contact">
            <img src={Mail} alt="mail" />
            <h6>dandebfarm@gmail.com</h6>
          </div>
          <div className="contact">
            <img src={Location} alt="location" />
            <h6>
              Abdul Baja Plaza, Opp. Ado U-turn, Ado, Karu L.G.A, Nasarawa State
            </h6>
          </div>
        </div>
      </div>
      <div className="footer-text">
        <p>© 2022, dandebfarm.com | All Rights Reserved </p>
      </div>
      <div className="after-footer"></div>
    </div>
  );
};

export default Footer;

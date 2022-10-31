import React from "react";
import "./Landing.scss";
import "./Queries.scss";
import Hero from "../components/Hero/Hero";
import HotDeals from "../components/HotDeals/HotDeals";

const Landing = () => {
  return (
    <div className="landing">
      <Hero />
      <HotDeals />
    </div>
  );
};

export default Landing;

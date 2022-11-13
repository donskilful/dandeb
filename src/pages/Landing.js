import React from "react";
import "./Landing.scss";
import "./Queries.scss";
import Hero from "../components/Hero/Hero";
import HotDeals from "../components/HotDeals/HotDeals";
import Cta from "../components/Cta/Cta";
import Section from "../components/Section/Section";
import Testimonials from "../components/Testimonials/Testimonials";
import MenuSection from "../components/MenuSection/MenuSection";

const Landing = () => {
  return (
    <div className="landing">
      <Hero />
      <HotDeals />
      <Cta />
      <Section />
      <Testimonials />
      <MenuSection />
    </div>
  );
};

export default Landing;

import React from "react";
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS

import "./home.css";

import Navbar from "./Navbar";
import SponsoredBy from "./SponsoredBy";


import Footer from "./Footer";
import Faq from "./faq";
import Hero from "./Hero";
import EventContent from "./EventContent";
import AboutEvent from "./AboutEvent";
import OurStats from "./OurStats";







// FINAL HOME COMPONENT
export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <SponsoredBy />
      <AboutEvent />
      <OurStats />
      <EventContent />
      <Faq />
      <Footer />
    </div>
  );
}

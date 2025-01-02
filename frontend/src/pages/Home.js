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



// OUR STATS
function OurStats() {
  const stats = [
    { count: "320+", title: "Participants" },
    { count: "50", title: "Speakers" },
    { count: "10+", title: "Workshops" },
    { count: "2", title: "Days" },
  ];

  return (
    <section className="our-stats-section">
      <div className="our-stats-text">
        <h6>Projected Stats</h6>
        <h2>Conference Highlights</h2>
        <p>
          This two-day event brings together the brightest minds, leading
          innovators, and top brands in the Texas CPG Community.
        </p>
      </div>

      <div className="our-stats-cards">
        {stats.map((item, idx) => (
          <div className="stat-card" key={idx}>
            <h3>{item.count}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}





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

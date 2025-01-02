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



// ABOUT EVENT
function AboutEvent() {
  const eventInfo = [
    {
      title: "Big Ideas, Bold Pitches!",
      description:
        "Watch emerging brands showcase their groundbreaking innovations in front of industry leaders. Discover the next wave of CPG success stories live on stage!",
      subTitle: "Pitch Slam",
    },
    {
      title: "Hands-On Strategies!",
      description:
        "Join interactive sessions tailored for CPG professionals and gain actionable insights you can implement right away to drive your brand forward.",
      subTitle: "Workshops",
    },
    {
      title: "Connect & Grow!",
      description:
        "Network with CPG founders, industry leaders, and key decision-makers. Build lasting relationships within the community that will help elevate your brand and business!",
      subTitle: "Community",
    },
  ];

  return (
    <section className="about-event-section">
      <h2>Why Attend?</h2>
      <p className="about-event-description">
        Join us in the heart of Texas’s thriving CPG scene at Rooted Expo! Connect
        with top brands, forge valuable relationships with industry leaders, meet
        directly with buyers and angel investors, and build a network that fuels
        success. Engage with innovative products and ideas that push boundaries
        and drive growth across the CPG sector...
      </p>

      <div className="about-card-grid">
        {eventInfo.map((item, idx) => (
          <div className="about-card" key={idx}>
            <h3>{item.subTitle}</h3>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

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

// ABOUT EVENT
import React from "react";
import "./css/aboutEvent.css";

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

      {/* ========== Card Layout ========== */}
      <div className="about-card-grid">
        {/* Top-left card (first item) */}
        <div className="about-card">
          <h3>{eventInfo[0].subTitle}</h3>
          <h4>{eventInfo[0].title}</h4>
          <p>{eventInfo[0].description}</p>

          {/* Example button if desired */}
          <button className="details-button">DETAILS SOON</button>
        </div>

        {/* Top-right card (second item) */}
        <div className="about-card">
          <h3>{eventInfo[1].subTitle}</h3>
          <h4>{eventInfo[1].title}</h4>
          <p>{eventInfo[1].description}</p>
          
          <button className="details-button">DETAILS SOON</button>
        </div>

        {/* Bottom card spanning both columns (third item) */}
        <div className="about-card about-card-wide">
          <h3>{eventInfo[2].subTitle}</h3>
          <h4>{eventInfo[2].title}</h4>
          <p>{eventInfo[2].description}</p>
          
          <button className="details-button">DETAILS SOON</button>
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;

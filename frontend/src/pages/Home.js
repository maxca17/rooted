import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS

// Import your main CSS after slick's CSS
import "./home.css";

// Images (adjust paths as needed)
import Navbar from "./Navbar";
import jumpstartcpg from "../images/logos/jumpstartcpg.png";
import dfwcpg from "../images/logos/dfwcpg.png";
import naturally from "../images/logos/naturally.png";
import polsinelli from "../images/logos/Polsinelli.png";
import sku from "../images/logos/sku.png";
import sw from "../images/logos/sw.png";

// Carousel images
import katrina from "../images/katr.png";
import rick from "../images/rick.png";
import jeff from "../images/jeff.png";
import marc from "../images/marc.png";
import derrick from "../images/derrick.png";
import kat from "../images/kat.png";
import richard from "../images/richard.png";
import felipe from "../images/f.png";
import austin from "../images/austin.png";
import michelle from "../images/michelle.png";

import Footer from "./Footer";
import Faq from "./faq";




// HERO SECTION
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h3>Sept 30th - Oct 2nd @ Waco, Texas</h3>
        <h1>Rooted Expo 2025: Bringing Texas CPG Together</h1>
        <p>Join us for the most anticipated event of the year - Rooted 2025!</p>
        <button
          className="hero-button"
          onClick={() => (window.location.href = "/waitlist")}
        >
          Join 2025 Waitlist
        </button>
      </div>
    </section>
  );
}

// SPONSORS
function SponsoredBy() {
  const sponsors = [
    { src: jumpstartcpg, alt: "Jumpstart CPG" },
    { src: dfwcpg, alt: "DFW CPG" },
    { src: naturally, alt: "Naturally Network" },
    { src: polsinelli, alt: "Polsinelli" },
    { src: sku, alt: "SKU" },
    { src: sw, alt: "Smurfit Westrock" },
  ];

  return (
    <section className="sponsored-section">
      <h6 className="sponsored-title">PARTNERS</h6>
      <div className="sponsored-logos">
        {sponsors.map((logo, index) => (
          <div className="sponsor-logo-container" key={index}>
            <img src={logo.src} alt={logo.alt} className="sponsor-img" />
          </div>
        ))}
      </div>
    </section>
  );
}

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

// EVENT CONTENT (Carousel + Team)
function EventContent() {
  // Carousel content
  const carouselContent = [
    {
      des: "While technology has made the world smaller... Rooted Expo brings diverse flavors...",
      name: "Jeff Richards",
      position: "CEO | Founder of Mooala",
      img: jeff,
    },
    {
      des: "Texas is filled with some of the proudest people in the world...",
      name: "Austin Patry",
      position: "Founder of Realsy",
      img: austin,
    },
    {
      des: "Finally, a time and place for Texas CPG brands to display their wares in Texas...",
      name: "Richard G. Riccardi",
      position: "Co-Founder of DFW CPG | Blogger",
      img: richard,
    },
    {
      des: "Texas stands out with its bold entrepreneurial spirit...",
      name: "Rick Jordan",
      position: "Co-Founder of DFW CPG | Shareholder at Polsinelli",
      img: rick,
    },
    {
      des: "This is a fantastic chance to showcase Texas brands...",
      name: "Michelle Breyer",
      position: "Chief Marketing Officer at SKU",
      img: michelle,
    },
  ];

  // Board of Directors
  const boardMembers = [
    {
      name: "Derek Ramos",
      role: "Founder & Chief Organizer of Rooted Expo",
      image: derrick,
      link: "https://tinyurl.com/2zaxuja3",
    },
    {
      name: "Kat Weaver",
      role: "Founder of Power to Pitch & Event Co-Chair of DFW CPG",
      image: kat,
      link: "https://tinyurl.com/9kfde4cs",
    },
    {
      name: "Richard G. Riccardi",
      role: "Writer, and CPG Advocate & Co-Founder of DFW CPG",
      image: richard,
      link: "https://tinyurl.com/mrys9736",
    },
    {
      name: "Felipe Vega",
      role: "Founder of IronClad & Board President of Naturally Austin",
      image: felipe,
      link: "https://tinyurl.com/39jf9zja",
    },
  ];

  // Advisory Board
  const teamMembers = [
    {
      name: "Katrina Tolentino",
      role: "Executive Director of Naturally Network",
      image: katrina,
      link: "https://www.linkedin.com/in/katrinatolentino",
    },
    {
      name: "Rick Jordan",
      role: "Managing Partner of Polsinelli & Co-Founder of DFW CPG",
      image: rick,
      link: "https://www.linkedin.com/in/rick-jordan-81b38316",
    },
    {
      name: "Jeff Richards",
      role: "Founder of Mooala",
      image: jeff,
      link: "https://www.linkedin.com/in/jeffreyrichards",
    },
    {
      name: "Marc Nathan",
      role: "Professional 'Super Connector' for Tech & CPG companies",
      image: marc,
      link: "https://www.linkedin.com/in/marc1919/",
    },
  ];

  // Settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="event-content-section">
      {/* Carousel */}
      <div className="event-carousel">
        <Slider {...sliderSettings}>
          {carouselContent.map((item, idx) => (
            <div className="carousel-item" key={idx}>
              <img src={item.img} alt={item.name} className="carousel-img" />
              <p className="carousel-text">
                <i className="fas fa-quote-left quote-icon" />
                {item.des}
              </p>
              <h5 className="carousel-name">{item.name}</h5>
              <p className="carousel-position">{item.position}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2 className="team-section-title">Our Rooted Team</h2>
        <div className="team-section-underline" />

        {/* Board of Directors */}
        <div className="sub-team">
          <h3>Board Of Directors</h3>
          <div className="members-grid">
            {boardMembers.map((member, index) => (
              <div className="member-card" key={index}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-img"
                />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
                <button
                  className="social-btn"
                  onClick={() => window.open(member.link, "_blank")}
                >
                  <i className="fab fa-linkedin" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="sub-team">
          <h3>Advisory Board</h3>
          <div className="members-grid">
            {teamMembers.map((member, index) => (
              <div className="member-card" key={index}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-img"
                />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
                <button
                  className="social-btn"
                  onClick={() => window.open(member.link, "_blank")}
                >
                  <i className="fab fa-linkedin" />
                </button>
              </div>
            ))}
          </div>
        </div>
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

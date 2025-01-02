import React from "react";
import "./home.css";
import jumpstartcpg from "../images/logos/jumpstartcpg.png";
import dfwcpg from "../images/logos/dfwcpg.png";
import naturally from "../images/logos/naturally.png";
import polsinelli from "../images/logos/Polsinelli.png";
import sku from "../images/logos/sku.png";
import sw from "../images/logos/sw.png";

// You can import your images like this, or just use direct `src="..."` paths
// import rootedLogo from "./images/rootedlogo1.png";
// import eventImg from "./images/event.jpeg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        {/* LOGO */}
        <img
          src="/images/rootedlogo1.png"
          alt="Rooted Expo Logo"
          className="navbar__logo"
          onClick={() => (window.location.href = "/")}
        />

        {/* NAV MENU (Empty in your example, so we keep it minimal) */}
        <ul className="navbar__menu">
          {/* Add <li> items here if needed */}
        </ul>

        {/* SPONSOR BUTTON */}
        <a href="/sponsor" className="navbar__sponsor-btn">
          Become a Sponsor
        </a>
      </div>
    </nav>
  );
}

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
            <img
              src={logo.src} // Accessing the `src` property
              alt={logo.alt}
              className="sponsor-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}



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

function EventContent() {
  // "Carousel" content
  const carouselContent = [
    {
      des: "While technology has made the world smaller... Rooted Expo brings diverse flavors...",
      name: "Jeff Richards",
      position: "CEO | Founder of Mooala",
      img: "/images/jeffr.png",
    },
    {
      des: "Texas is filled with some of the proudest people in the world...",
      name: "Austin Patry",
      position: "Founder of Realsy",
      img: "/images/austin.png",
    },
    {
      des: "Finally, a time and place for Texas CPG brands to display their wares in Texas...",
      name: "Richard G. Riccardi",
      position: "Co-Founder of DFW CPG | Blogger",
      img: "/images/richard.png",
    },
    {
      des: "Texas stands out with its bold entrepreneurial spirit...",
      name: "Rick Jordan",
      position: "Co-Founder of DFW CPG | Shareholder at Polsinelli",
      img: "/images/rickjordan.png",
    },
    {
      des: "This is a fantastic chance to showcase Texas brands...",
      name: "Michelle Breyer",
      position: "Chief Marketing Officer at SKU",
      img: "/images/michelle.png",
    },
  ];

  // Board of Directors
  const boardMembers = [
    {
      name: "Derek Ramos",
      role: "Founder & Chief Organizer of Rooted Expo",
      image: "/images/derrick.png",
      link: "https://tinyurl.com/2zaxuja3",
    },
    {
      name: "Kat Weaver",
      role: "Founder of Power to Pitch & Event Co-Chair of DFW CPG",
      image: "/images/kat.png",
      link: "https://tinyurl.com/9kfde4cs",
    },
    {
      name: "Richard G. Riccardi",
      role: "Writer, and CPG Advocate & Co-Founder of DFW CPG",
      image: "/images/richard.png",
      link: "https://tinyurl.com/mrys9736",
    },
    {
      name: "Felipe Vega",
      role: "Founder of IronClad & Board President of Naturally Austin",
      image: "/images/f.png",
      link: "https://tinyurl.com/39jf9zja",
    },
  ];

  // Advisory Board
  const teamMembers = [
    {
      name: "Katrina Tolentino",
      role: "Executive Director of Naturally Network",
      image: "/images/katr.png",
      link: "https://www.linkedin.com/in/katrinatolentino",
    },
    {
      name: "Rick Jordan",
      role: "Managing Partner of Polsinelli & Co-Founder of DFW CPG",
      image: "/images/rick.png",
      link: "https://www.linkedin.com/in/rick-jordan-81b38316",
    },
    {
      name: "Jeff Richards",
      role: "Founder of Mooala",
      image: "/images/jeff.png",
      link: "https://www.linkedin.com/in/jeffreyrichards",
    },
    {
      name: "Marc Nathan",
      role: "Professional 'Super Connector' for Tech & CPG companies",
      image: "/images/marc.png",
      link: "https://www.linkedin.com/in/marc1919/",
    },
  ];

  return (
    <section className="event-content-section">
      {/* "Carousel" style list */}
      <div className="event-carousel">
        {carouselContent.map((item, idx) => (
          <div className="carousel-item" key={idx}>
            <img src={item.img} alt={item.name} className="carousel-img" />
            <p className="carousel-text">
              <i className="fas fa-quote-left quote-icon" />
              {item.des}
            </p>
            <h5>{item.name}</h5>
            <p className="carousel-position">{item.position}</p>
          </div>
        ))}
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

// Placeholder Faq (since code not provided)
function Faq() {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <p>FAQ content coming soon...</p>
    </section>
  );
}

function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();
  const links = ["Company", "About Us", "Team", "Products", "Blog"];

  return (
    <footer className="footer-section">
      <div className="footer-top">
        <h2>Rooted Expo</h2>
        <ul className="footer-links">
          {links.map((link, idx) => (
            <li key={idx}>
              <a href="/#">{link}</a>
            </li>
          ))}
        </ul>
        <div className="footer-icons">
          {/* Make sure FontAwesome is loaded in index.html or elsewhere */}
          <a
            href="https://x.com/rootedexpo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter" />
          </a>
          <a
            href="https://www.youtube.com/@RootedExpo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube" />
          </a>
          <a
            href="https://www.instagram.com/rootedexpo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/rootedexpo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>
      </div>
      <p className="footer-copyright">
        &copy; {CURRENT_YEAR} Rooted Expo. All rights reserved.
      </p>
    </footer>
  );
}

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

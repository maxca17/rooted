import React, { useState, useEffect } from "react";
import logo from "../images/rootedlogo1.png";
import "./navbar.css";

function Navbar() {
  // State to track whether we have scrolled on the root page
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if current path is root
  const isRoot = window.location.pathname === "/";

  useEffect(() => {
    // Only watch for scroll on the root page
    if (isRoot) {
      const handleScroll = () => {
        // If we scroll even 1px, set isScrolled to true
        setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // For non-root, always consider it "scrolled" (i.e., black)
      setIsScrolled(true);
    }
  }, [isRoot]);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : "home-top"}`}>
      <div className="navbar__content">
        <img
          src={logo}
          alt="Rooted Expo Logo"
          className="navbar__logo"
          onClick={() => (window.location.href = "/")}
        />
        <ul className="navbar__menu">
          {/* Add menu items here if needed */}
        </ul>
        <a href="/sponsor" className="navbar__sponsor-btn">
          Become a Sponsor
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

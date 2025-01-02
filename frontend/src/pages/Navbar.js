// NAVBAR

import logo from "../images/rootedlogo1.png";
import "./navbar.css";




function Navbar() {
    return (
      <nav className="navbar">
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
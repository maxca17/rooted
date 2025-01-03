import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer"
import "../pages/css/waitlist.css";
import joinus from "../images/Joinus.png";

export default function Waitlist() {
  const navigate = useNavigate();

  const handleIndividualClick = () => {
    navigate("/indform");
  };

  const handleVendorClick = () => {
    navigate("/companybrandinfo");
  };

  const handleBuyerClick = () => {
    navigate("/buyers");
  };

  return (
    <div className="waitlist-container">
      <Navbar />

      <div className="main-content">
        <div className="content-grid">
          {/* Text and Buttons Section */}
          <div>
            <h2 className="heading">GETTING STARTED</h2>
            <p className="subheading">
              How do you plan on participating in Rooted Expo?
            </p>
            <div className="button-group">
              <button className="button" onClick={handleVendorClick}>
                EXHIBIT
              </button>
              <button className="button" onClick={handleIndividualClick}>
                ATTEND
              </button>
              <button className="button" onClick={handleBuyerClick}>
                BUYERS
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="image-container">
            <img
              src={joinus}
              alt="Join Us"
              className="featured-image"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

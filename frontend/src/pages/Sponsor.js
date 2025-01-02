import React, { useState } from "react";
import "./css/sponsor.css";

 // Start of Selection
import supabase from "../supabase";

// Import Navbar and Footer from their own files
import Navbar from "./Navbar";
import Footer from "./Footer";
import side from "../images/side.png";

export default function Sponsor() {
  // Form data state
  const [formData, setFormData] = useState({
    companyName: "",
    primaryContact: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    sponsorshipLevels: [],
    goals: [],
    opportunities: [],
    additionalInfo: "",
    companyDescription: "",
    sponsoredBefore: "",
    sponsorshipDetails: "",
  });

  // Popup state
  const [showPopup, setShowPopup] = useState(false);

  // Handle input changes (text, checkboxes, radio, etc.)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const currentValues = prevData[name] || [];
        return {
          ...prevData,
          [name]: checked
            ? [...currentValues, value]
            : currentValues.filter((v) => v !== value),
        };
      });
    } else if (type === "radio") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Insert into your Supabase table
      const { data, error } = await supabase
        .from("sponsorship_submissions")
        .insert([
          {
            company_name: formData.companyName,
            primary_contact_name: formData.primaryContact,
            email_address: formData.email,
            phone_number: formData.phone,
            company_website: formData.website,
            company_address: formData.address,
            sponsorship_tier: formData.sponsorshipLevels,
            primary_goals: formData.goals,
            opportunities: formData.opportunities,
            additional_info: formData.additionalInfo,
            company_description: formData.companyDescription,
            sponsored_before: formData.sponsoredBefore === "Yes",
            sponsorship_details: formData.sponsorshipDetails,
          },
        ]);

      if (error) {
        console.error("Error inserting data:", error);
      } else {
        // Show success popup, then redirect after 5s
        setShowPopup(true);
        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
      }
    } catch (err) {
      console.error("Error during submission:", err);
    }
  };

  return (
    <div className="sponsor-container">
      <Navbar />

      <div className="main-content">
        {/* LEFT IMAGE SECTION */}
        <div className="image-section">
          <img
            src={side}
            alt="Architectural Dome"
            className="side-image"
          />
        </div>

        {/* FORM SECTION */}
        <form className="sponsor-form" onSubmit={handleSubmit}>
          <h2 className="section-title">Company Information</h2>

          <div className="form-grid">
            {/* Company Name */}
            <div className="form-group">
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>

            {/* Primary Contact */}
            <div className="form-group">
              <label htmlFor="primaryContact">Primary Contact Name:</label>
              <input
                type="text"
                id="primaryContact"
                name="primaryContact"
                value={formData.primaryContact}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Website */}
            <div className="form-group">
              <label htmlFor="website">Company Website:</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            {/* Address */}
            <div className="form-group">
              <label htmlFor="address">Company Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            {/* Company Description */}
            <div className="form-group-large">
              <label htmlFor="companyDescription">
                Briefly describe your company and its connection to the Texas
                CPG industry:
              </label>
              <textarea
                id="companyDescription"
                name="companyDescription"
                value={formData.companyDescription}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* SPONSORSHIP INTEREST */}
          <h2 className="section-title">Sponsorship Interest</h2>

          {/* Radio: Have you sponsored similar events before? */}
          <div className="form-radio-group">
            <p>Have you sponsored similar events before?</p>
            <label>
              <input
                type="radio"
                name="sponsoredBefore"
                value="Yes"
                checked={formData.sponsoredBefore === "Yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="sponsoredBefore"
                value="No"
                checked={formData.sponsoredBefore === "No"}
                onChange={handleChange}
              />
              No
            </label>
          </div>

          {/* If yes, show details text area */}
          {formData.sponsoredBefore === "Yes" && (
            <div className="form-group-large">
              <label htmlFor="sponsorshipDetails">
                If yes, please provide details:
              </label>
              <textarea
                id="sponsorshipDetails"
                name="sponsorshipDetails"
                value={formData.sponsorshipDetails}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p className="popup-message">
              Thank you for your submission! Redirecting you to the homepage...
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Adjust these imports to match your actual project structure:
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import supabase from "../supabase";

// Import the same CSS used before or rename as needed:
import "../pages/css/IndividualForm.css";

// Replace with your actual image import:
import man from "../images/man.jpeg";

export default function IndividualForm() {
  const navigate = useNavigate();

  // Whether to show the submission success popup
  const [showPopup, setShowPopup] = useState(false);

  // Local error message (if any) to display at the top of the form
  const [errorMessage, setErrorMessage] = useState("");

  // Form data stored as plain object. Adjust fields as needed:
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    categories: [],
    hear_about: [],
    booth_size: [],
    special_accommodations: "",
    special_requirements: "",
    exhibited_before: "",
    comments: "",
  });

  // This function updates formData when any field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle multiple-choice checkboxes
    if (type === "checkbox") {
      setFormData((prev) => {
        const existingValues = Array.isArray(prev[name]) ? prev[name] : [];
        return {
          ...prev,
          [name]: checked
            ? [...existingValues, value]
            : existingValues.filter((item) => item !== value),
        };
      });
    }
    // Handle radio buttons
    else if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // For text, email, textarea, etc.
    else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // This function handles the form submission to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous errors

    try {
      // Convert arrays to comma-separated strings (if your DB needs this format)
      const preparedData = {
        ...formData,
        categories: formData.categories,     // <— pass as an array
        hear_about: formData.hear_about,    // <— pass as an array
        booth_size: formData.booth_size,    // <— pass as an array
      };

      // Insert into "individual_submissions" (table name example)
      const { data, error } = await supabase
        .from("individual")
        .insert([preparedData]);

      if (error) {
        console.error("Error inserting data:", error);
        setErrorMessage("Failed to submit form. Please try again.");
        return;
      }

      // If successful, show popup, then redirect after a few seconds
      console.log("Data inserted successfully:", data);
      setShowPopup(true);
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (err) {
      console.error("Unexpected error:", err);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="individual-form-container">
      <Navbar />

      <div className="main-section">
        {/* Left-side image */}
        <div className="left-image-section">
          <img
            src={man}
            alt="Participant at Rooted Expo"
            className="left-image"
          />
        </div>

        {/* Right-side form */}
        <div className="form-section">
          <form className="form-content" onSubmit={handleSubmit}>
            {/* Display any error message at the top */}
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            {/* PERSONAL INFORMATION */}
            <h2 className="section-heading">Personal Information</h2>
            <div className="input-grid">
              <div className="input-group">
                <label htmlFor="name" className="label-text">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email" className="label-text">
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="phone" className="label-text">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>

            {/* PARTICIPANT DETAILS */}
            <h2 className="section-heading">Participant Details</h2>
            <div className="input-group">
              <label htmlFor="reason" className="label-text">
                Why are you interested in attending the Rooted Expo?
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="textarea-field"
              />
            </div>

            {/* CATEGORIES (CHECKBOXES) */}
            <div className="checkbox-group">
              <h3 className="group-heading">
                Which category does your interest primarily fall under?
              </h3>
              {[
                "Food & Beverage",
                "Health & Wellness",
                "Beauty & Personal Care",
                "Household Goods",
                "Sustainability",
                "Networking Opportunities",
                "Other",
              ].map((category) => (
                <label key={category} className="checkbox-option">
                  <input
                    type="checkbox"
                    name="categories"
                    value={category}
                    checked={formData.categories.includes(category)}
                    onChange={handleChange}
                  />
                  {category}
                </label>
              ))}
            </div>

            {/* HEAR ABOUT (CHECKBOXES) */}
            <div className="checkbox-group">
              <h3 className="group-heading">How did you hear about Rooted Expo?</h3>
              {["Social Media", "Friend/Colleague", "Website", "Other"].map(
                (source) => (
                  <label key={source} className="checkbox-option">
                    <input
                      type="checkbox"
                      name="hear_about"
                      value={source}
                      checked={formData.hear_about.includes(source)}
                      onChange={handleChange}
                    />
                    {source}
                  </label>
                )
              )}
            </div>

            {/* BOOTH SIZE, SPECIAL REQUESTS, ETC. (OPTIONAL) */}
            {/* If you don't need these, you can remove them */}
            <h2 className="section-heading">Additional Details (Optional)</h2>
            <div className="input-group">
              <label htmlFor="special_accommodations" className="label-text">
                Special Accommodations:
              </label>
              <input
                type="text"
                id="special_accommodations"
                name="special_accommodations"
                value={formData.special_accommodations}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label htmlFor="comments" className="label-text">
                Any Additional Comments:
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="textarea-field"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* SUBMISSION SUCCESS POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Thank you for your submission! Redirecting you to the homepage...</p>
          </div>
        </div>
      )}

      {/* FOOTER SECTION */}
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

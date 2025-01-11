import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Adjust these imports to match your actual project structure:
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import supabase from "../supabase";

// Same CSS file but renamed references inside:
import "../pages/css/IndividualForm.css";

// Replace with your actual image import:
import man from "../images/man.jpeg";

export default function IndividualForm() {
  const navigate = useNavigate();

  // Whether to show the submission success popup
  const [showPopup, setShowPopup] = useState(false);

  // Local error message (if any)
  const [errorMessage, setErrorMessage] = useState("");

  // Form data stored as an object
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

  // Update form data on any input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
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
    } else if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Submit form to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const preparedData = {
        ...formData,
        // Passing arrays directly if your DB can store them
        categories: formData.categories,
        hear_about: formData.hear_about,
        booth_size: formData.booth_size,
      };

      const { data, error } = await supabase
        .from("individual")
        .insert([preparedData]);

      if (error) {
        console.error("Error inserting data:", error);
        setErrorMessage("Failed to submit form. Please try again.");
        return;
      }

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
    <div className="ind-form-container-alt">
      <Navbar />

      <div className="main-section-alt">
        {/* Left-side image */}
        <div className="left-image-sec-alt">
          <img
            src={man}
            alt="Participant at Rooted Expo"
            className="left-image-alt"
          />
        </div>

        {/* Right-side form */}
        <div className="form-section-alt">
          <form className="form-content-alt" onSubmit={handleSubmit}>
            {/* Display any error message at the top */}
            {errorMessage && (
              <div className="error-message-alt">{errorMessage}</div>
            )}

            {/* PERSONAL INFORMATION */}
            <h2 className="section-heading-alt">Personal Information</h2>
            <div className="input-grid-alt">
              <div className="input-group-alt">
                <label htmlFor="name" className="label-text-alt">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field-alt"
                  required
                />
              </div>

              <div className="input-group-alt">
                <label htmlFor="email" className="label-text-alt">
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field-alt"
                  required
                />
              </div>

              <div className="input-group-alt">
                <label htmlFor="phone" className="label-text-alt">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field-alt"
                />
              </div>
            </div>

            {/* PARTICIPANT DETAILS */}
            <h2 className="section-heading-alt">Participant Details</h2>
            <div className="input-group-alt">
              <label htmlFor="reason" className="label-text-alt">
                Why are you interested in attending the Rooted Expo?
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="textarea-field-alt"
              />
            </div>

            {/* CATEGORIES (CHECKBOXES) */}
            <div className="checkbox-group-alt">
              <h3 className="group-heading-alt">
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
                <label key={category} className="checkbox-option-alt">
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
            <div className="checkbox-group-alt">
              <h3 className="group-heading-alt">
                How did you hear about Rooted Expo?
              </h3>
              {["Social Media", "Friend/Colleague", "Website", "Other"].map(
                (source) => (
                  <label key={source} className="checkbox-option-alt">
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

            <h2 className="section-heading-alt">Additional Details (Optional)</h2>
            <div className="input-group-alt">
              <label
                htmlFor="special_accommodations"
                className="label-text-alt"
              >
                Special Accommodations:
              </label>
              <input
                type="text"
                id="special_accommodations"
                name="special_accommodations"
                value={formData.special_accommodations}
                onChange={handleChange}
                className="input-field-alt"
              />
            </div>

            <div className="input-group-alt">
              <label htmlFor="comments" className="label-text-alt">
                Any Additional Comments:
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="textarea-field-alt"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button type="submit" className="submit-button-alt">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* SUBMISSION SUCCESS POPUP */}
      {showPopup && (
        <div className="popup-overlay-alt">
          <div className="popup-content-alt">
            <p>Thank you for your submission! Redirecting you to the homepage...</p>
          </div>
        </div>
      )}

      {/* FOOTER SECTION */}
      <div className="footer-container-alt">
        <Footer />
      </div>
    </div>
  );
}

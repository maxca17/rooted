import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Adjust these imports to match your actual project structure:
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import supabase from "../supabase";

// Import the new CSS below:
import "../pages/css/IndividualForm.css";

// Import your image:
import man from "../images/man.jpeg";

export default function IndividualForm() {
  const navigate = useNavigate();

  const [formStep, setFormStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  // Plain JavaScript object for form data
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const currentValues = Array.isArray(prevData[name]) ? prevData[name] : [];
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

  const handleNext = (e) => {
    e.preventDefault();
    setFormStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("individual_submissions")
        .insert([formData]);

      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully:", data);
        setShowPopup(true);
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    } catch (err) {
      console.error("Error during submission:", err);
    }
  };

  return (
    <div className="individual-form-container">
      <Navbar />

      <div className="main-section">
        {/* Left Image Section - visible only in step 1 */}
        {formStep === 1 && (
          <div className="left-image-section">
            <img src={man} alt="Speaker at Rooted Expo" className="left-image" />
          </div>
        )}

        {/* Form Section */}
        <div className="form-section">
          {formStep === 1 && (
            <form className="form-content" onSubmit={handleNext}>
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

              <div className="checkbox-group">
                <h3 className="group-heading">
                  What category does your interest primarily fall under?
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

              <div className="checkbox-group">
                <h3 className="group-heading">
                  How did you hear about the Rooted Expo?
                </h3>
                {["Social Media", "Friend/Colleague", "Website", "Other"].map(
                  (hearAbout) => (
                    <label key={hearAbout} className="checkbox-option">
                      <input
                        type="checkbox"
                        name="hear_about"
                        value={hearAbout}
                        checked={formData.hear_about.includes(hearAbout)}
                        onChange={handleChange}
                      />
                      {hearAbout}
                    </label>
                  )
                )}
              </div>

              <button type="submit" className="next-button">
                Next
              </button>
            </form>
          )}

          {formStep === 2 && (
            <form className="form-content" onSubmit={handleSubmit}>
              <h2 className="section-heading">Additional Information</h2>
              {/* Add any extra fields you want in step 2 here */}

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Thank you for your submission! Redirecting you to the homepage...</p>
          </div>
        </div>
      )}

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

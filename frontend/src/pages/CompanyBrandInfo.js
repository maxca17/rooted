import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import supabase from "../supabase";
import "../pages/css/companyBrandInfo.css";

export default function CompanyBrandInfo() {
  const navigate = useNavigate();

  const [formStep, setFormStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  // Using a plain JavaScript object for form data (instead of TypeScript interface)
  const [formData, setFormData] = useState({
    companyName: "",
    primaryContact: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    brandDescription: "",
    categories: [],
    revenue: "",
    targetMarket: "",
    boothSize: [],
    specialAccommodations: "",
    specialRequirements: "",
    exhibitedBefore: "",
    exhibitionDetails: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const currentValues = Array.isArray(prevData[name])
          ? prevData[name]
          : [];
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
      const { data, error } = await supabase.from("vendor").insert([formData]);
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
    <div className="company-brand-info-container">
      <Navbar />

      <div className="main-section">
        {/* Left Image Section - Only shows on step 1 */}
        {formStep === 1 && (
          <div className="left-image-section">
            <img
              src="/image/boots.png"
              alt="Brand image"
              className="left-image"
            />
          </div>
        )}

        {/* Form Section */}
        <div className="form-section">
          {formStep === 1 && (
            <form className="form-content" onSubmit={handleNext}>
              <h2 className="form-heading">Company Information</h2>

              <div className="input-grid">
                <div className="input-group">
                  <label htmlFor="companyName" className="input-label">
                    Company Name:
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="primaryContact" className="input-label">
                    Primary Contact Name:
                  </label>
                  <input
                    type="text"
                    id="primaryContact"
                    name="primaryContact"
                    value={formData.primaryContact}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email" className="input-label">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="phone" className="input-label">
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

                <div className="input-group">
                  <label htmlFor="website" className="input-label">
                    Company Website:
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="address" className="input-label">
                    Company Address:
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>

              <h2 className="form-heading">Brand Information</h2>
              <div className="input-group">
                <label
                  htmlFor="brandDescription"
                  className="input-label textarea-label"
                >
                  Briefly describe your company and its connection to the Texas
                  CPG industry:
                </label>
                <textarea
                  id="brandDescription"
                  name="brandDescription"
                  value={formData.brandDescription}
                  onChange={handleChange}
                  className="textarea-field"
                />
              </div>

              <h2 className="form-heading">Sponsorship Interest</h2>

              <div className="radio-checkbox-group">
                <h3 className="group-heading">
                  Have you sponsored similar events before?
                </h3>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="exhibitedBefore"
                    value="Yes"
                    checked={formData.exhibitedBefore === "Yes"}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="exhibitedBefore"
                    value="No"
                    checked={formData.exhibitedBefore === "No"}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>

              <div className="radio-checkbox-group">
                <h3 className="group-heading">
                  What are your primary goals for sponsoring Rooted Expo?
                </h3>
                {[
                  "Brand Visibility",
                  "Lead Generation",
                  "Networking with Industry Leaders",
                  "Supporting Local Businesses",
                  "Product Launch",
                ].map((goal) => (
                  <label key={goal} className="checkbox-option">
                    <input
                      type="checkbox"
                      name="categories"
                      value={goal}
                      checked={formData.categories.includes(goal)}
                      onChange={handleChange}
                    />
                    {goal}
                  </label>
                ))}
              </div>

              <button type="submit" className="next-button">
                Next
              </button>
            </form>
          )}

          {formStep === 2 && (
            <form className="form-content" onSubmit={handleSubmit}>
              <h2 className="form-heading">Exhibition Needs</h2>

              <div className="radio-checkbox-group">
                <h3 className="group-heading">Preferred Booth Size:</h3>
                {["10x10", "10x20", "20x20", "Custom Size"].map((booth) => (
                  <label key={booth} className="checkbox-option">
                    <input
                      type="checkbox"
                      name="boothSize"
                      value={booth}
                      checked={formData.boothSize.includes(booth)}
                      onChange={handleChange}
                    />
                    {booth}
                  </label>
                ))}
              </div>

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

      {/* Fixed Footer at the bottom */}
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

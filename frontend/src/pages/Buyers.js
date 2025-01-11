import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import supabase from "../supabase";
import "../pages/css/buyers.css";
import office from "../images/liz.jpg";

export default function BuyerForm() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

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
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
    <div className="bf-container">
      {/* Top Navbar */}
      <Navbar />

      {/* Main content area */}
      <div className="main-section-alt">
        {/* Left Image Section */}
        <div className="left-img-sec">
          <img src={office} alt="Boots display" className="left-img-alt" />
        </div>

        {/* Form Section */}
        <div className="form-sec-alt">
          <form className="form-content-alt" onSubmit={handleSubmit}>
            <h2 className="heading-alt">Company Information</h2>

            <div className="grid-alt">
              {/* Company Name */}
              <div className="group-alt">
                <label htmlFor="companyName" className="label-alt">
                  Company Name:
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="field-alt"
                />
              </div>

              {/* Primary Contact */}
              <div className="group-alt">
                <label htmlFor="primaryContact" className="label-alt">
                  Primary Contact Name:
                </label>
                <input
                  type="text"
                  id="primaryContact"
                  name="primaryContact"
                  value={formData.primaryContact}
                  onChange={handleChange}
                  className="field-alt"
                />
              </div>

              {/* Email */}
              <div className="group-alt">
                <label htmlFor="email" className="label-alt">
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="field-alt"
                />
              </div>

              {/* Phone */}
              <div className="group-alt">
                <label htmlFor="phone" className="label-alt">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="field-alt"
                />
              </div>

              {/* Website */}
              <div className="group-alt">
                <label htmlFor="website" className="label-alt">
                  Company Website:
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="field-alt"
                />
              </div>

              {/* Address */}
              <div className="group-alt">
                <label htmlFor="address" className="label-alt">
                  Company Address:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="field-alt"
                />
              </div>

              {/* Company Description */}
              <div className="group-alt wide-col-alt">
                <label htmlFor="companyDescription" className="label-alt">
                  Briefly describe your company and its connection to the Texas
                  CPG industry:
                </label>
                <textarea
                  id="companyDescription"
                  name="companyDescription"
                  value={formData.companyDescription}
                  onChange={handleChange}
                  className="text-field-alt"
                />
              </div>
            </div>

            <h2 className="heading-alt">Sponsorship Interest</h2>

            {/* Sponsored Before */}
            <div className="rc-group-alt">
              <h3 className="group-heading-alt">
                Have you sponsored similar events before?
              </h3>
              <label className="radio-opt-alt">
                <input
                  type="radio"
                  name="sponsoredBefore"
                  value="Yes"
                  checked={formData.sponsoredBefore === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="radio-opt-alt">
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

            {/* Sponsorship Details */}
            {formData.sponsoredBefore === "Yes" && (
              <div className="group-alt wide-col-alt">
                <label htmlFor="sponsorshipDetails" className="label-alt">
                  If yes, please provide details:
                </label>
                <textarea
                  id="sponsorshipDetails"
                  name="sponsorshipDetails"
                  value={formData.sponsorshipDetails}
                  onChange={handleChange}
                  className="text-field-alt"
                />
              </div>
            )}

            {/* Primary Goals */}
            <div className="rc-group-alt">
              <h3 className="group-heading-alt">
                What are your primary goals for sponsoring Rooted Expo?
              </h3>
              {[
                "Brand Visibility",
                "Lead Generation",
                "Networking with Industry Leaders",
                "Supporting Local Businesses",
                "Product Launch",
              ].map((goal) => (
                <label key={goal} className="checkbox-opt-alt">
                  <input
                    type="checkbox"
                    name="goals"
                    value={goal}
                    checked={formData.goals.includes(goal)}
                    onChange={handleChange}
                  />
                  {goal}
                </label>
              ))}
            </div>

            {/* Opportunities */}
            <div className="rc-group-alt">
              <h3 className="group-heading-alt">
                Which of the following opportunities would you be interested in?
              </h3>
              {[
                "Speaking Engagement",
                "Booth Space",
                "Product Sampling",
                "Digital Advertising",
                "Event Program Listing",
                "VIP Event Access",
                "Other",
              ].map((opportunity) => (
                <label key={opportunity} className="checkbox-opt-alt">
                  <input
                    type="checkbox"
                    name="opportunities"
                    value={opportunity}
                    checked={formData.opportunities.includes(opportunity)}
                    onChange={handleChange}
                  />
                  {opportunity}
                </label>
              ))}
            </div>

            {/* Additional Info */}
            <div className="group-alt wide-col-alt">
              <label htmlFor="additionalInfo" className="label-alt">
                Please provide any additional information or special requests:
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="text-field-alt"
              />
            </div>

            {/* Submit */}
            <button type="submit" className="submit-btn-alt">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="overlay-alt">
          <div className="popup-content-alt">
            <p>Thank you for your submission! Redirecting you to the homepage...</p>
          </div>
        </div>
      )}

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";
import supabase from "../../../supabase";

interface FormData {
  companyName: string;
  primaryContact: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  sponsorshipLevels: string[];
  goals: string[];
  opportunities: string[];
  additionalInfo: string;
  companyDescription: string;
  sponsoredBefore: string;
  sponsorshipDetails: string;
}

export default function Buyer() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState<FormData>({
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...(prevData[name as keyof FormData] as string[]), value]
          : (prevData[name as keyof FormData] as string[]).filter(
              (v: string) => v !== value
            ),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
          router.push("/");
        }, 5000);
      }
    } catch (err) {
      console.error("Error during submission:", err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <Navbar />

      {/* Main content area */}
      <div className="flex flex-col lg:flex-row items-stretch pt-24">
        {/* Left Image Section */}
        <div className="lg:w-1/2 h-screen relative">
          <Image
            src="/image/boots.png"
            alt="Boots display"
            fill
            style={{ objectFit: "cover" }}
            className="lg:rounded-lg shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="flex-grow lg:w-1/2 py-12 px-8 lg:px-16 bg-white">
          <form className="max-w-lg mx-auto space-y-6" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold mb-6">Company Information</h2>
            <div className="grid grid-cols-1 gap-4">
              {/* Company Name */}
              <div className="flex flex-col">
                <label htmlFor="companyName" className="font-semibold">
                  Company Name:
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>

              {/* Primary Contact */}
              <div className="flex flex-col">
                <label htmlFor="primaryContact" className="font-semibold">
                  Primary Contact Name:
                </label>
                <input
                  type="text"
                  id="primaryContact"
                  name="primaryContact"
                  value={formData.primaryContact}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="font-semibold">
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-semibold">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>

              {/* Website */}
              <div className="flex flex-col">
                <label htmlFor="website" className="font-semibold">
                  Company Website:
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>

              {/* Address */}
              <div className="flex flex-col">
                <label htmlFor="address" className="font-semibold">
                  Company Address:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>

              {/* Company Description */}
              <div className="flex flex-col">
                <label
                  htmlFor="companyDescription"
                  className="font-semibold"
                >
                  Briefly describe your company and its connection to the Texas CPG industry:
                </label>
                <textarea
                  id="companyDescription"
                  name="companyDescription"
                  value={formData.companyDescription}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold my-6">Sponsorship Interest</h2>

            {/* Sponsored Before */}
            <div className="flex flex-col">
              <h3 className="font-semibold mb-2">
                Have you sponsored similar events before?
              </h3>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sponsoredBefore"
                    value="Yes"
                    checked={formData.sponsoredBefore === "Yes"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sponsoredBefore"
                    value="No"
                    checked={formData.sponsoredBefore === "No"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            {/* Sponsorship Details */}
            {formData.sponsoredBefore === "Yes" && (
              <div className="flex flex-col">
                <label
                  htmlFor="sponsorshipDetails"
                  className="font-semibold"
                >
                  If yes, please provide details:
                </label>
                <textarea
                  id="sponsorshipDetails"
                  name="sponsorshipDetails"
                  value={formData.sponsorshipDetails}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>
            )}

            {/* Primary Goals */}
            <div className="flex flex-col">
              <h3 className="font-semibold mb-2">
                What are your primary goals for sponsoring Rooted Expo?
              </h3>
              {[
                "Brand Visibility",
                "Lead Generation",
                "Networking with Industry Leaders",
                "Supporting Local Businesses",
                "Product Launch",
              ].map((goal) => (
                <label key={goal} className="flex items-center">
                  <input
                    type="checkbox"
                    name="goals"
                    value={goal}
                    checked={formData.goals.includes(goal)}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {goal}
                </label>
              ))}
            </div>

            {/* Opportunities */}
            <div className="flex flex-col">
              <h3 className="font-semibold mb-2">
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
                <label key={opportunity} className="flex items-center">
                  <input
                    type="checkbox"
                    name="opportunities"
                    value={opportunity}
                    checked={formData.opportunities.includes(opportunity)}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {opportunity}
                </label>
              ))}
            </div>

            {/* Additional Info */}
            <div className="flex flex-col">
              <label htmlFor="additionalInfo" className="font-semibold">
                Please provide any additional information or special requests:
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="border p-2 rounded"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <p>
              Thank you for your submission! Redirecting you to the homepage...
            </p>
          </div>
        </div>
      )}

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}

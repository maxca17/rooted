"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Image from 'next/image';
import supabase from '../../../supabase';

interface FormData {
  companyName: string;
  primaryContact: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  brandDescription: string;
  categories: string[];
  revenue: string;
  targetMarket: string;
  boothSize: string[];
  specialAccommodations: string;
  specialRequirements: string;
  exhibitedBefore: string;
  exhibitionDetails: string;
  comments: string;
}

export default function CompanyBrandInfo() {
  const router = useRouter();

  const [formStep, setFormStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    primaryContact: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    brandDescription: '',
    categories: [],
    revenue: '',
    targetMarket: '',
    boothSize: [],
    specialAccommodations: '',
    specialRequirements: '',
    exhibitedBefore: '',
    exhibitionDetails: '',
    comments: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === 'checkbox') {
      setFormData((prevData) => {
        const currentCategories = prevData[name as keyof FormData] as string[] || [];
        return {
          ...prevData,
          [name]: checked
            ? [...currentCategories, value]
            : currentCategories.filter((v) => v !== value),
        };
      });
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('vendor').insert([formData]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);
        setShowPopup(true);
        setTimeout(() => {
          router.push('/');
        }, 5000);
      }
    } catch (err) {
      console.error('Error during submission:', err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow py-8 px-8 lg:py-20">
        <div className="flex flex-col md:flex-row items-start justify-center">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src="/images/Joinus.png"
              alt="Windmill"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {formStep === 1 && (
            <form
              className="md:w-1/2 flex flex-col space-y-4"
              onSubmit={handleNext}
            >
              <h2 className="text-2xl font-bold mb-4">COMPANY INFORMATION</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="companyName" className="font-semibold">
                    Company Name
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
                <div className="flex flex-col">
                  <label htmlFor="primaryContact" className="font-semibold">
                    Primary Contact Name
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
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-semibold">
                    Email Address
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
                <div className="flex flex-col">
                  <label htmlFor="phone" className="font-semibold">
                    Phone Number
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
                <div className="flex flex-col">
                  <label htmlFor="website" className="font-semibold">
                    Company Website
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
                <div className="flex flex-col">
                  <label htmlFor="address" className="font-semibold">
                    Company Address
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
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">BRAND INFORMATION</h2>
              <div className="flex flex-col">
                <label
                  htmlFor="brandDescription"
                  className="font-semibold mb-2"
                >
                  Briefly describe your brand and its product offerings:
                </label>
                <textarea
                  id="brandDescription"
                  name="brandDescription"
                  value={formData.brandDescription}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold mb-2">
                  What category does your brand primarily fall under?
                </h3>
                {[
                  'Food & Beverage',
                  'Health & Wellness',
                  'Beauty & Personal Care',
                  'Household Goods',
                  'Pet Products',
                  'Other',
                ].map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      name="categories"
                      value={category}
                      checked={formData.categories.includes(category)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold mb-2">
                  What is the size of your brand in terms of annual revenue?
                </h3>
                {[
                  'Under $1 million',
                  '$1 million - $5 million',
                  '$5 million - $10 million',
                  '$10 million - $50 million',
                  'Over $50 million',
                ].map((revenue) => (
                  <label key={revenue} className="flex items-center">
                    <input
                      type="radio"
                      name="revenue"
                      value={revenue}
                      checked={formData.revenue === revenue}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {revenue}
                  </label>
                ))}
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold mb-2">
                  What is your target market within the CPG space?
                </h3>
                {['Local (Texas)', 'Regional (Southwest)', 'National', 'International'].map(
                  (market) => (
                    <label key={market} className="flex items-center">
                      <input
                        type="radio"
                        name="targetMarket"
                        value={market}
                        checked={formData.targetMarket === market}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {market}
                    </label>
                  )
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
              >
                Next
              </button>
            </form>
          )}

          {formStep === 2 && (
            <form
              className="md:w-1/2 flex flex-col space-y-4"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold mb-4">EXHIBITION NEEDS</h2>

              <div className="flex flex-col">
                <h3 className="font-bold mb-2">Preferred Booth Size:</h3>
                {['10x10', '10x20', '20x20', 'Custom Size'].map((booth) => (
                  <label key={booth} className="flex items-center">
                    <input
                      type="checkbox"
                      name="boothSize"
                      value={booth}
                      checked={formData.boothSize.includes(booth)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {booth}
                  </label>
                ))}
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold mb-2">
                  Do you require any special accommodations or features for your
                  booth?
                </h3>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="specialAccommodations"
                    value="Yes"
                    checked={formData.specialAccommodations === 'Yes'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="specialAccommodations"
                    value="No"
                    checked={formData.specialAccommodations === 'No'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>

              {formData.specialAccommodations === 'Yes' && (
                <div className="flex flex-col">
                  <label
                    htmlFor="specialRequirements"
                    className="font-semibold"
                  >
                    If yes, please specify:
                  </label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  />
                </div>
              )}

              <h2 className="text-2xl font-bold mt-8 mb-4">
                ADDITIONAL INFORMATION
              </h2>

              <div className="flex flex-col">
                <h3 className="font-bold mb-2">
                  Have you exhibited at Rooted Expo or similar events before?
                </h3>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="exhibitedBefore"
                    value="Yes"
                    checked={formData.exhibitedBefore === 'Yes'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="exhibitedBefore"
                    value="No"
                    checked={formData.exhibitedBefore === 'No'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>

              {formData.exhibitedBefore === 'Yes' && (
                <div className="flex flex-col">
                  <label
                    htmlFor="exhibitionDetails"
                    className="font-semibold"
                  >
                    If yes, please provide details:
                  </label>
                  <textarea
                    id="exhibitionDetails"
                    name="exhibitionDetails"
                    value={formData.exhibitionDetails}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  />
                </div>
              )}

              <div className="flex flex-col">
                <label htmlFor="comments" className="font-semibold">
                  Please provide any additional comments or requests:
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <p>
              Thank you for your submission! Redirecting you to the homepage...
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

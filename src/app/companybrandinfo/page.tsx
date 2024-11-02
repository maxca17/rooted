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
      <div className="flex flex-col lg:flex-row items-stretch">
        
        {/* Left Image Section */}
        <div className="lg:w-1/2 h-screen relative">
          <Image
            src="/image/boots.png"
            alt="Brand image"
            layout="fill"
            objectFit="cover"
            className="lg:rounded-lg shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="flex-grow lg:w-1/2 py-12 px-8 lg:px-16 bg-white overflow-y-auto">
          {formStep === 1 && (
            <form className="max-w-lg mx-auto space-y-6" onSubmit={handleNext}>
              <h2 className="text-3xl font-bold mb-6">Company Information</h2>
              
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

              <h2 className="text-3xl font-bold my-6">Brand Information</h2>
              <div className="flex flex-col">
                <label htmlFor="brandDescription" className="font-semibold">
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
                <h3 className="font-semibold mb-2">
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

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-4"
              >
                Next
              </button>
            </form>
          )}

          {formStep === 2 && (
            <form className="max-w-lg mx-auto space-y-6" onSubmit={handleSubmit}>
              <h2 className="text-3xl font-bold mb-6">Exhibition Needs</h2>
              
              <div className="flex flex-col">
                <h3 className="font-semibold mb-2">Preferred Booth Size:</h3>
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

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 mt-4"
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

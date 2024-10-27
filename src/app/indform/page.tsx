"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Image from 'next/image';
import supabase from '../../../supabase';

interface FormData {
  name: string;
  email: string;
  phone: string;
  reason: string;
  categories: string[];
  hear_about: string[];
  booth_size: string[];
  special_accommodations: string;
  special_requirements: string;
  exhibited_before: string;
  comments: string;
}

export default function IndividualForm() {
  const router = useRouter();

  const [formStep, setFormStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    // Form Step 1 Data
    name: '',
    email: '',
    phone: '',
    reason: '',
    categories: [],
    hear_about: [],
    // Form Step 2 Data
    booth_size: [],
    special_accommodations: '',
    special_requirements: '',
    exhibited_before: '',
    comments: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked; // Type assertion to access checked property

    if (type === 'checkbox') {
      setFormData((prevData) => {
        const currentValues = prevData[name as keyof FormData] as string[] || [];
        return {
          ...prevData,
          [name]: checked
            ? [...currentValues, value]
            : currentValues.filter((v: string) => v !== value),
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
      const { data, error } = await supabase
        .from('individual_submissions') // Ensure this matches your table name
        .insert([formData]);

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
              <h2 className="text-2xl font-bold mb-4">PERSONAL INFORMATION</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-semibold">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  />
                </div>
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
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                PARTICIPANT DETAILS
              </h2>
              <div className="flex flex-col">
                <label htmlFor="reason" className="font-semibold">
                  Why are you interested in attending the Rooted Expo?
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold mb-2">
                  What category does your interest primarily fall under?
                </h3>
                {[
                  'Food & Beverage',
                  'Health & Wellness',
                  'Beauty & Personal Care',
                  'Household Goods',
                  'Sustainability',
                  'Networking Opportunities',
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
                  How did you hear about the Rooted Expo?
                </h3>
                {['Social Media', 'Friend/Colleague', 'Website', 'Other'].map(
                  (hearAbout) => (
                    <label key={hearAbout} className="flex items-center">
                      <input
                        type="checkbox"
                        name="hear_about"
                        value={hearAbout}
                        checked={formData.hear_about.includes(hearAbout)}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {hearAbout}
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
              <h2 className="text-2xl font-bold mb-4">ADDITIONAL INFORMATION</h2>

              {/* Include any additional form fields for step 2 if needed */}
              {/* For demonstration, let's assume there are no extra fields */}

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

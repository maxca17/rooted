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
  sponsorshipLevels: string[];
  goals: string[];
  opportunities: string[];
  additionalInfo: string;
  companyDescription: string;
  sponsoredBefore: string;
  sponsorshipDetails: string;
}

export default function Sponsor() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    primaryContact: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    sponsorshipLevels: [],
    goals: [],
    opportunities: [],
    additionalInfo: '',
    companyDescription: '',
    sponsoredBefore: '',
    sponsorshipDetails: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    if (type === 'checkbox') {
      setFormData((prevData) => {
        const currentValues = prevData[name as keyof FormData] as string[];
        return {
          ...prevData,
          [name]: checked
            ? [...(currentValues || []), value]
            : currentValues.filter((v: string) => v !== value),
        };
      });
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('sponsorship_submissions')
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
            sponsored_before: formData.sponsoredBefore === 'Yes',
            sponsorship_details: formData.sponsorshipDetails,
          },
        ]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
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
    <div className="flex flex-col min-h-screen bg-gray-50 mt-16">
      <Navbar />
      <div className="flex-grow flex flex-col lg:flex-row items-stretch py-10 lg:py-20 px-6 lg:px-20">
        
        {/* Left Image Section */}
        <div className="lg:w-1/2 h-[500px] lg:h-auto relative mr-10">
          <Image
            src="/image/side.png"
            alt="Architectural Dome"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        
        {/* Form Section */}
        <form
          className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Company Information</h2>

          <div className="grid grid-cols-1 gap-4">
            {[
              { label: 'Company Name', id: 'companyName', type: 'text' },
              { label: 'Primary Contact Name', id: 'primaryContact', type: 'text' },
              { label: 'Email Address', id: 'email', type: 'email' },
              { label: 'Phone Number', id: 'phone', type: 'tel' },
              { label: 'Company Website', id: 'website', type: 'text' },
              { label: 'Company Address', id: 'address', type: 'text' },
            ].map(({ label, id, type }) => (
              <div key={id} className="flex flex-col">
                <label htmlFor={id} className="font-semibold text-gray-600">{label}:</label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id as keyof FormData] as string}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
            ))}
            <div className="flex flex-col">
              <label htmlFor="companyDescription" className="font-semibold text-gray-600">
                Briefly describe your company and its connection to the Texas CPG industry:
              </label>
              <textarea
                id="companyDescription"
                name="companyDescription"
                value={formData.companyDescription}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-700 mt-8">Sponsorship Interest</h2>

          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-gray-600">Have you sponsored similar events before?</h3>
            {['Yes', 'No'].map((option) => (
              <label key={option} className="flex items-center text-gray-600">
                <input
                  type="radio"
                  name="sponsoredBefore"
                  value={option}
                  checked={formData.sponsoredBefore === option}
                  onChange={handleChange}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>

          {formData.sponsoredBefore === 'Yes' && (
            <div className="flex flex-col">
              <label htmlFor="sponsorshipDetails" className="font-semibold text-gray-600">
                If yes, please provide details:
              </label>
              <textarea
                id="sponsorshipDetails"
                name="sponsorshipDetails"
                value={formData.sponsorshipDetails}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-400"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg">Thank you for your submission! Redirecting you to the homepage...</p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

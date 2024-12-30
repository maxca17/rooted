"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Button } from "@material-tailwind/react";

export default function Waitlist() {
  const router = useRouter();

  const handleIndividualClick = () => {
    router.push('/indform');
  };

  const handleVendorClick = () => {
    router.push('/companybrandinfo');
  };

  const handleBuyerClick = () => {
    router.push('/buyers');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <div className="flex-grow flex flex-col justify-center px-4 py-12 lg:py-20 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text and Buttons Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              GETTING STARTED
            </h2>
            <p className="mb-8 text-gray-700">
              How do you plan on participating in Rooted Expo?
            </p>
            <div className="flex flex-col space-y-4 max-w-sm">
              <Button
                color="blue"
                variant="filled"
                onClick={handleVendorClick}
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                EXHIBIT
              </Button>
              <Button
                color="blue"
                variant="filled"
                onClick={handleIndividualClick}
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                ATTEND
              </Button>
              <Button
                color="blue"
                variant="filled"
                onClick={handleBuyerClick}
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                BUYERS
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/image/road.png"
                alt="Join Us"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

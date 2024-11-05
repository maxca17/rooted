"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Button, Typography } from "@material-tailwind/react";

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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-grow py-12 px-6 lg:py-24 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 mt-0">
            <Image
              src="/image/road.png"
              alt="Join Us"
              width={210} // Reduced width
              height={210} // Reduced height
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-center text-center mt-8 md:mt-0">
            <Typography 
              variant="h4" 
              className="font-bold mb-4"
              placeholder="Getting Started"
              onMouseEnter={() => {}} 
              onMouseLeave={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              GETTING STARTED
            </Typography>
            <Typography 
              variant="lead" 
              className="mb-6"
              placeholder="Participation Question"
              onMouseEnter={() => {}} 
              onMouseLeave={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              How do you plan on participating in Rooted Expo?
            </Typography>
            <div className="flex flex-col space-y-4 w-full px-4">
              <Button
                color="blue"
                variant="filled"
                fullWidth
                onClick={handleVendorClick}
                placeholder="Vendor/Exhibitor"
                onMouseEnter={() => {}} 
                onMouseLeave={() => {}}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Vendor/Exhibitor
              </Button>
              <Button
                color="blue"
                variant="filled"
                fullWidth
                onClick={handleIndividualClick}
                placeholder="Individual"
                onMouseEnter={() => {}} 
                onMouseLeave={() => {}}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Individual
              </Button>
              <Button
                color="blue"
                variant="filled"
                fullWidth
                onClick={handleBuyerClick}
                placeholder="Buyers"
                onMouseEnter={() => {}} 
                onMouseLeave={() => {}}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Buyers
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

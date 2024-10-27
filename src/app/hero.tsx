"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.jpeg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography 
          variant="h3" 
          color="white" 
          className="mb-2" 
          placeholder="Hero Title" 
          onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
        >
          Sept 30th - Oct 2nd @ Waco, Texas
        </Typography>
        <Typography 
          variant="h1" 
          color="white" 
          className="lg:max-w-3xl" 
          placeholder="Hero Subtitle" 
          onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
        >
          Rooted Expo 2025: Bringing Texas CPG Together
        </Typography>
        <Typography 
          variant="lead" 
          color="white" 
          className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl" 
          placeholder="Hero Description" 
          onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
        >
          Join us for the most anticipated event of the year - Rooted 2025!
        </Typography>
        <div className="flex items-center gap-4">
          <Button 
            variant="gradient" 
            color="white" 
            placeholder="Join Waitlist"
            onClick={() => window.location.href = '/waitlist'}
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
          >
            Join 2025 Waitlist
          </Button>
          {/* <IconButton className="rounded-full bg-white p-6">
            <PlayIcon className="h-4 w-4 text-gray-900" />
          </IconButton> */}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;

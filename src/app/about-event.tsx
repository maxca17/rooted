"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Big Ideas, Bold Pitches!",
    description:
      "Watch emerging brands showcase their groundbreaking innovations in front of industry leaders. Discover the next wave of CPG success stories live on stage! (View Details - can lead to a page coming soon or TBA!)",
    subTitle: "Pitch Slam",
  },
  {
    title: "Hands-On Strategies!",
    description:
      "Join interactive sessions tailored for CPG professionals and gain actionable insights you can implement right away to drive your brand forward. (View Details - can lead to a page coming soon or TBA!)",
    subTitle: "Workshops",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        About the event
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        Why Attend?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
        placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          Discover Texas’s top CPG brands, connect with industry leaders, meet with buyers, angel investors, grow your network, and explore cutting-edge innovations that drive growth. Rooted Expo is where business meets community—don’t miss it!
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Connect & Grow!"
            subTitle="Community"
            description="Network with CPG founders, industry leaders, and key decision-makers. Build lasting relationships within the community that will help elevate your brand and business! (View Details - can lead to a page coming soon or TBA!)"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;

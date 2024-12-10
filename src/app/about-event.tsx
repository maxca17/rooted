"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Big Ideas, Bold Pitches!",
    description:
      "Watch emerging brands showcase their groundbreaking innovations in front of industry leaders. Discover the next wave of CPG success stories live on stage!",
    subTitle: "Pitch Slam",
  },
  {
    title: "Hands-On Strategies!",
    description:
      "Join interactive sessions tailored for CPG professionals and gain actionable insights you can implement right away to drive your brand forward.",
    subTitle: "Workshops",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">

      <Typography variant="h3" className="text-center" color="blue-gray" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        Why Attend?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
        placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        Join us in the heart of Texas’s thriving CPG scene at Rooted Expo! Connect with top brands, forge valuable relationships with industry leaders, meet directly with buyers and angel investors, and build a network that fuels success. Engage with innovative products and ideas that push boundaries and drive growth across the CPG sector. Rooted Expo is more than a trade show; it’s where business meets community, opportunity meets innovation, and passion meets progress. If you want to accelerate your brand presence in the state of Texas you need to be here. Don’t just attend—be a part of Texas’s most dynamic CPG event of the year!
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Connect & Grow!"
            subTitle="Community"
            description="Network with CPG founders, industry leaders, and key decision-makers. Build lasting relationships within the community that will help elevate your brand and business!"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;

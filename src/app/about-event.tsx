"use client";

import React from "react";

const EVENT_INFO = [
  {
    title: "Big Ideas, Bold Pitches!",
    description: "Watch emerging brands ...",
    subTitle: "Pitch Slam",
  },
  // etc.
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
        Why Attend?
      </h2>
      <p className="mt-2 lg:max-w-4xl mb-8 w-full text-center text-gray-700">
        Join us in the heart of Texas’s thriving CPG scene at Rooted Expo! ...
        If you want to accelerate your brand presence in the state of Texas,
        you need to be here. Don’t just attend—be a part of Texas’s most 
        dynamic CPG event of the year!
      </p>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {EVENT_INFO.map((info, idx) => (
          <div
            key={idx}
            className="border border-gray-200 p-6 rounded shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {info.subTitle}
            </h3>
            <h4 className="text-lg font-medium text-gray-700">{info.title}</h4>
            <p className="text-gray-600 mt-2">{info.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutEvent;

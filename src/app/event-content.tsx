"use client";

import React from "react";
import {
  Tab,
  Tabs,
  TabsHeader,
  Carousel,
} from "@material-tailwind/react";
import Image from "next/image"; // Import Image from next/image

import "@fortawesome/fontawesome-free/css/all.min.css";

const EVENT_CONTENT = [
  {
    title: "AI's Role in Shaping the Future",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Miranda Smith",
    position: "The Guardian",
    panel: "Panel Discussion",
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
  },
  {
    title: "Introduction to Machine Learning",
    des: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    name: "Annie Hall",
    position: "New York Times",
    panel: "Workshop",
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
  },
  {
    title: "AI in Healthcare: Revolutionizing Patient Care",
    des: "At vero eos et accusamus et iusto odio dignissimos qui.",
    name: "Jason More",
    position: "Smash Magazine",
    panel: "Workshop",
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
  },
];

export default function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            <Tab value="Day1" className="font-medium" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              Day 1
            </Tab>
            <Tab value="Day2" className="font-medium" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              Day 2
            </Tab>
          </TabsHeader>
        </div>
      </Tabs>
      <div className="mx-auto container">
        <Carousel
          autoplay
          loop
          className="rounded-xl h-96"
          transition={{ duration: 1 }}
          prevArrow={({ handlePrev }) => (
            <span
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-gray-700"
            >
              &#10094;
            </span>
          )}
          nextArrow={({ handleNext }) => (
            <span
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-700"
            >
              &#10095;
            </span>
          )}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {EVENT_CONTENT.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center h-full text-center"
            >
              <Image
                src={item.img}
                className="rounded-full mb-4 shadow-lg"
                alt="avatar"
                width={90}
                height={90}
              />
              <p className="italic text-lg text-gray-700 max-w-2xl mx-auto px-4">
                <i className="fas fa-quote-left fa-lg text-yellow-500 mr-2"></i>
                {item.des}
              </p>
              <h5 className="mt-4 text-xl font-semibold">{item.name}</h5>
              <p className="text-gray-500">{item.position}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

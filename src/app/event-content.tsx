// EventContent.jsx

"use client";

import React from "react";
import {
  // Tab,
  // Tabs,
  // TabsHeader,
  Carousel,
} from "@material-tailwind/react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import EventContentCard from "@/components/event-content-card";
// import Image from "next/image"; // Importing Image from next/image

// Data for EventContentCard components
// const EVENT_CONTENT = [
//   {
//     title: "AI's Role in Shaping the Future",
//     des: "Agenda To Be Updated Soon!",
//     name: "Marcell Glock",
//     position: "Chief Executive, Spotify",
//     panel: "Panel Discussion",
//     img: "/image/avatar1.jpg",
//   },
//   {
//     title: "Introduction to Machine Learning",
//     des: "Agenda To Be Updated Soon!",
//     name: "Marcell Glock",
//     position: "Chief Executive, Spotify",
//     panel: "Workshop",
//     img: "/image/avatar2.jpg",
//   },
//   {
//     title: "AI in Healthcare: Revolutionizing Patient Care",
//     des: "Agenda To Be Updated Soon!",
//     name: "Marcell Glock",
//     position: "Chief Executive, Spotify",
//     panel: "Workshop",
//     img: "/image/avatar3.jpg",
//   },
// ];

// Data for the Carousel
const CAROUSEL_CONTENT = [
  {
    des: "While technology has made the world smaller, there is no substitute for sharing a real, physical experience together. Rooted Expo brings the diverse flavors and styles crafted in every corner of Texas into one convenient setting where we can celebrate the excellence of our far-reaching CPG community.",
    name: "Jeff Richards",
    position: "CEO | Founder of Mooala",
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
  },
  {
    des: "Texas is filled with some of the proudest people in the world, so having a show to celebrate local Texas CPG brands is long overdue! As a brand owner, we are so excited to gather at a convenient location with fellow Texans from all over! ",
    name: "Austin Patry",
    position: "Founder of Realsy",
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
  },
  {
    des: "Finally, a time and place for Texas CPG brands to display their wares in Texas.  In line with Texas’ entrepreneurial spirit, it is a trade show for the people and by the people and not at the undue expense of the people.  The show will serve everyone interested in and passionate about CPG.  Come one, come all!",
    name: "Richard G. Riccardi",
    position: "Co-Founder of DFW CPG | Blogger",
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
  },
  {
    des: "Texas stands out with its bold entrepreneurial spirit, and Rooted Expo will bring innovators and industry leaders together to foster growth, partnerships, and lasting impact—all in a way that is uniquely Texan.",
    name: "Rick Jordan",
    position: "Co-Founder of DFW CPG | Shareholder at Polsinelli",
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
  },
  {
    des: "This is a fantastic chance to showcase Texas brands - a symbol of the state's entrepreneurial spirit. I can't wait!",
    name: "Michelle Breyer",
    position: "Chief Marketing Officer at SKU",
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
  },
];

export default function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      {/* Tabs */}
      {/* <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader 
            className="h-12 w-72 md:w-96" 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
          >
            <Tab 
              value="Day1" 
              className="font-medium" 
              placeholder="" 
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}
            >
              Day 1
            </Tab>
            <Tab 
              value="Day2" 
              className="font-medium" 
              placeholder="" 
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}
            >
              Day 2
            </Tab>
          </TabsHeader>
        </div>
      </Tabs> */}

      <div className="mx-auto container">
        {/* Existing Content */}
        {/* {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))} */}

        {/* Carousel */}
        <div className="mt-12">
          <Carousel
            autoplay
            loop
            className="rounded-xl h-96"
            transition={{ duration: 1 }}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            prevArrow={({ handlePrev }) => (
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg focus:outline-none"
              >
                <i className="fas fa-chevron-left fa-lg text-gray-700"></i>
              </button>
            )}
            nextArrow={({ handleNext }) => (
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg focus:outline-none"
              >
                <i className="fas fa-chevron-right fa-lg text-gray-700"></i>
              </button>
            )}
          >
            {CAROUSEL_CONTENT.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center h-full text-center"
              >
                {/* <Image
                  src={item.img}
                  className="rounded-full mb-4 shadow-lg"
                  alt="avatar"
                  width={90}
                  height={90}
                /> */}
                <p className="italic text-lg text-gray-700 max-w-2xl mx-auto px-4">
                  <i className="fas fa-quote-left fa-lg text-yellow-500 mr-2"></i>
                  {item.des}
                </p>
                <h5 className="mt-4 text-xl font-semibold">{item.name}</h5>
                <p className="text-gray-500">{item.position}</p>
              </div> // Closing div for the carousel item
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

// EventContent.jsx

"use client";

import React from "react";
import {
  // Tab,
  // Tabs,
  // TabsHeader,
  Carousel,
  Typography,
  Button,
} from "@material-tailwind/react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";


// Data for the Carousel
const CAROUSEL_CONTENT = [
  {
    des: "While technology has made the world smaller, there is no substitute for sharing a real, physical experience together. Rooted Expo brings the diverse flavors and styles crafted in every corner of Texas into one convenient setting where we can celebrate the excellence of our far-reaching CPG community.",
    name: "Jeff Richards",
    position: "CEO | Founder of Mooala",
    img: "/image/jeffr.png",
  },
  {
    des: "Texas is filled with some of the proudest people in the world, so having a show to celebrate local Texas CPG brands is long overdue! As a brand owner, we are so excited to gather at a convenient location with fellow Texans from all over!",
    name: "Austin Patry",
    position: "Founder of Realsy",
    img: "/image/austin.png",
  },
  {
    des: "Finally, a time and place for Texas CPG brands to display their wares in Texas. In line with Texas' entrepreneurial spirit, it is a trade show for the people and by the people and not at the undue expense of the people. The show will serve everyone interested in and passionate about CPG. Come one, come all!",
    name: "Richard G. Riccardi",
    position: "Co-Founder of DFW CPG | Blogger",
    img: "/image/richard.png",
  },
  {
    des: "Texas stands out with its bold entrepreneurial spirit, and Rooted Expo will bring innovators and industry leaders together to foster growth, partnerships, and lasting impact—all in a way that is uniquely Texan.",
    name: "Rick Jordan",
    position: "Co-Founder of DFW CPG | Shareholder at Polsinelli",
    img: "/image/rickjordan.png",
  },
  {
    des: "This is a fantastic chance to showcase Texas brands—a symbol of the state's entrepreneurial spirit. I can't wait!",
    name: "Michelle Breyer",
    position: "Chief Marketing Officer at SKU",
    img: "/image/michelle.png",
  },
];






// Data for the Team Section
const boardMembers = [
  {
    name: "Derek Ramos",
    role: "Founder & Chief Organizer of Rooted Expo",
    image: '/image/derrick.png', 
    link: "https://tinyurl.com/2zaxuja3" 
  },
  {
    name: "Kat Weaver",
    role: "Founder of Power to Pitch & Event Co-Chair of DFW CPG",
    image: '/image/kat.png', 
    link: "https://tinyurl.com/9kfde4cs"
  },
  {
    name: "Richard G. Riccardi",
    role: "Writer, and CPG Advocate & Co-Founder of DFW CPG",
    image: '/image/richard.png', 
    link: "https://tinyurl.com/mrys9736"
  },
  {
    name: "Felipe Vega",
    role: "Founder of IronClad & Board President of Naturally Austin",
    image: '/image/f.png', 
    link: "https://tinyurl.com/39jf9zja"
  }
];

const teamMembers = [
  {
    name: "Katrina Tolentino",
    role: "Executive Director of Naturally Network",
    image: '/image/katr.png',
    link: "https://www.linkedin.com/in/katrinatolentino" 
  },
  {
    name: "Rick Jordan",
    role: "Managing Partner of Polsinelli & Co-Founder of DFW CPG",
    image: '/image/rick.png', 
    link: "https://www.linkedin.com/in/rick-jordan-81b38316"
  },
  {
    name: "Jeff Richards",
    role: "Founder of Mooala",
    image: '/image/jeff.png', 
    link: "https://www.linkedin.com/in/jeffreyrichards"
  },
  {
    name: "Marc Nathan",
    role: "Professional 'Super Connector' for Tech & CPG companies",
    image: '/image/marc.png', 
    link: "https://www.linkedin.com/in/marc1919/"
  }
];


export default function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20 bg-white">
      {/* Carousel */}
      <div className="mx-auto container">
        <div className="mt-12">
          <Carousel
            autoplay
            loop
            className="rounded-xl h-96"
            transition={{ duration: 1 }}
            prevArrow={({ handlePrev }) => (
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-black rounded-full shadow-lg focus:outline-none"
              >
                <i className="fas fa-chevron-left fa-lg text-white"></i>
              </button>
            )}
            nextArrow={({ handleNext }) => (
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-black rounded-full shadow-lg focus:outline-none"
              >
                <i className="fas fa-chevron-right fa-lg text-white"></i>
              </button>
            )}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {CAROUSEL_CONTENT.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center h-full text-center bg-white"
              >
                <Image
                  src={item.img}
                  className="rounded-full mb-4 shadow-lg"
                  alt={`${item.name} avatar`}
                  width={90}
                  height={90}
                />
                <p className="italic text-lg text-gray-800 max-w-2xl mx-auto px-4">
                  <i className="fas fa-quote-left fa-lg text-gray-500 mr-2"></i>
                  {item.des}
                </p>
                <h5 className="mt-4 text-xl font-semibold text-black">
                  {item.name}
                </h5>
                <p className="text-gray-600">{item.position}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-16 px-8 bg-white">
        {/* Section Title */}
        <div className="relative mb-12 text-center">
          <Typography
            variant="h2"
            color="black"
            className="text-4xl font-bold mb-4"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Our Rooted Team
          </Typography>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-1 bg-black" />
          {/* This line serves as a visual separator under the title "Our Rooted Team", enhancing the overall design and drawing attention to the section. */}
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Board of Directors */}
          <div className="mb-16">
            <Typography
              variant="h3"
              color="black"
              className="text-2xl font-bold mb-8 text-center"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Board Of Directors
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {boardMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-200 border border-gray-300 rounded-lg p-6 text-center shadow-md flex flex-col"
                >
                  <Image
                    src={member.image}
                    alt={`Team Member: ${member.name}`}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4 object-cover"
                  />
                  <Typography
                    variant="h5"
                    className="font-bold mb-2 text-black"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    className="text-gray-700 mb-4"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {member.role}
                  </Typography>
                  <Button
                    variant="text"
                    color="gray"
                    className="mt-auto"
                    onClick={() => window.open(member.link, "_blank")}
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <i className="fab fa-linkedin fa-2x text-gray-700"></i>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory Board */}
          <div>
            <Typography
              variant="h3"
              color="black"
              className="text-2xl font-bold mb-8 text-center"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Advisory Board
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-200 border border-gray-300 rounded-lg p-6 text-center shadow-md flex flex-col"
                >
                  <Image
                    src={member.image}
                    alt={`Team Member: ${member.name}`}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4 object-cover"
                  />
                  <Typography
                    variant="h5"
                    className="font-bold mb-2 text-black"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    className="text-gray-700 mb-4"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {member.role}
                  </Typography>
                  <Button
                    variant="text"
                    color="gray"
                    className="mt-auto"
                    onClick={() => window.open(member.link, "_blank")}
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* End of Team Section */}
    </section>
  );
}

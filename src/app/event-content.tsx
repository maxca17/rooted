"use client";

import {
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";


const EVENT_CONTENT = [
  {
    title: "AI's Role in Shaping the Future",
    des: "Agenda To Be Updated Soon! ",
    name: "Marcell Glock",
    position: "Chief Executive, Spotify",
    panel: "Panel Discussion",
    img: "/image/avatar1.jpg",
  },
  {
    title: "Introduction to Machine Learning",
    des: "Agenda To Be Updated Soon! ",
    name: "Marcell Glock",
    position: "Chief Executive, Spotify",
    panel: "Workshop",
    img: "/image/avatar2.jpg",
  },
  {
    title: "AI in Healthcare: Revolutionizing Patient Care",
    des: "Agenda To Be Updated Soon! ",
    name: "Marcell Glock",
    position: "Chief Executive, Spotify",
    panel: "Workshop",
    img: "/image/avatar3.jpg",
  },
];

export function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96">
            <Tab value="Day1" className="font-medium">
              Day 1
            </Tab>
            <Tab value="Day2" className="font-medium">
              Day 2
            </Tab>
          </TabsHeader>
        </div>
      </Tabs>
      <div className="mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;

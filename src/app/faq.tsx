"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
//hi

const FAQS = [
  {
    title: "1. How do I register for the Rooted Expo?",
    desc: "Join the waitlist – an email will be sent to you once registration opens!",
  },
  {
    title: "2. Who is Rooted Expo for?",
    desc: "Rooted Expo is perfect for CPG founders, brand managers, retailers, investors, retail buyers and anyone passionate about the Consumer Packaged Goods space. Whether you’re an emerging brand or a seasoned player, this event offers invaluable opportunities to connect, learn, and grow within the vibrant Texas CPG community!",
  },
  {
    title: "3. Will there be any networking meetups? ",
    desc: "Yes. Please see the agenda page (to be updated soon).",
  },
  {
    title: "4. I am a speaker. Do I need to buy a ticket for the Rooted Expo?",
    desc: "No.  Speakers will receive a complimentary ticket. ",
  },
  {
    title: "5. Are there age restrictions for attending Rooted Expo?",
    desc: "Yes, You must be over 18 years old in order to attend.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography 
            variant="h1" 
            color="blue-gray" 
            className="mb-4" 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}>
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}>
              Welcome to the Rooted Expo 2023 FAQ section. We’re here to answer your most common questions and ensure you get the most out of your experience at Texas’s premier Consumer Packaged Goods event.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}>
              <AccordionHeader className="text-left text-gray-900" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}>
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;

import React, { useState } from "react";
import "./css/faq.css"; // <-- import the CSS file

// You can store the FAQs in the same file or import from elsewhere
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
    title: "3. Will there be any networking meetups?",
    desc: "Yes. Please see the agenda page (to be updated soon).",
  },
  {
    title: "4. I am a speaker. Do I need to buy a ticket for the Rooted Expo?",
    desc: "No. Speakers will receive a complimentary ticket.",
  },
  {
    title: "5. Are there age restrictions for attending Rooted Expo?",
    desc: "Yes, You must be over 18 years old in order to attend.",
  },
];

export default function Faq() {
  // We'll track which FAQ is currently open. If `activeIndex` is null, none are open.
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the accordion for a given index
  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same item is clicked again
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h1 className="faq-title">Frequently asked questions</h1>
        <p className="faq-intro">
          Welcome to the Rooted Expo 2023 FAQ section. We’re here to answer your
          most common questions and ensure you get the most out of your experience
          at Texas’s premier Consumer Packaged Goods event.
        </p>

        <div className="faq-list">
          {FAQS.map((item, index) => (
            <div key={index} className="faq-item">
              {/* Accordion Header */}
              <button
                onClick={() => handleToggle(index)}
                className="faq-item-header"
              >
                <span>{item.title}</span>
                <span className="faq-item-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Accordion Body (shown only if this item is active) */}
              {activeIndex === index && (
                <div className="faq-item-body">
                  <p>{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

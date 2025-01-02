import React, { useState, useEffect } from "react";

// Tailwind / Material Tailwind / MDB / FontAwesome
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@material-tailwind/react/tailwind.css"; // Ensure Material Tailwind is configured
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";

// ----- NAVBAR COMPONENT -----
function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  // simple scrolling logic (no next/router)
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    // Example: navigate to your homepage
    window.location.href = "/";
  };

  // We only have an empty NAV_MENU array to show how items would map
  const NAV_MENU = [];

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={true}
      color="transparent"
      className={`fixed top-0 z-50 w-full h-24 ${
        isScrolling ? "bg-black bg-opacity-50 backdrop-blur-md" : "bg-transparent"
      } no-padding no-margin`}
    >
      <div className="container mx-auto flex items-center justify-between px-0 py-0 h-full">
        <img
          src="/image/rootedlogo1.png"
          alt="Rooted Expo Logo"
          className="cursor-pointer w-auto h-14 object-contain"
          onClick={handleLogoClick}
        />

        <ul
          className={`hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map(({ name, icon: Icon }) => (
            <li key={name}>
              <Typography
                as="a"
                href="#"
                variant="paragraph"
                className="flex items-center gap-2 font-medium"
              >
                <Icon className="h-5 w-5" />
                <span>{name}</span>
              </Typography>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="/sponsor">
            <Button color={isScrolling ? "gray" : "white"}>
              Become a Sponsor
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <i className="fas fa-times text-xl" />
          ) : (
            <i className="fas fa-bars text-xl" />
          )}
        </IconButton>
      </div>
      <Collapse open={open} className="lg:hidden">
        <div className="container mx-auto bg-white px-3 py-3">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <li key={name}>
                <Typography
                  as="a"
                  href="#"
                  variant="paragraph"
                  className="flex items-center gap-2 font-medium"
                >
                  <Icon className="h-5 w-5" />
                  {name}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col items-start gap-4">
            <a href="/">
              <Button color="gray">blocks</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

// ----- HERO COMPONENT -----
function Hero() {
  // We'll use a simple inline style for the background image:
  const heroStyle = {
    backgroundImage: `url("/image/event.jpeg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="relative min-h-screen w-full bg-gray-300 sm:mt-16 md:mt-0"
      style={heroStyle}
    >
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h3" color="white" className="mb-2">
            Sept 30th - Oct 2nd @ Waco, Texas
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="lg:max-w-3xl font-bold"
          >
            Rooted Expo 2025: Bringing Texas CPG Together
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
          >
            Join us for the most anticipated event of the year - Rooted 2025!
          </Typography>
          <div className="flex items-center gap-4">
            <Button
              variant="gradient"
              color="white"
              onClick={() => (window.location.href = "/waitlist")}
            >
              Join 2025 Waitlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----- SPONSORED BY COMPONENT -----
function SponsoredBy() {
  const SPONSORS = [
    "jumpstartcpg",
    "dfwcpg",
    "naturally",
    "Polsinelli",
    "sku",
    "sw",
  ];

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          PARTNERS
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((logo, key) => (
            <img
              width={256}
              height={256}
              key={key}
              src={`/image/${logo}.png`}
              alt={logo}
              className="w-40 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- ABOUT CARD (replacing "@/components/about-card") -----
function AboutCard({ title, description, subTitle }) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow mb-4">
      <Typography variant="h4" className="mb-2 font-bold text-black">
        {subTitle}
      </Typography>
      <Typography variant="h5" className="text-blue-gray-700 mb-2">
        {title}
      </Typography>
      <Typography className="text-gray-600">{description}</Typography>
    </div>
  );
}

// ----- ABOUT EVENT COMPONENT -----
function AboutEvent() {
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

  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h3" className="text-center" color="blue-gray">
        Why Attend?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal text-gray-500"
      >
        Join us in the heart of Texas’s thriving CPG scene at Rooted Expo! Connect
        with top brands, forge valuable relationships with industry leaders,
        meet directly with buyers and angel investors, and build a network that
        fuels success. Engage with innovative products and ideas that push
        boundaries and drive growth across the CPG sector. Rooted Expo is more
        than a trade show; it’s where business meets community, opportunity
        meets innovation, and passion meets progress. If you want to accelerate
        your brand presence in the state of Texas you need to be here. Don’t
        just attend—be a part of Texas’s most dynamic CPG event of the year!
      </Typography>

      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {EVENT_INFO.map((item, idx) => (
          <AboutCard key={idx} {...item} />
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

// ----- STATS CARD (replacing "@/components/stats-card") -----
function StatsCard({ count, title }) {
  return (
    <div className="flex flex-col items-center">
      <Typography
        variant="h2"
        color="blue-gray"
        className="font-bold text-4xl mb-2"
      >
        {count}
      </Typography>
      <Typography variant="h6" className="text-gray-700">
        {title}
      </Typography>
    </div>
  );
}

// ----- OUR STATS COMPONENT -----
function OurStats() {
  const STATS = [
    {
      count: "320+",
      title: "Participants",
    },
    {
      count: "50",
      title: "Speakers",
    },
    {
      count: "10+",
      title: "Workshops",
    },
    {
      count: "2",
      title: "Days",
    },
  ];

  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography variant="h6" color="orange" className="mb-6 font-medium">
          Projected Stats
        </Typography>
        <Typography
          className="text-5xl font-bold leading-tight lg:w-3/4"
          color="blue-gray"
        >
          Conference Highlights
        </Typography>
        <Typography variant="lead" className="mt-3 w-full text-gray-500 lg:w-9/12">
          This two-day event brings together the brightest minds, leading
          innovators, and top brands in the Texas CPG Community.
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- EVENT CONTENT COMPONENT -----
function EventContent() {
  // "Carousel" data
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
      des: "Finally, a time and place for Texas CPG brands to display their wares in Texas.  In line with Texas’ entrepreneurial spirit, it is a trade show for the people and by the people and not at the undue expense of the people.  The show will serve everyone interested in and passionate about CPG.  Come one, come all!",
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
      des: "This is a fantastic chance to showcase Texas brands - a symbol of the state's entrepreneurial spirit. I can't wait!",
      name: "Michelle Breyer",
      position: "Chief Marketing Officer at SKU",
      img: "/image/michelle.png",
    },
  ];

  // Board of Directors
  const boardMembers = [
    {
      name: "Derek Ramos",
      role: "Founder & Chief Organizer of Rooted Expo",
      image: "/image/derrick.png",
      link: "https://tinyurl.com/2zaxuja3",
    },
    {
      name: "Kat Weaver",
      role: "Founder of Power to Pitch & Event Co-Chair of DFW CPG",
      image: "/image/kat.png",
      link: "https://tinyurl.com/9kfde4cs",
    },
    {
      name: "Richard G. Riccardi",
      role: "Writer, and CPG Advocate & Co-Founder of DFW CPG",
      image: "/image/richard.png",
      link: "https://tinyurl.com/mrys9736",
    },
    {
      name: "Felipe Vega",
      role: "Founder of IronClad & Board President of Naturally Austin",
      image: "/image/f.png",
      link: "https://tinyurl.com/39jf9zja",
    },
  ];

  // Advisory Board
  const teamMembers = [
    {
      name: "Katrina Tolentino",
      role: "Executive Director of Naturally Network",
      image: "/image/katr.png",
      link: "https://www.linkedin.com/in/katrinatolentino",
    },
    {
      name: "Rick Jordan",
      role: "Managing Partner of Polsinelli & Co-Founder of DFW CPG",
      image: "/image/rick.png",
      link: "https://www.linkedin.com/in/rick-jordan-81b38316",
    },
    {
      name: "Jeff Richards",
      role: "Founder of Mooala",
      image: "/image/jeff.png",
      link: "https://www.linkedin.com/in/jeffreyrichards",
    },
    {
      name: "Marc Nathan",
      role: "Professional 'Super Connector' for Tech & CPG companies",
      image: "/image/marc.png",
      link: "https://www.linkedin.com/in/marc1919/",
    },
  ];

  return (
    <section className="py-8 px-8 lg:py-20 bg-white">
      {/* Carousel Content */}
      <div className="mx-auto container">
        <div className="mt-12 space-y-8">
          {CAROUSEL_CONTENT.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center min-h-[200px] text-center bg-white"
            >
              <img
                src={item.img}
                className="rounded-full mb-4 shadow-lg object-cover w-[90px] h-[90px]"
                alt={`${item.name} avatar`}
              />
              <p className="italic text-lg text-gray-800 max-w-2xl mx-auto">
                <i className="fas fa-quote-left fa-lg text-gray-500 mr-2"></i>
                {item.des}
              </p>
              <h5 className="mt-4 text-xl font-semibold text-black">
                {item.name}
              </h5>
              <p className="text-gray-600">{item.position}</p>
            </div>
          ))}
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
          >
            Our Rooted Team
          </Typography>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-1 bg-black" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Board of Directors */}
          <div className="mb-16">
            <Typography
              variant="h3"
              color="black"
              className="text-2xl font-bold mb-8 text-center"
            >
              Board Of Directors
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {boardMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-200 border border-gray-300 rounded-lg p-6 text-center shadow-md flex flex-col"
                >
                  <img
                    src={member.image}
                    alt={`Team Member: ${member.name}`}
                    className="rounded-full mx-auto mb-4 object-cover w-[120px] h-[120px]"
                  />
                  <Typography variant="h5" className="font-bold mb-2 text-black">
                    {member.name}
                  </Typography>
                  <Typography className="text-gray-700 mb-4">
                    {member.role}
                  </Typography>
                  <Button
                    variant="text"
                    color="gray"
                    className="mt-auto"
                    onClick={() => window.open(member.link, "_blank")}
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
            >
              Advisory Board
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-200 border border-gray-300 rounded-lg p-6 text-center shadow-md flex flex-col"
                >
                  <img
                    src={member.image}
                    alt={`Team Member: ${member.name}`}
                    className="rounded-full mx-auto mb-4 object-cover w-[120px] h-[120px]"
                  />
                  <Typography variant="h5" className="font-bold mb-2 text-black">
                    {member.name}
                  </Typography>
                  <Typography className="text-gray-700 mb-4">
                    {member.role}
                  </Typography>
                  <Button
                    variant="text"
                    color="gray"
                    className="mt-auto"
                    onClick={() => window.open(member.link, "_blank")}
                  >
                    <i className="fab fa-linkedin fa-2x text-gray-700"></i>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

// ----- FAQ COMPONENT (Placeholder) -----
function Faq() {
  return (
    <section className="py-16 bg-gray-50 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <Typography variant="h3" className="mb-8 font-bold">
          Frequently Asked Questions
        </Typography>
        <p className="text-gray-600">
          (Placeholder FAQ. Replace with your own content.)
        </p>
      </div>
    </section>
  );
}

// ----- FOOTER COMPONENT -----
function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();
  const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

  return (
    <footer className="pb-5 p-10 md:pt-10 bg-white">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Typography variant="h6" className="text-gray-900 mb-4 md:mb-0">
            Rooted Expo
          </Typography>
          <ul className="flex justify-center w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2 mt-4 md:mt-0">
            <a
              href="https://x.com/rootedexpo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton size="sm" color="gray" variant="text">
                <i className="fab fa-twitter text-lg" />
              </IconButton>
            </a>
            <a
              href="https://www.youtube.com/@RootedExpo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton size="sm" color="gray" variant="text">
                <i className="fab fa-youtube text-lg" />
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com/rootedexpo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton size="sm" color="gray" variant="text">
                <i className="fab fa-instagram text-lg" />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/company/rootedexpo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton size="sm" color="gray" variant="text">
                <i className="fab fa-linkedin text-lg" />
              </IconButton>
            </a>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal text-gray-700"
        >
          &copy; {CURRENT_YEAR} Rooted Expo
        </Typography>
      </div>
    </footer>
  );
}

// ----- MAIN PAGE (EXPORT) -----
export default function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SponsoredBy />
      <AboutEvent />
      <OurStats />
      <EventContent />
      <Faq />
      <Footer />
    </>
  );
}

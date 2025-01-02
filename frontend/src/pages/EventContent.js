// EVENT CONTENT (Carousel + Team)
// Carousel images
import katrina from "../images/katr.png";
import rick from "../images/rick.png";
import jeff from "../images/jeff.png";
import marc from "../images/marc.png";
import derrick from "../images/derrick.png";
import kat from "../images/kat.png";
import richard from "../images/richard.png";
import felipe from "../images/f.png";
import austin from "../images/austin.png";
import michelle from "../images/michelle.png";
import Slider from "react-slick"; // Import react-slick
import "./css/EventContent.css";


function EventContent() {
    // Carousel content
    const carouselContent = [
      {
        des: "While technology has made the world smaller... Rooted Expo brings diverse flavors...",
        name: "Jeff Richards",
        position: "CEO | Founder of Mooala",
        img: jeff,
      },
      {
        des: "Texas is filled with some of the proudest people in the world...",
        name: "Austin Patry",
        position: "Founder of Realsy",
        img: austin,
      },
      {
        des: "Finally, a time and place for Texas CPG brands to display their wares in Texas...",
        name: "Richard G. Riccardi",
        position: "Co-Founder of DFW CPG | Blogger",
        img: richard,
      },
      {
        des: "Texas stands out with its bold entrepreneurial spirit...",
        name: "Rick Jordan",
        position: "Co-Founder of DFW CPG | Shareholder at Polsinelli",
        img: rick,
      },
      {
        des: "This is a fantastic chance to showcase Texas brands...",
        name: "Michelle Breyer",
        position: "Chief Marketing Officer at SKU",
        img: michelle,
      },
    ];
  
    // Board of Directors
    const boardMembers = [
      {
        name: "Derek Ramos",
        role: "Founder & Chief Organizer of Rooted Expo",
        image: derrick,
        link: "https://tinyurl.com/2zaxuja3",
      },
      {
        name: "Kat Weaver",
        role: "Founder of Power to Pitch & Event Co-Chair of DFW CPG",
        image: kat,
        link: "https://tinyurl.com/9kfde4cs",
      },
      {
        name: "Richard G. Riccardi",
        role: "Writer, and CPG Advocate & Co-Founder of DFW CPG",
        image: richard,
        link: "https://tinyurl.com/mrys9736",
      },
      {
        name: "Felipe Vega",
        role: "Founder of IronClad & Board President of Naturally Austin",
        image: felipe,
        link: "https://tinyurl.com/39jf9zja",
      },
    ];
  
    // Advisory Board
    const teamMembers = [
      {
        name: "Katrina Tolentino",
        role: "Executive Director of Naturally Network",
        image: katrina,
        link: "https://www.linkedin.com/in/katrinatolentino",
      },
      {
        name: "Rick Jordan",
        role: "Managing Partner of Polsinelli & Co-Founder of DFW CPG",
        image: rick,
        link: "https://www.linkedin.com/in/rick-jordan-81b38316",
      },
      {
        name: "Jeff Richards",
        role: "Founder of Mooala",
        image: jeff,
        link: "https://www.linkedin.com/in/jeffreyrichards",
      },
      {
        name: "Marc Nathan",
        role: "Professional 'Super Connector' for Tech & CPG companies",
        image: marc,
        link: "https://www.linkedin.com/in/marc1919/",
      },
    ];
  
    // Settings for react-slick
    const sliderSettings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
    };
  
    return (
      <section className="event-content-section">
        {/* Carousel */}
        <div className="event-carousel">
          <Slider {...sliderSettings}>
            {carouselContent.map((item, idx) => (
              <div className="carousel-item" key={idx}>
                <img src={item.img} alt={item.name} className="carousel-img" />
                <p className="carousel-text">
                  <i className="fas fa-quote-left quote-icon" />
                  {item.des}
                </p>
                <h5 className="carousel-name">{item.name}</h5>
                <p className="carousel-position">{item.position}</p>
              </div>
            ))}
          </Slider>
        </div>
  
        {/* Team Section */}
        <div className="team-section">
          <h2 className="team-section-title">Our Rooted Team</h2>
          <div className="team-section-underline" />
  
          {/* Board of Directors */}
          <div className="sub-team">
            <h3>Board Of Directors</h3>
            <div className="members-grid">
              {boardMembers.map((member, index) => (
                <div className="member-card" key={index}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="member-img"
                  />
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                  <button
                    className="social-btn"
                    onClick={() => window.open(member.link, "_blank")}
                  >
                    <i className="fab fa-linkedin" />
                  </button>
                </div>
              ))}
            </div>
          </div>
  
          {/* Advisory Board */}
          <div className="sub-team">
            <h3>Advisory Board</h3>
            <div className="members-grid">
              {teamMembers.map((member, index) => (
                <div className="member-card" key={index}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="member-img"
                  />
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                  <button
                    className="social-btn"
                    onClick={() => window.open(member.link, "_blank")}
                  >
                    <i className="fab fa-linkedin" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
export default EventContent;

// SPONSORS
// Images (adjust paths as needed)
import jumpstartcpg from "../images/logos/jumpstartcpg.png";
import dfwcpg from "../images/logos/dfwcpg.png";
import naturally from "../images/logos/naturally.png";
import polsinelli from "../images/logos/Polsinelli.png";
import sku from "../images/logos/sku.png";
import sw from "../images/logos/sw.png";
import "./css/SponsoredBy.css";

function SponsoredBy() {
    const sponsors = [
      { src: jumpstartcpg, alt: "Jumpstart CPG" },
      { src: dfwcpg, alt: "DFW CPG" },
      { src: naturally, alt: "Naturally Network" },
      { src: polsinelli, alt: "Polsinelli" },
      { src: sku, alt: "SKU" },
      { src: sw, alt: "Smurfit Westrock" },
    ];
  
    return (
      <section className="sponsored-section">
        <h6 className="sponsored-title">PARTNERS</h6>
        <div className="sponsored-logos">
          {sponsors.map((logo, index) => (
            <div className="sponsor-logo-container" key={index}>
              <img src={logo.src} alt={logo.alt} className="sponsor-img" />
            </div>
          ))}
        </div>
      </section>
    );
  }
  
export default SponsoredBy;
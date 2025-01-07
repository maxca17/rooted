// FOOTER
import "./css/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const CURRENT_YEAR = new Date().getFullYear();
    const links = [
      { icon: faTwitter, url: "https://x.com/rootedexpo" },
      { icon: faYoutube, url: "https://www.youtube.com/@RootedExpo" },
      { icon: faInstagram, url: "https://www.instagram.com/rootedexpo/" },
      { icon: faLinkedin, url: "https://www.linkedin.com/company/rootedexpo" }
    ];
  
    return (
      <footer className="footer-section">
        <div className="footer-top">
          <h2>Rooted Expo</h2>
        </div>
        <div className="footer-icons">
          {links.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
        <p className="footer-copyright">
          &copy; {CURRENT_YEAR} Rooted Expo. All rights reserved.
        </p>
      </footer>
  );
}

export default Footer;

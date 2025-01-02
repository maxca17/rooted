// FOOTER
import "./css/footer.css";
function Footer() {
    const CURRENT_YEAR = new Date().getFullYear();
    const links = ["Company", "About Us", "Team", "Products", "Blog"];
  
    return (
      <footer className="footer-section">
        <div className="footer-top">
          <h2>Rooted Expo</h2>
          <ul className="footer-links">
            {links.map((link, idx) => (
              <li key={idx}>
                <a href="/#">{link}</a>
              </li>
            ))}
          </ul>
          <div className="footer-icons">
            <a
              href="https://x.com/rootedexpo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter" />
            </a>
            <a
              href="https://www.youtube.com/@RootedExpo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube" />
            </a>
            <a
              href="https://www.instagram.com/rootedexpo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/rootedexpo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </div>
        </div>
        <p className="footer-copyright">
          &copy; {CURRENT_YEAR} Rooted Expo. All rights reserved.
        </p>
      </footer>
  );
}

export default Footer;

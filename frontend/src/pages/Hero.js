// HERO SECTION
import "./css/hero.css";
function Hero() {
    return (
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h3>Sept 30th - Oct 2nd @ Waco, Texas</h3>
          <h1>Rooted Expo 2025: Bringing Texas CPG Together</h1>
          <p>Join us for the most anticipated event of the year - Rooted 2025!</p>
          <button
            className="hero-button"
            onClick={() => (window.location.href = "/waitlist")}
          >
            Join 2025 Waitlist
          </button>
        </div>
      </section>
    );
  }

export default Hero;

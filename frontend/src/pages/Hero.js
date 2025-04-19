// HERO SECTION
import "./css/hero.css";
function Hero() {
    return (
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h3>CITY ANNOUNCEMENT COMING SOON</h3>
          <h1>Rooted Expo: Bringing Texas CPG Together</h1>
          <p>Join us for the most anticipated event of the year</p>
          <button
            className="hero-button"
            onClick={() => (window.location.href = "/waitlist")}
          >
            Join Waitlist
          </button>
        </div>
      </section>
    );
  }

export default Hero;

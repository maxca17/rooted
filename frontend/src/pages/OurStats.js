import './css/ourStats.css';
// OUR STATS
function OurStats() {
    const stats = [
      { count: "320+", title: "Participants" },
      { count: "50", title: "Speakers" },
      { count: "10+", title: "Workshops" },
      { count: "2", title: "Days" },
    ];
  
    return (
      <section className="our-stats-section">
        <div className="our-stats-text">
          <h6>Projected Stats</h6>
          <h2>Conference Highlights</h2>
          <p>
            This two-day event brings together the brightest minds, leading
            innovators, and top brands in the Texas CPG Community.
          </p>
        </div>
  
        <div className="our-stats-cards">
          {stats.map((item, idx) => (
            <div className="stat-card" key={idx}>
              <h3>{item.count}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    );
}

export default OurStats;

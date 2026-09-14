function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-grid">

        <div className="hero-content">
          <p className="system-label">SYSTEM / INITIALIZED</p>

          <h1>
            PAVAN
            <br />
            KARUKU
          </h1>

          <div className="hero-role">
            SOFTWARE ENGINEER
          </div>

          <p className="hero-description">
            Building backend systems, solving problems, and exploring
            how AI can make software more intelligent.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              VIEW BUILD LOG →
            </a>

            <a href="#journey" className="secondary-button">
              EXPLORE JOURNEY ↓
            </a>
          </div>
        </div>

        <div className="system-panel">

          <div className="panel-header">
            <span>SYSTEM.STATUS</span>
            <span className="status-dot"></span>
          </div>

          <div className="status-list">

            <div className="status-item">
              <span>JAVA BACKEND</span>
              <span className="active">ACTIVE</span>
            </div>

            <div className="status-item">
              <span>DSA</span>
              <span className="active">ACTIVE</span>
            </div>

            <div className="status-item">
              <span>SYSTEM DESIGN</span>
              <span className="learning">LEARNING</span>
            </div>

            <div className="status-item">
              <span>AI ENGINEERING</span>
              <span className="exploring">EXPLORING</span>
            </div>

          </div>

          <div className="mission">
            <p>CURRENT MISSION</p>

            <strong>
              Learn deeply.
              <br />
              Build practically.
              <br />
              Improve continuously.
            </strong>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero
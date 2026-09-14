const journey = [
  {
    year: "2021",
    title: "THE BEGINNING",
    description:
      "Started my Computer Science journey and began understanding programming fundamentals."
  },
  {
    year: "2022",
    title: "LEARNING TO CODE",
    description:
      "Explored programming, problem solving, and the foundations of computer science."
  },
  {
    year: "2023",
    title: "BUILDING FOR THE WEB",
    description:
      "Started exploring web development and learned how software products are built."
  },
  {
    year: "2024",
    title: "PROJECT MODE",
    description:
      "Built projects, explored full-stack development, databases, APIs, and real-world applications."
  },
  {
    year: "2025",
    title: "PROFESSIONAL JOURNEY",
    description:
      "Entered the software industry and started understanding professional engineering environments."
  },
  {
    year: "2026 →",
    title: "SYSTEMS + AI",
    description:
      "Focused on Java backend development, system design, problem solving, and practical AI engineering."
  }
]

function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="section-header">
        <p className="system-label">01 / JOURNEY.LOG</p>

        <h2>
          FROM CURIOSITY
          <br />
          TO CODE.
        </h2>

        <p className="section-description">
          My journey has been less about mastering everything at once
          and more about continuously learning, building, failing,
          improving, and moving forward.
        </p>
      </div>

      <div className="journey-intro">
        <p>
          I started with curiosity about how software works. That curiosity
          gradually turned into programming, building projects, exploring
          full-stack development, understanding backend systems, and now
          exploring how AI can make software more intelligent.
        </p>

        <p>
          Today, I am focused on becoming a stronger engineer by learning
          deeply and applying what I learn through practical projects.
        </p>
      </div>

      <div className="timeline">
        {journey.map((item) => (
          <div className="timeline-item" key={item.year}>
            <div className="timeline-year">
              {item.year}
            </div>

            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Journey
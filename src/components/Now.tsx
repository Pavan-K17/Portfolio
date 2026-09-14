const nowData = [
  {
    title: "CURRENTLY LEARNING",
    status: "IN PROGRESS",
    items: [
      "Spring Boot & Backend Architecture",
      "System Design Fundamentals",
      "Data Structures & Algorithms",
    ],
  },
  {
    title: "CURRENTLY BUILDING",
    status: "HANDS ON",
    items: [
      "Enterprise AI Applications",
      "Java Backend Systems",
      "Practical Full-Stack Projects",
    ],
  },
  {
    title: "CURRENTLY EXPLORING",
    status: "NEXT FRONTIER",
    items: [
      "LLMs & RAG Systems",
      "AI Agents & Agentic Workflows",
      "Cloud & Scalable Systems",
    ],
  },
]

function Now() {
  return (
    <section id="now" className="section now-section">
      <div className="section-header">
        <p className="system-label">05 / NOW.EXE</p>

        <h2>
          CURRENT
          <br />
          STATE.
        </h2>

        <p className="section-description">
          A snapshot of what I'm learning, building, and exploring as I
          continue growing into a stronger software engineer.
        </p>
      </div>

      <div className="current-state-banner">
        <span className="status-indicator"></span>

        <p>
          SYSTEM STATUS:
          <strong> BUILDING THE NEXT VERSION.</strong>
        </p>
      </div>

      <div className="now-grid">
        {nowData.map((group, index) => (
          <div className="now-card" key={group.title}>
            <div className="now-card-header">
              <span className="now-number">
                0{index + 1}
              </span>

              <span className="now-status">
                {group.status}
              </span>
            </div>

            <h3>{group.title}</h3>

            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <span>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="current-mission">
        <span>CURRENT.MISSION</span>

        <p>
          Become a stronger engineer by combining solid software engineering
          fundamentals with modern AI systems — learning deeply and building
          things that solve real problems.
        </p>
      </div>
    </section>
  )
}

export default Now
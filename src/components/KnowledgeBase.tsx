import { useState } from "react"
import { resources } from "../data/resources"

function KnowledgeBase() {
  const [filter, setFilter] = useState("ALL")

  const categories = [
    "ALL",
    ...new Set(resources.map((resource) => resource.category))
  ]

  const filteredResources =
    filter === "ALL"
      ? resources
      : resources.filter((resource) => resource.category === filter)

  return (
    <section id="resources" className="section knowledge-base">

      <div className="section-header">
        <p className="system-label">03 / KNOWLEDGE.BASE</p>

        <h2>
          LEARN.
          <br />
          SHARE.
          REPEAT.
        </h2>

        <p className="section-description">
          Resources that have helped me learn, understand and build.
        </p>
      </div>

      <div className="resource-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={filter === category ? "filter-active" : ""}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="resources-grid">

        {filteredResources.map((resource) => (
          <a
            href={resource.link}
            target="_blank"
            rel="noreferrer"
            className="resource-card"
            key={resource.title}
          >
            <div className="resource-top">
              <span>{resource.category}</span>
              <span>{resource.status}</span>
            </div>

            <h3>{resource.title}</h3>

            <p>{resource.description}</p>

            <div className="resource-footer">
              {resource.type} →
            </div>

          </a>
        ))}

      </div>

    </section>
  )
}

export default KnowledgeBase
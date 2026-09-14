import { useState } from "react"
import { featuredProjects, moreProjects } from "../data/projects"

type Project = {
  id: string
  title: string
  status?: string
  category?: string
  stack: string[]
  problem?: string
  learned?: string[]
  description?: string
  github: string
}

function ProjectCarousel({
  projects,
  featured = false,
}: {
  projects: Project[]
  featured?: boolean
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    )
  }

  const next = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    )
  }

  return (
    <div
      className={`project-carousel ${
        featured ? "project-carousel-featured" : ""
      }`}
    >
      {/* LEFT BUTTON */}
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={previous}
        aria-label="Previous project"
      >
        ←
      </button>

      {/* PROJECT VIEWPORT */}
      <div className="project-carousel-viewport">
        <div
          className="project-carousel-track"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {projects.map((project) => (
            <article
              className={`project-slide ${
                featured
                  ? "featured-project"
                  : "more-project-card"
              }`}
              key={project.id}
            >
              <div className="project-header">
                <span>{project.id}</span>

                {project.status && (
                  <span className="project-status">
                    {project.status}
                  </span>
                )}
              </div>

              {featured ? (
                <>
                  <div className="featured-project-main">
                    <div>
                      <p className="project-category">
                        {project.category}
                      </p>

                      <h3>{project.title}</h3>

                      <div className="project-section">
                        <span>MISSION</span>
                        <p>{project.problem}</p>
                      </div>
                    </div>

                    <div className="project-learning">
                      <span>WHAT I LEARNED</span>

                      <ul>
                        {project.learned?.map((item) => (
                          <li key={item}>
                            <span>→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="featured-project-footer">
                    <div className="stack-list">
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      VIEW SOURCE ↗
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="stack-list">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    VIEW SOURCE ↗
                  </a>
                </>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={next}
        aria-label="Next project"
      >
        →
      </button>

      {/* CONTROLS */}
      <div className="carousel-controls">
        <span>
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </span>

        <div className="carousel-dots">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Select ${project.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function BuildLog() {
  return (
    <section id="projects" className="section build-log">
      <div className="section-header">
        <p className="system-label">04 / BUILD.LOG</p>

        <h2>
          THINGS I'VE
          <br />
          BUILT.
        </h2>

        <p className="section-description">
          I learn best by building. Every project here represents a
          problem I explored, a system I designed, or a technology I
          wanted to understand more deeply.
        </p>
      </div>

      {/* FEATURED PROJECTS */}

      <div className="build-section-heading">
        <span>FEATURED.BUILDS</span>
        <div />
      </div>

      <ProjectCarousel
        projects={featuredProjects}
        featured
      />

      {/* MORE PROJECTS */}

      <div className="build-section-heading more-heading">
        <span>MORE.BUILDS</span>
        <div />
      </div>

      <ProjectCarousel projects={moreProjects} />
    </section>
  )
}

export default BuildLog
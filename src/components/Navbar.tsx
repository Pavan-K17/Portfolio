import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: "HOME", href: "#home" },
    { name: "JOURNEY.LOG", href: "#journey" },
    { name: "LEARNING.GRAPH", href: "#learning" },
    { name: "KNOWLEDGE.BASE", href: "#resources" },
    { name: "BUILD.LOG", href: "#projects" },
    { name: "NOW.EXE", href: "#now" },
  ]

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        PAVAN<span>.K</span>
      </a>

      <button
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "CLOSE" : "MENU"}
      </button>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
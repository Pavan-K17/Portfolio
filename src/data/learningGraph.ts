export const learningNodes = [
  {
    id: "java",
    title: "JAVA",
    category: "LANGUAGE",
    description:
      "My primary language for backend development and problem solving.",
    connections: ["spring", "dsa"]
  },
  {
    id: "spring",
    title: "SPRING BOOT",
    category: "BACKEND",
    description:
      "Building REST APIs and learning backend architecture.",
    connections: ["java", "microservices", "database"]
  },
  {
    id: "dsa",
    title: "DSA",
    category: "PROBLEM SOLVING",
    description:
      "Improving algorithmic thinking through consistent problem solving.",
    connections: ["java", "system-design"]
  },
  {
    id: "react",
    title: "REACT",
    category: "FRONTEND",
    description:
      "Building interactive and component-based user interfaces.",
    connections: ["frontend", "fullstack"]
  },
  {
    id: "ai",
    title: "AI ENGINEERING",
    category: "INTELLIGENT SYSTEMS",
    description:
      "Exploring LLMs, RAG systems, AI agents and practical AI applications.",
    connections: ["llm", "rag", "agents"]
  },
  {
    id: "llm",
    title: "LLMs",
    category: "AI",
    description:
      "Understanding how large language models can power modern applications.",
    connections: ["ai", "rag", "agents"]
  },
  {
    id: "rag",
    title: "RAG",
    category: "AI",
    description:
      "Combining retrieval systems with LLMs to create knowledge-aware applications.",
    connections: ["ai", "llm"]
  },
  {
    id: "agents",
    title: "AI AGENTS",
    category: "AI",
    description:
      "Exploring systems where AI models can reason, use tools and complete tasks.",
    connections: ["ai", "llm"]
  },
  {
    id: "microservices",
    title: "MICROSERVICES",
    category: "ARCHITECTURE",
    description:
      "Learning how larger systems can be designed as independent services.",
    connections: ["spring", "system-design"]
  },
  {
    id: "database",
    title: "DATABASES",
    category: "DATA",
    description:
      "Working with relational databases and designing application data models.",
    connections: ["spring"]
  },
  {
    id: "system-design",
    title: "SYSTEM DESIGN",
    category: "ARCHITECTURE",
    description:
      "Learning how scalable and reliable software systems are designed.",
    connections: ["dsa", "microservices"]
  },
  {
    id: "frontend",
    title: "FRONTEND",
    category: "WEB",
    description:
      "Creating interfaces that connect users with software systems.",
    connections: ["react", "fullstack"]
  },
  {
    id: "fullstack",
    title: "FULL STACK",
    category: "ENGINEERING",
    description:
      "Connecting frontend interfaces with backend systems.",
    connections: ["react", "frontend", "spring"]
  }
]
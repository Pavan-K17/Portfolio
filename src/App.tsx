import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Journey from "./components/Journey"
import LearningGraph from "./components/LearningGraph"
import KnowledgeBase from "./components/KnowledgeBase"
import BuildLog from "./components/BuildLog"
import Now from "./components/Now"
import Footer from "./components/Footer"

function App() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Journey />

      <LearningGraph />

      <KnowledgeBase />

      <BuildLog />

      <Now />

      <Footer />
    </main>
  )
}

export default App
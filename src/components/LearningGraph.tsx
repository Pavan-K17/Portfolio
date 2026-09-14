import { useState } from "react"
import { learningNodes } from "../data/learningGraph"

function LearningGraph() {
  const [selectedNode, setSelectedNode] = useState(learningNodes[0])

  return (
    <section id="learning" className="section learning-graph">
      <div className="section-header">
        <p className="system-label">02 / LEARNING.GRAPH</p>

        <h2>
          HOW EVERYTHING
          <br />
          CONNECTS.
        </h2>

        <p className="section-description">
          Technologies are not isolated skills. Every concept connects
          to something else I am learning, building, or exploring.
        </p>
      </div>

      <div className="graph-layout">

        <div className="graph-nodes">
          {learningNodes.map((node) => (
            <button
              key={node.id}
              className={`graph-node ${
                selectedNode.id === node.id ? "selected" : ""
              }`}
              onClick={() => setSelectedNode(node)}
            >
              {node.title}
            </button>
          ))}
        </div>

        <div className="node-details">

          <p className="system-label">
            {selectedNode.category}
          </p>

          <h3>{selectedNode.title}</h3>

          <p>{selectedNode.description}</p>

          <div className="connections">
            <span>CONNECTED TO</span>

            <div>
              {selectedNode.connections.map((connection) => (
                <span className="connection-tag" key={connection}>
                  {connection.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default LearningGraph
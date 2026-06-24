import { architecture } from "../content.js";
import infraImg from "../assets/diagrams/infra.png";
import pipelineImg from "../assets/diagrams/pipeline_flow.png";
import erdImg from "../assets/diagrams/erd.png";

export default function Architecture() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// system design</span>
        <h2 className="section-title">Architecture</h2>
        <p className="prose lead" style={{ marginBottom: 32 }}>{architecture.intro}</p>

        <div className="diagram-card">
          <h3 className="diagram-title">{architecture.infra.title}</h3>
          <img className="diagram-img" src={infraImg} alt="Zolver infrastructure topology" />
          <p className="diagram-caption">{architecture.infra.caption}</p>
        </div>

        <div className="diagram-card">
          <h3 className="diagram-title">{architecture.pipeline.title}</h3>
          <img className="diagram-img" src={pipelineImg} alt="L1, L2, L3 validation pipeline detail" />
          <p className="diagram-caption">{architecture.pipeline.caption}</p>
        </div>

        <div className="diagram-card">
          <h3 className="diagram-title">{architecture.erd.title}</h3>
          <img className="diagram-img" src={erdImg} alt="Zolver entity relationship diagram" />
          <p className="diagram-caption">{architecture.erd.caption}</p>
        </div>
      </div>
    </section>
  );
}

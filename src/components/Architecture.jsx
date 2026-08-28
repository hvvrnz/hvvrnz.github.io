import Text from "./Text.jsx";
import Collapsible from "./Collapsible.jsx";
import infraImg from "../assets/diagrams/infra.png";
import pipelineImg from "../assets/diagrams/pipeline_flow.png";
import erdImg from "../assets/diagrams/erd.png";
import { useContent } from "../i18n.jsx";

export default function Architecture() {
  const { architecture, sectionTitles } = useContent();
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">{sectionTitles.architecture.eyebrow}</span>
        <h2 className="section-title">{sectionTitles.architecture.title}</h2>
        <p className="prose lead" style={{ marginBottom: 8 }}>
          <Text>{architecture.intro}</Text>
        </p>

        <div className="collapse-list">
          <Collapsible title={architecture.infra.title} defaultOpen>
            <img className="diagram-img" src={infraImg} alt="Zolver infrastructure topology" />
            <p className="diagram-caption">
              <Text>{architecture.infra.caption}</Text>
            </p>
          </Collapsible>

          <Collapsible title={architecture.pipeline.title}>
            <img className="diagram-img" src={pipelineImg} alt="L1, L2, L3 validation pipeline detail" />
            <p className="diagram-caption">
              <Text>{architecture.pipeline.caption}</Text>
            </p>
          </Collapsible>

          <Collapsible title={architecture.erd.title}>
            <img className="diagram-img" src={erdImg} alt="Zolver entity relationship diagram" />
            <p className="diagram-caption">
              <Text>{architecture.erd.caption}</Text>
            </p>
            <p className="diagram-note">
              <Text>{architecture.erd.designNote}</Text>
            </p>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}

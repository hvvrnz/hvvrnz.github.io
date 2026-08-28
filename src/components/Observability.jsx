import Text from "./Text.jsx";
import Collapsible from "./Collapsible.jsx";
import { useContent } from "../i18n.jsx";

export default function Observability() {
  const { observability, sectionTitles } = useContent();
  return (
    <section className="section" id="observability">
      <div className="container">
        <span className="eyebrow">{sectionTitles.observability.eyebrow}</span>
        <h2 className="section-title">{sectionTitles.observability.title}</h2>
        <p className="prose lead" style={{ marginBottom: 8 }}>
          <Text>{observability.intro}</Text>
        </p>

        <div className="collapse-list">
          <Collapsible title={observability.logTypesTitle} defaultOpen>
            <div className="obs-logtypes">
              {observability.logTypes.map((l) => (
                <div className="obs-logtype" key={l.name}>
                  <span className="tag">{l.name}</span>
                  <span className="obs-logtype-desc">
                    <Text>{l.desc}</Text>
                  </span>
                </div>
              ))}
            </div>
          </Collapsible>

          <Collapsible title={observability.indexNoteTitle}>
            <p className="prose">
              <Text>{observability.indexNote}</Text>
            </p>
          </Collapsible>

          <Collapsible title={observability.driftLogicTitle}>
            <p className="prose">
              <Text>{observability.driftLogic}</Text>
            </p>
          </Collapsible>

          <Collapsible title={observability.dashboardsTitle}>
            <ul className="obs-dashboards">
              {observability.dashboards.map((d) => (
                <li key={d}>
                  <Text>{d}</Text>
                </li>
              ))}
            </ul>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}

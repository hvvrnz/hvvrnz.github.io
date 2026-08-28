import Text from "./Text.jsx";
import Collapsible from "./Collapsible.jsx";
import { useContent } from "../i18n.jsx";

export default function DataInsights() {
  const { dataInsights, sectionTitles } = useContent();
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">{sectionTitles.dataInsights.eyebrow}</span>
        <h2 className="section-title">{sectionTitles.dataInsights.title}</h2>
        <p className="prose lead" style={{ marginBottom: 8 }}>
          <Text>{dataInsights.intro}</Text>
        </p>

        <div className="collapse-list">
          <Collapsible title={dataInsights.metricsTitle} defaultOpen>
            <div className="metric-list">
              {dataInsights.metrics.map((m) => (
                <div className="metric-card" key={m.label}>
                  <div className="metric-head">
                    <span className="metric-value">{m.value}</span>
                    <span className="metric-label">{m.label}</span>
                  </div>
                  <div className="metric-sub">
                    <Text>{m.sub}</Text>
                  </div>
                  {m.query && <pre className="insight-code">{m.query}</pre>}
                  <p className="metric-note">
                    <Text>{m.note}</Text>
                  </p>
                </div>
              ))}
            </div>
          </Collapsible>

          <Collapsible title={dataInsights.opsNoteTitle}>
            <p className="prose">
              <Text>{dataInsights.opsNote}</Text>
            </p>
          </Collapsible>

          <Collapsible title={dataInsights.reflectionTitle}>
            <p className="prose">
              <Text>{dataInsights.reflection}</Text>
            </p>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}

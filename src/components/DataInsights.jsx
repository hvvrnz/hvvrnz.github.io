import Text from "./Text.jsx";
import { useContent } from "../i18n.jsx";

export default function DataInsights() {
  const { dataInsights, sectionTitles } = useContent();
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">{sectionTitles.dataInsights.eyebrow}</span>
        <h2 className="section-title">{sectionTitles.dataInsights.title}</h2>
        <p className="prose lead" style={{ marginBottom: 28 }}>
          <Text>{dataInsights.intro}</Text>
        </p>

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

        <p className="prose" style={{ marginTop: 8 }}>
          <Text>{dataInsights.opsNote}</Text>
        </p>
        <p className="prose" style={{ marginTop: 18 }}>
          <Text>{dataInsights.reflection}</Text>
        </p>
      </div>
    </section>
  );
}

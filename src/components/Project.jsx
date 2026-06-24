import Text from "./Text.jsx";
import { useContent } from "../i18n.jsx";

export default function Project() {
  const { stats, serviceIntro } = useContent();
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// zolver in production</span>
        <h2 className="section-title">From idea to a running service</h2>

        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label"><Text>{s.label}</Text></div>
              {s.sub && <div className="stat-sub"><Text>{s.sub}</Text></div>}
            </div>
          ))}
        </div>

        <p className="prose lead" style={{ marginBottom: 28 }}><Text>{serviceIntro.description}</Text></p>

        <div className="feature-grid">
          {serviceIntro.features.map((f) => (
            <div className="feature-item" key={f.title}>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc"><Text>{f.desc}</Text></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

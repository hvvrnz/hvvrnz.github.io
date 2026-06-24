import { stats, serviceIntro } from "../content.js";

export default function Project() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// zolver in production</span>
        <h2 className="section-title">From idea to a running service</h2>

        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
              {s.sub && <div className="stat-sub">{s.sub}</div>}
            </div>
          ))}
        </div>

        <p className="prose lead" style={{ marginBottom: 28 }}>{serviceIntro.description}</p>

        <div className="feature-grid">
          {serviceIntro.features.map((f) => (
            <div className="feature-item" key={f.title}>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

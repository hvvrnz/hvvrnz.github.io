import { observability } from "../content.js";

export default function Observability() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// observability</span>
        <h2 className="section-title">Watching the pipeline after launch</h2>
        <p className="prose lead" style={{ marginBottom: 28 }}>{observability.intro}</p>

        <div className="obs-logtypes">
          {observability.logTypes.map((l) => (
            <div className="obs-logtype" key={l.name}>
              <span className="tag">{l.name}</span>
              <span className="obs-logtype-desc">{l.desc}</span>
            </div>
          ))}
        </div>

        <p className="prose" style={{ marginTop: 22 }}>{observability.indexNote}</p>
        <p className="prose" style={{ marginTop: 14 }}>{observability.driftLogic}</p>

        <ul className="obs-dashboards">
          {observability.dashboards.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

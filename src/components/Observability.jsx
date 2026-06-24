import { observability } from "../content.js";
import Text from "./Text.jsx";

export default function Observability() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// observability</span>
        <h2 className="section-title">Watching the pipeline after launch</h2>
        <p className="prose lead" style={{ marginBottom: 28 }}><Text>{observability.intro}</Text></p>

        <div className="obs-logtypes">
          {observability.logTypes.map((l) => (
            <div className="obs-logtype" key={l.name}>
              <span className="tag">{l.name}</span>
              <span className="obs-logtype-desc"><Text>{l.desc}</Text></span>
            </div>
          ))}
        </div>

        <p className="prose" style={{ marginTop: 22 }}><Text>{observability.indexNote}</Text></p>
        <p className="prose" style={{ marginTop: 14 }}><Text>{observability.driftLogic}</Text></p>

        <ul className="obs-dashboards">
          {observability.dashboards.map((d) => (
            <li key={d}><Text>{d}</Text></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

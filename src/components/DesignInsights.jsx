import { designInsights } from "../content.js";

export default function DesignInsights() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// design insight</span>
        <h2 className="section-title">Design decisions</h2>

        <div className="insight-list">
          {designInsights.map((d) => (
            <div className="insight-card" key={d.title}>
              <div className="insight-title">{d.title}</div>
              <div className="insight-body">{d.body}</div>
              {d.code && <pre className="insight-code">{d.code}</pre>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

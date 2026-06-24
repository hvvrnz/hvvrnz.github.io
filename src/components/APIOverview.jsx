import { apiOverview } from "../content.js";

export default function APIOverview() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// backend api</span>
        <h2 className="section-title">13 routers, one consistent surface</h2>
        <p className="prose lead" style={{ marginBottom: 28 }}>{apiOverview.intro}</p>

        <div className="stack-list" style={{ marginBottom: 36 }}>
          {apiOverview.stack.map((t) => (
            <div className="stack-row" key={t.name}>
              <div className="stack-name">{t.name}</div>
              <div className="stack-desc">{t.desc}</div>
            </div>
          ))}
        </div>

        <div className="api-router-list">
          {apiOverview.routers.map((r) => (
            <div className="api-router-row" key={r.name}>
              <span className="api-router-prefix">{r.prefix}</span>
              <span className="api-router-desc">{r.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

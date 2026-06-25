import Text from "./Text.jsx";
import { useContent } from "../i18n.jsx";

export default function APIOverview() {
  const { apiOverview, sectionTitles } = useContent();
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">{sectionTitles.apiOverview.eyebrow}</span>
        <h2 className="section-title">{sectionTitles.apiOverview.title}</h2>
        <p className="prose lead" style={{ marginBottom: 28 }}><Text>{apiOverview.intro}</Text></p>

        <div className="stack-list" style={{ marginBottom: 36 }}>
          {apiOverview.stack.map((t) => (
            <div className="stack-row" key={t.name}>
              <div className="stack-name">{t.name}</div>
              <div className="stack-desc"><Text>{t.desc}</Text></div>
            </div>
          ))}
        </div>

        <div className="api-router-list">
          {apiOverview.routers.map((r) => (
            <div className="api-router-row" key={r.name}>
              <span className="api-router-prefix">{r.prefix}</span>
              <span className="api-router-desc"><Text>{r.desc}</Text></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Text from "./Text.jsx";
import { useContent } from "../i18n.jsx";

export default function HackathonRetro() {
  const { hackathonRetro, sectionTitles } = useContent();
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">{sectionTitles.hackathonRetro.eyebrow}</span>
        <h2 className="section-title">{hackathonRetro.title}</h2>
        <p className="prose lead" style={{ marginBottom: 28 }}>
          <Text>{hackathonRetro.summary}</Text>
        </p>

        <div className="insight-list">
          {hackathonRetro.points.map((p) => (
            <div className="insight-card" key={p.title}>
              <div className="insight-title">{p.title}</div>
              <div className="insight-body">
                <Text>{p.body}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

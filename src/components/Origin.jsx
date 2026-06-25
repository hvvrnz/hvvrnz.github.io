import Text from "./Text.jsx";
import { useContent } from "../i18n.jsx";

export default function Origin() {
  const { originStory, originSurvey, sectionTitles } = useContent();
  const paragraphs = originStory.trim().split("\n\n");
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">{sectionTitles.origin.eyebrow}</span>
        <h2 className="section-title">{sectionTitles.origin.title}</h2>
        <div className="prose lead">
          {paragraphs.map((p, i) => (
            <p key={i}><Text>{p}</Text></p>
          ))}
        </div>

        <div className="survey-grid">
          {originSurvey.map((s) => (
            <div className="survey-stat" key={s.label}>
              <div className="survey-value">{s.value}</div>
              <div className="survey-label"><Text>{s.label}</Text></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

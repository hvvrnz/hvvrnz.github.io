import Text from "./Text.jsx";
import { useContent } from "../i18n.jsx";

export default function TechStack() {
  const { techStack, sectionTitles } = useContent();
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">{sectionTitles.techStack.eyebrow}</span>
        <h2 className="section-title">{sectionTitles.techStack.title}</h2>
        <div className="stack-list">
          {techStack.map((t) => (
            <div className="stack-row" key={t.name}>
              <div className="stack-name">{t.name}</div>
              <div className="stack-desc"><Text>{t.desc}</Text></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Text from "./Text.jsx";
import { useContent } from "../i18n.jsx";

export default function AIStory() {
  const { aiStory, sectionTitles } = useContent();
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">{sectionTitles.aiStory.eyebrow}</span>
        <h2 className="section-title">{aiStory.title}</h2>
        <p className="ai-lead"><Text>{aiStory.lead}</Text></p>

        <div className="ai-failures">
          {aiStory.failures.map((f) => (
            <div className="ai-fail-card" key={f.title}>
              <div className="ai-fail-title">{f.title}</div>
              <div className="ai-fail-desc"><Text>{f.desc}</Text></div>
            </div>
          ))}
        </div>

        <p className="ai-resolution"><Text>{aiStory.resolution}</Text></p>
        <p className="ai-impl"><Text>{aiStory.implementation}</Text></p>
      </div>
    </section>
  );
}

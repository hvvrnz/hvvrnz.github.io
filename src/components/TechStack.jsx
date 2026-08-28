import Text from "./Text.jsx";
import Collapsible from "./Collapsible.jsx";
import { useContent } from "../i18n.jsx";

export default function TechStack() {
  const { techStackGroups, sectionTitles } = useContent();
  return (
    <section className="section" id="tech-stack">
      <div className="container">
        <span className="eyebrow">{sectionTitles.techStack.eyebrow}</span>
        <h2 className="section-title">{sectionTitles.techStack.title}</h2>
        <div className="collapse-list">
          {techStackGroups.map((g, i) => (
            <Collapsible title={g.label} key={g.label} defaultOpen={i === 0}>
              <div className="stack-list">
                {g.items.map((t) => (
                  <div className="stack-row" key={t.name}>
                    <div className="stack-name">{t.name}</div>
                    <div className="stack-desc">
                      <Text>{t.desc}</Text>
                    </div>
                  </div>
                ))}
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}

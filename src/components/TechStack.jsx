import { techStack } from "../content.js";
import Text from "./Text.jsx";

export default function TechStack() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// stack</span>
        <h2 className="section-title">Tech stack</h2>
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

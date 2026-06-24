import { aiStory } from "../content.js";

export default function AIStory() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// AI usage</span>
        <h2 className="section-title">{aiStory.title}</h2>
        <p className="ai-lead">{aiStory.lead}</p>

        <div className="ai-failures">
          {aiStory.failures.map((f) => (
            <div className="ai-fail-card" key={f.title}>
              <div className="ai-fail-title">{f.title}</div>
              <div className="ai-fail-desc">{f.desc}</div>
            </div>
          ))}
        </div>

        <p className="ai-resolution">{aiStory.resolution}</p>
        <p className="ai-impl">{aiStory.implementation}</p>
      </div>
    </section>
  );
}

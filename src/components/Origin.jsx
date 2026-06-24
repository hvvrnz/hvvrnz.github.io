import { originStory, originSurvey } from "../content.js";

export default function Origin() {
  const paragraphs = originStory.trim().split("\n\n");
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// origin</span>
        <h2 className="section-title">시간표 추천에서 졸업요건 시각화로</h2>
        <div className="prose lead">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="survey-grid">
          {originSurvey.map((s) => (
            <div className="survey-stat" key={s.label}>
              <div className="survey-value">{s.value}</div>
              <div className="survey-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

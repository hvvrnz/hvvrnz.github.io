import { designInsights } from "../content.js";
import kakaoLoginSequenceImg from "../assets/diagrams/kakao_login_sequence.png";

const DIAGRAMS = {
  kakaoLoginSequence: kakaoLoginSequenceImg,
};

export default function DesignInsights() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// design insight</span>
        <h2 className="section-title">Design decisions</h2>

        <div className="insight-list">
          {designInsights.map((d) => (
            <div className="insight-card" key={d.title}>
              <div className="insight-title">{d.title}</div>
              <div className="insight-body">{d.body}</div>
              {d.code && <pre className="insight-code">{d.code}</pre>}
              {d.diagram && (
                <img
                  className="insight-diagram"
                  src={DIAGRAMS[d.diagram]}
                  alt={`${d.title} diagram`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Text from "./Text.jsx";
import kakaoLoginSequenceImg from "../assets/diagrams/kakao_login_sequence.png";
import { useContent } from "../i18n.jsx";

const DIAGRAMS = {
  kakaoLoginSequence: kakaoLoginSequenceImg,
};

export default function DesignInsights() {
  const { designInsights, sectionTitles } = useContent();
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">{sectionTitles.designInsights.eyebrow}</span>
        <h2 className="section-title">{sectionTitles.designInsights.title}</h2>

        <div className="insight-list">
          {designInsights.map((d) => (
            <div className="insight-card" key={d.title}>
              <div className="insight-title">{d.title}</div>
              <div className="insight-body"><Text>{d.body}</Text></div>
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

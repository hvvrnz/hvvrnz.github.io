import Text from "./Text.jsx";
import Collapsible from "./Collapsible.jsx";
import { useContent } from "../i18n.jsx";

// 스크린샷 두 번째 장을 넣으려면 src/assets/screenshots/ 에 실제 파일을 넣고
// 아래 줄과 IMAGES 안의 줄 주석을 풀어주세요.
import hackathonDemo1 from "../assets/screenshots/hackathon_demo_1.png";
// import hackathonDemo2 from "../assets/screenshots/hackathon_demo_2.png";

const IMAGES = {
  hackathonDemo1,
  // hackathonDemo2,
};

export default function HackathonRetro() {
  const { hackathonRetro, sectionTitles } = useContent();
  const { overview, architecture, coldStart, techStackTitle, techStack, scope, pointsTitle, points, images } =
    hackathonRetro;

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">{sectionTitles.hackathonRetro.eyebrow}</span>
        <h2 className="section-title">{hackathonRetro.title}</h2>
        <p className="prose lead" style={{ marginBottom: 8 }}>
          <Text>{sectionTitles.hackathonRetro.lead}</Text>
        </p>
        <p className="prose lead" style={{ marginBottom: 28 }}>
          <Text>{hackathonRetro.summary}</Text>
        </p>

        <div className="collapse-list">
          <Collapsible title={overview.title} defaultOpen>
            <p className="prose">
              <Text>{overview.body}</Text>
            </p>
            {images && images.some((k) => IMAGES[k]) && (
              <div className="ts-images">
                {images.map((k) => IMAGES[k] && <img key={k} src={IMAGES[k]} alt={overview.title} />)}
              </div>
            )}
          </Collapsible>

          <Collapsible title={architecture.title}>
            <ol className="collapse-step-list">
              {architecture.steps.map((s, i) => (
                <li key={i}>
                  <Text>{s}</Text>
                </li>
              ))}
            </ol>
            <p className="prose" style={{ marginTop: 14 }}>
              <Text>{architecture.note}</Text>
            </p>
          </Collapsible>

          <Collapsible title={coldStart.title}>
            <p className="prose" style={{ marginBottom: 14 }}>
              <Text>{coldStart.body}</Text>
            </p>
            <ol className="collapse-step-list">
              {coldStart.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            <p className="prose" style={{ marginTop: 14 }}>
              <Text>{coldStart.note}</Text>
            </p>
          </Collapsible>

          <Collapsible title={techStackTitle}>
            <div className="stack-list">
              {techStack.map((t) => (
                <div className="stack-row" key={t.name}>
                  <div className="stack-name">{t.name}</div>
                  <div className="stack-desc">
                    <Text>{t.desc}</Text>
                  </div>
                </div>
              ))}
            </div>
          </Collapsible>

          <Collapsible title={scope.title}>
            <div className="scope-grid">
              <div>
                <div className="scope-label scope-done">{scope.doneLabel}</div>
                <ul className="obs-dashboards">
                  {scope.done.map((d, i) => (
                    <li key={i}>
                      <Text>{d}</Text>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="scope-label scope-out">{scope.scopedOutLabel}</div>
                <ul className="obs-dashboards">
                  {scope.scopedOut.map((d, i) => (
                    <li key={i}>
                      <Text>{d}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Collapsible>

          <Collapsible title={pointsTitle}>
            <div className="insight-list">
              {points.map((p) => (
                <div className="insight-card" key={p.title}>
                  <div className="insight-title">{p.title}</div>
                  <div className="insight-body">
                    <Text>{p.body}</Text>
                  </div>
                </div>
              ))}
            </div>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}

import { pipeline, pipelineNote } from "../content.js";

export default function Pipeline() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// data pipeline</span>
        <h2 className="section-title">신뢰도 기반 3단계 검증 파이프라인</h2>
        <p className="prose lead">
          성적표 한 장을 그대로 믿지 않습니다. 여러 사용자의 데이터가 쌓여 서로 일치할 때만
          신뢰할 수 있는 데이터로 승격시킵니다.
        </p>

        <div className="pipeline-stages">
          {pipeline.map((stage) => (
            <div className="pipeline-stage" key={stage.stage}>
              <span className="pipeline-stage-tag">{stage.stage}</span>
              <div className="pipeline-stage-name">{stage.name}</div>
              <div className="pipeline-stage-detail">{stage.detail}</div>
              <ul className="pipeline-stage-items">
                {stage.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="pipeline-note">{pipelineNote}</p>
      </div>
    </section>
  );
}

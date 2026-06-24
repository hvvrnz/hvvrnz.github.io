import { useState } from "react";
import { troubleshooting } from "../content.js";

export default function Troubleshooting() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// troubleshooting</span>
        <h2 className="section-title">막혔던 지점들</h2>
        <p className="prose lead" style={{ marginBottom: 8 }}>
          운영하면서 실제로 부딪힌 문제와 해결 과정입니다. 클릭하면 펼쳐집니다.
        </p>

        <div className="ts-list">
          {troubleshooting.map((t, idx) => {
            const open = openIdx === idx;
            return (
              <div className={`ts-item ${open ? "open" : ""}`} key={t.title}>
                <button
                  className="ts-summary"
                  onClick={() => setOpenIdx(open ? -1 : idx)}
                  aria-expanded={open}
                >
                  <span className="ts-summary-left">
                    {t.title}
                    <span className="tag">{t.tag}</span>
                  </span>
                  <span className="ts-chevron">+</span>
                </button>
                {open && (
                  <div className="ts-body">
                    <div className="ts-block problem">
                      <span className="ts-block-label">problem</span>
                      <span className="ts-problem-text">{t.problem}</span>
                    </div>
                    <div className="ts-block solution">
                      <span className="ts-block-label">solution</span>
                      <span className="ts-solution-text">{t.solution}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

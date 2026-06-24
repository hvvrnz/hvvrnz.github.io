import { useState } from "react";
import Text from "./Text.jsx";
import { useContent } from "../i18n.jsx";

export default function Troubleshooting() {
  const { troubleshooting } = useContent();
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// troubleshooting</span>
        <h2 className="section-title">Where I got stuck</h2>
        <p className="prose lead" style={{ marginBottom: 8 }}>
          Real problems I ran into while operating the service. Click to expand.
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
                      <span className="ts-problem-text"><Text>{t.problem}</Text></span>
                    </div>
                    <div className="ts-block solution">
                      <span className="ts-block-label">solution</span>
                      <span className="ts-solution-text"><Text>{t.solution}</Text></span>
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

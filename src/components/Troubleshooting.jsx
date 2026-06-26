import { useState } from "react";
import Text from "./Text.jsx";
import { useContent } from "../i18n.jsx";
import schemaViewerInput from "../assets/screenshots/schema_viewer_input.png";
import schemaViewerGrid from "../assets/screenshots/schema_viewer_grid.png";
import duplicateHeaderUserReport from "../assets/screenshots/duplicate_header_user_report.png";

const IMAGES = {
  schemaViewerInput,
  schemaViewerGrid,
  duplicateHeaderUserReport,
};

export default function Troubleshooting() {
  const { troubleshooting, sectionTitles } = useContent();
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">{sectionTitles.troubleshooting.eyebrow}</span>
        <h2 className="section-title">{sectionTitles.troubleshooting.title}</h2>
        <p className="prose lead" style={{ marginBottom: 8 }}>
          <Text>{sectionTitles.troubleshooting.lead}</Text>
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
                    {t.images && (
                      <div className="ts-images">
                        {t.images.map((imgKey) => (
                          <img key={imgKey} src={IMAGES[imgKey]} alt={t.title} />
                        ))}
                      </div>
                    )}
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

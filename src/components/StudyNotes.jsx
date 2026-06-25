import Text from "./Text.jsx";
import { useContent } from "../i18n.jsx";

export default function StudyNotes() {
  const { studyNotes, sectionTitles } = useContent();
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">{sectionTitles.studyNotes.eyebrow}</span>
        <h2 className="section-title">{sectionTitles.studyNotes.title}</h2>
        <p className="prose lead notes-intro"><Text>{studyNotes.intro}</Text></p>

        <div className="notes-grid">
          {studyNotes.items.map((n) => (
            <div className="note-card" key={n.topic}>
              <div className="note-image-slot">
                {n.image ? (
                  <img src={n.image} alt={n.topic} />
                ) : (
                  <span>scan coming soon</span>
                )}
              </div>
              <div className="note-topic">{n.topic}</div>
              <div className="note-caption"><Text>{n.caption}</Text></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

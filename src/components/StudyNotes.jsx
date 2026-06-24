import { studyNotes } from "../content.js";

export default function StudyNotes() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// study notes</span>
        <h2 className="section-title">A habit of sketching things out by hand</h2>
        <p className="prose lead notes-intro">{studyNotes.intro}</p>

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
              <div className="note-caption">{n.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

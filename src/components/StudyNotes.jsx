import { studyNotes } from "../content.js";

export default function StudyNotes() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// study notes</span>
        <h2 className="section-title">손으로 그려가며 정리하는 습관</h2>
        <p className="prose lead notes-intro">{studyNotes.intro}</p>

        <div className="notes-grid">
          {studyNotes.items.map((n) => (
            <div className="note-card" key={n.topic}>
              <div className="note-image-slot">
                {n.image ? (
                  <img src={n.image} alt={n.topic} />
                ) : (
                  <span>필기 스캔 이미지 추가 예정</span>
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

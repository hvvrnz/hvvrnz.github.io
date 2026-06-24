import { perseverance } from "../content.js";

export default function Perseverance() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// 5 months, alone</span>
        <div className="perseverance">
          <p className="perseverance-quote">“{perseverance.quote}”</p>
          <p className="perseverance-body">{perseverance.body}</p>
        </div>
      </div>
    </section>
  );
}

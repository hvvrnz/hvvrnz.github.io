import { footer, profile } from "../content.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>{footer.note}</p>
        <p style={{ marginTop: 10 }}>
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          {"  ·  "}
          <a href={profile.links.velog} target="_blank" rel="noreferrer">Velog</a>
          {"  ·  "}
          <a href={profile.links.service} target="_blank" rel="noreferrer">zolver.co.kr</a>
        </p>
      </div>
    </footer>
  );
}

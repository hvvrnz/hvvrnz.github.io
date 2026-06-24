import { footer, profile } from "../content.js";
import Text from "./Text.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p><Text>{footer.note}</Text></p>
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

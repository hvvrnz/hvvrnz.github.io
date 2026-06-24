import profilePhoto from "../assets/profile.jpg";
import { Code2, BookText } from "lucide-react";
import zolverIcon from "../assets/zolver-icon.png";
import Text from "./Text.jsx";
import { useContent } from "../i18n.jsx";

export default function Hero() {
  const { profile } = useContent();
  return (
    <header className="hero">
      <div className="container hero-inner">
        <div className="hero-top">
          <div className="hero-text">
            <span className="hero-eyebrow">portfolio</span>
            <p className="hero-greeting"><Text>{profile.greeting}</Text></p>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-role"><Text>{profile.role}</Text></p>
            <p className="hero-tagline"><Text>{profile.tagline}</Text></p>
            <p className="hero-current"><Text>{profile.current}</Text></p>

            <div className="hero-links">
              <a className="hero-badge" href={profile.links.service} target="_blank" rel="noreferrer">
                <img className="hero-badge-icon" src={zolverIcon} alt="" /> zolver.co.kr
              </a>
              <a className="hero-badge" href={profile.links.github} target="_blank" rel="noreferrer">
                <Code2 size={14} /> GitHub
              </a>
              <a className="hero-badge" href={profile.links.velog} target="_blank" rel="noreferrer">
                <BookText size={14} /> Velog
              </a>
            </div>
          </div>

          <div className="hero-photo-frame">
            <img className="hero-photo" src={profilePhoto} alt={profile.name} />
          </div>
        </div>

        <div className="hero-hashtags">
          {profile.hashtags.map((h, i) =>
            h === "\n" ? <br key={`br-${i}`} /> : <span className="hero-hashtag" key={h}>{h}</span>
          )}
        </div>
      </div>
    </header>
  );
}

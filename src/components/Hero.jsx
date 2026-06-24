import { profile } from "../content.js";
import profilePhoto from "../assets/profile.jpg";

export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero-inner">
        <div className="hero-top">
          <div className="hero-text">
            <span className="hero-eyebrow">portfolio</span>
            <p className="hero-greeting">{profile.greeting}</p>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-tagline">{profile.tagline}</p>
            <p className="hero-current">{profile.current}</p>

            <div className="hero-links">
              <a href={profile.links.service} target="_blank" rel="noreferrer">zolver.co.kr</a>
              <span className="hero-dot">·</span>
              <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
              <span className="hero-dot">·</span>
              <a href={profile.links.velog} target="_blank" rel="noreferrer">Velog</a>
            </div>
          </div>

          <div className="hero-photo-frame">
            <img className="hero-photo" src={profilePhoto} alt={profile.name} />
          </div>
        </div>

        <div className="hero-hashtags">
          {profile.hashtags.map((h) => (
            <span className="hero-hashtag" key={h}>{h}</span>
          ))}
        </div>
      </div>
    </header>
  );
}

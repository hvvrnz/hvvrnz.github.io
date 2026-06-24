import { profile } from "../content.js";

function MiniPipeline() {
  // 시그니처 요소: L1 → L2 → L3 데이터 흐름을 아주 작은 SVG로 표현
  return (
    <svg
      viewBox="0 0 640 110"
      width="100%"
      style={{ maxWidth: 560, display: "block" }}
      role="img"
      aria-label="성적표 데이터가 L1, L2, L3 검증을 거쳐 신뢰도 있는 데이터로 승격되는 흐름"
    >
      <defs>
        <style>{`
          .mp-box { fill: #2F2A20; stroke: #6B6248; stroke-width: 1; rx: 8; }
          .mp-label { font-family: 'IBM Plex Mono', monospace; font-size: 13px; fill: #F1E9D8; }
          .mp-sub { font-family: 'IBM Plex Mono', monospace; font-size: 9.5px; fill: #C9BC98; }
          .mp-flow { stroke: #E3C08A; stroke-width: 1.5; stroke-dasharray: 4 4; fill: none; }
        `}</style>
      </defs>

      <rect className="mp-box" x="10" y="25" width="140" height="60" />
      <text className="mp-label" x="80" y="50" textAnchor="middle">L1 · 물리검증</text>
      <text className="mp-sub" x="80" y="68" textAnchor="middle">file / ext / size</text>

      <path className="mp-flow" d="M150 55 H 245" />
      <polygon points="245,55 237,50 237,60" fill="#E3C08A" />

      <rect className="mp-box" x="250" y="25" width="140" height="60" />
      <text className="mp-label" x="320" y="50" textAnchor="middle">L2 · 내용검증·ETL</text>
      <text className="mp-sub" x="320" y="68" textAnchor="middle">anchor · transform</text>

      <path className="mp-flow" d="M390 55 H 485" />
      <polygon points="485,55 477,50 477,60" fill="#E3C08A" />

      <rect className="mp-box" x="490" y="25" width="140" height="60" stroke="#E3C08A" />
      <text className="mp-label" x="560" y="50" textAnchor="middle">L3 · 신뢰도엔진</text>
      <text className="mp-sub" x="560" y="68" textAnchor="middle">score ≥ 1.5 → 승격</text>
    </svg>
  );
}

export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero-inner">
        <span className="hero-eyebrow">// portfolio</span>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-links">
          <a className="hero-link" href={profile.links.service} target="_blank" rel="noreferrer">zolver.co.kr ↗</a>
          <a className="hero-link" href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="hero-link" href={profile.links.velog} target="_blank" rel="noreferrer">Velog ↗</a>
        </div>

        <div className="hero-diagram">
          <MiniPipeline />
        </div>

        <div className="hero-hashtags" style={{ marginTop: 28 }}>
          {profile.hashtags.map((h) => (
            <span className="hero-hashtag" key={h}>{h}</span>
          ))}
        </div>
      </div>
    </header>
  );
}

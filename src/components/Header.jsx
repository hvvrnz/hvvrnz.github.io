import LanguageToggle from "./LanguageToggle.jsx";
import { useLanguage } from "../i18n.jsx";

const NAV_ITEMS = [
  { id: "origin", ko: "소개", en: "About" },
  { id: "project", ko: "Zolver", en: "Zolver" },
  { id: "hackathon-retro", ko: "해커톤", en: "Hackathon" },
  { id: "tech-stack", ko: "기술스택", en: "Stack" },
];

export default function Header() {
  const { lang } = useLanguage();
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a className="site-header-brand" href="#top">
          <img
            className="site-header-logo-gif"
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTRvYWdlNWE0bXdmdTdiY2hnanozMml2MDg0Z2lrZXp5cXZpbzRpaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DdbcyAgUp5MWuCsaZ0/200w.gif"
            alt="황윤정"
            title="GIF by chuchuotter on GIPHY"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </a>
        <nav className="site-header-nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {lang === "ko" ? item.ko : item.en}
            </a>
          ))}
        </nav>
        <LanguageToggle inline />
      </div>
    </header>
  );
}

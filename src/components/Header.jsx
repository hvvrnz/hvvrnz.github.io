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
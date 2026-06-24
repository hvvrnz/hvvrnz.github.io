import { useLanguage } from "../i18n.jsx";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      className="lang-toggle"
      onClick={toggle}
      aria-label="Switch language / 언어 전환"
    >
      <span className={lang === "en" ? "lang-active" : ""}>EN</span>
      <span className="lang-sep">/</span>
      <span className={lang === "ko" ? "lang-active" : ""}>KO</span>
    </button>
  );
}

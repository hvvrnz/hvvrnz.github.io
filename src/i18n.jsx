import { createContext, useContext, useState } from "react";
import * as en from "./content.en.js";
import * as ko from "./content.ko.js";

const DATA = { en, ko };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const toggle = () => setLang((l) => (l === "en" ? "ko" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggle, content: DATA[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Returns the active language's content object (profile, stats, etc.) */
export function useContent() {
  const ctx = useContext(LanguageContext);
  return ctx.content;
}

/** Returns { lang, toggle } for rendering/controlling the language switch */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  return { lang: ctx.lang, toggle: ctx.toggle };
}

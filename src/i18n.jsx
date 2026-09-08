import { createContext, useContext, useEffect, useState } from 'react';

const LangContext = createContext({ lang: 'id', setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('porto-lang') === 'en' ? 'en' : 'id';
    } catch {
      return 'id';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('porto-lang', lang);
    } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

// Toggle ID | EN pengganti toggle gelap-terang
export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div
      className="flex items-center rounded-full border border-line p-0.5 text-xs font-bold"
      role="group"
      aria-label="Pilih bahasa / Choose language"
    >
      {['id', 'en'].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={
            lang === l
              ? 'rounded-full bg-ink text-cream px-2.5 py-1'
              : 'px-2.5 py-1 text-muted hover:text-ink'
          }
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

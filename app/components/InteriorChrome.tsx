"use client";

import { useEffect, useState } from "react";
import { sitePath } from "../site-path";

export type Language = "en" | "zh" | "ms";

export function usePageLanguage() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const requestedLanguage = new URLSearchParams(window.location.search).get(
      "lang",
    );
    if (
      requestedLanguage === "en" ||
      requestedLanguage === "zh" ||
      requestedLanguage === "ms"
    ) {
      setLanguage(requestedLanguage);
      document.documentElement.lang =
        requestedLanguage === "zh"
          ? "zh-Hans"
          : requestedLanguage === "ms"
            ? "ms"
            : "en";
    }
  }, []);

  function updateLanguage(next: Language) {
    setLanguage(next);
    document.documentElement.lang =
      next === "zh" ? "zh-Hans" : next === "ms" ? "ms" : "en";
    const query = new URLSearchParams(window.location.search);
    query.set("lang", next);
    window.history.replaceState(null, "", `${window.location.pathname}?${query}`);
  }

  return { language, updateLanguage };
}

export function InteriorHeader({
  language,
  back,
  updateLanguage,
}: {
  language: Language;
  back: string;
  updateLanguage: (next: Language) => void;
}) {
  return (
    <header className="interior-header">
      <a
        className="brand"
        href={sitePath(`/?lang=${language}`)}
        aria-label="Durian Care Home"
      >
        <span className="brand-mark" aria-hidden="true">
          <span>D</span>
        </span>
        <span className="brand-name">Durian Care Home</span>
      </a>
      <div className="interior-header-actions">
        <a href={sitePath(`/?lang=${language}`)}>{back}</a>
        <div className="language-switcher" aria-label="Language">
          {(["en", "zh", "ms"] as Language[]).map((code) => (
            <button
              className={language === code ? "active" : ""}
              key={code}
              type="button"
              onClick={() => updateLanguage(code)}
              aria-pressed={language === code}
            >
              {code === "en" ? "EN" : code === "zh" ? "中文" : "BM"}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export function InteriorFooter({
  language,
  tagline,
  rights,
}: {
  language: Language;
  tagline: string;
  rights: string;
}) {
  return (
    <footer className="interior-footer">
      <div className="footer-brand">
        <span className="brand-mark" aria-hidden="true">
          <span>D</span>
        </span>
        <div>
          <strong>Durian Care Home</strong>
          <p>{tagline}</p>
        </div>
      </div>
      <a href={sitePath(`/?lang=${language}`)}>
        {language === "zh"
          ? "返回主页"
          : language === "ms"
            ? "Kembali ke laman utama"
            : "Back to home"}
      </a>
      <p className="copyright">
        © {new Date().getFullYear()} Durian Care Home. {rights}
      </p>
    </footer>
  );
}

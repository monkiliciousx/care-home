"use client";

import { useEffect, useState } from "react";
import { sitePath } from "../site-path";

type Language = "en" | "zh" | "ms";
export type ComingSoonPageType = "roomTypes" | "reviews" | "gallery";

const pageContent = {
  en: {
    back: "Back to home",
    opening: "Opening soon · Ayer Keroh, Melaka",
    comingSoon: "Coming Soon",
    roomTypes: {
      number: "01",
      title: "Room Types",
      text: "We are preparing detailed room layouts, features and availability for our single, twin and shared rooms.",
      note: "Single · Twin · Shared",
    },
    reviews: {
      number: "02",
      title: "Reviews",
      text: "Resident and family stories will be shared here after Durian Care Home begins welcoming our community.",
      note: "Resident stories · Family experiences",
    },
    gallery: {
      number: "03",
      title: "Gallery",
      text: "A complete collection of residence, room, facilities and community photographs is being prepared.",
      note: "Residence · Rooms · Facilities",
    },
    footer: "Care that feels like home.",
  },
  zh: {
    back: "返回主页",
    opening: "即将开幕 · 马六甲爱极乐",
    comingSoon: "即将推出",
    roomTypes: {
      number: "01",
      title: "房型介绍",
      text: "我们正在整理单人房、双人房及共享护理房的详细格局、设施与入住资料。",
      note: "单人房 · 双人房 · 共享护理房",
    },
    reviews: {
      number: "02",
      title: "住户评价",
      text: "Durian Care Home 正式迎接社区住户后，我们将在这里分享住户及家属的真实故事。",
      note: "住户故事 · 家属体验",
    },
    gallery: {
      number: "03",
      title: "环境相册",
      text: "我们正在准备居所、房间、护理设施及社区空间的完整照片。",
      note: "居所 · 房间 · 设施",
    },
    footer: "让关怀，如家般温暖。",
  },
  ms: {
    back: "Kembali ke laman utama",
    opening: "Akan dibuka · Ayer Keroh, Melaka",
    comingSoon: "Akan Datang",
    roomTypes: {
      number: "01",
      title: "Jenis Bilik",
      text: "Kami sedang menyediakan pelan, kemudahan dan maklumat ketersediaan terperinci untuk bilik seorang, berkembar dan berkongsi.",
      note: "Seorang · Berkembar · Berkongsi",
    },
    reviews: {
      number: "02",
      title: "Ulasan",
      text: "Kisah penghuni dan keluarga akan dikongsikan di sini selepas Durian Care Home mula menyambut komuniti kami.",
      note: "Kisah penghuni · Pengalaman keluarga",
    },
    gallery: {
      number: "03",
      title: "Galeri",
      text: "Koleksi lengkap foto kediaman, bilik, kemudahan dan ruang komuniti sedang disediakan.",
      note: "Kediaman · Bilik · Kemudahan",
    },
    footer: "Penjagaan yang terasa seperti di rumah.",
  },
} as const;

export default function ComingSoonPage({
  pageType,
}: {
  pageType: ComingSoonPageType;
}) {
  const [language, setLanguage] = useState<Language>("en");
  const t = pageContent[language];
  const page = t[pageType];

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

  return (
    <main className={`coming-soon-page coming-soon-${pageType}`}>
      <header className="coming-soon-header">
        <a
          className="brand brand-on-dark"
          href={sitePath(`/?lang=${language}`)}
          aria-label="Durian Care Home"
        >
          <span className="brand-mark" aria-hidden="true">
            <span>D</span>
          </span>
          <span className="brand-name">Durian Care Home</span>
        </a>
        <div className="coming-soon-actions">
          <a href={sitePath(`/?lang=${language}`)}>{t.back}</a>
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

      <section className="coming-soon-stage">
        <div className="coming-soon-orbit" aria-hidden="true">
          <span>{page.number}</span>
        </div>
        <div className="coming-soon-copy">
          <p className="eyebrow">{t.opening}</p>
          <span className="gold-rule" />
          <p className="coming-soon-label">{t.comingSoon}</p>
          <h1>{page.title}</h1>
          <p className="coming-soon-text">{page.text}</p>
          <p className="coming-soon-note">{page.note}</p>
          <a
            className="button button-gold"
            href={sitePath(`/?lang=${language}`)}
          >
            <span aria-hidden="true">←</span>
            {t.back}
          </a>
        </div>
      </section>

      <footer className="coming-soon-footer">
        <p>{t.footer}</p>
        <address>82, Jalan Bukit Beruang 1, Ayer Keroh, 75450 Melaka</address>
      </footer>
    </main>
  );
}

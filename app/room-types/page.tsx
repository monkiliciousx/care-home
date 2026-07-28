"use client";

import {
  InteriorFooter,
  InteriorHeader,
  usePageLanguage,
} from "../components/InteriorChrome";
import { sitePath } from "../site-path";

const roomContent = {
  en: {
    back: "Back to home",
    eyebrow: "Accommodation concept",
    title: "A room for every rhythm of life.",
    intro:
      "Explore three thoughtfully planned room concepts created around safety, privacy, companionship and everyday comfort.",
    preview:
      "Showcase content — final layouts, dimensions, pricing and availability will be confirmed before opening.",
    rooms: [
      {
        title: "Single Room",
        tag: "Private & peaceful",
        description:
          "A calm personal retreat for residents who value privacy, familiar routines and space for meaningful belongings.",
        features: [
          "One adjustable care bed",
          "Private storage and seating",
          "Accessible ensuite concept",
          "Space for personal touches",
        ],
      },
      {
        title: "Twin Room",
        tag: "Companionship & comfort",
        description:
          "A balanced setting for two residents, offering friendly companionship alongside clearly defined personal space.",
        features: [
          "Two adjustable care beds",
          "Individual bedside storage",
          "Shared accessible ensuite concept",
          "Balanced personal space",
        ],
      },
      {
        title: "Shared Room",
        tag: "Connected & supported",
        description:
          "A welcoming shared environment for residents who enjoy social connection with attentive care always nearby.",
        features: [
          "Three adjustable care beds",
          "Privacy screens or dividers",
          "Generous accessible circulation",
          "Care team nearby",
        ],
      },
    ],
    includedEyebrow: "Across every room",
    includedTitle: "Comfort designed into the details.",
    included: [
      ["Natural light", "Bright, uplifting spaces with soft tropical daylight."],
      ["Barrier-free planning", "Clear pathways designed for safer everyday movement."],
      ["Personal storage", "Room for clothing, keepsakes and familiar belongings."],
      ["Care-ready comfort", "Residential warmth with thoughtful support close at hand."],
    ],
    ctaEyebrow: "Find the right fit",
    ctaTitle: "Visit the residence and explore your options.",
    ctaText:
      "Choose a preferred date and time, then share a little more about the care needs you are considering.",
    book: "Book a Visit",
    tagline: "Care that feels like home.",
    rights: "All rights reserved.",
  },
  zh: {
    back: "返回主页",
    eyebrow: "住宿概念",
    title: "为每一种生活节奏，准备合适的空间。",
    intro:
      "探索三种精心规划的房型概念，以安全、隐私、陪伴及日常舒适为设计核心。",
    preview: "展示内容——最终格局、尺寸、价格及房间供应将在开幕前确认。",
    rooms: [
      {
        title: "单人房",
        tag: "私密 · 宁静",
        description:
          "为重视个人空间、熟悉生活节奏及珍贵物品的住户，提供安静舒适的私人居所。",
        features: [
          "一张可调节护理床",
          "私人储物及座椅空间",
          "无障碍独立卫浴概念",
          "可加入个人熟悉摆设",
        ],
      },
      {
        title: "双人房",
        tag: "陪伴 · 舒适",
        description:
          "为两位住户营造平衡的生活环境，既享有温暖陪伴，也保留清晰的个人空间。",
        features: [
          "两张可调节护理床",
          "独立床边储物空间",
          "共享无障碍卫浴概念",
          "兼顾陪伴与个人空间",
        ],
      },
      {
        title: "共享护理房",
        tag: "联系 · 支持",
        description:
          "适合喜欢社交互动的住户，在温暖共享环境中，身边随时有贴心照护。",
        features: [
          "三张可调节护理床",
          "隐私屏风或空间分隔",
          "宽敞无障碍活动空间",
          "护理团队近在身边",
        ],
      },
    ],
    includedEyebrow: "每间房均具备",
    includedTitle: "让舒适融入每一个细节。",
    included: [
      ["自然采光", "明亮舒适的空间，享有柔和热带日光。"],
      ["无障碍规划", "清晰通道，为日常行动提供更多安全保障。"],
      ["个人储物空间", "妥善安放衣物、纪念品及熟悉物件。"],
      ["护理与舒适兼备", "居家温度与贴心照护自然结合。"],
    ],
    ctaEyebrow: "找到合适选择",
    ctaTitle: "亲临参观，了解不同房型。",
    ctaText: "选择理想参观日期与时间，并告诉我们您正在考虑的护理需要。",
    book: "预约参观",
    tagline: "让关怀，如家般温暖。",
    rights: "版权所有。",
  },
  ms: {
    back: "Kembali ke laman utama",
    eyebrow: "Konsep penginapan",
    title: "Bilik untuk setiap rentak kehidupan.",
    intro:
      "Terokai tiga konsep bilik yang dirancang dengan teliti berteraskan keselamatan, privasi, persahabatan dan keselesaan harian.",
    preview:
      "Kandungan pameran — pelan akhir, ukuran, harga dan ketersediaan akan disahkan sebelum pembukaan.",
    rooms: [
      {
        title: "Bilik Seorang",
        tag: "Peribadi & tenang",
        description:
          "Ruang peribadi yang tenang untuk penghuni yang menghargai privasi, rutin biasa dan barangan bermakna.",
        features: [
          "Satu katil penjagaan boleh laras",
          "Simpanan dan tempat duduk peribadi",
          "Konsep bilik air mudah akses",
          "Ruang untuk sentuhan peribadi",
        ],
      },
      {
        title: "Bilik Berkembar",
        tag: "Teman & keselesaan",
        description:
          "Ruang seimbang untuk dua penghuni, dengan persahabatan yang mesra serta ruang peribadi yang jelas.",
        features: [
          "Dua katil penjagaan boleh laras",
          "Simpanan sisi katil individu",
          "Konsep bilik air berkongsi mudah akses",
          "Ruang peribadi yang seimbang",
        ],
      },
      {
        title: "Bilik Berkongsi",
        tag: "Hubungan & sokongan",
        description:
          "Persekitaran bersama yang mesra untuk penghuni yang gemar bersosial dengan penjagaan sentiasa berdekatan.",
        features: [
          "Tiga katil penjagaan boleh laras",
          "Skrin privasi atau pembahagi",
          "Ruang pergerakan mudah akses",
          "Pasukan penjagaan berdekatan",
        ],
      },
    ],
    includedEyebrow: "Di setiap bilik",
    includedTitle: "Keselesaan dalam setiap perincian.",
    included: [
      ["Cahaya semula jadi", "Ruang cerah dengan cahaya tropika yang lembut."],
      ["Perancangan bebas halangan", "Laluan jelas untuk pergerakan harian yang lebih selamat."],
      ["Simpanan peribadi", "Ruang untuk pakaian, kenangan dan barangan biasa."],
      ["Keselesaan sedia penjagaan", "Kehangatan kediaman dengan sokongan berhampiran."],
    ],
    ctaEyebrow: "Cari pilihan sesuai",
    ctaTitle: "Lawati kediaman dan terokai pilihan anda.",
    ctaText:
      "Pilih tarikh dan masa pilihan, kemudian kongsikan keperluan penjagaan yang sedang dipertimbangkan.",
    book: "Tempah Lawatan",
    tagline: "Penjagaan yang terasa seperti di rumah.",
    rights: "Hak cipta terpelihara.",
  },
} as const;

export default function RoomTypesPage() {
  const { language, updateLanguage } = usePageLanguage();
  const t = roomContent[language];
  const images = ["single-room", "twin-room", "shared-room"];

  return (
    <main className="interior-page room-types-page">
      <InteriorHeader
        language={language}
        back={t.back}
        updateLanguage={updateLanguage}
      />

      <section className="interior-hero room-types-hero">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <span className="gold-rule" />
          <h1>{t.title}</h1>
        </div>
        <div className="interior-hero-copy">
          <p>{t.intro}</p>
          <span>{t.preview}</span>
        </div>
      </section>

      <section className="room-detail-list">
        {t.rooms.map((room, index) => (
          <article className="room-detail" key={room.title}>
            <div className="room-detail-image">
              <img
                src={sitePath(`/images/${images[index]}.webp`)}
                alt={`${room.title} concept at Durian Care Home`}
              />
              <span>0{index + 1}</span>
            </div>
            <div className="room-detail-copy">
              <p className="eyebrow">{room.tag}</p>
              <h2>{room.title}</h2>
              <p>{room.description}</p>
              <ul>
                {room.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="room-inclusions section">
        <div className="section-heading centered-heading">
          <p className="eyebrow">{t.includedEyebrow}</p>
          <h2>{t.includedTitle}</h2>
        </div>
        <div className="room-inclusion-grid">
          {t.included.map(([title, description], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="interior-cta">
        <div>
          <p className="eyebrow">{t.ctaEyebrow}</p>
          <h2>{t.ctaTitle}</h2>
        </div>
        <div>
          <p>{t.ctaText}</p>
          <a
            className="button button-gold"
            href={sitePath(`/?book=visit&lang=${language}`)}
          >
            {t.book}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <InteriorFooter
        language={language}
        tagline={t.tagline}
        rights={t.rights}
      />
    </main>
  );
}

"use client";

import {
  InteriorFooter,
  InteriorHeader,
  usePageLanguage,
} from "../components/InteriorChrome";
import { sitePath } from "../site-path";

const reviewContent = {
  en: {
    back: "Back to home",
    eyebrow: "Family perspectives",
    title: "Words that reflect the care we are building.",
    intro:
      "A preview of how future resident and family experiences can be presented with warmth, clarity and trust.",
    sampleTitle: "Sample testimonials for client presentation",
    sampleText:
      "Durian Care Home is opening soon. These are fictional showcase examples—not verified resident reviews. Replace them with genuine feedback after opening.",
    reviews: [
      {
        quote:
          "The environment feels calm, bright and thoughtfully planned. It gives our family confidence that Mum could feel safe without losing her independence.",
        person: "Sample family perspective",
        topic: "Assisted Living",
      },
      {
        quote:
          "What stood out was the balance between professional care and a warm residential atmosphere. It does not feel institutional.",
        person: "Sample family perspective",
        topic: "Dependent Care",
      },
      {
        quote:
          "The different room options make it easier to choose what suits Dad’s personality, privacy and level of comfort.",
        person: "Sample family perspective",
        topic: "Accommodation",
      },
      {
        quote:
          "Having activities, physiotherapy and consultation spaces under one roof would make daily care much easier for everyone.",
        person: "Sample family perspective",
        topic: "Wellbeing Services",
      },
      {
        quote:
          "The Ayer Keroh location is convenient for our family, and the welcoming visitor spaces make regular visits feel genuinely encouraged.",
        person: "Sample family perspective",
        topic: "Location & Visits",
      },
      {
        quote:
          "The care options were explained clearly and made the planning process feel less overwhelming for our family.",
        person: "Sample enquiry perspective",
        topic: "Care Consultation",
      },
    ],
    promiseEyebrow: "Our promise",
    promiseTitle: "Every future story should be earned.",
    promiseText:
      "After opening, this page should feature only permission-based feedback from real residents and families, presented honestly and respectfully.",
    values: [
      ["Verified", "Feedback collected from genuine care experiences."],
      ["Respectful", "Personal stories shared only with clear permission."],
      ["Transparent", "Care level and context shown without exaggeration."],
    ],
    cta: "Discuss Care Options",
    tagline: "Care that feels like home.",
    rights: "All rights reserved.",
  },
  zh: {
    back: "返回主页",
    eyebrow: "家属心声",
    title: "这些话语，展现我们正在打造的关怀。",
    intro: "预览未来如何以温度、清晰及信任，呈现住户与家属的真实体验。",
    sampleTitle: "供客户展示的示范评价",
    sampleText:
      "Durian Care Home 即将开幕。以下为虚构的展示范例，并非真实住户评价；开幕后应替换为经过确认的真实反馈。",
    reviews: [
      {
        quote:
          "这里的环境宁静、明亮，规划也很用心。让我们相信妈妈可以在保有自主的同时，得到安全照顾。",
        person: "示范家属观点",
        topic: "协助式生活",
      },
      {
        quote:
          "最打动我们的是专业护理与温馨居家氛围之间的平衡，完全没有冰冷机构的感觉。",
        person: "示范家属观点",
        topic: "全依赖护理",
      },
      {
        quote:
          "不同房型让我们更容易根据爸爸的个性、隐私需要及舒适程度作出选择。",
        person: "示范家属观点",
        topic: "住宿环境",
      },
      {
        quote:
          "活动、物理治疗及咨询空间集中在同一地点，会让住户及家属的日常护理安排轻松许多。",
        person: "示范家属观点",
        topic: "健康服务",
      },
      {
        quote:
          "爱极乐的地点方便家人前来，温馨的访客空间也让定期探访更受欢迎。",
        person: "示范家属观点",
        topic: "地点与探访",
      },
      {
        quote:
          "护理选择解释得非常清楚，让我们在规划家人未来时，不再觉得那么无助。",
        person: "示范咨询观点",
        topic: "护理咨询",
      },
    ],
    promiseEyebrow: "我们的承诺",
    promiseTitle: "未来的每个故事，都应来自真实体验。",
    promiseText:
      "正式开幕后，此页面只应展示获得允许的真实住户及家属反馈，并以诚实、尊重的方式呈现。",
    values: [
      ["真实确认", "评价来自真正的护理体验。"],
      ["尊重隐私", "个人故事只在获得明确允许后分享。"],
      ["公开透明", "如实说明护理级别与背景，不作夸大。"],
    ],
    cta: "咨询护理选择",
    tagline: "让关怀，如家般温暖。",
    rights: "版权所有。",
  },
  ms: {
    back: "Kembali ke laman utama",
    eyebrow: "Perspektif keluarga",
    title: "Kata-kata yang mencerminkan penjagaan kami.",
    intro:
      "Pratonton cara pengalaman penghuni dan keluarga boleh dipersembahkan dengan mesra, jelas dan dipercayai.",
    sampleTitle: "Testimoni contoh untuk pembentangan pelanggan",
    sampleText:
      "Durian Care Home akan dibuka tidak lama lagi. Ini ialah contoh rekaan untuk pameran—bukan ulasan penghuni yang disahkan. Gantikan dengan maklum balas sebenar selepas pembukaan.",
    reviews: [
      {
        quote:
          "Persekitarannya tenang, cerah dan dirancang dengan teliti. Keluarga kami yakin ibu boleh berasa selamat tanpa kehilangan kebebasannya.",
        person: "Perspektif keluarga contoh",
        topic: "Kehidupan Berbantu",
      },
      {
        quote:
          "Yang paling menonjol ialah keseimbangan penjagaan profesional dengan suasana kediaman yang mesra. Ia tidak terasa seperti institusi.",
        person: "Perspektif keluarga contoh",
        topic: "Penjagaan Bergantung",
      },
      {
        quote:
          "Pilihan bilik yang berbeza memudahkan kami memilih mengikut personaliti, privasi dan keselesaan ayah.",
        person: "Perspektif keluarga contoh",
        topic: "Penginapan",
      },
      {
        quote:
          "Aktiviti, fisioterapi dan ruang konsultasi di bawah satu bumbung akan memudahkan penjagaan harian semua pihak.",
        person: "Perspektif keluarga contoh",
        topic: "Perkhidmatan Kesejahteraan",
      },
      {
        quote:
          "Lokasi Ayer Keroh mudah untuk keluarga kami, dan ruang pelawat yang mesra benar-benar menggalakkan lawatan berkala.",
        person: "Perspektif keluarga contoh",
        topic: "Lokasi & Lawatan",
      },
      {
        quote:
          "Pilihan penjagaan diterangkan dengan jelas dan menjadikan proses perancangan kurang membebankan keluarga kami.",
        person: "Perspektif pertanyaan contoh",
        topic: "Konsultasi Penjagaan",
      },
    ],
    promiseEyebrow: "Janji kami",
    promiseTitle: "Setiap kisah masa depan harus diperoleh.",
    promiseText:
      "Selepas pembukaan, halaman ini hanya patut memaparkan maklum balas sebenar daripada penghuni dan keluarga dengan kebenaran yang jelas.",
    values: [
      ["Disahkan", "Maklum balas daripada pengalaman penjagaan sebenar."],
      ["Dihormati", "Kisah peribadi dikongsi hanya dengan kebenaran."],
      ["Telus", "Tahap dan konteks penjagaan ditunjukkan tanpa keterlaluan."],
    ],
    cta: "Bincang Pilihan Penjagaan",
    tagline: "Penjagaan yang terasa seperti di rumah.",
    rights: "Hak cipta terpelihara.",
  },
} as const;

export default function ReviewsPage() {
  const { language, updateLanguage } = usePageLanguage();
  const t = reviewContent[language];

  return (
    <main className="interior-page reviews-page">
      <InteriorHeader
        language={language}
        back={t.back}
        updateLanguage={updateLanguage}
      />

      <section className="interior-hero reviews-hero">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <span className="gold-rule" />
          <h1>{t.title}</h1>
        </div>
        <div className="interior-hero-copy">
          <p>{t.intro}</p>
        </div>
      </section>

      <aside className="sample-review-notice" aria-label={t.sampleTitle}>
        <span aria-hidden="true">i</span>
        <div>
          <strong>{t.sampleTitle}</strong>
          <p>{t.sampleText}</p>
        </div>
      </aside>

      <section className="reviews-grid">
        {t.reviews.map((review, index) => (
          <article className="review-card" key={`${review.topic}-${index}`}>
            <div className="review-card-top">
              <span>0{index + 1}</span>
              <span aria-hidden="true">“</span>
            </div>
            <blockquote>{review.quote}</blockquote>
            <div className="review-attribution">
              <strong>{review.person}</strong>
              <span>{review.topic}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="review-promise section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">{t.promiseEyebrow}</p>
            <h2>{t.promiseTitle}</h2>
          </div>
          <p>{t.promiseText}</p>
        </div>
        <div className="review-values">
          {t.values.map(([title, description], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <a
          className="button button-dark"
          href={sitePath(`/?book=visit&lang=${language}`)}
        >
          {t.cta}
          <span aria-hidden="true">→</span>
        </a>
      </section>

      <InteriorFooter
        language={language}
        tagline={t.tagline}
        rights={t.rights}
      />
    </main>
  );
}

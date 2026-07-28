"use client";

import { FormEvent, useEffect, useState } from "react";

type Language = "en" | "zh" | "ms";

const content = {
  en: {
    nav: ["About", "Care Services", "Accommodation", "Facilities", "Contact"],
    language: "Language",
    book: "Book a Visit",
    visitModal: {
      eyebrow: "Plan your visit",
      title: "Choose your preferred date and time.",
      text: "Select a convenient slot. Our care team will confirm the final appointment with you.",
      date: "Preferred date",
      time: "Preferred time",
      cancel: "Not now",
      continue: "Continue",
      error: "Please select both a date and time.",
    },
    eyebrow: "Opening soon · Ayer Keroh, Melaka",
    heroTitle: "Care that feels like home.",
    heroText:
      "A modern 53-bed aged care residence created around comfort, dignity and everyday wellbeing.",
    explore: "Explore Our Care",
    careTypes: [
      ["Independent Living", "Freedom, connection and peace of mind."],
      ["Assisted Living", "Thoughtful help with everyday routines."],
      ["Dependent Care", "Attentive support for higher care needs."],
      ["Day Care", "A welcoming day programme for the community."],
    ],
    introEyebrow: "A different kind of aged care",
    introTitle: "Purpose-built for living well.",
    introText:
      "Durian Care Home is a premium four-storey residence designed to support healthy ageing. Natural light, barrier-free spaces and a warm residential atmosphere come together so every resident can feel secure, respected and at home.",
    stats: [
      ["53", "resident beds"],
      ["4", "purpose-built storeys"],
      ["4", "care options"],
      ["1", "connected community"],
    ],
    careEyebrow: "Care services",
    careTitle: "The right support, at the right time.",
    careIntro:
      "Every person’s needs are different. Our care options are designed to provide an appropriate balance of independence, assistance and reassurance.",
    learn: "Learn about this care",
    residenceEyebrow: "Accommodation",
    residenceTitle: "Comfortable spaces to call your own.",
    residenceText:
      "Choose from single, twin or shared nursing rooms, each planned around safety, accessibility, natural light and a calm sense of privacy.",
    roomTypes: [
      ["Single Room", "A private personal space for rest and familiar routines."],
      ["Twin Room", "Comfortable companionship with room to feel at home."],
      ["Shared Room", "A supportive, social setting with attentive care nearby."],
    ],
    communityEyebrow: "Community healthcare hub",
    communityTitle: "Care that reaches beyond our residence.",
    communityText:
      "Durian Care Home is designed to support residents, families and the surrounding community. Dedicated wellbeing spaces make it easier to stay active, seek guidance and manage health with confidence.",
    facilities: [
      "Training room",
      "Activities hall",
      "Consultation room",
      "Physiotherapy room",
      "Barrier-free access",
      "Communal living spaces",
      "Landscaped surroundings",
      "Visitor parking",
    ],
    highlightsEyebrow: "Our environment",
    highlightsTitle: "Premium care, grounded in everyday comfort.",
    highlights: [
      [
        "Designed for dignity",
        "Elderly-friendly planning supports safer movement, independence and confidence.",
      ],
      [
        "Life in natural light",
        "Bright interiors and landscaped surroundings create a calm, uplifting atmosphere.",
      ],
      [
        "Close to medical services",
        "Conveniently located in Ayer Keroh with hospitals and healthcare services nearby.",
      ],
    ],
    contactEyebrow: "Opening soon",
    contactTitle: "Begin the conversation with our care team.",
    contactText:
      "Register your interest to receive opening updates, arrange an introductory visit and discuss the most suitable care option for your family.",
    addressLabel: "Our location",
    address: "82, Jalan Bukit Beruang 1, Ayer Keroh, 75450 Melaka",
    form: {
      name: "Your name",
      phone: "Phone number",
      email: "Email address",
      interest: "I am interested in",
      select: "Select a care option",
      message: "How can we help?",
      submit: "Register Interest",
      successTitle: "Thank you for your interest.",
      successText:
        "Your details have been noted in this website demonstration. The live enquiry destination will be connected before launch.",
      reset: "Send another enquiry",
    },
    faqEyebrow: "Helpful answers",
    faqTitle: "Planning ahead for care.",
    faqs: [
      [
        "When will Durian Care Home open?",
        "Durian Care Home is opening soon. Register your interest and our team will share opening and visit information when available.",
      ],
      [
        "What levels of care will be available?",
        "The residence is planned to offer independent living, assisted living, dependent care and day care services.",
      ],
      [
        "Can families visit the residence?",
        "Yes. Dedicated visitor parking and welcoming communal spaces are part of the residence design. Introductory visits will be arranged closer to opening.",
      ],
    ],
    footerLine: "A modern aged care residence in Ayer Keroh, Melaka.",
    rights: "All rights reserved.",
  },
  zh: {
    nav: ["关于我们", "护理服务", "住宿环境", "设施配套", "联系我们"],
    language: "语言",
    book: "预约参观",
    visitModal: {
      eyebrow: "安排参观",
      title: "选择您方便的日期与时间。",
      text: "请选择理想时段。我们的护理团队稍后会与您确认最终预约。",
      date: "理想日期",
      time: "理想时间",
      cancel: "暂时不要",
      continue: "下一步",
      error: "请选择日期与时间。",
    },
    eyebrow: "即将开幕 · 马六甲爱极乐",
    heroTitle: "让关怀，如家般温暖。",
    heroText:
      "一所拥有53个床位的现代化长者护理居所，以舒适、尊严与日常身心健康为核心。",
    explore: "了解护理服务",
    careTypes: [
      ["独立生活", "保有自主生活，同时享有安心与陪伴。"],
      ["协助式生活", "在日常生活中获得贴心适度的协助。"],
      ["全依赖护理", "为较高护理需求提供细致周到的支持。"],
      ["日间护理", "为社区长者提供温暖充实的日间活动。"],
    ],
    introEyebrow: "不一样的长者护理",
    introTitle: "为自在而有尊严的生活精心打造。",
    introText:
      "Durian Care Home 是一所专为健康老龄化而设计的四层楼高端护理居所。自然采光、无障碍空间与温馨居家氛围相互结合，让每位住户都能感到安全、被尊重，并真正拥有家的归属感。",
    stats: [
      ["53", "个住户床位"],
      ["4", "层专业护理空间"],
      ["4", "种护理选择"],
      ["1", "个紧密社区"],
    ],
    careEyebrow: "护理服务",
    careTitle: "在合适的时候，给予合适的照顾。",
    careIntro:
      "每个人的需要都不一样。我们的护理方案在独立生活、日常协助与安心照护之间取得适当平衡。",
    learn: "了解此护理服务",
    residenceEyebrow: "住宿环境",
    residenceTitle: "舒适安心，成为属于自己的家。",
    residenceText:
      "提供单人房、双人房及共享护理房。每个空间均以安全、无障碍、自然采光及个人隐私为设计重点。",
    roomTypes: [
      ["单人房", "保有个人空间，让熟悉的生活节奏自然延续。"],
      ["双人房", "在舒适环境中享有陪伴，也保留家的感觉。"],
      ["共享护理房", "温暖的社交环境，身边随时有贴心照护。"],
    ],
    communityEyebrow: "社区医疗枢纽",
    communityTitle: "让关怀从居所延伸至社区。",
    communityText:
      "Durian Care Home 不仅服务住户，也支持家属及周边社区。完善的健康空间有助于保持活力、获得专业建议，并更有信心地管理健康。",
    facilities: [
      "培训室",
      "活动礼堂",
      "咨询室",
      "物理治疗室",
      "无障碍通道",
      "公共生活空间",
      "园景绿化环境",
      "访客专用停车位",
    ],
    highlightsEyebrow: "我们的环境",
    highlightsTitle: "专业护理，融入日常舒适生活。",
    highlights: [
      ["以尊严为本", "长者友善的规划，让行动更安全，也保有自主与信心。"],
      ["生活在自然光里", "明亮室内与园景环境，营造宁静而积极的生活氛围。"],
      ["邻近医疗服务", "坐落于爱极乐，附近设有医院及各类医疗设施。"],
    ],
    contactEyebrow: "即将开幕",
    contactTitle: "与我们的护理团队展开第一次交流。",
    contactText:
      "登记您的兴趣，即可接收开幕消息、安排初步参观，并与我们讨论适合家人的护理选择。",
    addressLabel: "我们的地点",
    address: "82, Jalan Bukit Beruang 1, Ayer Keroh, 75450 Melaka",
    form: {
      name: "您的姓名",
      phone: "联系电话",
      email: "电子邮箱",
      interest: "感兴趣的服务",
      select: "选择护理方案",
      message: "我们可以如何协助？",
      submit: "登记兴趣",
      successTitle: "感谢您的关注。",
      successText: "您的资料已记录在网站示范中；正式上线前将连接实际的咨询系统。",
      reset: "再次提交咨询",
    },
    faqEyebrow: "常见问题",
    faqTitle: "提前为护理生活做好规划。",
    faqs: [
      [
        "Durian Care Home 什么时候开幕？",
        "中心即将开幕。登记兴趣后，我们会在资料确定时通知您开幕及参观安排。",
      ],
      [
        "将提供哪些护理级别？",
        "中心计划提供独立生活、协助式生活、全依赖护理及日间护理服务。",
      ],
      [
        "家属可以前来参观吗？",
        "可以。中心设有访客停车位及公共空间，并将在开幕前安排介绍参观。",
      ],
    ],
    footerLine: "位于马六甲爱极乐的现代化长者护理居所。",
    rights: "版权所有。",
  },
  ms: {
    nav: [
      "Tentang Kami",
      "Perkhidmatan",
      "Penginapan",
      "Kemudahan",
      "Hubungi Kami",
    ],
    language: "Bahasa",
    book: "Tempah Lawatan",
    visitModal: {
      eyebrow: "Rancang lawatan",
      title: "Pilih tarikh dan masa pilihan anda.",
      text: "Pilih waktu yang sesuai. Pasukan penjagaan kami akan mengesahkan temu janji akhir bersama anda.",
      date: "Tarikh pilihan",
      time: "Masa pilihan",
      cancel: "Bukan sekarang",
      continue: "Teruskan",
      error: "Sila pilih tarikh dan masa.",
    },
    eyebrow: "Akan dibuka · Ayer Keroh, Melaka",
    heroTitle: "Penjagaan yang terasa seperti di rumah.",
    heroText:
      "Kediaman penjagaan warga emas moden dengan 53 katil, dibina berteraskan keselesaan, maruah dan kesejahteraan harian.",
    explore: "Terokai Penjagaan Kami",
    careTypes: [
      ["Kehidupan Berdikari", "Kebebasan, hubungan dan ketenangan fikiran."],
      ["Kehidupan Berbantu", "Bantuan prihatin untuk rutin seharian."],
      ["Penjagaan Bergantung", "Sokongan teliti untuk keperluan lebih tinggi."],
      ["Penjagaan Harian", "Program harian mesra untuk komuniti."],
    ],
    introEyebrow: "Pendekatan berbeza",
    introTitle: "Dibina khas untuk kehidupan yang lebih baik.",
    introText:
      "Durian Care Home ialah kediaman premium empat tingkat yang direka untuk menyokong penuaan sihat. Cahaya semula jadi, ruang bebas halangan dan suasana kediaman yang mesra membantu setiap penghuni berasa selamat, dihormati dan seperti di rumah.",
    stats: [
      ["53", "katil penghuni"],
      ["4", "tingkat khas"],
      ["4", "pilihan penjagaan"],
      ["1", "komuniti bersama"],
    ],
    careEyebrow: "Perkhidmatan penjagaan",
    careTitle: "Sokongan yang tepat, pada masa yang tepat.",
    careIntro:
      "Keperluan setiap individu berbeza. Pilihan kami mengimbangi kebebasan, bantuan dan keyakinan dengan sewajarnya.",
    learn: "Ketahui penjagaan ini",
    residenceEyebrow: "Penginapan",
    residenceTitle: "Ruang selesa untuk dipanggil rumah.",
    residenceText:
      "Pilih bilik seorang, berkembar atau penjagaan berkongsi, semuanya dirancang untuk keselamatan, akses mudah, cahaya semula jadi dan privasi.",
    roomTypes: [
      ["Bilik Seorang", "Ruang peribadi untuk berehat dan mengekalkan rutin."],
      ["Bilik Berkembar", "Teman yang selesa dengan ruang untuk berasa di rumah."],
      ["Bilik Berkongsi", "Suasana sosial dengan penjagaan sentiasa berdekatan."],
    ],
    communityEyebrow: "Hab kesihatan komuniti",
    communityTitle: "Penjagaan yang melangkaui kediaman kami.",
    communityText:
      "Durian Care Home direka untuk penghuni, keluarga dan komuniti sekitar. Ruang kesejahteraan khusus memudahkan semua untuk kekal aktif, mendapatkan panduan dan mengurus kesihatan dengan yakin.",
    facilities: [
      "Bilik latihan",
      "Dewan aktiviti",
      "Bilik konsultasi",
      "Bilik fisioterapi",
      "Akses bebas halangan",
      "Ruang kehidupan bersama",
      "Persekitaran berlandskap",
      "Parkir pelawat",
    ],
    highlightsEyebrow: "Persekitaran kami",
    highlightsTitle: "Penjagaan premium dalam keselesaan harian.",
    highlights: [
      [
        "Direka untuk maruah",
        "Perancangan mesra warga emas menyokong pergerakan, kebebasan dan keyakinan.",
      ],
      [
        "Hidup dalam cahaya semula jadi",
        "Ruang cerah dan landskap hijau mewujudkan suasana tenang dan positif.",
      ],
      [
        "Berdekatan khidmat perubatan",
        "Lokasi mudah di Ayer Keroh berhampiran hospital dan perkhidmatan kesihatan.",
      ],
    ],
    contactEyebrow: "Akan dibuka",
    contactTitle: "Mulakan perbualan bersama pasukan penjagaan kami.",
    contactText:
      "Daftar minat untuk menerima berita pembukaan, mengatur lawatan awal dan berbincang tentang pilihan penjagaan yang sesuai untuk keluarga anda.",
    addressLabel: "Lokasi kami",
    address: "82, Jalan Bukit Beruang 1, Ayer Keroh, 75450 Melaka",
    form: {
      name: "Nama anda",
      phone: "Nombor telefon",
      email: "Alamat e-mel",
      interest: "Saya berminat dengan",
      select: "Pilih penjagaan",
      message: "Bagaimana kami boleh membantu?",
      submit: "Daftar Minat",
      successTitle: "Terima kasih atas minat anda.",
      successText:
        "Butiran anda telah direkodkan dalam demonstrasi ini. Destinasi pertanyaan sebenar akan disambungkan sebelum pelancaran.",
      reset: "Hantar pertanyaan lain",
    },
    faqEyebrow: "Jawapan berguna",
    faqTitle: "Merancang lebih awal untuk penjagaan.",
    faqs: [
      [
        "Bilakah Durian Care Home akan dibuka?",
        "Durian Care Home akan dibuka tidak lama lagi. Daftar minat dan pasukan kami akan berkongsi maklumat pembukaan dan lawatan.",
      ],
      [
        "Apakah tahap penjagaan yang tersedia?",
        "Kediaman ini dirancang menawarkan kehidupan berdikari, kehidupan berbantu, penjagaan bergantung dan penjagaan harian.",
      ],
      [
        "Bolehkah keluarga melawat kediaman ini?",
        "Ya. Parkir pelawat dan ruang komuniti disediakan. Lawatan pengenalan akan diatur menjelang pembukaan.",
      ],
    ],
    footerLine: "Kediaman penjagaan warga emas moden di Ayer Keroh, Melaka.",
    rights: "Hak cipta terpelihara.",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [visitError, setVisitError] = useState("");
  const [minVisitDate, setMinVisitDate] = useState("");
  const t = content[language];

  const sections = ["about", "care", "accommodation", "facilities", "contact"];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const day = String(tomorrow.getDate()).padStart(2, "0");
    setMinVisitDate(`${year}-${month}-${day}`);

    if (new URLSearchParams(window.location.search).get("book") === "visit") {
      setVisitModalOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!visitModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setVisitModalOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [visitModalOpen]);

  function openVisitModal() {
    setMenuOpen(false);
    setVisitError("");
    setVisitModalOpen(true);
  }

  function continueVisitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!visitDate || !visitTime) {
      setVisitError(t.visitModal.error);
      return;
    }

    const query = new URLSearchParams({
      date: visitDate,
      time: visitTime,
      lang: language,
    });
    window.location.href = `/book-visit?${query.toString()}`;
  }

  function selectLanguage(next: Language) {
    setLanguage(next);
    setMenuOpen(false);
    document.documentElement.lang =
      next === "zh" ? "zh-Hans" : next === "ms" ? "ms" : "en";
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Durian Care Home">
          <span className="brand-mark" aria-hidden="true">
            <span>D</span>
          </span>
          <span className="brand-name">Durian Care Home</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "primary-nav open" : "primary-nav"}>
          {t.nav.map((item, index) => (
            <a
              key={sections[index]}
              href={`#${sections[index]}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switcher" aria-label={t.language}>
            {(["en", "zh", "ms"] as Language[]).map((code) => (
              <button
                className={language === code ? "active" : ""}
                key={code}
                type="button"
                onClick={() => selectLanguage(code)}
                aria-pressed={language === code}
              >
                {code === "en" ? "EN" : code === "zh" ? "中文" : "BM"}
              </button>
            ))}
          </div>
          <button
            className="button button-dark header-cta"
            type="button"
            onClick={openVisitModal}
          >
            {t.book}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <span className="gold-rule" />
          <h1>{t.heroTitle}</h1>
          <p className="hero-lead">{t.heroText}</p>
          <div className="hero-actions">
            <button
              className="button button-dark"
              type="button"
              onClick={openVisitModal}
            >
              {t.book}
            </button>
            <a className="button button-outline" href="#care">
              {t.explore}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/images/hero-residence.webp"
            alt="A welcoming modern aged care residence surrounded by tropical landscaping"
          />
          <div className="hero-caption">
            <span>53</span>
            <small>{language === "zh" ? "个床位" : language === "ms" ? "katil" : "beds"}</small>
          </div>
        </div>
        <div className="care-ribbon" aria-label={t.careEyebrow}>
          {t.careTypes.map(([title], index) => (
            <a href="#care" key={title}>
              <span className="ribbon-number">0{index + 1}</span>
              <strong>{title}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="intro-section section" id="about">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">{t.introEyebrow}</p>
            <h2>{t.introTitle}</h2>
          </div>
          <p>{t.introText}</p>
        </div>
        <div className="stats-grid">
          {t.stats.map(([number, label]) => (
            <div className="stat" key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="care-section section" id="care">
        <div className="section-heading centered-heading">
          <p className="eyebrow">{t.careEyebrow}</p>
          <h2>{t.careTitle}</h2>
          <p>{t.careIntro}</p>
        </div>
        <div className="care-grid">
          {t.careTypes.map(([title, description], index) => (
            <article className="care-card" key={title}>
              <div className="care-card-top">
                <span>0{index + 1}</span>
                <i aria-hidden="true">✦</i>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#contact">
                {t.learn} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="residence-section section" id="accommodation">
        <div className="residence-image">
          <img
            src="/images/lounge-community.webp"
            alt="Residents and a caregiver enjoying a light-filled communal lounge"
          />
          <div className="image-note">
            <span>53</span>
            <small>{language === "zh" ? "床位高端护理居所" : language === "ms" ? "katil kediaman premium" : "bed premium residence"}</small>
          </div>
        </div>
        <div className="residence-copy">
          <p className="eyebrow">{t.residenceEyebrow}</p>
          <h2>{t.residenceTitle}</h2>
          <p>{t.residenceText}</p>
          <div className="room-list">
            {t.roomTypes.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="community-section section" id="facilities">
        <div className="community-copy">
          <p className="eyebrow">{t.communityEyebrow}</p>
          <h2>{t.communityTitle}</h2>
          <p>{t.communityText}</p>
          <div className="facility-grid">
            {t.facilities.map((facility, index) => (
              <div key={facility}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {facility}
              </div>
            ))}
          </div>
        </div>
        <div className="community-image">
          <img
            src="/images/physiotherapy-care.webp"
            alt="A physiotherapist supporting an older adult in a bright wellbeing room"
          />
        </div>
      </section>

      <section className="highlights-section section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">{t.highlightsEyebrow}</p>
            <h2>{t.highlightsTitle}</h2>
          </div>
          <p className="address-line">
            <span>{t.addressLabel}</span>
            {t.address}
          </p>
        </div>
        <div className="highlight-grid">
          {t.highlights.map(([title, description], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">{t.contactEyebrow}</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <address>
            <span>{t.addressLabel}</span>
            {t.address}
          </address>
        </div>
        <div className="interest-card">
          {submitted ? (
            <div className="success-state" role="status">
              <span aria-hidden="true">✓</span>
              <h3>{t.form.successTitle}</h3>
              <p>{t.form.successText}</p>
              <button type="button" onClick={() => setSubmitted(false)}>
                {t.form.reset}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <label>
                  <span>{t.form.name}</span>
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  <span>{t.form.phone}</span>
                  <input name="phone" required autoComplete="tel" inputMode="tel" />
                </label>
              </div>
              <label>
                <span>{t.form.email}</span>
                <input name="email" required type="email" autoComplete="email" />
              </label>
              <label>
                <span>{t.form.interest}</span>
                <select name="interest" required defaultValue="">
                  <option value="" disabled>
                    {t.form.select}
                  </option>
                  {t.careTypes.map(([title]) => (
                    <option key={title}>{title}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>{t.form.message}</span>
                <textarea name="message" rows={3} />
              </label>
              <button className="button button-gold" type="submit">
                {t.form.submit}
                <span aria-hidden="true">→</span>
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="faq-section section">
        <div className="section-heading centered-heading">
          <p className="eyebrow">{t.faqEyebrow}</p>
          <h2>{t.faqTitle}</h2>
        </div>
        <div className="faq-list">
          {t.faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            <span>D</span>
          </span>
          <div>
            <strong>Durian Care Home</strong>
            <p>{t.footerLine}</p>
          </div>
        </div>
        <div className="footer-links">
          {t.nav.map((item, index) => (
            <a key={sections[index]} href={`#${sections[index]}`}>
              {item}
            </a>
          ))}
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Durian Care Home. {t.rights}
        </p>
      </footer>

      {visitModalOpen && (
        <div
          className="visit-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setVisitModalOpen(false);
          }}
        >
          <section
            className="visit-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="visit-modal-title"
          >
            <button
              className="visit-modal-close"
              type="button"
              aria-label="Close"
              onClick={() => setVisitModalOpen(false)}
            >
              ×
            </button>
            <p className="eyebrow">{t.visitModal.eyebrow}</p>
            <h2 id="visit-modal-title">{t.visitModal.title}</h2>
            <p className="visit-modal-text">{t.visitModal.text}</p>

            <form onSubmit={continueVisitBooking}>
              <div className="visit-slot-grid">
                <label>
                  <span>{t.visitModal.date}</span>
                  <input
                    type="date"
                    min={minVisitDate}
                    value={visitDate}
                    onChange={(event) => {
                      setVisitDate(event.target.value);
                      setVisitError("");
                    }}
                    required
                  />
                </label>
                <label>
                  <span>{t.visitModal.time}</span>
                  <input
                    type="time"
                    value={visitTime}
                    onChange={(event) => {
                      setVisitTime(event.target.value);
                      setVisitError("");
                    }}
                    required
                  />
                </label>
              </div>

              {visitError && (
                <p className="visit-modal-error" role="alert">
                  {visitError}
                </p>
              )}

              <div className="visit-modal-actions">
                <button
                  type="button"
                  className="visit-cancel"
                  onClick={() => setVisitModalOpen(false)}
                >
                  {t.visitModal.cancel}
                </button>
                <button type="submit" className="button button-dark">
                  {t.visitModal.continue}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}

"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Language = "en" | "zh" | "ms";

const bookingContent = {
  en: {
    back: "Back to home",
    eyebrow: "Book a visit",
    title: "Tell us a little more about your visit.",
    intro:
      "Your preferred date and time are shown below. Complete your details and our care team will contact you to confirm availability.",
    preferred: "Preferred appointment",
    date: "Date",
    time: "Time",
    status: "Pending confirmation",
    change: "Change date or time",
    missing: "Please select a date and time before continuing.",
    selectSlot: "Select a visit time",
    fields: {
      name: "Full name",
      phone: "Phone number",
      email: "Email address (optional)",
      visitors: "Number of visitors",
      notes: "Anything we should know? (optional)",
      notesPlaceholder:
        "For example, the care option you are considering or any accessibility needs.",
      submit: "Submit Visit Request",
    },
    privacy:
      "Your information will only be used to arrange this visit and discuss Durian Care Home services.",
    successTitle: "Your visit request is ready.",
    successText:
      "Thank you. The booking destination will be connected before the public launch; no personal information has been stored in this demonstration.",
    returnHome: "Return to Durian Care Home",
  },
  zh: {
    back: "返回主页",
    eyebrow: "预约参观",
    title: "请告诉我们更多参观资料。",
    intro:
      "您选择的日期与时间显示如下。填写资料后，我们的护理团队将与您联系并确认预约。",
    preferred: "理想预约时间",
    date: "日期",
    time: "时间",
    status: "等待确认",
    change: "更改日期或时间",
    missing: "请先选择参观日期与时间。",
    selectSlot: "选择参观时间",
    fields: {
      name: "姓名",
      phone: "联系电话",
      email: "电子邮箱（选填）",
      visitors: "参观人数",
      notes: "其他资料（选填）",
      notesPlaceholder: "例如您考虑的护理方案，或任何无障碍需求。",
      submit: "提交参观申请",
    },
    privacy: "您的资料仅用于安排此次参观及介绍 Durian Care Home 的服务。",
    successTitle: "您的参观申请已准备完成。",
    successText:
      "谢谢。正式公开前将连接实际预约系统；此示范网站并未储存您的个人资料。",
    returnHome: "返回 Durian Care Home",
  },
  ms: {
    back: "Kembali ke laman utama",
    eyebrow: "Tempah lawatan",
    title: "Beritahu kami sedikit lagi tentang lawatan anda.",
    intro:
      "Tarikh dan masa pilihan anda dipaparkan di bawah. Lengkapkan butiran dan pasukan penjagaan kami akan menghubungi anda untuk pengesahan.",
    preferred: "Temu janji pilihan",
    date: "Tarikh",
    time: "Masa",
    status: "Menunggu pengesahan",
    change: "Tukar tarikh atau masa",
    missing: "Sila pilih tarikh dan masa sebelum meneruskan.",
    selectSlot: "Pilih waktu lawatan",
    fields: {
      name: "Nama penuh",
      phone: "Nombor telefon",
      email: "Alamat e-mel (pilihan)",
      visitors: "Bilangan pelawat",
      notes: "Maklumat tambahan (pilihan)",
      notesPlaceholder:
        "Contohnya pilihan penjagaan yang dipertimbangkan atau keperluan akses.",
      submit: "Hantar Permintaan Lawatan",
    },
    privacy:
      "Maklumat anda hanya akan digunakan untuk mengatur lawatan ini dan membincangkan perkhidmatan Durian Care Home.",
    successTitle: "Permintaan lawatan anda sudah disediakan.",
    successText:
      "Terima kasih. Destinasi tempahan akan disambungkan sebelum pelancaran awam; maklumat peribadi anda tidak disimpan dalam demonstrasi ini.",
    returnHome: "Kembali ke Durian Care Home",
  },
} as const;

export default function BookVisitPage() {
  const [language, setLanguage] = useState<Language>("en");
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = bookingContent[language];

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const requestedLanguage = query.get("lang");
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
    setVisitDate(query.get("date") ?? "");
    setVisitTime(query.get("time") ?? "");
    setLoaded(true);
  }, []);

  const formattedDate = useMemo(() => {
    if (!visitDate) return "—";
    const [year, month, day] = visitDate.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const locale =
      language === "zh" ? "zh-CN" : language === "ms" ? "ms-MY" : "en-MY";
    return new Intl.DateTimeFormat(locale, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }, [language, visitDate]);

  function updateLanguage(next: Language) {
    setLanguage(next);
    document.documentElement.lang =
      next === "zh" ? "zh-Hans" : next === "ms" ? "ms" : "en";
    const query = new URLSearchParams(window.location.search);
    query.set("lang", next);
    window.history.replaceState(null, "", `${window.location.pathname}?${query}`);
  }

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!loaded) {
    return <main className="booking-loading" aria-label="Loading" />;
  }

  return (
    <main className="booking-page">
      <header className="booking-header">
        <a className="brand" href="/" aria-label="Durian Care Home">
          <span className="brand-mark" aria-hidden="true">
            <span>D</span>
          </span>
          <span className="brand-name">Durian Care Home</span>
        </a>
        <div className="booking-header-actions">
          <a href="/">{t.back}</a>
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

      {!visitDate || !visitTime ? (
        <section className="booking-missing">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.missing}</h1>
          <a className="button button-dark" href="/?book=visit">
            {t.selectSlot}
          </a>
        </section>
      ) : submitted ? (
        <section className="booking-success">
          <span aria-hidden="true">✓</span>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.successTitle}</h1>
          <p>{t.successText}</p>
          <div className="booking-confirmed-slot">
            <strong>{formattedDate}</strong>
            <span>{visitTime}</span>
          </div>
          <a className="button button-dark" href="/">
            {t.returnHome}
          </a>
        </section>
      ) : (
        <div className="booking-layout">
          <section className="booking-summary">
            <a className="booking-back" href="/">
              <span aria-hidden="true">←</span> {t.back}
            </a>
            <div>
              <p className="eyebrow">{t.preferred}</p>
              <h2>{formattedDate}</h2>
              <dl>
                <div>
                  <dt>{t.date}</dt>
                  <dd>{formattedDate}</dd>
                </div>
                <div>
                  <dt>{t.time}</dt>
                  <dd>{visitTime}</dd>
                </div>
              </dl>
              <p className="booking-status">
                <span aria-hidden="true" />
                {t.status}
              </p>
              <a className="booking-change" href="/?book=visit">
                {t.change}
              </a>
            </div>
            <address>
              82, Jalan Bukit Beruang 1
              <br />
              Ayer Keroh, 75450 Melaka
            </address>
          </section>

          <section className="booking-form-panel">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="booking-intro">{t.intro}</p>

            <form onSubmit={submitBooking}>
              <label>
                <span>{t.fields.name}</span>
                <input name="name" required autoComplete="name" />
              </label>
              <div className="field-row">
                <label>
                  <span>{t.fields.phone}</span>
                  <input
                    name="phone"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </label>
                <label>
                  <span>{t.fields.email}</span>
                  <input name="email" type="email" autoComplete="email" />
                </label>
              </div>
              <label>
                <span>{t.fields.visitors}</span>
                <select name="visitors" defaultValue="1">
                  {[1, 2, 3, 4, 5, 6].map((number) => (
                    <option value={number} key={number}>
                      {number}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>{t.fields.notes}</span>
                <textarea
                  name="notes"
                  rows={4}
                  placeholder={t.fields.notesPlaceholder}
                />
              </label>

              <p className="booking-privacy">{t.privacy}</p>
              <button className="button button-gold" type="submit">
                {t.fields.submit}
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}

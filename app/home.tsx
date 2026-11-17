import type { Metadata } from "next";
import type { Content } from "./content";
import ThemeToggle from "./theme-toggle";

const SITE = "https://dungphanx.github.io";
const EMAIL = "mailto:dungphanx@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/dungphanx/";

export function homeMetadata(t: Content): Metadata {
  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: t.lang === "en" ? `${SITE}/` : `${SITE}/vi/`,
      languages: { en: `${SITE}/`, vi: `${SITE}/vi/`, "x-default": `${SITE}/` },
    },
  };
}

export default function Home({ t }: { t: Content }) {
  return (
    <div lang={t.lang}>
      {t.lang === "vi" && (
        // General Sans lacks many Vietnamese glyphs (ặ, ộ, ữ...); React hoists this into <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap"
          precedence="default"
        />
      )}
      <a className="skip" href="#main">
        {t.skip}
      </a>

      <header className="nav">
        <div className="container nav__inner">
          <a className="brand" href="#top" aria-label={t.backToTop}>
            Dung Phan
          </a>
          <div className="nav__right">
            <nav className="nav__links" aria-label={t.navLabel}>
              <a href="#experience">{t.nav.experience}</a>
              <a href="#contact">{t.nav.contact}</a>
              <a className="nav__email" href={EMAIL}>
                {t.nav.email}
              </a>
            </nav>
            <a
              className="lang-switch"
              href={t.switchTo.href}
              hrefLang={t.switchTo.lang}
              lang={t.switchTo.lang}
              aria-label={t.switchTo.name}
            >
              {t.switchTo.label}
            </a>
            <ThemeToggle label={t.themeLabel} />
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="container">
            <h1>Dung Phan</h1>
            <p className="hero__meta">{t.role}</p>
            <p className="lead hero__lead">{t.lead}</p>
            <div className="hero__actions">
              <a className="btn" href={EMAIL}>
                {t.emailMe}
              </a>
              <a className="quiet" href={LINKEDIN} rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <h2>{t.about.heading}</h2>
            <div className="about">
              {t.about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p className="about__focus">{t.about.focus}</p>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <h2>{t.experience.heading}</h2>
            <ol className="jobs">
              {t.experience.jobs.map((job) => (
                <li className="job" key={job.role + job.years}>
                  <div className="job__main">
                    <p className="job__role">{job.role}</p>
                    <p className="job__org">{job.org}</p>
                  </div>
                  <span className="job__year num">{job.years}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <h2>{t.contact.heading}</h2>
            <a className="contact__email" href={EMAIL}>
              dungphanx@gmail.com
            </a>
            <ul className="contact__links">
              <li>
                <a href={LINKEDIN} rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/dungphanx" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="tel:+84933842933">+84 933 842 933</a>
              </li>
            </ul>
            <p className="contact__note">{t.contact.note}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>Dung Phan</span>
          <span>{t.city}</span>
        </div>
      </footer>
    </div>
  );
}

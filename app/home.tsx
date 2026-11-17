import type { Metadata } from "next";
import type { Content } from "./content";
import { Icon } from "./icons";
import Rail, { type RailItem } from "./rail";
import ThemeToggle from "./theme-toggle";

const SITE = "https://dungphanx.github.io";
const EMAIL = "mailto:dungphanx@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/dungphanx/";
const GITHUB = "https://github.com/dungphanx";
const PHONE = "tel:+84933842933";

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
  const sections: RailItem[] = [
    { id: "top", label: t.nav.home, icon: "home" },
    { id: "about", label: t.nav.about, icon: "user" },
    { id: "experience", label: t.nav.experience, icon: "briefcase" },
    { id: "contact", label: t.nav.contact, icon: "mail" },
  ];

  return (
    <div className="shell" lang={t.lang}>
      <a className="skip" href="#main">
        {t.skip}
      </a>

      <aside className="rail">
        <div className="rail__tools">
          <ThemeToggle label={t.themeLabel} />
          <a
            className="lang-switch"
            href={t.switchTo.href}
            hrefLang={t.switchTo.lang}
            lang={t.switchTo.lang}
            aria-label={t.switchTo.name}
          >
            {t.switchTo.label}
          </a>
        </div>
        <Rail items={sections} label={t.navLabel} />
      </aside>

      <aside className="sidebar" aria-label={t.profile.label}>
        <div className="sidebar__id">
          <img
            className="avatar"
            src="/avatar.jpg"
            alt="Dung Phan"
            width={160}
            height={160}
          />
          <div>
            <p className="sidebar__name">Dung Phan</p>
            <p className="sidebar__role">{t.shortRole}</p>
          </div>
          <ul className="socials">
            <li>
              <a className="social" href={EMAIL} aria-label="Email">
                <Icon name="mail" size={16} />
              </a>
            </li>
            <li>
              <a className="social" href={LINKEDIN} rel="noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={16} />
              </a>
            </li>
            <li>
              <a className="social" href={GITHUB} rel="noreferrer" aria-label="GitHub">
                <Icon name="github" size={16} />
              </a>
            </li>
          </ul>
        </div>

        <dl className="facts">
          {t.profile.facts.map((f) => (
            <div className="fact" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="side-block">
          <h2 className="side-heading">{t.profile.languagesHeading}</h2>
          <ul className="langs">
            {t.profile.languages.map((l) => (
              <li key={l.name}>
                <span>{l.name}</span>
                <span className="langs__level">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="side-block">
          <h2 className="side-heading">{t.profile.skillsHeading}</h2>
          {t.profile.skills.map((g) => (
            <div className="skill-group" key={g.name}>
              <h3 className="skill-group__name">{g.name}</h3>
              <ul className="tags">
                {g.items.map((s) => (
                  <li className="tag" key={s}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      <main className="main" id="main">
        <section className="card hero" id="top">
          <h1>
            {t.hello}
            <span className="hero__line">
              <span className="hero__accent">{t.heroLine.accent}</span>
              {t.heroLine.rest}
            </span>
          </h1>
          <p className="hero__lead">{t.lead}</p>
          <div className="hero__actions">
            <a className="btn" href={EMAIL}>
              {t.emailMe}
            </a>
            <a className="btn btn--ghost" href={LINKEDIN} rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>

        <section className="block" id="about" aria-labelledby="about-h">
          <h2 className="block__title" id="about-h">
            {t.about.heading}
          </h2>
          <div className="card prose">
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="block" id="experience" aria-labelledby="experience-h">
          <h2 className="block__title" id="experience-h">
            {t.experience.heading}
          </h2>
          <ol className="card timeline">
            {t.experience.jobs.map((job) => (
              <li className="job" key={job.role + job.years}>
                <span className="job__year num">{job.years}</span>
                <p className="job__role">{job.role}</p>
                <p className="job__org">{job.org}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="block" id="contact" aria-labelledby="contact-h">
          <h2 className="block__title" id="contact-h">
            {t.contact.heading}
          </h2>
          <div className="contact">
            <a className="card contact__item" href={EMAIL}>
              <span className="contact__icon">
                <Icon name="mail" />
              </span>
              <span className="contact__label">Email</span>
              <span className="contact__value">dungphanx@gmail.com</span>
            </a>
            <a className="card contact__item" href={LINKEDIN} rel="noreferrer">
              <span className="contact__icon">
                <Icon name="linkedin" />
              </span>
              <span className="contact__label">LinkedIn</span>
              <span className="contact__value">in/dungphanx</span>
            </a>
            <a className="card contact__item" href={GITHUB} rel="noreferrer">
              <span className="contact__icon">
                <Icon name="github" />
              </span>
              <span className="contact__label">GitHub</span>
              <span className="contact__value">dungphanx</span>
            </a>
            <a className="card contact__item" href={PHONE}>
              <span className="contact__icon">
                <Icon name="phone" />
              </span>
              <span className="contact__label">{t.contact.phone}</span>
              <span className="contact__value num">+84 933 842 933</span>
            </a>
          </div>
          <p className="card contact__note">
            <Icon name="pin" />
            <span>{t.contact.note}</span>
          </p>
        </section>

        <footer className="footer">
          <span>© Dung Phan</span>
          <span>{t.city}</span>
        </footer>
      </main>
    </div>
  );
}

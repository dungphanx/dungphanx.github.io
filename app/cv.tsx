import type { Metadata } from "next";
import type { Content } from "./content";
import { contactLinks, SITE } from "./links";
import "./cv.css";

// The CV page is only the source of the PDF; search engines should find the home page instead.
export function cvMetadata(t: Content): Metadata {
  return {
    title: t.cv.title,
    description: t.description,
    robots: { index: false, follow: true },
    alternates: { canonical: t.lang === "en" ? `${SITE}/` : `${SITE}/vi/` },
  };
}

// "https://www.linkedin.com/in/dungphanx/" -> "linkedin.com/in/dungphanx": readable on paper.
function shortUrl(href: string) {
  return href.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "");
}

/** One A4 CV built from the same content as the home page, printed to PDF at build time. */
export default function Cv({ t }: { t: Content }) {
  const home = t.lang === "en" ? "/" : "/vi/";
  return (
    <div className="cv-page" lang={t.lang}>
      <nav className="cv-toolbar" aria-label="CV">
        <a href={home}>← {t.cv.back}</a>
        <a href={t.cv.file} download>
          {t.cv.pdf}
        </a>
      </nav>

      <article className="cv">
        <header className="cv__head">
          <h1>Dung Phan</h1>
          <p className="cv__role">{t.role}</p>
          <ul className="cv__contact">
            {contactLinks(t.contact.phone).map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.external ? shortUrl(l.href) : l.value}</a>
              </li>
            ))}
            <li>{t.city}</li>
          </ul>
        </header>

        <section className="cv__section">
          <h2>{t.cv.summary}</h2>
          <p className="cv__lead">{t.lead}</p>
          {t.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>

        <section className="cv__section">
          <h2>{t.experience.heading}</h2>
          {t.experience.jobs.map((job) => (
            <div className="cv-item" key={job.role + job.years}>
              <div className="cv-item__head">
                <h3>
                  {job.role} <span className="cv-item__org">· {job.org}</span>
                </h3>
                <span className="cv-item__years">{job.years}</span>
              </div>
              <ul className="cv-item__points">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {job.award && <p className="cv-item__award">★ {job.award}</p>}
            </div>
          ))}
        </section>

        <div className="cv__columns">
          <section className="cv__section">
            <h2>{t.education.heading}</h2>
            {t.education.schools.map((s) => (
              <div className="cv-item" key={s.name}>
                <div className="cv-item__head">
                  <h3>{s.name}</h3>
                  <span className="cv-item__years">{s.years}</span>
                </div>
                <p>{s.detail}</p>
                {s.note && <p className="cv-item__note">{s.note}</p>}
              </div>
            ))}
          </section>

          <section className="cv__section">
            <h2>{t.profile.skillsHeading}</h2>
            <dl className="cv__skills">
              {t.profile.skills.map((g) => (
                <div key={g.name}>
                  <dt>{g.name}</dt>
                  <dd>{g.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
            <h2 className="cv__subhead">{t.profile.languagesHeading}</h2>
            <p>{t.profile.languages.map((l) => `${l.name} (${l.level})`).join(", ")}</p>
          </section>
        </div>
      </article>
    </div>
  );
}

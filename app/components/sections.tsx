import type { Content } from "../content";
import { Icon } from "../icons";
import { EMAIL, LINKEDIN, contactLinks } from "../links";

export function Hero({ t }: { t: Content }) {
  return (
    <section className="card hero" id="top">
      <h1>
        {t.hello}{" "}
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
  );
}

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section className="block" id={id} aria-labelledby={`${id}-h`}>
      <h2 className="block__title" id={`${id}-h`}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export function About({ t }: { t: Content }) {
  return (
    <Block id="about" title={t.about.heading}>
      <div className="card prose">
        {t.about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Block>
  );
}

export function Experience({ t }: { t: Content }) {
  return (
    <Block id="experience" title={t.experience.heading}>
      <ol className="card timeline">
        {t.experience.jobs.map((job) => (
          <li className="job" key={job.role + job.years}>
            <span className="job__year num">{job.years}</span>
            <p className="job__role">{job.role}</p>
            <p className="job__org">{job.org}</p>
            <ul className="job__points">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            {job.award && (
              <p className="job__award">
                <Icon name="award" />
                <span>{job.award}</span>
              </p>
            )}
          </li>
        ))}
      </ol>
      <h3 className="block__sub">{t.education.heading}</h3>
      <ul className="education">
        {t.education.schools.map((s) => (
          <li className="card school" key={s.name}>
            <span className="job__year num">{s.years}</span>
            <p className="job__role">{s.name}</p>
            <p className="job__org">{s.detail}</p>
            {s.note && <p className="school__note">{s.note}</p>}
          </li>
        ))}
      </ul>
    </Block>
  );
}

export function Contact({ t }: { t: Content }) {
  return (
    <Block id="contact" title={t.contact.heading}>
      <div className="contact">
        {contactLinks(t.contact.phone).map((l) => (
          <a
            className="card contact__item"
            href={l.href}
            rel={l.external ? "noreferrer" : undefined}
            key={l.href}
          >
            <span className="contact__icon">
              <Icon name={l.icon} />
            </span>
            <span className="contact__label">{l.label}</span>
            <span className={l.numeric ? "contact__value num" : "contact__value"}>{l.value}</span>
          </a>
        ))}
      </div>
      <p className="card contact__note">
        <Icon name="pin" />
        <span>{t.contact.note}</span>
      </p>
    </Block>
  );
}

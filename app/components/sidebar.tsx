import type { Content } from "../content";
import { Icon } from "../icons";
import { socialLinks } from "../links";

// Labels here are not headings: the page outline starts at the hero h1.
export default function Sidebar({ t }: { t: Content }) {
  const { profile } = t;
  return (
    <aside className="sidebar" aria-label={profile.label}>
      <div className="sidebar__id">
        <img className="avatar" src="/avatar.jpg" alt="Dung Phan" width={160} height={160} />
        <div>
          <p className="sidebar__name">Dung Phan</p>
          <p className="sidebar__role">{t.shortRole}</p>
        </div>
        <ul className="socials">
          {socialLinks.map((l) => (
            <li key={l.label}>
              <a
                className="social"
                href={l.href}
                aria-label={l.label}
                rel={l.external ? "noreferrer" : undefined}
              >
                <Icon name={l.icon} size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <dl className="facts">
        {profile.facts.map((f) => (
          <div className="fact" key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="side-block">
        <p className="side-heading">{profile.languagesHeading}</p>
        <ul className="langs">
          {profile.languages.map((l) => (
            <li key={l.name}>
              <span>{l.name}</span>
              <span className="langs__level">{l.level}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="side-block">
        <p className="side-heading">{profile.skillsHeading}</p>
        {profile.skills.map((g) => (
          <div className="skill-group" key={g.name}>
            <p className="skill-group__name">{g.name}</p>
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
  );
}

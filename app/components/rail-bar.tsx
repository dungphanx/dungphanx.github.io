import type { Content } from "../content";
import Rail, { type RailItem } from "../rail";
import ThemeToggle from "../theme-toggle";

// Site chrome: theme and language tools plus the section rail.
// A header, not an aside: it holds the primary navigation.
export default function RailBar({ t }: { t: Content }) {
  const sections: RailItem[] = [
    { id: "top", label: t.nav.home, icon: "home" },
    { id: "about", label: t.nav.about, icon: "user" },
    { id: "experience", label: t.nav.experience, icon: "briefcase" },
    { id: "contact", label: t.nav.contact, icon: "mail" },
  ];

  return (
    <header className="rail">
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
    </header>
  );
}

import type { Metadata } from "next";
import type { Content } from "./content";
import RailBar from "./components/rail-bar";
import { About, Contact, Experience, Hero } from "./components/sections";
import Sidebar from "./components/sidebar";
import { SITE } from "./links";

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
    <div className="shell" lang={t.lang}>
      <a className="skip" href="#top">
        {t.skip}
      </a>
      <RailBar t={t} />
      <Sidebar t={t} />
      <main className="main" id="main">
        <Hero t={t} />
        <About t={t} />
        <Experience t={t} />
        <Contact t={t} />
        <footer className="footer">
          <span>© Dung Phan</span>
          <span>{t.city}</span>
        </footer>
      </main>
    </div>
  );
}

import ThemeToggle from "./theme-toggle";

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="nav">
        <div className="container nav__inner">
          <a className="brand" href="#top" aria-label="Dung Phan, back to top">
            Dung Phan
          </a>
          <div className="nav__right">
            <nav className="nav__links" aria-label="Primary">
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
              <a className="nav__email" href="mailto:dungphanx@gmail.com">
                Email
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="container">
            <h1>Dung Phan</h1>
            <p className="hero__meta">
              Technical Lead, Cloud Expense at Money Forward
            </p>
            <p className="lead hero__lead">
              I build teams from zero and ship top-revenue cloud products.
            </p>
            <div className="hero__actions">
              <a className="btn" href="mailto:dungphanx@gmail.com">
                Email me
              </a>
              <a
                className="quiet"
                href="https://www.linkedin.com/in/dungphanx/"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <h2>About</h2>
            <div className="about">
              <p>
                I am a technical lead at Money Forward Vietnam. I joined in July
                2023 to lead Account Payable, and built that team from zero to
                more than ten engineers. In September 2025 I started the EX MFV
                team for Cloud Expense and lead it with Money Forward Group in
                Japan. We are five developers now.
              </p>
              <p>
                Both products sit at the top of Money Forward Group revenue. I
                work best in small teams, with clear writing and long stretches
                of focus.
              </p>
              <p className="about__focus">
                Ruby on Rails, React, Next.js, TypeScript, AWS, microservices,
                team leadership.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <h2>Experience</h2>
            <ol className="jobs">
              <li className="job">
                <div className="job__main">
                  <p className="job__role">Technical Lead, Cloud Expense</p>
                  <p className="job__org">Money Forward Vietnam</p>
                </div>
                <span className="job__year num">Sep 2025 to now</span>
              </li>
              <li className="job">
                <div className="job__main">
                  <p className="job__role">Technical Lead, Account Payable</p>
                  <p className="job__org">Money Forward Vietnam</p>
                </div>
                <span className="job__year num">Jul 2023 to Sep 2025</span>
              </li>
              <li className="job">
                <div className="job__main">
                  <p className="job__role">Senior Software Developer</p>
                  <p className="job__org">Freelance, Vietnam</p>
                </div>
                <span className="job__year num">2023</span>
              </li>
              <li className="job">
                <div className="job__main">
                  <p className="job__role">Senior Fullstack Developer</p>
                  <p className="job__org">Coinhako, Singapore</p>
                </div>
                <span className="job__year num">2020 to 2022</span>
              </li>
              <li className="job">
                <div className="job__main">
                  <p className="job__role">
                    Senior Fullstack Developer, Scrum Master
                  </p>
                  <p className="job__org">Freelance, Vietnam</p>
                </div>
                <span className="job__year num">2019 to 2020</span>
              </li>
              <li className="job">
                <div className="job__main">
                  <p className="job__role">Team Leader</p>
                  <p className="job__org">Symphony Creative Solution, Singapore</p>
                </div>
                <span className="job__year num">2016 to 2019</span>
              </li>
              <li className="job">
                <div className="job__main">
                  <p className="job__role">Database Developer</p>
                  <p className="job__org">Asian Live Tech</p>
                </div>
                <span className="job__year num">2015 to 2016</span>
              </li>
              <li className="job">
                <div className="job__main">
                  <p className="job__role">Software Developer</p>
                  <p className="job__org">Ciiva.com, Switzerland</p>
                </div>
                <span className="job__year num">2012 to 2015</span>
              </li>
            </ol>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <h2>Contact</h2>
            <a className="contact__email" href="mailto:dungphanx@gmail.com">
              dungphanx@gmail.com
            </a>
            <ul className="contact__links">
              <li>
                <a href="https://www.linkedin.com/in/dungphanx/" rel="noreferrer">
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
            <p className="contact__note">
              Ho Chi Minh City, Vietnam. We are growing the team for Cloud
              Expense and looking for Principal Engineers.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>Dung Phan</span>
          <span>Ho Chi Minh City, Vietnam</span>
        </div>
      </footer>
    </>
  );
}

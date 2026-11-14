export default function Page() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="nav">
        <div className="container nav__inner">
          <a className="brand" href="#top" aria-label="Dung Phan, back to top">
            <span className="brand__mark" aria-hidden="true">
              DP
            </span>
            <span className="brand__name">Dung Phan</span>
          </a>
          <nav className="nav__links" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn--sm nav__action" href="mailto:dungphanx@gmail.com">
            Email me
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="container">
            <div className="avatar" aria-hidden="true">
              DP
            </div>
            <h1>Dung Phan</h1>
            <p className="hero__role">
              Technical Lead at Money Forward, Ho Chi Minh City
            </p>
            <p className="lead hero__lead">
              Ten years shipping Ruby on Rails and React systems that move
              money.
            </p>
            <div className="hero__actions">
              <a className="btn" href="mailto:dungphanx@gmail.com">
                Email me
              </a>
              <a className="btn btn--ghost" href="#experience">
                See my work
              </a>
            </div>
            <p className="hero__meta">
              Open to senior and lead roles, in Ho Chi Minh City or remote.
            </p>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section__head">
              <h2>About</h2>
            </div>
            <div className="about">
              <p className="lead">
                I am Dung Phan, a technical lead who turns product requirements
                into systems people rely on.
              </p>
              <p>
                I lead a nine-person team at Money Forward, building a top
                Account Payable product for Japan. Before that I split
                Coinhako&rsquo;s monolith into microservices and led teams of up
                to eight at Symphony Creative Solution. Ten years across
                fintech and logistics, from Ruby on Rails to React and
                TypeScript.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--tint" id="experience">
          <div className="container">
            <div className="section__head">
              <h2>Experience</h2>
              <p className="lead">Seven roles since 2012.</p>
            </div>
            <ol className="timeline">
              <li className="job">
                <span className="job__period">2023 to present</span>
                <div className="job__body">
                  <h3>Technical Lead</h3>
                  <p className="job__org">Money Forward Vietnam, Ho Chi Minh City</p>
                  <p className="job__desc">
                    Leads a nine-person team on a top Account Payable product in
                    Japan. Set the development process, do the technical
                    roadmap, and ship the releases.
                  </p>
                </div>
              </li>
              <li className="job">
                <span className="job__period">2023</span>
                <div className="job__body">
                  <h3>Senior Software Developer</h3>
                  <p className="job__org">Freelance, Vietnam</p>
                </div>
              </li>
              <li className="job">
                <span className="job__period">2020 to 2022</span>
                <div className="job__body">
                  <h3>Senior Fullstack Developer</h3>
                  <p className="job__org">Coinhako, Singapore</p>
                  <p className="job__desc">
                    Drove the monolith-to-microservices split on
                    Singapore&rsquo;s leading crypto exchange, and built the
                    identity-verification features for MAS compliance. Employee
                    of the Quarter three times.
                  </p>
                </div>
              </li>
              <li className="job">
                <span className="job__period">2019 to 2020</span>
                <div className="job__body">
                  <h3>Senior Fullstack Developer, Scrum Master</h3>
                  <p className="job__org">Freelance, Vietnam</p>
                </div>
              </li>
              <li className="job">
                <span className="job__period">2016 to 2019</span>
                <div className="job__body">
                  <h3>Team Leader</h3>
                  <p className="job__org">Symphony Creative Solution, Singapore</p>
                  <p className="job__desc">
                    Led teams of up to eight on two logistics port projects,
                    coordinating clients across Japan, the USA and Korea.
                    Project of the Year twice.
                  </p>
                </div>
              </li>
              <li className="job">
                <span className="job__period">2015 to 2016</span>
                <div className="job__body">
                  <h3>Database Developer</h3>
                  <p className="job__org">Asian Live Tech, Asia-Pacific</p>
                </div>
              </li>
              <li className="job">
                <span className="job__period">2012 to 2015</span>
                <div className="job__body">
                  <h3>Software Developer</h3>
                  <p className="job__org">Ciiva.com, Switzerland</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section" id="highlights">
          <div className="container">
            <div className="section__head">
              <h2>Highlights</h2>
            </div>
            <div className="highlights">
              <div className="stat">
                <p className="stat__value">¥100M+</p>
                <p className="stat__label">
                  monthly revenue on the Account Payable product I lead
                </p>
              </div>
              <div className="stat">
                <p className="stat__value">3×</p>
                <p className="stat__label">
                  Employee of the Quarter, consecutive, at Coinhako
                </p>
              </div>
              <div className="stat">
                <p className="stat__value">2×</p>
                <p className="stat__label">
                  Project of the Year at Symphony Creative Solution
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section__head">
              <h2>Skills</h2>
            </div>
            <div className="skills">
              <div className="skill">
                <h3 className="skill__name">Backend</h3>
                <ul className="skill__tags">
                  <li>Ruby on Rails</li>
                  <li>Node.js</li>
                  <li>REST</li>
                  <li>GraphQL</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="skill">
                <h3 className="skill__name">Frontend</h3>
                <ul className="skill__tags">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className="skill">
                <h3 className="skill__name">Architecture</h3>
                <ul className="skill__tags">
                  <li>AWS</li>
                  <li>Microservices</li>
                </ul>
              </div>
              <div className="skill">
                <h3 className="skill__name">Leadership</h3>
                <ul className="skill__tags">
                  <li>Team leadership</li>
                  <li>Definition of Done</li>
                  <li>GitHub Flow</li>
                  <li>Code review</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="section__head">
              <h2>Let&rsquo;s talk</h2>
              <p className="lead">
                Open to senior and lead roles in Ho Chi Minh City or remote.
              </p>
            </div>
            <div className="contact">
              <a className="contact__email" href="mailto:dungphanx@gmail.com">
                dungphanx@gmail.com
              </a>
              <ul className="contact__list">
                <li>
                  <span className="contact__label">Phone</span>
                  <a href="tel:+84933842933">+84 933 842 933</a>
                </li>
                <li>
                  <span className="contact__label">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/dungphanx/" rel="noreferrer">
                    linkedin.com/in/dungphanx
                  </a>
                </li>
                <li>
                  <span className="contact__label">GitHub</span>
                  <a href="https://github.com/dungphanx" rel="noreferrer">
                    github.com/dungphanx
                  </a>
                </li>
                <li>
                  <span className="contact__label">Location</span>
                  <span>Ho Chi Minh City, Vietnam</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__name">Dung Phan</span>
          <span className="footer__line">Ho Chi Minh City, Vietnam</span>
        </div>
      </footer>
    </>
  );
}

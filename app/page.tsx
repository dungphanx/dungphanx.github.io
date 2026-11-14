export default function Page() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="nav">
        <div className="container nav__inner">
          <a className="wordmark" href="#top" aria-label="Dung Phan, back to top">
            Dung Phan
          </a>
          <nav className="nav__links" aria-label="Primary">
            <a href="#experience">Experience</a>
            <a href="#numbers">Numbers</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn--quiet nav__action" href="mailto:dungphanx@gmail.com">
            Email me
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-label="Introduction">
          <div className="container hero__inner">
            <div className="hero__text">
              <h1>Dung Phan</h1>
              <p className="lead">
                Technical lead, ten years shipping Rails and React systems that
                move money.
              </p>
              <div className="hero__actions">
                <a className="btn" href="mailto:dungphanx@gmail.com">
                  Email me
                </a>
                <a className="btn btn--quiet" href="#experience">
                  See the work
                </a>
              </div>
            </div>

            <figure className="spec">
              <p className="spec__value">
                <span className="num">10+</span>{" "}
                <span className="spec__unit">years</span>
              </p>
              <div className="spec__span">
                <div className="dim" aria-hidden="true" />
                <div className="spec__ends">
                  <span className="num">2012</span>
                  <span className="num">now</span>
                </div>
              </div>
              <figcaption className="spec__caption">
                Professional experience
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section section--lead" id="experience" aria-labelledby="experience-h">
          <div className="container">
            <div className="section__head">
              <h2 id="experience-h">Ten years across seven roles</h2>
            </div>
            <ol className="register">
              <li className="register__row">
                <span className="register__no num">01</span>
                <div className="register__main">
                  <h3>Tech lead</h3>
                  <span className="register__co">Money Forward Vietnam</span>
                  <p className="register__note">
                    Leads a nine-person team on a top Account Payable product in
                    Japan.
                  </p>
                </div>
                <time className="register__years num">2023 to now</time>
              </li>
              <li className="register__row">
                <span className="register__no num">02</span>
                <div className="register__main">
                  <h3>Senior software developer</h3>
                  <span className="register__co">Freelance</span>
                </div>
                <time className="register__years num">2023</time>
              </li>
              <li className="register__row">
                <span className="register__no num">03</span>
                <div className="register__main">
                  <h3>Senior fullstack developer</h3>
                  <span className="register__co">Coinhako, Singapore</span>
                  <p className="register__note">
                    Split the monolith into microservices; Employee of the
                    Quarter three times.
                  </p>
                </div>
                <time className="register__years num">2020 to 2022</time>
              </li>
              <li className="register__row">
                <span className="register__no num">04</span>
                <div className="register__main">
                  <h3>Senior fullstack, Scrum master</h3>
                  <span className="register__co">Freelance</span>
                </div>
                <time className="register__years num">2019 to 2020</time>
              </li>
              <li className="register__row">
                <span className="register__no num">05</span>
                <div className="register__main">
                  <h3>Team leader</h3>
                  <span className="register__co">
                    Symphony Creative Solution, Singapore
                  </span>
                  <p className="register__note">
                    Led teams up to eight on logistics port projects; Project of
                    the Year twice.
                  </p>
                </div>
                <time className="register__years num">2016 to 2019</time>
              </li>
              <li className="register__row">
                <span className="register__no num">06</span>
                <div className="register__main">
                  <h3>Database developer</h3>
                  <span className="register__co">Asian Live Tech</span>
                </div>
                <time className="register__years num">2015 to 2016</time>
              </li>
              <li className="register__row">
                <span className="register__no num">07</span>
                <div className="register__main">
                  <h3>Software developer</h3>
                  <span className="register__co">Ciiva.com, Switzerland</span>
                </div>
                <time className="register__years num">2012 to 2015</time>
              </li>
            </ol>
          </div>
        </section>

        <section className="section section--band" id="numbers" aria-labelledby="numbers-h">
          <div className="container">
            <div className="section__head">
              <h2 id="numbers-h">Numbers, with their units</h2>
            </div>
            <div className="figures">
              <div className="figures__item">
                <p className="figures__value num">
                  ¥100M<span className="figures__unit">+</span>
                </p>
                <p className="figures__label">
                  monthly revenue on the Account Payable product I lead
                </p>
              </div>
              <div className="figures__item">
                <p className="figures__value num">
                  3<span className="figures__unit">×</span>
                </p>
                <p className="figures__label">
                  Employee of the Quarter, consecutive, at Coinhako
                </p>
              </div>
              <div className="figures__item">
                <p className="figures__value num">
                  2<span className="figures__unit">×</span>
                </p>
                <p className="figures__label">
                  Project of the Year at Symphony Creative Solution
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="capabilities" aria-labelledby="capabilities-h">
          <div className="container">
            <div className="section__head">
              <h2 id="capabilities-h">What I ship</h2>
            </div>
            <dl className="caps">
              <div className="caps__row">
                <dt>Backend</dt>
                <dd>Ruby on Rails, Node.js, REST, GraphQL</dd>
              </div>
              <div className="caps__row">
                <dt>Frontend</dt>
                <dd>React, Next.js, TypeScript</dd>
              </div>
              <div className="caps__row">
                <dt>Architecture</dt>
                <dd>Microservices, AWS, PostgreSQL</dd>
              </div>
              <div className="caps__row">
                <dt>Leadership</dt>
                <dd>Teams up to nine, DoD, GitHub Flow</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section section--close" id="contact" aria-labelledby="contact-h">
          <div className="container">
            <div className="section__head">
              <h2 id="contact-h">Talk to me</h2>
              <p className="lead">
                Open to senior and lead roles, Ho Chi Minh City or remote.
              </p>
            </div>
            <div className="titleblock">
              <div className="titleblock__cell">
                <span className="titleblock__label">Email</span>
                <a href="mailto:dungphanx@gmail.com">dungphanx@gmail.com</a>
              </div>
              <div className="titleblock__cell">
                <span className="titleblock__label">Phone</span>
                <a href="tel:+84933842933">+84 933 842 933</a>
              </div>
              <div className="titleblock__cell">
                <span className="titleblock__label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/dungphanx/"
                  rel="noreferrer"
                >
                  linkedin.com/in/dungphanx
                </a>
              </div>
              <div className="titleblock__cell">
                <span className="titleblock__label">GitHub</span>
                <a href="https://github.com/dungphanx" rel="noreferrer">
                  github.com/dungphanx
                </a>
              </div>
              <div className="titleblock__cell titleblock__cell--wide">
                <span className="titleblock__label">Location</span>
                <span>Ho Chi Minh City, Vietnam</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p className="footer__mark">Dung Phan</p>
          <nav className="footer__links" aria-label="Footer">
            <a href="https://github.com/dungphanx" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/dungphanx/" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:dungphanx@gmail.com">Email</a>
          </nav>
          <p className="footer__line">Ho Chi Minh City, Vietnam</p>
        </div>
      </footer>
    </>
  );
}

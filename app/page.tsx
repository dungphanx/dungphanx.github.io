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
          <nav className="nav__links" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav__cta" href="mailto:dungphanx@gmail.com">
            Get in touch
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="container">
            <div className="hero__meta">
              <span>Technical Lead</span>
              <span>Money Forward</span>
              <span>Ho Chi Minh City</span>
            </div>
            <h1 className="hero__name">Dung Phan</h1>
            <p className="hero__statement">
              I build teams from zero and ship top-revenue cloud products.
            </p>
            <div className="hero__foot">
              <p className="hero__rhythm">Ten years. Seven roles. Two products.</p>
              <div className="hero__actions">
                <a className="link-arrow" href="#experience">
                  Read the record
                </a>
                <a className="btn" href="mailto:dungphanx@gmail.com">
                  Email me
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section__head">
              <span className="section__no">01</span>
              <h2>About</h2>
            </div>
            <div className="about">
              <p className="about__lead">
                I&rsquo;m a technical lead at Money Forward Vietnam, building
                Cloud Expense with the Money Forward Group team in Japan.
              </p>
              <div className="about__body">
                <p>
                  I joined Money Forward Vietnam in July 2023 to lead Account
                  Payable, and built that team from zero to more than ten
                  engineers. In September 2025 I started the Product VN team for
                  Cloud Expense, and I lead it alongside the group team in Japan.
                </p>
                <p>
                  Both products sit at the top of Money Forward Group&rsquo;s
                  revenue. We are growing the team now and looking for Principal
                  Engineers to build with us.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tint" id="experience">
          <div className="container">
            <div className="section__head">
              <span className="section__no">02</span>
              <h2>Experience</h2>
            </div>
            <ol className="timeline">
              <li className="job">
                <div className="job__year">Sep 2025 to now</div>
                <div className="job__body">
                  <h3>Technical Lead, Cloud Expense</h3>
                  <p className="job__org">Money Forward Vietnam, Ho Chi Minh City</p>
                  <p className="job__desc">
                    Started the Product VN team for Cloud Expense and leads it
                    with Money Forward Group in Japan.
                  </p>
                </div>
              </li>
              <li className="job">
                <div className="job__year">Jul 2023 to Sep 2025</div>
                <div className="job__body">
                  <h3>Technical Lead, Account Payable</h3>
                  <p className="job__org">Money Forward Vietnam, Ho Chi Minh City</p>
                  <p className="job__desc">
                    Built the team from zero to more than ten engineers, and led
                    the Account Payable product.
                  </p>
                </div>
              </li>
              <li className="job">
                <div className="job__year">2023</div>
                <div className="job__body">
                  <h3>Senior Software Developer</h3>
                  <p className="job__org">Freelance, Vietnam</p>
                </div>
              </li>
              <li className="job">
                <div className="job__year">2020 to 2022</div>
                <div className="job__body">
                  <h3>Senior Fullstack Developer</h3>
                  <p className="job__org">Coinhako, Singapore</p>
                  <p className="job__desc">
                    Drove the monolith-to-microservices split on
                    Singapore&rsquo;s leading crypto exchange and built the MAS
                    identity verification. Employee of the Quarter three times.
                  </p>
                </div>
              </li>
              <li className="job">
                <div className="job__year">2019 to 2020</div>
                <div className="job__body">
                  <h3>Senior Fullstack Developer, Scrum Master</h3>
                  <p className="job__org">Freelance, Vietnam</p>
                </div>
              </li>
              <li className="job">
                <div className="job__year">2016 to 2019</div>
                <div className="job__body">
                  <h3>Team Leader</h3>
                  <p className="job__org">Symphony Creative Solution, Singapore</p>
                  <p className="job__desc">
                    Led teams of up to eight on two logistics port projects,
                    working with clients in Japan, the USA and Korea. Project of
                    the Year twice.
                  </p>
                </div>
              </li>
              <li className="job">
                <div className="job__year">2015 to 2016</div>
                <div className="job__body">
                  <h3>Database Developer</h3>
                  <p className="job__org">Asian Live Tech, Asia-Pacific</p>
                </div>
              </li>
              <li className="job">
                <div className="job__year">2012 to 2015</div>
                <div className="job__body">
                  <h3>Software Developer</h3>
                  <p className="job__org">Ciiva.com, Switzerland</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section" id="products">
          <div className="container">
            <div className="section__head">
              <span className="section__no">03</span>
              <h2>Products</h2>
            </div>
            <div className="products">
              <article className="product">
                <h3>Cloud Expense</h3>
                <p className="product__kicker">Money Forward Cloud</p>
                <p className="product__desc">
                  Automated expense management for Japanese businesses: expense
                  reports, approvals and reimbursement, in one place. The Product
                  VN team I lead builds it with Money Forward Group.
                </p>
                <p className="product__role">
                  Technical Lead, since September 2025
                </p>
              </article>
              <article className="product">
                <h3>Account Payable</h3>
                <p className="product__kicker">Money Forward Cloud</p>
                <p className="product__desc">
                  A cloud product for managing payables at scale. I built its
                  Vietnam team from zero to more than ten engineers and led the
                  product.
                </p>
                <p className="product__role">Technical Lead, 2023 to 2025</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--tint" id="numbers">
          <div className="container">
            <div className="section__head">
              <span className="section__no">04</span>
              <h2>Numbers</h2>
            </div>
            <div className="numbers">
              <div className="number">
                <p className="number__value">10+</p>
                <p className="number__label">
                  engineers on the team I built from zero
                </p>
              </div>
              <div className="number">
                <p className="number__value">2</p>
                <p className="number__label">
                  products at the top of Money Forward Group revenue
                </p>
              </div>
              <div className="number">
                <p className="number__value">3×</p>
                <p className="number__label">
                  Employee of the Quarter at Coinhako
                </p>
              </div>
              <div className="number">
                <p className="number__value">2×</p>
                <p className="number__label">
                  Project of the Year at Symphony Creative Solution
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="hire" id="hiring">
          <div className="container hire__inner">
            <h2 className="hire__title">
              Principal Engineers, join us in Ho Chi Minh City.
            </h2>
            <p className="hire__desc">
              We are growing the Product VN team for Cloud Expense and looking
              for Principal Engineers to build with us.
            </p>
            <a className="btn" href="mailto:dungphanx@gmail.com">
              Email me
            </a>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="section__head">
              <span className="section__no">05</span>
              <h2>Contact</h2>
            </div>
            <div className="contact">
              <a className="contact__email" href="mailto:dungphanx@gmail.com">
                dungphanx@gmail.com
              </a>
              <dl className="contact__list">
                <div>
                  <dt>LinkedIn</dt>
                  <dd>
                    <a href="https://www.linkedin.com/in/dungphanx/" rel="noreferrer">
                      linkedin.com/in/dungphanx
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>GitHub</dt>
                  <dd>
                    <a href="https://github.com/dungphanx" rel="noreferrer">
                      github.com/dungphanx
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href="tel:+84933842933">+84 933 842 933</a>
                  </dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>Ho Chi Minh City, Vietnam</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__name">Dung Phan</span>
          <span className="footer__line">Technical Lead, Cloud Expense</span>
          <span className="footer__line">Ho Chi Minh City, Vietnam</span>
        </div>
      </footer>
    </>
  );
}

import Skills from '../components/Skills'

function Home() {
  return (
    <div className="content">
      <div className="row">
        <div className="column">
          <section>
            <h2>EXPERIENCE</h2>
            <h4>2022 - Present</h4>
            <h3>Head of Product</h3>
            <p>
              Leading the development of the TUNL product, a international
              shipping solution for African manufacturers, makers and
              merchants.
            </p>
            <h4>2020 - 2022</h4>
            <h3>Senior Product Manager</h3>
            <p>
              Managing the development and launch of the Shogun Frontend
              product, a headless e-commerce solution for brands and agencies
              to deliver a sub-second shopping experience for their customers.
            </p>
            <h4>2019 - 2020</h4>
            <h3>Product Manager</h3>
            <p>
              Responsible for the vision and roadmap of the Kurtosys product
              suite, to enable financial services firms to reduce time-to-market
              for websites, marketing documents and content portals.
            </p>
            <h4>2016 - 2018</h4>
            <h3>Associate Director Customer Support</h3>
            <p>
              Responsible for growing the Support function of a rapidly scaling
              FinTech startup to provide a leading class digital experience
              platform for financial services companies.
            </p>
            <h4>2015 - 2016</h4>
            <h3>Team Lead</h3>
            <p>
              Led and managed a team of developers, testers and analysts to
              deliver business critical data solutions to support Korbitec's
              entire business.
            </p>
          </section>
          <section>
            <h2>ABOUT ME</h2>
            <p>
              Highly motivated, hardworking and experienced leader of people who
              has been awarded numerous achievements during tertiary education
              and professional career. Exceptional IT, analytical, problem
              solving, communication and project management skills. Experience
              in managing people, working in teams and working under pressure.
              Deep passion for business, entrepreneurship, technology and data.
            </p>
          </section>
        </div>
        <div className="column">
          <section>
            <h2>EDUCATION</h2>
            <h4>2012</h4>
            <h3>University of Cape Town</h3>
            <h4>2008</h4>
            <h3>South African College High School</h3>
          </section>
          <Skills />
          <section>
            <h2>INTERESTS</h2>
            <ul>
              <li>Technology</li>
              <li>Data</li>
              <li>Marketing</li>
              <li>Strategy</li>
              <li>Entrepreneurship</li>
              <li>Productivity</li>
            </ul>
          </section>
          <section>
            <h2>CONTACT</h2>
            <p>www.brettflugel.co.za</p>
            <p>info@brettflugel.co.za</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./about.css";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="about-page">

        {/* HERO */}
        <section className="about-hero-card">
          <h1>About YUVA Club</h1>
          <p>
            Empowering students to become leaders, innovators, and responsible
            citizens through meaningful engagement and development programs.
          </p>
        </section>

        {/* INFO CARDS */}
        <section className="about-info-grid">
          <div className="info-card">
            <h3>Why YUVA?</h3>
            <p>
              YUVA is the student-centric vertical of Young Indians (Yi), part of
              the Confederation of Indian Industry (CII), designed to empower
              students to become responsible leaders and innovators.
            </p>
          </div>

          <div className="info-card">
            <h3>One Bharat · One Spirit · One YUVA</h3>
            <p>
              Among 15+ YUVA Chapter Colleges in Chennai, Saveetha Engineering
              College stands as an active chapter committed to youth leadership
              and nation-building.
            </p>
          </div>

          <div className="info-card">
            <h3>YUVA at Saveetha Engineering College</h3>
            <p>
              A student-led chapter bridging industry, academia, and society,
              providing real-world exposure aligned with national priorities.
            </p>
          </div>

          <div className="info-card highlight">
            <h3>Our Vision</h3>
            <p>
              To create a generation of responsible, innovative, and socially
              conscious youth leaders aligned with the spirit of One Bharat,
              One Spirit.
            </p>
          </div>
        </section>

        {/* IMPACT */}
        <section className="about-section">
          <h2>Through YUVA, students are empowered to</h2>
          <div className="bullet-grid">
            <div className="bullet-card">Build leadership and teamwork skills</div>
            <div className="bullet-card">Gain industry exposure and mentorship</div>
            <div className="bullet-card">Develop innovation capabilities</div>
            <div className="bullet-card">Engage in social impact initiatives</div>
          </div>
        </section>

        <section className="about-section light">
          <h2>What Makes YUVA Unique?</h2>
          <div className="bullet-grid">
            <div className="bullet-card">
              <strong>Industry Integration</strong>
              <p>Direct access to Yi–CII leaders and initiatives.</p>
            </div>
            <div className="bullet-card">
              <strong>Leadership with Purpose</strong>
              <p>Students lead projects addressing national challenges.</p>
            </div>
            <div className="bullet-card">
              <strong>Experiential Learning</strong>
              <p>Hands-on programs and real-world engagement.</p>
            </div>
            <div className="bullet-card">
              <strong>Pan-India Network</strong>
              <p>Connected to Yi and YUVA chapters across India.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Commitment at Saveetha Engineering College</h2>
          <div className="bullet-grid">
            <div className="bullet-card">Ethical & inclusive leadership</div>
            <div className="bullet-card">Innovation & entrepreneurship</div>
            <div className="bullet-card">Community-driven initiatives</div>
            <div className="bullet-card">Future-ready student leaders</div>
          </div>
        </section>

        {/* PEOPLE */}
        <section className="team-section">
          <h2>Nodal Officer</h2>
          <div className="team-grid single">
            <div className="team-card">
              <img src="/images/nodal.png" alt="Nodal Officer" />
              <h4>Manimaran G</h4>
              <p>SEC CII–Yi YUVA Chapter · Nodal Officer</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Leadership Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="/images/yugi.png" alt="Chair" />
              <h4>Yuganthiran P S</h4>
              <p>Chair · YUVA</p>
            </div>
            <div className="team-card">
              <img src="/images/Sudhishna.png" alt="Co Chair" />
              <h4>Sudhishna P</h4>
              <p>Co-Chair · YUVA</p>
            </div>
          </div>
        </section>

        <section className="team-section light">
          <h2>Branding & Tech Team</h2>
          <div className="team-grid branding-team">
            <div className="team-card"><img src="/images/me.png" alt="" /><h4>Sugeshan S</h4><p>Backend · MERN</p></div>
            <div className="team-card"><img src="/images/arshiya.png" alt="" /><h4>Arshiya M</h4><p>Frontend</p></div>
            <div className="team-card"><img src="/images/nithya.png" alt="" /><h4>Nithyasree S</h4><p>Frontend</p></div>
            <div className="team-card"><img src="/images/esakindhar.png" alt="" /><h4>Esakindar</h4><p>UI/UX</p></div>
            <div className="team-card"><img src="/images/kesha.png" alt="" /><h4>Keshavardhini B</h4><p>UI/UX</p></div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default About;

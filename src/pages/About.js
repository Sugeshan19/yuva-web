import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Navbar />

      <div className="about-page">
        {/* HERO */}
        <section className="about-hero">
          <h2>About Yuva Club</h2>
          <div className="underline"></div>
          <p>
            Empowering students to become leaders, innovators, and responsible
            citizens through meaningful engagement and development programs.
          </p>
        </section>

        {/* MISSION & VISION */}
        <section className="mission-vision">
          <div className="mv-card">
            <h3>Why YUVA ?</h3>
            <p>
              YUVA is the student-centric vertical of Young Indians (Yi), an integral part of the
              Confederation of Indian Industry (CII) ecosystem. It is a national platform designed to
              inspire, engage, and empower college students to become responsible leaders,
              innovators, and active contributors to India’s growth journey. 

            </p>
          </div>

          <div className="mv-card">
            <h3>One Bharat . One Spirit . One YUVA . </h3>
            <p>
              Among 15+ YUVA Chapter Colleges in Chennai, Saveetha Engineering College proudly
              stands as one of the active YUVA Chapter Colleges, committed to nurturing youth
              leadership and nation-building through action-oriented initiatives.             </p>
          </div>

          <div className="mv-card">
            <h3>YUVA at Saveetha Engineering College </h3>
            <p>
              YUVA at Saveetha Engineering College is a dynamic student-led chapter that bridges
              industry, academia, and society. It provides students with opportunities to learn beyond
              classrooms and participate in real-world problem solving aligned with national priorities.
            </p>
          </div>

          <div className="mv-card">
            <h3>Our Vision</h3>
            <p>
                To create a generation of responsible, innovative, and socially conscious youth leaders
                aligned with the spirit of One Bharat, One Spirit
            </p>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="what-we-do">
          <h3>Through YUVA, students are empowered to:  </h3>

          <div className="wwd-grid">
            <div className="wwd-card">
              <h4>Build leadership and teamwork skills</h4>
            </div>

            <div className="wwd-card">
              <h4>Gain industry exposure and mentorship </h4>
            </div>

            <div className="wwd-card">
              <h4>Develop entrepreneurial and innovation capabilities</h4>
            </div>

            <div className="wwd-card">
              <h4>Engage in social impact and community development </h4>
            </div>
          </div>
        </section>

        <section className="what-we-do">
          <h3>What Makes YUVA Unique? </h3>

          <div className="wwd-grid">
            <div className="wwd-card">
              <h4>Industry Integration</h4>
              <p>
                Direct access to industry leaders and thought partners through Yi–CII initiatives.
              </p>
            </div>

            <div className="wwd-card">
              <h4> Leadership with Purpose</h4>
              <p>Students lead and execute projects that address societal and national challenges. </p>
            </div>

            <div className="wwd-card">
              <h4>Experiential Learning</h4>
              <p>
                Focus on hands-on programs, campaigns, and field-level engagement.
              </p>
            </div>

            <div className="wwd-card">
              <h4>Pan-India Network </h4>
              <p>
                Connection to a strong national network of Yi and YUVA chapters across India.
              </p>
            </div>
          </div>
        </section>

        <section className="what-we-do">
          <h3>As a YUVA Chapter College, Saveetha Engineering College is committed to:</h3>

          <div className="wwd-grid">
            <div className="wwd-card">
              <h4>Fostering ethical and inclusive leadership</h4>
            </div>

            <div className="wwd-card">
              <h4>Encouraging innovation and entrepreneurship</h4>
            </div>

            <div className="wwd-card">
              <h4>Driving community-focused initiatives</h4>
            </div>

            <div className="wwd-card">
              <h4>Preparing students to be future-ready leaders </h4>
            </div>
          </div>
        </section>
        <section className="team">
          <h3>NODAL OFFICER</h3>
          <div className="team-grid">
            <div className="team-card">
              <img
              src="/images/nodal.png"
              alt="Nodal Officer"
              className="team-avatar"
              />
              <h4>
                MANIMARAN G 
              </h4>
              <h5>SEC CII-Yi Yuva chapter - Nodal Officer</h5>
              <p>Yuva Club</p>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="team">
          <h3>Leadership Team</h3>
          <div className="team-grid">
            <div className="team-card">
              <img
              src="/images/yugi.png"
              alt="Yuganthiran P S"
              className="team-avatar"
              />
              <h4>YUGANTHIRAN P S</h4> 
              <h5>SEC CII-Yi Yuva chapter - Chair</h5>
              <p>Yuva Club</p>
            </div>
            <div className="team-card">
              <img
              src="/images/Sudhishna.png"
              alt="Vice President"
              className="team-avatar"
              />
              <h4>SUDHISHNA P </h4>
              <h5>SEC CII-Yi Yuva Chapter- Co Chair</h5>
              <p>Yuva Club</p>
            </div>
          </div>
        </section>

        <section className="team">
          <h3>Branding Team</h3>
          <div className="team-grid branding-team">

            <div className="team-card">
              <img
              src="/images/me.png"
              alt="Sugeshan S"
              className="team-avatar"
              />
              <h4>
                Sugeshan S <br />
                <span>Full Stack Developer – MERN </span>
              </h4>
              <p>Team leader-Backend Developer</p>
            </div>
            <div className="team-card">
              <img
              src="/images/arshiya.png"
              alt="Arshiya M"
              className="team-avatar"
              />
              <h4>Arshiya M</h4>
              <p>Frontend Developer</p>
            </div>
            <div className="team-card">
              <img
              src="/images/nithya.png"
              alt="Nithya Sree"
              className="team-avatar"
              />
              <h4>Nithyasree S</h4>
              <p>Frontend Developer</p>
            </div>
            <div className="team-card">
              <img
              src="/images/esakindhar.png"
              alt="Esakindar"
              className="team-avatar"
              />
              <h4>Esakindar</h4>
              <p>UI/UX designer</p>
            </div>
            <div className="team-card">
              <img
              src="/images/kesha.png"
              alt="Keshavrdhini B"
              className="team-avatar"
              />
              <h4>Keshavardhini B</h4>
              <p>UI/UX designer</p>
            </div>
          </div>
        </section>

      </div>
      <Footer/>
    </>
  );
};

export default About;

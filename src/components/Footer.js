import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-section">
          <h4>YUVA Club</h4>
          <p>
            YUVA at Saveetha Engineering College is a dynamic student-led chapter that bridges industry,
            academia, and society. It provides students with opportunities to learn beyond classrooms and 
            participate in real-world problem solving aligned with national priorities.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>

            {/* FAQ LINK — ONLY HERE */}
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Saveetha Engineering College</p>
          <p>Chennai, Tamil Nadu</p>
          <p>Email: yiyuvasec@gmail.com</p>
          <a
            href="https://www.instagram.com/yuvaclub_sec?igsh=MnY1emJwOTJpcXM3"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>

        {/* BRANDING */}
        <div className="footer-section">
          <h4>Branding Team</h4>
          <a
            href="https://sugeshan19.github.io/portfolio/"
            target="_blank"
            rel="noreferrer"
          >
          Sugeshan S - Full Stack Developer (MERN)
          </a>
          <p>Arshiya M - Frontend Developer</p>
          <p>Nithyasree S - Frontend Developer</p>
          <p>Keshavardhini B - UI/UX Developer</p>
          <p>Esakindar - UI/UX Developer</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} YUVA Club – Saveetha Engineering College
      </div>
    </footer>
  );
};

export default Footer;

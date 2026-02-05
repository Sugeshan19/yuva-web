import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// HERO IMAGES
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];

const Home = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [stats, setStats] = useState([
    { value: 0, target: 500, label: "Members", suffix: "+" },
    { value: 0, target: 30, label: "Events Conducted", suffix: "+" },
    { value: 0, target: 12, label: "Active Initiatives", suffix: "" },
    { value: 0, target: 1000, label: "Students Impacted", suffix: "+" },
  ]);

  const goToMembership = () => {
    navigate("/membership");
  };

  const goToVerticals = () => {
    navigate("/verticals");
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // COUNTER ANIMATION
  useEffect(() => {
    const animateCounters = () => {
      setStats((prevStats) =>
        prevStats.map((stat) => {
          if (stat.value < stat.target) {
            const increment = Math.ceil(stat.target / 50);
            return {
              ...stat,
              value: Math.min(stat.value + increment, stat.target),
            };
          }
          return stat;
        })
      );
    };

    const timer = setTimeout(animateCounters, 50);
    return () => clearTimeout(timer);
  }, [stats]);

  return (
    <>
      <Navbar />

      {/* HERO SLIDER */}
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${images[current]})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Empowering Students Beyond Academics</h1>
            <p>
              YUVA Club is a student-driven community at Saveetha Engineering
              College focused on leadership, innovation, and social impact.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={goToMembership}>
                Join YUVA
              </button>
              <button className="btn-outline" onClick={goToVerticals}>
                Explore Verticals
              </button>
            </div>
          </div>

          {/* SLIDER DOTS */}
          <div className="slider-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={current === index ? "active" : ""}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="home-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.value}{stat.suffix}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section className="home-about">
        <h2>What is YUVA?</h2>
        <p>
          YUVA is a platform where students come together to develop leadership
          skills, contribute to society, and gain real-world experience beyond
          the classroom.
        </p>
      </section>

      {/* INITIATIVES */}
      <section className="home-initiatives">
        <div className="initiative-card">
          <h4>Leadership Development</h4>
          <p>
            Workshops, mentorship programs, and student leadership activities.
          </p>
        </div>

        <div className="initiative-card">
          <h4>Social Impact</h4>
          <p>
            Community outreach, volunteering, and social responsibility drives.
          </p>
        </div>

        <div className="initiative-card">
          <h4>Innovation & Technology</h4>
          <p>
            Hackathons, technical events, and innovation challenges.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <h2>Ready to be part of something meaningful?</h2>
        <p>Join YUVA and grow beyond the classroom.</p>
        <button className="btn-primary" onClick={goToMembership}>
          Become a Member
        </button>
      </section>

      <Footer />
    </>
  );
};

export default Home;

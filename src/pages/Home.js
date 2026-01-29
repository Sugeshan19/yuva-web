import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";

const images = [img1, img2, img3, img4, img6, img7, img8, img9,img10,img11, img12, img13, img14, img15,];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SLIDESHOW */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${images[current]})` }}
      >
        <div className="hero-overlay">
          {/* ONLY DOTS */}
          <div className="slider-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={current === index ? "active" : ""}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section className="welcome">
        <h2>Welcome to Yuva Club</h2>
        <div className="underline"></div>
        <p>
          Saveetha Engineering College's premier student organization dedicated
          to fostering leadership, innovation, and community engagement among
          young engineers.
        </p>
      </section>
      {/* FEATURE CARDS */}
      <section className="features">
        <div className="feature-card orange">
          <div className="icon">🎯</div>
          <h3>Leadership</h3>
          <p>
            Develop essential leadership skills through various club activities
            and initiatives
          </p>
        </div>

        <div className="feature-card green">
          <div className="icon">🤝</div>
          <h3>Networking</h3>
          <p>
            Connect with like-minded peers and build lasting professional
            relationships
          </p>
        </div>

        <div className="feature-card blue">
          <div className="icon">🚀</div>
          <h3>Innovation</h3>
          <p>
            Participate in hackathons, workshops, and technical events to
            showcase your talents
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;

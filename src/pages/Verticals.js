import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./verticals.css";

const Verticals = () => {
  const verticals = [
    {
      id: 1,
      name: "Health",
      description: "",
      icon: "❤️"
    },
    {
      id: 2,
      name: "Entrepreneurship",
      description: "",
      icon: "💼"
    },
    {
      id: 3,
      name: "Innovation",
      description: "",
      icon: "💡"
    },
    {
      id: 4,
      name: "ACCESSIBILITY ",
      description: "",
      icon: "♿"
    },
    {
      id: 5,
      name: "SPORTS",
      description: "",
      icon: "⚽"
    },
    {
      id: 6,
      name: "MASOOM",
      description: "",
      icon: "👶"
    },
    {
      id: 7,
      name: "ROAD SAFETY",
      description: "",
      icon: "🚗"
    },
    {
      id: 8,
      name: "LEARNING",
      description: "",
      icon: "📚"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="verticals-page">
        {/* HERO */}
        <section className="verticals-hero-card">
          <h1>Our Verticals</h1>
          <p>
            Explore the different verticals that make up YUVA Club and find
            the one that resonates with you.
          </p>
        </section>

        {/* VERTICALS GRID */}
        <section className="verticals-grid">
          {verticals.map((vertical) => (
            <div key={vertical.id} className="vertical-card">
              <div className="vertical-icon">{vertical.icon}</div>
              <h3>{vertical.name}</h3>
              <p>{vertical.description}</p>
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Verticals;

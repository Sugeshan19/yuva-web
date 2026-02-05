import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const [theme, setTheme] = useState("dark");

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  if (role === "admin") return null;

  const handleLogout = () => {
    localStorage.clear();
    // hard redirect so the app reloads and shows login immediately
    window.location.href = "/login";
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* BRAND */}
        <div className="nav-brand" onClick={() => navigate("/home")}>
          <img src="/images/yuva-logo.png" alt="YUVA" className="nav-logo" />
          <div className="brand-text">
            <span className="brand-main">YUVA</span>
            <span className="brand-sub">Club · SEC</span>
          </div>
        </div>

        {/* LINKS */}
        <nav className="nav-links">
          <NavLink to="/home" className="nav-item">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
          <NavLink to="/verticals" className="nav-item">
            Verticals
          </NavLink>
          <NavLink to="/membership" className="nav-item">
            Membership
          </NavLink>
          <NavLink to="/profile" className="nav-item">
            Profile
          </NavLink>

          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button className="nav-logout" onClick={handleLogout}>
            Logout
          </button>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;

import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  if (role === "admin") return null;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login",{replace: true});
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo-circle">
          <img
            src="/images/logo.png"
            alt="Yuva Club Logo"
            className="logo-image"
          />
        </div>
        <span className="logo-text">Yuva Club-SEC</span>
      </div>

      <div className="nav-links">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/membership"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Membership
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Profile
        </NavLink>

        <button className="nav-login" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
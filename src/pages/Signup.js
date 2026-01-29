import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ CLIENT-SIDE VALIDATION
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("OTP sent to your email. Please verify.");

      // 👉 Go to OTP verification page
      navigate("/verify-email", {
        state: { email: formData.email },
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-logo">
          <img
            src="/images/logo.png"
            alt="Yuva Club Logo"
            className="login-logo-image"
          />
          <h3>Yuva Club</h3>
          <p>Saveetha Engineering College</p>
          <div className="underline"></div>
        </div>

        <div className="login-card">
          <h4>Create Account</h4>

          <form className="login-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Minimum 8 characters"
              required
              onChange={handleChange}
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              required
              onChange={handleChange}
            />

            <small style={{ color: "#555" }}>
              This password is only for YUVA Club access.
            </small>

            <button type="submit" className="login-btn">
              Sign Up
            </button>
          </form>

          <p className="signup-text">
            Already have an account?{" "}
            <span
              style={{ cursor: "pointer", fontWeight: 600 }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

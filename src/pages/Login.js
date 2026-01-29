import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================
  // EMAIL + PASSWORD LOGIN
  // =========================
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        // ✅ SHOW REAL BACKEND MESSAGE
        alert(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      navigate(data.role === "admin" ? "/admin/dashboard" : "/home");
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      alert("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // GOOGLE LOGIN SUCCESS
  // =========================
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      if (!credentialResponse?.credential) {
        alert("Google token missing");
        return;
      }

      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: credentialResponse.credential,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Google login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      navigate("/home");
    } catch (err) {
      console.error("GOOGLE LOGIN ERROR:", err);
      alert("Google authentication error");
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">

        {/* LOGO */}
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

        {/* LOGIN CARD */}
        <div className="login-card">
          <h4>Welcome Back</h4>

          {/* EMAIL LOGIN */}
          <form className="login-form" onSubmit={handleLogin}>
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* DIVIDER */}
          <div className="divider">
            <span>OR</span>
          </div>

          {/* GOOGLE LOGIN */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => alert("Google Login Failed")}
            />
          </div>

          {/* SIGNUP */}
          <p className="signup-text">
            Don&apos;t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              style={{ cursor: "pointer", fontWeight: 600 }}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

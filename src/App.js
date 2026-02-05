import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import Membership from "./pages/Membership";
import About from "./pages/About";
import Verticals from "./pages/Verticals";
import ProtectedRoute from "./components/ProtectedRoute";
import VerifyEmail from "./pages/VerifyEmail";
import FAQs from "./pages/faq";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const handleStorage = () => {
      setToken(localStorage.getItem("token"));
      setRole(localStorage.getItem("role"));
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* ROOT ROUTE */}
        <Route
          path="/"
          element={
            !token ? (
              <Navigate to="/login" />
            ) : role === "admin" ? (
              <Navigate to="/admin/dashboard" />
            ) : (
              <Navigate to="/home" />
            )
          }
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={
            token ? (
              role === "admin" ? (
                <Navigate to="/admin/dashboard" />
              ) : (
                <Navigate to="/home" />
              )
            ) : (
              <Login />
            )
          }
        />

        {/* ✅ SIGNUP (NEW USER ENTRY POINT) */}
        <Route
          path="/signup"
          element={
            token ? (
              <Navigate to="/home" />
            ) : (
              <Signup />
            )
          }
        />

        {/* USER ROUTES */}
        <Route
          path="/home"
          element={
            <ProtectedRoute role="user">
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute role="user">
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/membership"
          element={
            <ProtectedRoute role="user">
              <Membership />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/verticals" element={<Verticals />} />

        {/* ADMIN ROUTE */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/faq" element={<FAQs />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;

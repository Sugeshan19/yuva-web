import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    rollNo: "",
    address: "",
  });

  const [membership, setMembership] = useState(null);
  const token = localStorage.getItem("token");

  // =========================
  // FETCH PROFILE
  // =========================
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => alert("Failed to load profile"));
  }, [token]);

  // =========================
  // FETCH MEMBERSHIP
  // =========================
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/user/membership`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMembership(data))
      .catch(() => {});
  }, [token]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const updatedData = {
      name: user.name,
      phone: user.phone,
      department: user.department,
      year: user.year,
      rollNo: user.rollNo,
      address: user.address,
    };

    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });

    if (!res.ok) {
      alert("Profile update failed");
      return;
    }

    const data = await res.json();
    setUser(data);
    setEditMode(false);
  };

  // =========================
  // MEMBERSHIP STATUS LOGIC
  // =========================
  const getMembershipStatus = () => {
    if (!membership) {
      return { text: "Not Applied", color: "#ff9800" };
    }

    const isActive = new Date(membership.validTill) >= new Date();
    return isActive
      ? { text: "Active Member", color: "#2e7d32" }
      : { text: "Expired", color: "#d32f2f" };
  };

  const membershipStatus = getMembershipStatus();

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <div className="profile-container">

          {/* LEFT PROFILE CARD */}
          <div className="profile-card">
            <div className="profile-avatar">
              <img
              src="/images/logo.png"
              alt="Yuva Club Logo"
              className="profile-logo"
              />
            </div>


            <h3>{user.name || "Student Name"}</h3>

            {/* MEMBERSHIP STATUS BADGE */}
            <span
              style={{
                display: "inline-block",
                marginTop: "6px",
                padding: "4px 14px",
                borderRadius: "16px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#fff",
                backgroundColor: membershipStatus.color,
              }}
            >
              {membershipStatus.text}
            </span>

            <div className="profile-info">
              <p><strong>Email:</strong> {user.email}</p>

              <p>
                <strong>Phone:</strong>{" "}
                {editMode ? (
                  <input
                    name="phone"
                    value={user.phone || ""}
                    onChange={handleChange}
                  />
                ) : (
                  user.phone || "-"
                )}
              </p>

              <p>
                <strong>Department:</strong>{" "}
                {editMode ? (
                  <input
                    name="department"
                    value={user.department || ""}
                    onChange={handleChange}
                  />
                ) : (
                  user.department || "-"
                )}
              </p>

              <p>
                <strong>Year:</strong>{" "}
                {editMode ? (
                  <input
                    name="year"
                    value={user.year || ""}
                    onChange={handleChange}
                  />
                ) : (
                  user.year || "-"
                )}
              </p>
            </div>

            {!editMode ? (
              <button className="edit-btn" onClick={() => setEditMode(true)}>
                Edit Profile
              </button>
            ) : (
              <button className="edit-btn" onClick={handleSave}>
                Save Profile
              </button>
            )}
          </div>

          {/* RIGHT DETAILS */}
          <div className="profile-details">
            <h3>Personal Information</h3>

            <div className="details-grid">
              <div>
                <label>Full Name</label>
                <input
                  name="name"
                  value={user.name || ""}
                  disabled={!editMode}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Roll Number</label>
                <input
                  name="rollNo"
                  value={user.rollNo || ""}
                  disabled={!editMode}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Email</label>
                <input value={user.email || ""} disabled />
              </div>

              <div>
                <label>Phone</label>
                <input
                  name="phone"
                  value={user.phone || ""}
                  disabled={!editMode}
                  onChange={handleChange}
                />
              </div>

              <div className="full">
                <label>Address</label>
                <input
                  name="address"
                  value={user.address || ""}
                  disabled={!editMode}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* MEMBERSHIP CARD SECTION */}
            <div style={{ marginTop: "30px" }}>
              <h3>Membership</h3>

              {!membership ? (
                <p>You have not applied for membership yet.</p>
              ) : (
                <div className="membership-box">
                  <p><strong>Membership ID:</strong> {membership.membershipId}</p>
                  <p>
                    <strong>Valid Till:</strong>{" "}
                    {new Date(membership.validTill).toLocaleDateString()}
                  </p>

                  <a
                    href={`${process.env.REACT_APP_API_URL}${membership.cardUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                  >
                    View / Download Membership Card
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;

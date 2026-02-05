import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./profile.css";

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

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/user/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [token]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/user/membership`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setMembership(data))
      .catch(() => {});
  }, [token]);

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSave = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });

    if (res.ok) {
      const data = await res.json();
      setUser(data);
      setEditMode(false);
    }
  };

  const membershipStatus = !membership
    ? { text: "Not Applied", color: "orange" }
    : new Date(membership.validTill) >= new Date()
    ? { text: "Active Member", color: "green" }
    : { text: "Expired", color: "red" };

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <div className="profile-wrapper">

          {/* PROFILE HEADER */}
          <div className="profile-header-card">
            <img src="/images/logo.png" alt="YUVA" className="profile-avatar" />

            <div className="profile-header-info">
              <h2>{user.name || "Student Name"}</h2>
              <p>{user.email}</p>

              <span className={`status-badge ${membershipStatus.color}`}>
                {membershipStatus.text}
              </span>
            </div>

            <button className="edit-btn" onClick={editMode ? handleSave : () => setEditMode(true)}>
              {editMode ? "Save Profile" : "Edit Profile"}
            </button>
          </div>

          {/* CONTENT GRID */}
          <div className="profile-grid">

            {/* PERSONAL INFO */}
            <div className="profile-card">
              <h3>Personal Information</h3>

              <div className="form-grid">
                <input name="name" value={user.name || ""} disabled={!editMode} onChange={handleChange} placeholder="Full Name" />
                <input name="rollNo" value={user.rollNo || ""} disabled={!editMode} onChange={handleChange} placeholder="Roll Number" />
                <input value={user.email || ""} disabled placeholder="Email" />
                <input name="phone" value={user.phone || ""} disabled={!editMode} onChange={handleChange} placeholder="Phone" />
                <input name="department" value={user.department || ""} disabled={!editMode} onChange={handleChange} placeholder="Department" />
                <input name="year" value={user.year || ""} disabled={!editMode} onChange={handleChange} placeholder="Year" />
                <input className="full" name="address" value={user.address || ""} disabled={!editMode} onChange={handleChange} placeholder="Address" />
              </div>
            </div>

            {/* MEMBERSHIP */}
            <div className="profile-card">
              <h3>Membership</h3>

              {!membership ? (
                <p>You have not applied for membership yet.</p>
              ) : (
                <div className="membership-card">
                  <p><strong>ID:</strong> {membership.membershipId}</p>
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
                    View / Download Card
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

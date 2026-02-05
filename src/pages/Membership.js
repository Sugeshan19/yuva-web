import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./membership.css";

const Membership = () => {
  const [membership, setMembership] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rollNo: "",
    dob: "",
    gender: "",
    scholarType: "",
    department: "",
    year: "",
    previousMember: "",
    aboutYuva: "",
    expectedBenefits: "",
    address: "Saveetha Engineering College, Chennai",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // =========================
  // FETCH MEMBERSHIP STATUS
  // =========================
  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${process.env.REACT_APP_API_URL}/api/user/membership`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMembership(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  // =========================
  // CHECK ACTIVE MEMBERSHIP
  // =========================
  const isActiveMember = () => {
    if (!membership || !membership.validTill) return false;
    return new Date(membership.validTill) >= new Date();
  };

  // =========================
  // SUBMIT FORM
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/membership/apply`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      }
    );

    if (!res.ok) {
      alert("Membership submission failed");
      return;
    }

    alert("Membership submitted successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="membership-page">
        <div className="membership-wrapper">

          {/* HEADER */}
          <div className="membership-header">
            <h1>YUVA Membership Application</h1>
            <p>
              Join Saveetha Engineering College’s student community focused on
              leadership, innovation, and social impact.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="membership-card">
            {loading ? (
              <p>Checking membership status...</p>
            ) : isActiveMember() ? (
              <div className="already-member">
                <h2>You are already an active YUVA member 🎉</h2>
                <p>
                  Your membership is valid till{" "}
                  <strong>
                    {new Date(membership.validTill).toLocaleDateString()}
                  </strong>
                </p>
                <p>
                  You don’t need to apply again. View details in your profile.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                {/* SECTION 1 */}
                <h3>Personal Details</h3>
                <div className="form-grid">
                  <input name="name" placeholder="Full Name *" required onChange={handleChange} />
                  <input name="email" type="email" placeholder="Email *" required onChange={handleChange} />
                  <input name="phone" placeholder="Phone Number *" required onChange={handleChange} />
                  <input name="rollNo" placeholder="Register Number *" required onChange={handleChange} />
                  <input name="dob" type="date" required onChange={handleChange} />
                  <select name="gender" required onChange={handleChange}>
                    <option value="">Gender *</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* SECTION 2 */}
                <h3>Academic Details</h3>
                <div className="form-grid">
                  <select name="scholarType" required onChange={handleChange}>
                    <option value="">Hosteller / Day Scholar *</option>
                    <option>Hosteller</option>
                    <option>Day Scholar</option>
                  </select>

                  <select name="department" required onChange={handleChange}>
                    <option value="">Department *</option>
                    <option>Computer Science and Engineering</option>
                    <option>Information Technology</option>
                    <option>Electronics and Communication Engineering</option>
                    <option>Mechanical Engineering</option>
                    <option>Electrical and Electronics Engineering</option>
                    <option>Artificial Intelligence and Machine Learning</option>
                    <option>Artificial Intelligence and Data Science</option>
                    <option>Biomedical Engineering</option>
                    <option>Chemical Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Management Studies</option>
                    <option>Agricultural Engineering</option>
                  </select>

                  <select name="year" required onChange={handleChange}>
                    <option value="">Year *</option>
                    <option>First Year</option>
                    <option>Second Year</option>
                    <option>Third Year</option>
                    <option>Final Year</option>
                  </select>
                </div>

                {/* SECTION 3 */}
                <h3>About You & YUVA</h3>
                <div className="form-grid single">
                  <select name="previousMember" required onChange={handleChange}>
                    <option value="">Previous YUVA Member? *</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>

                  <textarea
                    name="aboutYuva"
                    placeholder="What do you know about YUVA? *"
                    required
                    onChange={handleChange}
                  />

                  <textarea
                    name="expectedBenefits"
                    placeholder="What do you expect from this membership? *"
                    required
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Submit Membership Application
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Membership;

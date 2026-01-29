import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Membership = () => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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
        throw new Error("Membership submission failed");
      }

      alert("Membership submitted successfully!");

      // OPTIONAL: redirect to profile page
      // navigate("/profile");

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <section className="membership">
        <h2>Get Your Membership</h2>
        <div className="underline"></div>
        <h4 className="membership-sub">
          Join the Yuva Club and become part of Saveetha Engineering College's
          most vibrant student community
        </h4>

        <div className="membership-grid">
      

          {/* RIGHT FORM */}
          <div className="form-card">
            <h3>Application Form</h3>

            <form className="membership-form" onSubmit={handleSubmit}>
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
              />

              <label>Email *</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
              />

              <label>Phone Number *</label>
              <input
                type="text"
                name="phone"
                required
                onChange={handleChange}
              />

              <label>Register Number *</label>
              <input
                type="text"
                name="rollNo"
                required
                onChange={handleChange}
              />

              <label>Date of Birth *</label>
              <input
                type="date"
                name="dob"
                required
                onChange={handleChange}
              />

              <label>Gender *</label>
              <select
                name="gender"
                required
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              <label>Hosteller / Day Scholar *</label>
              <select
                name="scholarType"
                required
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Hosteller</option>
                <option>Day Scholar</option>
              </select>

              <label>Department *</label>
              <select
                name="department"
                required
                onChange={handleChange}
              >
                <option value="">Select Department</option>
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
                <option>Computer Science and Engineering (Cyber Security)</option>
                <option>Management Studies</option>
                <option>Agricultural Engineering</option>
              </select>

              <label>Year *</label>
              <select
                name="year"
                required
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                <option>First Year</option>
                <option>Second Year</option>
                <option>Third Year</option>
                <option>Final Year</option>
              </select>

              <label>Have you previously held a YUVA membership? *</label>
              <select
                name="previousMember"
                required
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <label>What do you know about YUVA? *</label>
              <textarea
                name="aboutYuva"
                required
                onChange={handleChange}
              ></textarea>

              <label>
                What value or benefits do you expect from this membership? *
              </label>
              <textarea
                name="expectedBenefits"
                required
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Membership;

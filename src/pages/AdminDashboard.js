import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalApplications: 0,
    activeMembers: 0,
    newThisWeek: 0,
  });

  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  // =========================
  // FETCH ADMIN STATS
  // =========================
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/stats`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch stats");
        }

        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error(err);
        alert("Unable to load admin dashboard data");
      }
    };

    fetchStats();
  }, [token]);

  // =========================
  // FETCH MEMBERS (WITH SEARCH)
  // =========================
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/api/admin/members?search=${search}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch members");
        }

        const data = await res.json();
        setMembers(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMembers();
  }, [search, token]);

  // =========================
  // DOWNLOAD MEMBERS EXCEL
  // =========================
  const handleDownloadExcel = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/admin/download-members`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        alert("Failed to download Excel");
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "yuva_members.xlsx";
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Server error while downloading Excel");
    }
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="admin-dashboard">
      {/* HEADER */}
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="admin-stats">
        <div className="stat-card">
          <h4>Total Applications</h4>
          <p>{stats.totalApplications}</p>
        </div>

        <div className="stat-card">
          <h4>Active Members</h4>
          <p>{stats.activeMembers}</p>
        </div>

        <div className="stat-card">
          <h4>New This Week</h4>
          <p>{stats.newThisWeek}</p>
        </div>
      </div>

      {/* ACTIONS */}
      <div style={{ marginTop: "30px" }}>
        <button className="download-btn" onClick={handleDownloadExcel}>
          Download Members Excel
        </button>
      </div>

      {/* MEMBERS TABLE */}
      <div style={{ marginTop: "40px" }}>
        <h3>Members List</h3>

        <input
          type="text"
          placeholder="Search by name / reg no / department"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            width: "300px",
            marginBottom: "15px",
          }}
        />

        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          width="100%"
        >
          <thead>
            <tr>
              <th>Membership ID</th>
              <th>Name</th>
              <th>Register No</th>
              <th>Department</th>
              <th>Year</th>
              <th>Email</th>
              <th>Valid Till</th>
            </tr>
          </thead>


          <tbody>
            {members.length === 0 ? (
              <tr>
                <td colSpan="6" align="center">
                  No members found
                </td>
              </tr>
            ) : (
              members.map((m) => (
                <tr key={m._id}>
                  <td>{m.membershipId}</td>
                  <td>{m.name}</td>
                  <td>{m.rollNo}</td>
                  <td>{m.department}</td>
                  <td>{m.year}</td>
                  <td>{m.email}</td>
                  <td>
                    {m.validTill
                      ? new Date(m.validTill).toLocaleDateString()
                      : "—"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;

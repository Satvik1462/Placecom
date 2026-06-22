import Header from "../../Header";
import Footer from "../../Footer";
import axios from "axios";
import { useState } from "react";
import { FaUserCircle, FaEnvelope, FaUserEdit } from "react-icons/fa";

const Profile = () => {
  const userId = localStorage.getItem("userId");

  const [form, setForm] = useState({
    Name: localStorage.getItem("Name") || "",
    Email: localStorage.getItem("Email") || ""
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        "http://localhost:5000/users/update",
        {
          id: userId,
          Name: form.Name,
          Email: form.Email
        }
      );

      alert(res.data.message);

      localStorage.setItem("Name", form.Name);
      localStorage.setItem("Email", form.Email);

      setEditing(false);

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Update failed");
    }
  };

  return (
    <>
      <Header />

      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div
              className="shadow-lg p-5 rounded-4 bg-white"
              style={{ borderTop: "6px solid #0d6efd" }}
            >
              <div className="text-center mb-4">
                <FaUserCircle
                  size={100}
                  className="text-primary mb-3"
                />

                <h1 className="fw-bold">
                  <span className="text-primary">My</span>
                  <span className="text-warning">Profile</span>
                </h1>

                <p className="text-muted">
                  Welcome back, <strong>{form.Name}</strong>
                </p>
              </div>

              <div className="mb-4">
                <label className="fw-bold mb-2">
                  <FaUserEdit className="me-2 text-primary" />
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="Name"
                  value={form.Name}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>

              <div className="mb-4">
                <label className="fw-bold mb-2">
                  <FaEnvelope className="me-2 text-warning" />
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="Email"
                  value={form.Email}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>

              {!editing ? (
                <button
                  className="btn btn-primary w-100 py-3 fw-bold"
                  onClick={() => setEditing(true)}
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  className="btn btn-warning w-100 py-3 fw-bold text-white"
                  onClick={handleUpdate}
                >
                  Save Changes
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Profile;
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    Email: "",
    Password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.Email === "admin@placecom.com" &&
      form.Password === "admin123"
    ) {
      localStorage.setItem("isAdmin", "true");

      alert("Admin Login Successful");

      navigate("/admin-dashboard");

      window.location.reload();
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <>
      <Header />

      <section className="container-fluid login-page py-5 px-4">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-12">
            <div className="login-card p-5">

              <h1 className="fw-bold text-center mb-3">
                <span className="text-primary">Admin</span>
                <span className="text-warning">Login</span>
              </h1>

              <p className="text-center text-muted mb-4">
                PlaceCom administration access
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    name="Email"
                    placeholder="Enter admin email"
                    value={form.Email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    name="Password"
                    placeholder="Enter password"
                    value={form.Password}
                    onChange={handleChange}
                  />
                </div>

                <button className="btn btn-primary w-100 py-2">
                  Login as Admin
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AdminLogin;
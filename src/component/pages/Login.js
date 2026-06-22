import Header from "../Header";
import Footer from "../Footer";
import loginImg from "../../images/brand-logo.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://placecom-2g3d.onrender.com/users/login",
        form
      );

      alert(res.data.message);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("Name", res.data.Name);
      localStorage.setItem("Email", res.data.Email);

      setForm({
        Email: "",
        Password: ""
      });

      navigate("/profile");

      window.location.reload();

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Error check");
    }
  };

  return (
    <>
      <Header />

      <section className="container-fluid login-page py-5 px-4">
        <div className="row align-items-center justify-content-center">

          <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
            <img
              src={loginImg}
              alt="login"
              className="img-fluid login-img"
            />
          </div>

          <div className="col-lg-5 col-12">
            <div className="login-card p-5">
              <h2 className="fw-bold mb-2">Welcome Back</h2>

              <p className="text-muted mb-4">
                Login to continue your placement preparation journey.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="Email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={form.Email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    name="Password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={form.Password}
                    onChange={handleChange}
                  />
                </div>

                <div className="d-flex justify-content-between mb-4 ">
                  

                  <a href="/forgotpassword" >
                    Forgot Password?
                  </a>
                </div>

                <button className="btn btn-primary w-100 py-2">
                  Login
                </button>
              </form>

              <p className="text-center mt-4 mb-0">
                Don't have an account?{" "}
                <a href="/signup">Sign Up</a>
              </p>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
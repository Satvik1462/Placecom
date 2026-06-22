import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupImg from "../../images/brand-logo.png";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    SecurityQuestion: "",
    Answer: ""
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
        "https://placecom-2g3d.onrender.com/users/register",
        form
      );

      alert(res.data.message);

      setForm({
        Name: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
        SecurityQuestion: "",
        Answer: ""
      });

      navigate("/login");

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <>
      <Header />

      <section className="container-fluid login-page py-5 px-4">
        <div className="row align-items-center justify-content-center">

          <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
            <img src={signupImg} alt="signup" className="img-fluid login-img" />
          </div>

          <div className="col-lg-5 col-12">
            <div className="login-card p-5">
              <h2 className="fw-bold mb-2">Create Account</h2>

              <p className="text-muted mb-4">
                Start your placement preparation journey with PlaceCom.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="Name"
                    value={form.Name}
                    placeholder="Enter your full name"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>

                  <input
                    type="email"
                    className="form-control"
                    name="Email"
                    value={form.Email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>

                  <input
                    type="password"
                    className="form-control"
                    name="Password"
                    value={form.Password}
                    placeholder="Create password"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Confirm Password</label>

                  <input
                    type="password"
                    className="form-control"
                    name="ConfirmPassword"
                    value={form.ConfirmPassword}
                    placeholder="Confirm password"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Security Question</label>

                  <select
                    className="form-select"
                    name="SecurityQuestion"
                    value={form.SecurityQuestion}
                    onChange={handleChange}
                  >
                    <option value="">Select a security question</option>
                    <option value="pet">What is your pet's name?</option>
                    <option value="school">What was the name of your first school?</option>
                    <option value="teacher">Who was your favorite teacher?</option>
                    <option value="book">What is your favorite book?</option>
                    <option value="dreamjob">What was your dream job as a child?</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Answer</label>

                  <input
                    type="text"
                    className="form-control"
                    name="Answer"
                    value={form.Answer}
                    placeholder="Enter your answer"
                    onChange={handleChange}
                  />
                </div>

                <button className="btn btn-primary w-100 py-2">
                  Sign Up
                </button>
              </form>

              <p className="text-center mt-4 mb-0">
                Already have an account? <a href="/login">Login</a>
              </p>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Signup;
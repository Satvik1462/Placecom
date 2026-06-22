import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    Email: "",
    Answer: "",
    NewPassword: ""
  });

  const [securityQuestion, setSecurityQuestion] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const getQuestion = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/users/get-security-question",
        {
          Email: form.Email
        }
      );

      setSecurityQuestion(res.data.SecurityQuestion);
      setShowResetForm(true);

    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/users/reset-password",
        form
      );

      alert(res.data.message);

      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <>
      <Header />

      <section className="container-fluid login-page py-5 px-4">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="login-card p-5">
              <h2 className="fw-bold mb-3">
                Forgot Password
              </h2>

              <p className="text-muted mb-4">
                Recover your account using security question
              </p>

              {!showResetForm ? (
                <>
                  <div className="mb-3">
                    <label className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      name="Email"
                      placeholder="Enter your registered email"
                      value={form.Email}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    className="btn btn-primary w-100"
                    onClick={getQuestion}
                  >
                    Get Security Question
                  </button>
                </>
              ) : (
                <form onSubmit={handleResetPassword}>
                  <div className="mb-3">
                    <label className="form-label">
                      Security Question
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={securityQuestion}
                      readOnly
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Answer
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      name="Answer"
                      placeholder="Enter your answer"
                      value={form.Answer}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      New Password
                    </label>

                    <input
                      type="password"
                      className="form-control"
                      name="NewPassword"
                      placeholder="Enter new password"
                      value={form.NewPassword}
                      onChange={handleChange}
                    />
                  </div>

                  <button className="btn btn-primary w-100">
                    Reset Password
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ForgotPassword;
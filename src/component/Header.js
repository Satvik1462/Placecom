import { NavLink, useNavigate } from "react-router-dom";
import "./css/style.css";
import logo from "../images/brand-logo.png";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="nav-logo" />
        </NavLink>

        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="nav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link btn-link">
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/signup" className="nav-link btn-link">
                    Signup
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/profile" className="nav-link">
                    Profile
                  </NavLink>
                </li>

                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="nav-link btn-link border"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
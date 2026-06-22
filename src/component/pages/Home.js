import Header from "../Header";
import Footer from "../Footer";
import slider1 from "../../images/slider1.png";
import slider2 from "../../images/slider2.png";
import slider3 from "../../images/slider3.png";
import logo from "../../images/logo.png";
import { FaCalculator, FaLaptopCode, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />

      <div
        id="carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="slide1" />
          </div>

          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="slide2" />
          </div>

          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="slide3" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <section className="container-fluid my-2">
        <div className="row align-items-center gx-1">
          <div className="col-lg-5 col-12 text-end">
            <img src={logo} alt="logo" className="img-fluid home-logo" />
          </div>

          <div className="col-lg-7 col-12">
            <h1 className="fw-bold display-4">
              <span className="text-primary">Why</span>
              <span className="text-warning">PlaceCom</span>
              <span className="text-primary">?</span>
            </h1>

            <p className="mb-4 text-muted fs-5">
              PlaceCom is a company-wise placement preparation platform built
              to help students prepare smarter, faster, and more effectively
              for placements.
            </p>

            <ul className="about-list">
              <li>Company-specific preparation paths tailored to hiring patterns.</li>
              <li>Dedicated aptitude, reasoning, and verbal preparation resources.</li>
              <li>Technical interview preparation for DBMS, OS, CN, OOPs, and more.</li>
              <li>Coding practice with DSA, company-wise questions, and mock tests.</li>
              <li>Interview-focused learning based on real student experiences.</li>
              <li>Structured roadmap to prepare efficiently and get placement-ready.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-fluid my-4 px-4">
        <div className="row g-4">
          <div className="col-lg-4 col-12">
            <div className="trip bg-white text-center p-4">
              <FaCalculator className="trip-icon" />
              <h3>Aptitude</h3>
              <p>Practice aptitude, reasoning and verbal questions.</p>
              <Link to="/aptitude">Explore</Link>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="trip bg-white text-center p-4">
              <FaLaptopCode className="trip-icon" />
              <h3>Technical</h3>
              <p>Prepare DBMS, OS, CN, OOPs and interview questions.</p>
              <Link to="/technical">Explore</Link>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="trip bg-white text-center p-4">
              <FaCode className="trip-icon" />
              <h3>Coding</h3>
              <p>Practice DSA, coding rounds and problem solving.</p>
              <Link to="/coding">Explore</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
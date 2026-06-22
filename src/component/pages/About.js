import Header from "../Header";
import Footer from "../Footer";
import aboutImg from "../../images/about.png";
import { FaBullseye, FaLightbulb, FaCogs, FaBookOpen, FaChartLine, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Header />


      <section className="container-fluid py-5 px-5 bg-light">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            {/* <h5 className="text-primary fw-bold">ABOUT US</h5> */}
            <h1 className="fw-bold display-4">
              About <span className="text-primary">Place</span>
              <span className="text-warning">Com</span>
            </h1>
            <h3 className="mb-4">Your Placement Journey, Simplified.</h3>

            <p className="fs-5 text-muted">
              PlaceCom is a company-centric placement preparation platform
              designed to help students prepare smarter, not harder. We provide
              the right resources, tools and guidance to help students crack
              aptitude tests, coding rounds, technical interviews and HR rounds
              of top companies with confidence.
            </p>

            <div className="row mt-4 g-3">
              <div className="col-md-6 col-12 d-flex align-items-center gap-2">
                <FaBullseye className="text-primary fs-3" />
                <span>Company Centric Approach</span>
              </div>

              <div className="col-md-6 col-12 d-flex align-items-center gap-2">
                <FaBookOpen className="text-primary fs-3" />
                <span>Structured Preparation</span>
              </div>

              <div className="col-md-6 col-12 d-flex align-items-center gap-2">
                <FaChartLine className="text-primary fs-3" />
                <span>Progress Tracking</span>
              </div>

              <div className="col-md-6 col-12 d-flex align-items-center gap-2">
                <FaUsers className="text-primary fs-3" />
                <span>Student Driven</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 text-center">
            <img src={aboutImg} alt="about" className="img-fluid about-img" />
          </div>
        </div>
      </section>

      <section className="container-fluid my-5 px-4">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="trip bg-white text-center p-4">
              <FaBullseye className="trip-icon" />
              <h3>Our Motive</h3>
              <p>
                Our motive is to provide a company-centric preparation platform
                where students can prepare according to the exact pattern and
                expectations of top companies. We aim to make placement
                preparation focused, effective and result-oriented.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="trip bg-white text-center p-4">
              <FaLightbulb className="trip-icon" />
              <h3>Our Vision</h3>
              <p>
                Our vision is to make placement preparation easy and accessible
                for every student. We want to build a platform where anyone can
                learn, practice and grow with the right guidance and resources.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="trip bg-white text-center p-4">
              <FaCogs className="trip-icon" />
              <h3>Our System</h3>
              <p>
                PlaceCom provides a complete system that includes aptitude
                preparation, coding practice, company-specific questions, mock
                tests, performance analysis and interview guidance — all in one
                place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
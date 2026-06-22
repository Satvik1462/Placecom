import Header from "../../component/Header";
import Footer from "../../component/Footer";

const Ages = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">PLACECOM • SECTION 14</p>
            <h1 className="fw-bold display-5 mb-2">Problems on Ages</h1>
            <p className="text-muted fs-5">
              Core formulas, shortcuts and practice for TCS Aptitude
            </p>
          </div>

          {/* Formula Box */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Points to Remember</h2>
            <div className="row g-3">
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Present age = x
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Age after n years = x + n
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Age n years ago = x − n
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Ratio questions use Present / Past / Future age relation
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Sum of ages changes with number of persons × years
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Difference in ages always remains constant
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Use equations for father-son, brother-sister type questions
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  TCS asks direct age ratio and sum-based questions
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Quick Tips & Tricks</h2>
            <div className="row g-3">
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Difference in ages never changes
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Always assume present age as variable x
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Convert future/past age statements into equations
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Ratio questions are easiest when converted into actual ages
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Father-son and mother-daughter are most common TCS patterns
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Most TCS questions are equation-based and direct
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Watch First (Concept Video)</h2>
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/tJHl73PBnwY?si=G2a5vJAYvJF-BhQT"
                title="Problems on Ages Aptitude Tricks"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Practice Links */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Practice Links</h2>
            <div className="d-grid gap-3">
              <a
                href="https://www.careerride.com/problem-on-ages.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                CareerRide Problems on Ages
              </a>

              <a
                href="https://prepinsta.com/ages/question-answer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                PrepInsta Problems on Ages
              </a>

              <a
                href="https://www.indiabix.com/aptitude/problems-on-ages/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                IndiaBix Problems on Ages
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Ages;
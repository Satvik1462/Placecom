import Header from "../../component/Header";
import Footer from "../../component/Footer";

const OddOneOut = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">PLACECOM • LR SECTION 08</p>
            <h1 className="fw-bold display-5 mb-2">Odd One Out</h1>
            <p className="text-muted fs-5">
              Core patterns, shortcuts and practice for TCS Logical Reasoning
            </p>
          </div>

          {/* Formula Box */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Points to Remember</h2>
            <div className="row g-3">
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Find the common pattern among all options first
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  One option will break the common logic
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Pattern may be based on numbers, letters or meaning
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Check arithmetic relation in number groups
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Check alphabetical relation in letter groups
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Check category / class relation in word groups
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Meaning-based odd one out is very common in TCS
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  TCS often asks direct and quick pattern odd-one-out questions
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
                  Do not search odd one directly, find common pattern first
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Check number logic, letter logic and meaning one by one
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  For words, look for category mismatch
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  For numbers, test arithmetic relation quickly
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  TCS usually keeps odd one out logic very direct
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Solve by elimination when pattern is not obvious
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Watch First (Concept Video)</h2>
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/t7zRboobwAA?si=6WyxPo00Inh-EHCZ"
                title="Odd One Out Logical Reasoning Tricks"
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
                href="https://www.careerride.com/odd-man-out-series.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                CareerRide Odd One Out Practice
              </a>

              <a
                href="https://prepinsta.com/odd-man-out/questions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                PrepInsta Odd One Out Practice
              </a>

              <a
                href="https://www.indiabix.com/aptitude/odd-man-out-and-series/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                IndiaBix Odd One Out Practice
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default OddOneOut;
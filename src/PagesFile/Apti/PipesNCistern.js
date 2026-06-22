import Header from "../../component/Header";
import Footer from "../../component/Footer";

const PipesNCistern = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">PLACECOM • SECTION 12</p>
            <h1 className="fw-bold display-5 mb-2">Pipes & Cistern</h1>
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
                  If a pipe fills tank in n hours → 1 hour work = 1/n
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  If a pipe empties tank in n hours → 1 hour work = -1/n
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Net Work = Filling Rate − Emptying Rate
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Total Time = Total Work / Net Work
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Two filling pipes together = (xy) / (x + y)
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  One fill + one empty = (xy) / (y − x)
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Pipes & Cistern follows same concept as Time & Work
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Filling pipe = positive work, outlet pipe = negative work
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
                  Treat tank filling exactly like Time & Work problems
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Filling pipe adds work, outlet subtracts work
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Convert all pipes into 1-hour work first
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Net efficiency decides total time
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  If outlet is stronger than inlet, tank will never fill
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  TCS asks direct net work and combined pipe questions
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Watch First (Concept Video)</h2>
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/mBtBD1N7ywQ?si=WMbG2TNlbLL29G5W"
                title="Pipes and Cistern Aptitude Tricks"
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
                href="https://www.careerride.com/pipes-and-cistern-aptitude-test.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                CareerRide Pipes & Cistern Practice
              </a>

              <a
                href="https://prepinsta.com/pipes-cisterns/questions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                PrepInsta Pipes & Cistern Practice
              </a>

              <a
                href="https://www.indiabix.com/aptitude/pipes-and-cistern/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                IndiaBix Pipes & Cistern Practice
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default PipesNCistern;
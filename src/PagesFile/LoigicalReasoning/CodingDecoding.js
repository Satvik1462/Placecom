import Header from "../../component/Header";
import Footer from "../../component/Footer";

const CodingDecoding = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">PLACECOM • LR SECTION 03</p>
            <h1 className="fw-bold display-5 mb-2">Coding-Decoding</h1>
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
                  Convert letters into positions (A=1, B=2... Z=26)
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Check direct shift pattern (+1, +2, -1...)
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Check reverse alphabet pattern (A↔Z, B↔Y)
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Look for symbol or number replacement patterns
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Word coding often uses fixed substitution rules
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Sentence coding is solved by common word mapping
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Number coding may use addition / multiplication logic
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  TCS often asks direct letter and word pattern coding
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
                  Start by converting letters into alphabet positions
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Check for forward, backward or alternate shifts
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  For sentence coding, identify repeated common words first
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Symbol-based coding is usually direct substitution
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Practice letter position tricks for faster solving
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  TCS mostly asks easy-to-moderate pattern based coding
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Watch First (Concept Video)</h2>
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/wwN3mJ-b4FY?si=5WP3r_Z3-mH-HBv4"
                title="Coding Decoding Logical Reasoning Tricks"
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
                href="https://www.careerride.com/page/coding-decoding-questions-and-answers-737.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                CareerRide Coding-Decoding Practice
              </a>

              <a
                href="https://prepinsta.com/tcs-nqt/logical-ability/coding-decoding/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                PrepInsta Coding-Decoding Practice
              </a>

              <a
                href="https://www.geeksforgeeks.org/python/coding-decoding/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                GeeksforGeeks Coding-Decoding Practice
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default CodingDecoding;
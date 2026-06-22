import Header from "../../component/Header";
import Footer from "../../component/Footer";

const DataSufficiency = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">PLACECOM • LR SECTION 11</p>
            <h1 className="fw-bold display-5 mb-2">Data Sufficiency</h1>
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
                  Check whether data is sufficient, not solve fully
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Focus on sufficiency, not exact answer
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Test Statement I alone first
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Then test Statement II alone
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Combine both only if needed
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Do not assume hidden information
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Exact value is not needed if answer can be determined
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  TCS asks direct statement sufficiency based questions
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
                  Never solve fully unless required
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Check Statement I and II independently first
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Use elimination quickly on answer options
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Hidden assumptions make answers wrong
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  If one statement is enough, stop there
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  TCS data sufficiency is logic based and scoring
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Watch First (Concept Video)</h2>
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/u4p6VBRUK3E?si=iwcmdXwyNT5RxEKY"
                title="Data Sufficiency Logical Reasoning Tricks"
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
                href="https://prepinsta.com/data-sufficient/questions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                PrepInsta Data Sufficiency Practice
              </a>

              <a
                href="https://www.geeksforgeeks.org/aptitude/data-sufficiency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                GeeksforGeeks Data Sufficiency Practice
              </a>

              <a
                href="https://www.indiabix.com/verbal-reasoning/data-sufficiency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                IndiaBix Data Sufficiency Practice
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default DataSufficiency;
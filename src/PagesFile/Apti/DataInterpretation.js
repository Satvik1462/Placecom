import Header from "../../component/Header";
import Footer from "../../component/Footer";

const DataInterpretation = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">
              PLACECOM • SECTION 19
            </p>

            <h1 className="fw-bold display-5 mb-2">
              Data Interpretation
            </h1>

            <p className="text-muted fs-5">
              Charts, graphs and calculation-based aptitude for Accenture & Infosys
            </p>
          </div>

          {/* Points */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">
              Points to Remember
            </h2>

            <div className="row g-3">

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  DI questions are based on charts, tables and graphs
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Percentage and ratio concepts are heavily used
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Approximation helps save time in calculations
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Read units carefully before solving
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Pie charts use percentage distribution
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Bar graphs compare quantities visually
                </div>
              </div>

            </div>
          </div>

          {/* Tips */}
          <div className="trip bg-white p-5 mb-4">

            <h2 className="fw-bold mb-4">
              Quick Tips & Tricks
            </h2>

            <div className="row g-3">

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Solve easy questions first
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Use approximation for lengthy calculations
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Keep percentage to fraction conversions ready
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Read graph labels carefully
                </div>
              </div>

            </div>
          </div>

          {/* Video */}
          <div className="trip bg-white p-5 mb-4">

            <h2 className="fw-bold mb-4">
              Watch First (Concept Video)
            </h2>

            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/tqko0MOHZFg?si=sBb6gxB1gStM3NMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

          </div>

          {/* Practice Links */}
          <div className="trip bg-white p-5 mb-4">

            <h2 className="fw-bold mb-4">
              Practice Links
            </h2>

            <div className="d-grid gap-3">

              <a
                href="https://prepinsta.com/data-interpretation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                PrepInsta Data Interpretation
              </a>

              <a
                href="https://www.indiabix.com/data-interpretation/questions-and-answers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                IndiaBix Data Interpretation
              </a>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default DataInterpretation;
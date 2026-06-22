import Header from "../../component/Header";
import Footer from "../../component/Footer";

const Simplification = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">
              PLACECOM • SECTION 20
            </p>

            <h1 className="fw-bold display-5 mb-2">
              Simplification
            </h1>

            <p className="text-muted fs-5">
              Fast calculation techniques and approximation shortcuts for aptitude
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
                  Follow BODMAS rule while solving
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Division and multiplication are solved before addition
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Approximation saves time in lengthy calculations
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Learn square values from 1 to 30
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Learn cube values from 1 to 20
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Fractions and percentages are frequently used
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
                  Use approximation wherever possible
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Memorize common fraction-percentage conversions
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Cancel common terms quickly in divisions
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Avoid lengthy manual multiplication
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ZuMJFleXmiw?si=Y9lEQR77UBNILQy-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

          </div>

          {/* Practice Links */}
          <div className="trip bg-white p-5 mb-4">

            <h2 className="fw-bold mb-4">
              Practice Links
            </h2>

            <div className="d-grid gap-3">

              <a
                href="https://prepinsta.com/simplification/questions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                PrepInsta Simplification
              </a>

              <a
                href="https://www.indiabix.com/aptitude/simplification/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                IndiaBix Simplification
              </a>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Simplification;
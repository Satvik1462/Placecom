import Header from "../../component/Header";
import Footer from "../../component/Footer";

const AlgebraBasics = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">
              PLACECOM • SECTION 21
            </p>

            <h1 className="fw-bold display-5 mb-2">
              Algebra Basics
            </h1>

            <p className="text-muted fs-5">
              Core algebra formulas, identities and aptitude shortcuts
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
                  (a + b)² = a² + b² + 2ab
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  (a - b)² = a² + b² - 2ab
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  a² - b² = (a + b)(a - b)
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  (a + b)³ = a³ + b³ + 3ab(a + b)
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  (a - b)³ = a³ - b³ - 3ab(a - b)
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  x + 1/x identities are important in aptitude
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
                  Memorize algebra identities for fast solving
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Factorization helps reduce calculation time
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Practice square and cube expansions regularly
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Simplify equations step by step carefully
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/TV9rQm15sWo?si=-HE3s9NmXSgTvwLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

          </div>

          {/* Practice Links */}
          <div className="trip bg-white p-5 mb-4">

            <h2 className="fw-bold mb-4">
              Practice Links
            </h2>

            <div className="d-grid gap-3">

              <a
                href="https://prepinsta.com/algebra/questions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                PrepInsta Algebra Basics
              </a>

              <a
                href="https://www.indiabix.com/aptitude/algebra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                IndiaBix Algebra Basics
              </a>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AlgebraBasics;
import Header from "../../component/Header";
import Footer from "../../component/Footer";

const CI = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">PLACECOM • SECTION 08</p>
            <h1 className="fw-bold display-5 mb-2">Compound Interest</h1>
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
                  Amount = P(1 + R/100)^T
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Compound Interest = Amount − Principal
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  CI − SI for 2 years = P(R/100)^2
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Half-yearly → Use R/2 and 2T
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
                  CI is calculated on principal + previous interest
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Check compounding: yearly / half-yearly / quarterly
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  CI grows faster than SI
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  TCS often asks CI − SI shortcut questions
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Watch First (Concept Video)</h2>
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/PbUZnzncmR4?si=CIV9y98sSwiTLUCp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>

          {/* Practice Links */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Practice Links</h2>
            <div className="d-grid gap-3">
              <a href="https://www.careerride.com/compound-interest-aptitude-test.aspx" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                CareerRide Compound Interest Practice
              </a>
              <a href="https://www.indiabix.com/aptitude/compound-interest/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                IndiaBix Compound Interest Practice
              </a>

              <a href="https://prepinsta.com/compound-interest/questions/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                PrepInsta TCS Compound Interest
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default CI;
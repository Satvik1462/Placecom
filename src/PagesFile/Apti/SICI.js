import Header from "../../component/Header";
import Footer from "../../component/Footer";

const SICI = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">PLACECOM • SECTION 07</p>
            <h1 className="fw-bold display-5 mb-2">Simple Interest</h1>
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
                  Simple Interest = (P × R × T) / 100
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Amount = Principal + Simple Interest
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Principal = (SI × 100) / (R × T)
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Rate = (SI × 100) / (P × T)
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
                  SI is always calculated on original principal
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  SI grows linearly with time
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Most TCS SI questions are direct formula based
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Keep units of rate and time consistent
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Watch First (Concept Video)</h2>
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/jvRq87ZWzIk?si=OsSoy55n5ZTFJG_B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>

          {/* Practice Links */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Practice Links</h2>
            <div className="d-grid gap-3">
              <a href="https://www.careerride.com/simple-interest-aptitude-test.aspx" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                CareerRide Simple Intrest Practice
              </a>
              <a href="https://www.indiabix.com/aptitude/simple-interest/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                IndiaBix Simple Interest Practice
              </a>

              <a href="https://prepinsta.com/tcs-nqt/aptitude/simple-interest-and-compound-interest/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                PrepInsta TCS Simple Interest
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default SICI;
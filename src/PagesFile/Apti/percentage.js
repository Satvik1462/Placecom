import Header from "../../component/Header";
import Footer from "../../component/Footer";

const Percentage = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">PLACECOM • SECTION 01</p>
            <h1 className="fw-bold display-5 mb-2">Percentage</h1>
            <p className="text-muted fs-5">
              Core formulas, shortcuts and practice for TCS Aptitude
            </p>
          </div>

          {/* Formula Box */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Points to Remember</h2>
            <div className="row g-3">
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Y% = Y/100</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">x/y as % = (x/y × 100)%</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Price ↑ by R% → Consumption ↓ = [R/(100+R)] × 100</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Price ↓ by R% → Consumption ↑ = [R/(100-R)] × 100</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Population after n years = P(1 + R/100)^n</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Population n years ago = P / (1 + R/100)^n</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Depreciation after n years = P(1 - R/100)^n</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Value n years ago = P / (1 - R/100)^n</div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Quick Tips & Tricks</h2>
            <div className="row g-3">
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">Convert % to fraction first (25% = 1/4, 20% = 1/5)</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">“of” always means multiply</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">Use multiplier trick: +20% = ×1.2, -20% = ×0.8</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">Population and depreciation are direct formula questions in TCS</div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Watch First (Concept Video)</h2>
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/RWdNhJWwzSs?si=5e_NgZ3NvxgYaAck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>

          {/* Practice Links */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Practice Links</h2>
            <div className="d-grid gap-3">
               <a
                href="https://www.careerride.com/problems-on-percentage.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
                >
                CareerRide Percentage Practice
              </a>
              <a
                href="https://www.indiabix.com/aptitude/percentage/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                IndiaBix Percentage Practice
              </a>

              <a
                href="https://prepinsta.com/tcs-nqt/aptitude/percentage/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                PrepInsta TCS Percentage
              </a>

              <a
                href="https://www.freshersnow.com/tcs-nqt-placement-papers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                FreshersNow TCS Aptitude
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Percentage;
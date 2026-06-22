import Header from "../../component/Header";
import Footer from "../../component/Footer";

const ProfitLoss = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">PLACECOM • SECTION 02</p>
            <h1 className="fw-bold display-5 mb-2">Profit & Loss</h1>
            <p className="text-muted fs-5">
              Core formulas, shortcuts and practice for TCS Aptitude
            </p>
          </div>

          {/* Formula Box */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Points to Remember</h2>
            <div className="row g-3">
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Profit = Selling Price − Cost Price</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Loss = Cost Price − Selling Price</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Profit% = (Profit / C.P.) × 100</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Loss% = (Loss / C.P.) × 100</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">S.P. = [(100 + Profit%) / 100] × C.P.</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">S.P. = [(100 − Loss%) / 100] × C.P.</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">C.P. = [100 / (100 + Profit%)] × S.P.</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">C.P. = [100 / (100 − Loss%)] × S.P.</div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Quick Tips & Tricks</h2>
            <div className="row g-3">
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">Profit always means S.P. &gt; C.P.</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">Loss always means C.P. &gt; S.P.</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">If profit is 25%, then S.P. = 125% of C.P.</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">If loss is 30%, then S.P. = 70% of C.P.</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">Successive profit/loss questions are common in TCS.</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">Discount + Profit combo is one of the most repeated patterns.</div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Watch First (Concept Video)</h2>
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/T2odvmxqi1I?si=lf3RRbG_FevwFIHu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>

          {/* Practice Links */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Practice Links</h2>
            <div className="d-grid gap-3">
              <a
                href="https://www.careerride.com/problems-on-profit-and-loss.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                CareerRide Profit & Loss Practice
              </a>

              <a
                href="https://www.indiabix.com/aptitude/profit-and-loss/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                IndiaBix Profit & Loss Practice
              </a>

              <a
                href="https://prepinsta.com/tcs-nqt/aptitude/profit-and-loss/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                PrepInsta TCS Profit & Loss
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

export default ProfitLoss;
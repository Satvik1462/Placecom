import Header from "../../component/Header";
import Footer from "../../component/Footer";

const RatioProportion = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">PLACECOM • SECTION 03</p>
            <h1 className="fw-bold display-5 mb-2">Ratio & Proportion</h1>
            <p className="text-muted fs-5">
              Core formulas, shortcuts and practice for TCS Aptitude
            </p>
          </div>

          {/* Formula Box */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Points to Remember</h2>
            <div className="row g-3">
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Ratio of a : b = a/b, where b ≠ 0</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">x/y can also be written as x : y</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Duplicate Ratio of x : y = x² : y²</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Sub-Duplicate Ratio of x : y = √x : √y</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Triplicate Ratio of x : y = x³ : y³</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Sub-Triplicate Ratio of x : y = ∛x : ∛y</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Compound Ratio = Product of antecedents : Product of consequents</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Inverse Ratio of a : b = b : a</div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Quick Tips & Tricks</h2>
            <div className="row g-3">
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">Proportion means equality of two ratios → a : b = c : d</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">Product of means = Product of extremes → b × c = a × d</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">Mean Proportion between x and y = √xy</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">If a = kb, then a is directly proportional to b</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">If ab = k, then a is inversely proportional to b</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">If quantity is divided in ratio x : y → Parts = ax/(x+y), ay/(x+y)</div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Watch First (Concept Video)</h2>
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/jfoJBivWlnQ?si=dr6NTt2Rx9VHucoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>

          {/* Practice Links */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Practice Links</h2>
            <div className="d-grid gap-3">
              <a
                href="https://www.careerride.com/problems-on-ratio-and-proportion.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                CareerRide Ratio & Proportion Practice
              </a>

              <a
                href="https://www.indiabix.com/aptitude/ratio-and-proportion/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                IndiaBix Ratio & Proportion Practice
              </a>

              <a
                href="https://prepinsta.com/tcs-nqt/aptitude/ratio-and-proportion/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                PrepInsta TCS Ratio & Proportion
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

export default RatioProportion;
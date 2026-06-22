import Header from "../../component/Header";
import Footer from "../../component/Footer";

const Average = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">PLACECOM • SECTION 04</p>
            <h1 className="fw-bold display-5 mb-2">Average</h1>
            <p className="text-muted fs-5">
              Core formulas, shortcuts and practice for TCS Aptitude
            </p>
          </div>

          {/* Formula Box */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Points to Remember</h2>
            <div className="row g-3">
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Average = Sum of Observations / Number of Observations</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Sum = Average × Number of Terms</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">New Average = Old Average ± Change / Number of Terms</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Average of consecutive numbers = (First + Last) / 2</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Combined Average = (Sum of all groups) / Total terms</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Weighted Average = Total weighted sum / Total weight</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">If one value replaced → Net Change affects total sum directly</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">Average age / marks problems are direct formula based in TCS</div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Quick Tips & Tricks</h2>
            <div className="row g-3">
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">Use Sum = Average × Count in almost every question</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">Replacement questions are solved using net gain/loss in total</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">For consecutive numbers, average is just middle term</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">Combined average questions are very common in TCS</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">If one person joins/leaves, update total sum first</div>
              </div>
              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">Age and marks average questions are repeated frequently</div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Watch First (Concept Video)</h2>
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rhSxQ4ieAYc?si=lDqM9NP7bO-sulcP"
                title="Average Aptitude Tricks"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Practice Links */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Practice Links</h2>
            <div className="d-grid gap-3">
              <a
                href="https://www.careerride.com/problems-on-average.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                CareerRide Average Practice
              </a>

              <a
                href="https://www.indiabix.com/aptitude/average/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                IndiaBix Average Practice
              </a>

              <a
                href="https://prepinsta.com/tcs-nqt/aptitude/average/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold"
              >
                PrepInsta TCS Average
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

export default Average;
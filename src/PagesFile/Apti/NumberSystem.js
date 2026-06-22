import Header from "../../component/Header";
import Footer from "../../component/Footer";

const NumberSystem = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">PLACECOM • SECTION 09</p>
            <h1 className="fw-bold display-5 mb-2">Number System</h1>
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
                  Natural Numbers = 1, 2, 3, 4...
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Whole Numbers = 0, 1, 2, 3...
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Integers = ..., -2, -1, 0, 1, 2...
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Even Numbers are divisible by 2
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Odd Numbers are not divisible by 2
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Prime Numbers have exactly 2 factors
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Co-primes have HCF = 1
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100 fw-semibold">
                  Divisibility rules are very important in TCS
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
                  Sum of first n natural numbers = n(n+1)/2
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Sum of first n even numbers = n(n+1)
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Sum of first n odd numbers = n²
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Number of factors of N depends on prime factorization
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Units digit questions are common in TCS
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="bg-light rounded p-3 h-100">
                  Remainder and divisibility shortcuts save time
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Watch First (Concept Video)</h2>
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe
                src="https://youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt&si=lXIiGA5M5N0PFL3e"
                title="Number System Aptitude Tricks"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Practice Links */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Practice Links</h2>
            <div className="d-grid gap-3">
              <a href="https://www.indiabix.com/aptitude/numbers/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                IndiaBix Number System Practice
              </a>

              <a href="https://prepinsta.com/tcs-nqt/aptitude/number-system/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                PrepInsta TCS Number System
              </a>

              <a href="https://www.careerride.com/number-aptitude.aspx" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                CareerRide Number System Practice
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default NumberSystem;
import Header from "../../component/Header";
import Footer from "../../component/Footer";

const AccentureTechnical = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">PLACECOM • ACCENTURE TECHNICAL</p>
            <h1 className="fw-bold display-5 mb-2">Accenture Technical Preparation</h1>
            <p className="text-muted fs-5">
              Core technical subjects asked in Accenture technical rounds
            </p>
          </div>

          {/* DBMS */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">DBMS Topics to Study</h2>
            <div className="row g-3">
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">DBMS vs RDBMS</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Normalization</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">ACID Properties</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Transactions</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Indexing</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">ER Model</div></div>
            </div>
          </div>

          {/* OS */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Operating System Topics</h2>
            <div className="row g-3">
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Process vs Thread</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">CPU Scheduling</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Deadlock</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Paging</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Virtual Memory</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Synchronization</div></div>
            </div>
          </div>

          {/* CN */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Computer Networks Topics</h2>
            <div className="row g-3">
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">OSI Model</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">TCP/IP Model</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">TCP vs UDP</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">IP Addressing</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">DNS</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">HTTP / HTTPS</div></div>
            </div>
          </div>

          {/* OOPs */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">OOPs Topics</h2>
            <div className="row g-3">
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Encapsulation</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Inheritance</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Polymorphism</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Abstraction</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Constructor</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Method Overloading / Overriding</div></div>
            </div>
          </div>

          {/* SQL */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">SQL Topics</h2>
            <div className="row g-3">
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Joins</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">GROUP BY</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">HAVING Clause</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Subqueries</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">DELETE / DROP / TRUNCATE</div></div>
              <div className="col-md-6"><div className="bg-light rounded p-3 fw-semibold">Aggregate Functions</div></div>
            </div>
          </div>

          {/* Video */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Watch First (Technical Prep Video)</h2>
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/8hly31xKli0"
                title="Accenture Technical Preparation"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Study Links */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Study Resources</h2>
            <div className="d-grid gap-3">

              <a href="https://www.geeksforgeeks.org/dbms/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                DBMS Study Material
              </a>

              <a href="https://www.geeksforgeeks.org/operating-systems/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Operating System Study Material
              </a>

              <a href="https://www.geeksforgeeks.org/computer-network-tutorials/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Computer Networks Study Material
              </a>

              <a href="https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                OOPs Study Material
              </a>

              <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                SQL Study Material
              </a>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AccentureTechnical;
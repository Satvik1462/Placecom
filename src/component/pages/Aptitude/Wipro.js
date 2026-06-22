import Header from "../../Header";
import Footer from "../../Footer";

const Wipro = () => {
  return (
    <>
      <Header />

      <section className="container-fluid py-5 px-4 bg-light">
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">
            Wipro <span className="text-warning"> Aptitude</span>{" "}
            <span className="text-primary">Preparation</span>
          </h1>

          <p className="text-muted fs-5">
            Prepare company-wise for Wipro aptitude with structured topic
            coverage, practice links and trusted resources.
          </p>
        </div>

        {/* Quantitative Aptitude */}
        <div className="trip bg-white p-5 mb-4">
          <h2 className="fw-bold text-primary mb-3">
            1. Quantitative Aptitude
          </h2>

          <p className="text-muted">
            Wipro aptitude focuses on speed, formulas and basic calculations.
          </p>

          <h5 className="fw-bold mt-4">Practice Links</h5>

          <ul className="about-list">
            <li><a href="/Percentage">Percentage Questions</a></li>
            <li><a href="/ProfitLoss">Profit & Loss Questions</a></li>
            <li><a href="/SICI">Simple Interest Questions</a></li>
            <li><a href="/CI">Compound Interest Questions</a></li>
            <li><a href="/RatioProportion">Ratio & Proportion Questions</a></li>
            <li><a href="/Average">Average Questions</a></li>
            <li><a href="/TimeWork">Time & Work Questions</a></li>
            <li><a href="/TSD">Time, Speed & Distance Questions</a></li>
            <li><a href="/PipesNCistern">Pipes & Cistern Questions</a></li>
            <li><a href="/mixNall">Mixture & Allegation Questions</a></li>
            <li><a href="/PartnerShip">Partnership Questions</a></li>
            <li><a href="/NumberSystem">Number System Questions</a></li>
            <li><a href="/LCMnHCF">HCF & LCM Questions</a></li>
            <li><a href="/Probability">Probability Questions</a></li>
            <li><a href="/PnC">Permutation & Combination Questions</a></li>
            <li><a href="/Ages">Ages Questions</a></li>
            <li><a href="/BoatAndStream">Boats & Streams Questions</a></li>
            <li><a href="/Clock">Clocks & Calendars Questions</a></li>
          </ul>
        </div>

        {/* Logical Reasoning */}
        <div className="trip bg-white p-5 mb-4">
          <h2 className="fw-bold text-primary mb-3">
            2. Logical Reasoning
          </h2>

          <p className="text-muted">
            Wipro reasoning is easy to moderate and highly scoring.
          </p>

          <h5 className="fw-bold mt-4">Practice Links</h5>

          <ul className="about-list">
            <li><a href="/BloodReln">Blood Relation Questions</a></li>
            <li><a href="/Direction">Direction Sense Questions</a></li>
            <li><a href="/CodingDecoding">Coding-Decoding Questions</a></li>
            <li><a href="/NumberSeries">Number Series Questions</a></li>
            <li><a href="/LetterSeries">Letter Series Questions</a></li>
            <li><a href="/Analogy">Analogy Questions</a></li>
            <li><a href="/OddOneOut">Odd One Out Questions</a></li>
            <li><a href="/Syllogism">Syllogism Questions</a></li>
            <li><a href="/StatementConclusion">Statement & Conclusion Questions</a></li>
            <li><a href="/CausesEffects">Cause & Effect Questions</a></li>
            <li><a href="/DataSufficiency">Data Sufficiency Questions</a></li>
            <li><a href="/SeatingArrangement">Seating Arrangement Questions</a></li>
            <li><a href="/Puzzle">Puzzle Questions</a></li>
            <li><a href="/VennDiagram">Venn Diagram Questions</a></li>
          </ul>
        </div>

        {/* Verbal Ability */}
        {/* Verbal Ability */}
        <div className="trip bg-white p-5 mb-4">
          <h2 className="fw-bold text-primary mb-3">
            3. Verbal Ability
          </h2>

          <p className="text-muted">
            Grammar, comprehension and vocabulary based verbal preparation.
          </p>

          <h5 className="fw-bold mt-4">Practice Links</h5>

          <ul className="about-list">

            <li>
              <a
                href="https://prepinsta.com/tcs-nqt/placement-papers/english-verbal/synonyms-antonyms/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Synonyms & Antonyms
              </a>
            </li>

            <li>
              <a
                href="https://prepinsta.com/tcs-nqt/placement-papers/english-verbal/error-correction/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Error Detection
              </a>
            </li>

            <li>
              <a
                href="https://www.indiabix.com/verbal-ability/sentence-correction/#google_vignette"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sentence Correction
              </a>
            </li>

            <li>
              <a
                href="https://prepinsta.com/verbal-fill-in-the-blanks-questions-and-answers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fill in the Blanks
              </a>
            </li>

            <li>
              <a
                href="https://www.indiabix.com/verbal-ability/comprehension/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reading Comprehension
              </a>
            </li>

            <li>
              <a
                href="https://prepinsta.com/parajumbles/questions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Para Jumbles
              </a>
            </li>

            <li>
              <a
                href="https://www.indiabix.com/verbal-ability/change-of-voice/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Active-Passive
              </a>
            </li>

            <li>
              <a
                href="https://www.geeksforgeeks.org/aptitude/preposition-verbal-ability-questions-and-answers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prepositions
              </a>
            </li>

          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Wipro;
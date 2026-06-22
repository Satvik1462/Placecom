import Header from "../../Header";
import Footer from "../../Footer";

const CapgeminiAptitude = () => {
  return (
    <>
      <Header />

      <section className="container-fluid py-5 px-4 bg-light">

        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">
            Capgemini <span className="text-warning">Preparation</span>{" "}
            <span className="text-primary">Hub</span>
          </h1>

          <p className="text-muted fs-5">
            Complete preparation for Capgemini Aptitude, Reasoning and Verbal Ability.
          </p>
        </div>

        {/* Quantitative Aptitude */}
        <div className="trip bg-white p-5 mb-4">

          <h2 className="fw-bold text-primary mb-3">
            1. Quantitative Aptitude
          </h2>

          <p className="text-muted">
            Formula-based aptitude questions with focus on speed and accuracy.
          </p>

          <h5 className="fw-bold mt-4">Practice Links</h5>

          <ul className="about-list">

            <li><a href="/Percentage">Percentage</a></li>
            <li><a href="/ProfitLoss">Profit & Loss</a></li>
            <li><a href="/RatioProportion">Ratio & Proportion</a></li>
            <li><a href="/Average">Average</a></li>
            <li><a href="/TimeWork">Time & Work</a></li>
            <li><a href="/TSD">Time Speed Distance</a></li>
            <li><a href="/SICI">Simple Interest</a></li>
            <li><a href="/CI">Compound Interest</a></li>
            <li><a href="/NumberSystem">Number System</a></li>
            <li><a href="/Probability">Probability</a></li>
            <li><a href="/PnC">Permutation & Combination</a></li>
            <li><a href="/PipesNCistern">Pipes & Cistern</a></li>
            <li><a href="/mixNall">Mixtures & Allegations</a></li>
            <li><a href="/Ages">Problems on Ages</a></li>
            <li><a href="/LCMnHCF">HCF & LCM</a></li>
            <li><a href="/PartnerShip">Partnership</a></li>
            <li><a href="/BoatAndStream">Boats & Streams</a></li>
            <li><a href="/Clock">Clocks & Calendars</a></li>
            <li><a href="/DataInterpretation">Data Interpretation</a></li>
            <li><a href="/Simplification">Simplification</a></li>
            <li><a href="/AlgebraBasics">Algebra Basics</a></li>

          </ul>
        </div>

        {/* Logical Reasoning */}
        <div className="trip bg-white p-5 mb-4">

          <h2 className="fw-bold text-primary mb-3">
            2. Logical Reasoning
          </h2>

          <p className="text-muted">
            Pattern-based logical reasoning and analytical thinking.
          </p>

          <h5 className="fw-bold mt-4">Practice Links</h5>

          <ul className="about-list">

            <li><a href="/NumberSeries">Number Series</a></li>
            <li><a href="/LetterSeries">Letter Series</a></li>
            <li><a href="/CodingDecoding">Coding-Decoding</a></li>
            <li><a href="/BloodReln">Blood Relation</a></li>
            <li><a href="/Direction">Direction Sense</a></li>
            <li><a href="/SeatingArrangement">Seating Arrangement</a></li>
            <li><a href="/Syllogism">Syllogism</a></li>
            <li><a href="/OddOneOut">Odd One Out</a></li>
            <li><a href="/Analogy">Analogy</a></li>
            <li><a href="/StatementConclusion">Statement & Conclusion</a></li>
            <li><a href="/CausesEffects">Cause & Effect</a></li>
            <li><a href="/DataSufficiency">Data Sufficiency</a></li>
            <li><a href="/Puzzle">Puzzle</a></li>
            <li><a href="/VennDiagram">Venn Diagram</a></li>

          </ul>
        </div>

        {/* Verbal Ability */}
        <div className="trip bg-white p-5 mb-4">

          <h2 className="fw-bold text-primary mb-3">
            3. Verbal Ability
          </h2>

          <p className="text-muted">
            Grammar, comprehension and vocabulary preparation.
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

export default CapgeminiAptitude;
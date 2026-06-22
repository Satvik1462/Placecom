import Header from "../../component/Header";
import Footer from "../../component/Footer";

const InfosysCoding = () => {
  return (
    <>
      <Header />

      <section className="container-fluid bg-light py-5 px-4">
        <div className="container">

          {/* Hero */}
          <div className="trip bg-white p-5 mb-4">
            <p className="text-primary fw-bold mb-2">PLACECOM • INFOSYS CODING</p>
            <h1 className="fw-bold display-5 mb-2">Infosys Coding Preparation</h1>
            <p className="text-muted fs-5">
              Most asked coding questions for Infosys placement preparation
            </p>
          </div>

          {/* Arrays */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Arrays</h2>
            <div className="d-grid gap-3">
              <a href="https://leetcode.com/problems/two-sum/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Two Sum
              </a>

              <a href="https://leetcode.com/problems/maximum-subarray/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Maximum Subarray
              </a>

              <a href="https://leetcode.com/problems/move-zeroes/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Move Zeroes
              </a>

              <a href="https://leetcode.com/problems/contains-duplicate/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Contains Duplicate
              </a>
            </div>
          </div>

          {/* Strings */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Strings</h2>
            <div className="d-grid gap-3">
              <a href="https://leetcode.com/problems/valid-palindrome/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Valid Palindrome
              </a>

              <a href="https://leetcode.com/problems/valid-anagram/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Valid Anagram
              </a>

              <a href="https://leetcode.com/problems/reverse-string/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Reverse String
              </a>

              <a href="https://leetcode.com/problems/longest-common-prefix/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Longest Common Prefix
              </a>
            </div>
          </div>

          {/* Recursion */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Recursion</h2>
            <div className="d-grid gap-3">
              <a href="https://leetcode.com/problems/fibonacci-number/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Fibonacci Number
              </a>

              <a href="https://leetcode.com/problems/climbing-stairs/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Climbing Stairs
              </a>
            </div>
          </div>

          {/* HashMap */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">HashMap / Frequency</h2>
            <div className="d-grid gap-3">
              <a href="https://leetcode.com/problems/first-unique-character-in-a-string/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                First Unique Character
              </a>

              <a href="https://leetcode.com/problems/majority-element/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Majority Element
              </a>
            </div>
          </div>

          {/* Matrix */}
          <div className="trip bg-white p-5 mb-4">
            <h2 className="fw-bold mb-4">Matrix Problems</h2>
            <div className="d-grid gap-3">
              <a href="https://leetcode.com/problems/matrix-diagonal-sum/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Matrix Diagonal Sum
              </a>

              <a href="https://leetcode.com/problems/transpose-matrix/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark bg-light rounded p-3 fw-semibold">
                Transpose Matrix
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default InfosysCoding;
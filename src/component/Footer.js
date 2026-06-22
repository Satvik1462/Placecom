import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <h5>PlaceCom</h5>
            <p>
               A company-wise placement preparation platform that helps students prepare smarter by providing targeted resources based on what specific companies ask in their recruitment process — includingaptitude, coding, interview questions, and past experiences.
            </p>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3 text-lg-end">
            <h5>Connect With Me</h5>
            <div className="d-flex gap-3 justify-content-lg-end justify-content-start fs-4">
              <a
                href="https://instagram.com/satvikbajpai1462"
                className="text-white"
                target="_blank"
                rel="noreferrer" 
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/satvik-bajpai-54625321b/"
                className="text-white"
                target="_blank"
                rel="noreferrer" 
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Satvik1462"
                className="text-white"
                target="_blank"
                rel="noreferrer" 
              >
                <FaGithub />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=satvikbajpai503@gmail.com"
                className="text-white"
                target="_blank"
                rel="noreferrer" 
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p>© 2026 PlaceCom. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
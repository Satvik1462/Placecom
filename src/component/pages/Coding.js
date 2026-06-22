import Header from "../Header";
import Footer from "../Footer";
import TCS from "../../image-company/TCS.NS.png";
import Info from "../../image-company/infosys-logo-png.png";
import Wipro from "../../image-company/Wipro_Primary Logo_Color_RGB.png";
import Accenture from "../../image-company/Accenture-Logo-PNG-Photos.png";
import Cognizant from "../../image-company/cog_prim_lg_hrz_r_rgb_midnight_blue_2022.png";
import Capegemini from "../../image-company/Capgemini-Logo.wine.png";

const Coding = () => {
  return (
    <>
      <Header />

      <section className="container-fluid px-4 py-5 ">
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">
            <span className="text-warning">ChooseYour</span>
            <span className="text-primary"> Company</span>
          </h1>
        </div>
      </section>

      <section className="container-fluid my-4 px-4">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="trip bg-white text-center p-4 h-100">
              <img src={TCS} alt="TCS Logo" className="company-logo-img" />
              <h3 className="text-bold">TCS</h3>
              <a href="/TCScoding">Explore</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="trip bg-white text-center p-4 h-100">
              <img
                src={Info}
                alt="Infosys Logo"
                className="company-logo-img"
              />
              <h3>Infosys</h3>
              <a href="/InfosysCoding">Explore</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="trip bg-white text-center p-4 h-100">
              <img
                src={Wipro}
                alt="Wipro Logo"
                className="company-logo-img"
              />
              <h3>Wipro</h3>
              <a href="/WiproCoding">Explore</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="trip bg-white text-center p-4 h-100">
              <img
                src={Accenture}
                alt="Accenture Logo"
                className="company-logo-img"
              />
              <h3>Accenture</h3>
              <a href="/AccentureCoding">Explore</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="trip bg-white text-center p-4 h-100">
              <img
                src={Capegemini}
                alt="Capgemini Logo"
                className="company-logo-img"
              />
              <h3>Capgemini</h3>
              <a href="/CapgeminiCoding">Explore</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="trip bg-white text-center p-4 h-100">
              <img
                src={Cognizant}
                alt="Cognizant Logo"
                className="company-logo-img"
              />
              <h3>Cognizant</h3>
              <a href="/CognizantCoding">Explore</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Coding;
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
                <img src={TCS} className="company-logo-img" />
                <h3 className="text-bold">TCS</h3>
                {/* <p className="text-muted">Easy–Moderate</p> */}
                <a href="/TCScoding">Explore</a>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
                <div className="trip bg-white text-center p-4 h-100">
                <img src={Info}  className="company-logo-img" />
                <h3>Infosys</h3>
                {/* <p className="text-muted">Moderate</p> */}
                {/* <p className="text-muted">Topics: Quant • Puzzle • Verbal</p> */}
                <a href="/InfosysCoding">Explore</a>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
                <div className="trip bg-white text-center p-4 h-100">
                <img src={Wipro}  className="company-logo-img" />
                <h3>Wipro</h3>
                {/* <p className="text-muted">Easy</p> */}
                {/* <p className="text-muted">Topics: Quant • LR • English</p> */}
                <a href="/WiproCoding">Explore</a>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
                <div className="trip bg-white text-center p-4 h-100">
                <img src={Accenture}  className="company-logo-img" />
                <h3>Accenture</h3>
                
                {/* <p className="text-muted">Moderate</p> */}
                {/* <p className="text-muted">Topics: Quant • Logical • Verbal</p> */}
                <a href="/AccentureCoding">Explore</a>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
                <div className="trip bg-white text-center p-4 h-100">
                <img src={Capegemini}  className="company-logo-img" />
                <h3>Capgemini</h3>
                
                {/* <p className="text-muted">Moderate</p> */}
                {/* <p className="text-muted">Topics: Quant • Puzzles • English</p> */}
                <a href="/CapgeminiCoding">Explore</a>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
                <div className="trip bg-white text-center p-4 h-100">
                <img src={Cognizant}  className="company-logo-img" />
                <h3>Cognizant</h3>
                
                {/* <p className="text-muted">Moderate</p> */}
                {/* <p className="text-muted">Topics: Quant • LR • Verbal</p> */}
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
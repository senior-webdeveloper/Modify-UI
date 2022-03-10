import Sidebar from "../../Components/Sidebar/Sidebar";
import ActionBar from "../../Components/ActionBar/ActionBar";
import Footer from "../../Components/Footer/Footer";
import wrapImg from '../../Assets/Wrap.png';
import "./Wrap.css";

const Wrap = () => {
  return (
    <>
      <div className="wrap container-fluid ">
        <div className="row h-100">
          <div className="col-md-3 col-lg-2 p-3 h-100 d-none d-md-block">
            <Sidebar />
          </div>
          <div className="col-12 col-md-9 col-lg-10 py-3 px-0 pe-md-3 ps-md-3 ">
            <div className="d-flex align-content-center justify-content-center ">
              <ActionBar />

              <div
                className="px-4 px-md-0 w-100 conatiner-fluid"
                data-aos="fade-up"
              >
                <div className="cards container-fluid p-4">
                  <h5
                    className="fw-600 text-start"
                    style={{ fontSize: "1.1rem" }}
                  >
                    <img src={wrapImg} width="50" className="me-1"/>
                    Wrap/Unwrap
                  </h5>
                  <div className="row my-2 mt-4 ">
                    <div className="col-md-4 my-3 my-md-0 text-start text-md-center">
                      <div className="d-flex flex-column wrap-card1">
                        <p className="data">$63.57 </p>
                        <p className="title">sREM Price</p>
                      </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0 text-start text-md-center">
                      <div className="d-flex flex-column wrap-card2">
                        <p className="data">74.5</p>
                        <p className="title">Current Index</p>
                      </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0 text-start text-md-center">
                      <div className="d-flex flex-column wrap-card3">
                        <p className="data">$4,727.39</p>
                        <p className="title">gREM Price</p>
                      </div>
                    </div>
                  </div>
                  <button className="cw-btn mt-4 mb-2">Connect Wallet</button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wrap;

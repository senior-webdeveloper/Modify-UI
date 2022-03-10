import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ActionBar from "../../Components/ActionBar/ActionBar";
import Footer from "../../Components/Footer/Footer";
import stakeImg from "../../Assets/skating.png";
import "./Stake.css";

const Stake = () => {
    const FarmPool = [
        {
            asset: "gREM-AVAX",
            tvl: "$4,767,398.72",
            button: "Stake on Joe",
            logo1:
                "https://d33wubrfki0l68.cloudfront.net/fcd4ecd90386aeb50a235ddc4f0063cfbb8a7b66/4295e/static/bfc04ac72981166c740b189463e1f74c/40129/eth-diamond-black-white.jpg",
            logo2: "https://s2.coinmarketcap.com/static/img/coins/200x200/5805.png",
        },
        {
            asset: "gREM-wETH",
            tvl: "$2,985,650.26",
            button: "Stake on Sushi",
            logo1: "https://bitcoin.org/img/icons/opengraph.png?1643058474",
            logo2: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
        },
        {
            asset: "gREM-wETH",
            tvl: "$2,038,497.23",
            button: "Stake on Joe (Polygon)",
            logo1:
                "https://d33wubrfki0l68.cloudfront.net/fcd4ecd90386aeb50a235ddc4f0063cfbb8a7b66/4295e/static/bfc04ac72981166c740b189463e1f74c/40129/eth-diamond-black-white.jpg",
            logo2: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
        },
        {
            asset: "gREM-FTM",
            tvl: "$1,099,128.90",
            button: "Stake on Spirit (Fantom)",
            logo1: "https://cryptologos.cc/logos/tron-trx-logo.png",
            logo2:
                "https://d33wubrfki0l68.cloudfront.net/fcd4ecd90386aeb50a235ddc4f0063cfbb8a7b66/4295e/static/bfc04ac72981166c740b189463e1f74c/40129/eth-diamond-black-white.jpg",
        },
    ];
    return (
        <>
            <div className="stake container-fluid ">
                <div className="row h-100">
                    <div className="col-md-3 col-lg-2 p-3 h-100 d-none d-md-block">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-9 col-lg-10 py-3 px-0 pe-md-3 ps-md-3 ">
                        <div className="d-flex align-content-center justify-content-center ">
                            <ActionBar />

                            <div className="px-4 px-md-0 w-100" data-aos="fade-up">
                                <div className="cards container-fluid px-4">
                                    <p
                                        className="fw-600 text-start"
                                        style={{ fontSize: "1.1rem" }}
                                    >
                                        <img src={stakeImg} width="50" className="me-1"/>
                                        Single Stake (3, 3)
                                    </p>
                                    <p
                                        className="fw-500 text-start mt-1"
                                        style={{ fontSize: "0.6rem" }}
                                    >
                                        5 hrs, 50 mins to next rebase
                                    </p>
                                    <div className="row my-2 mt-3 ">
                                        <div className="col-md-4 my-3 my-md-0 text-start text-md-center">
                                            <div className="d-flex flex-column info-card1">
                                                <p className="data">1,328.5%</p>
                                                <p className="title">APY</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 my-3 my-md-0 text-start text-md-center">
                                            <div className="d-flex flex-column info-card2">
                                                <p className="data">$500,811,977</p>
                                                <p className="title">Total Value Deposited (USD)</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 my-3 my-md-0 text-start text-md-center">
                                            <div className="d-flex flex-column info-card3">
                                                <p className="data">74.7 sREM</p>
                                                <p className="title">Current Index (REM)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="accordion accordion-flush"
                                        id="accordionFlushExample"
                                    >
                                        <div className="accordion-item bg-transparent">
                                            <button
                                                className="cw-btn mt-4 mb-3"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#stakeCollapse"
                                            >
                                                Connect Wallet
                                            </button>
                                            <div
                                                id="stakeCollapse"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="flush-headingOne"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body w-100 p-0">
                                                    <div className="container-fluid acc-box">
                                                        <input type="tel" placeholder="Enter Amount" />
                                                        <div className="w-100 d-flex align-items-justify justify-content-between mt-3">
                                                            <button className="cw-btn me-2">MAX</button>
                                                            <button className="cw-btn">Stake REM</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cards container-fluid py-4 px-3 my-5">
                                    <h5
                                        className="fw-600 text-start mb-4"
                                        style={{ fontSize: "1.1rem" }}
                                    >
                                        Farm Pool
                                    </h5>

                                    <div className="d-none d-md-flex flex-column flex-md-row  align-items-center justify-content-md-between  my-md-1 headings ">
                                        <div className="d-flex align-items-center ">
                                            <div className="fw-500 ms-5 ">
                                                <p className="ms-5 silent">Assets</p>
                                            </div>
                                        </div>
                                        <div className="mt-3 mb-2 m-md-0 ">
                                            <p className="ms-4 fw-500 silent">TVL</p>
                                        </div>
                                        <div className="stake-btn"></div>
                                    </div>

                                    {FarmPool.map((curElem, index) => {
                                        const { asset, tvl, button, logo1, logo2 } = curElem;
                                        return (
                                            <div
                                                className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-md-between  my-5 my-md-2 table-row"
                                                key={index}
                                                type={(index + 1) % 2 === 0 ? "even" : "odd"}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="circle">
                                                        <img src={logo1} alt="coin" />
                                                    </div>
                                                    <div className="circle2">
                                                        <img src={logo2} alt="coin" />
                                                    </div>
                                                    <div className="fw-500 ms-4">
                                                        <p style={{ fontSize: "1rem" }}>{asset}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-3 mb-2 m-md-0 d-flex justify-content-between tvl">
                                                    <p className="silent d-block d-md-none">TVL</p>
                                                    <p className="fw-500" style={{ fontSize: "1rem" }}>
                                                        {tvl}{" "}
                                                    </p>
                                                </div>
                                                <div className="stake-btn">
                                                    <button
                                                        className="cw-btn mt-3 mb-2 px-2 w-100 te-center"
                                                        style={{ fontSize: "0.9rem" }}
                                                    >
                                                        {button}{" "}
                                                        <i className="fas fa-external-link-alt ms-2"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
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

export default Stake;

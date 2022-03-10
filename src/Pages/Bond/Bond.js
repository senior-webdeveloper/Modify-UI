import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar'
import ActionBar from '../../Components/ActionBar/ActionBar';
import Footer from '../../Components/Footer/Footer';
import bondImg from '../../Assets/Bond.png'
import './Bond.css'

const Bond = () => {
    const FarmPool = [
        {
            asset: "DAI",
            price: "$61.21",
            roi: "2.62%",
            purchased: "$61.21",
            coin: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"
        },
        {
            asset: "FRAX",
            price: "$61.21",
            roi: "2.62%",
            purchased: "$61.21",
            coin: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
        },
        {
            asset: "UST (Wormhole)",
            price: "$61.21",
            roi: "2.62%",
            purchased: "$61.21",
            coin: "https://bitcoin.org/img/icons/opengraph.png?1643058474"
        },

    ]
    return (
        <>
            <div className="bond container-fluid ">
                <div className="row h-100">
                    <div className="col-md-3 col-lg-2 p-3 h-100 d-none d-md-block">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-9 col-lg-10 py-3 px-0 pe-md-3 ps-md-3 " >
                        <div className="d-flex align-content-center justify-content-center ">
                            <ActionBar />

                            <div className="px-4 px-md-0 w-100 mb-5 " data-aos="fade-up">
                                <div className="cards container-fluid p-4">
                                    <h5 className='fw-600 text-start d-flex align-items-center'>
                                        <img src={bondImg} width="50" className="me-1"/>Bond (4, 4)</h5>
                                    <div className="row my-2 mt-4 ">
                                        <div className="col-md-6 my-3 my-md-0 text-start text-md-center ">
                                            <div className="d-flex flex-column bond-cards1">
                                                <p className='data'>$534,483,370</p>
                                                <p className='title bg-transparent silent_text' >Treasury Balance (USD)</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-3 my-md-0 text-start text-md-center">
                                            <div className="d-flex flex-column bond-cards2" style={{ color: "red" }}>
                                                <p className='data'>$62.86</p>
                                                <p className='title bg-transparent silent_text'>REM Price (USD)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cards container-fluid py-4 px-3 mt-4">
                                    <div className="d-none d-md-flex flex-column flex-md-row  align-items-center justify-content-md-between  headings">
                                        <div className="d-flex align-items-center ">
                                            <div className="fw-500 ms-5 ">
                                                <p className='ms-5 silent'>Assets</p>
                                            </div>
                                        </div>
                                        <div className="mt-3 mb-2 m-md-0 ps-4">
                                            <p className='ms-5 silent'>Price (USD)</p>
                                        </div>
                                        <div className="mt-3 mb-2 m-md-0  ps-3">
                                            <p className='ms-4 silent'>ROI (%)</p>
                                        </div>
                                        <div className="mt-3 mb-2 m-md-0 ">
                                            <p className='ms-4 silent'>Purchased (USD)</p>
                                        </div>
                                        <div className='bond-btn'></div>
                                    </div>

                                    {FarmPool.map((curElem, index) => {
                                        const { asset, price, roi, purchased, coin } = curElem
                                        return (
                                            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-md-between my-0 my-md-2 table-row" key={index} type={(index + 1) % 2 === 0 ? "even" : "odd"} >
                                                <div className="d-flex align-items-center assets" >
                                                    <div className="circle2 ms-0 ms-md-2 me-2" >
                                                        <img src={coin} alt="coin" className='img-fluid' />
                                                    </div>
                                                    <div className="fw-500 ms-3">
                                                        <p style={{ fontSize: "0.9rem", fontWeight: "600" }}>{asset}</p>
                                                        <a href="##" style={{ fontSize: "0.7rem" }}>View Asset <i className="fas fa-external-link-alt "></i></a>
                                                    </div>
                                                </div>
                                                <div className="mt-3 mb-2 m-md-0 d-flex justify-content-between tvl ">
                                                    <p className='silent d-block d-md-none'>Price</p>
                                                    <p className='fw-500'>{price}</p>
                                                </div>
                                                <div className="mt-3 mb-2 m-md-0 d-flex justify-content-between tvl">
                                                    <p className='silent d-block d-md-none'>ROI</p>
                                                    <p className='fw-500 green'>{roi}</p>
                                                </div>
                                                <div className="mt-3 mb-2 m-md-0 d-flex justify-content-between tvl">
                                                    <p className='silent d-block d-md-none'>purchased</p>
                                                    <p className='fw-500'>{purchased}</p>
                                                </div>
                                                <div className='bond-btn'>
                                                    <button className='cw-btn mt-3 mb-2 px-2 w-100 te-center'>Bond</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className="container my-2 mt-2 info" >
                                        <p className='silent' style={{ fontSize: "0.8rem" }}>Important: New bonds are auto-staked (accrue rebase rewards) and no longer vest linearly. Simply claim as sREM or gREM at the end of the term.</p>
                                    </div>
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

export default Bond;

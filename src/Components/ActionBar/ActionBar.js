import React, { useState } from 'react';
import './ActionBar.css'
import MobileNav from '../MobileNav/MobileNav';
import Theme from '../../Utils/Theme'
import walletImg from '../../Assets/Wallet.png'


const ActionBar = () => {
    const [language, setLanguage] = useState(false);
    const [walletActive, setWalletActive] = useState(false)

    const chooseLanguage = () => {
        setLanguage(!language)
    }

    const openWallet = () => {
        setWalletActive(!walletActive)
    }

    return (
        <>
            <div className="ActionBar container-fluid p-2 flex-row">
                <div className="d-flex align-items-center justify-content-between w-100 mt-md-0" >
                    {/* Theme */}
                    <Theme />
                    {/* Language */}
                    <button id='lang-btn' onClick={chooseLanguage} >
                        <img src="https://img.icons8.com/color/48/000000/great-britain-circular.png" alt='language' />
                        <div className={`language ${language ? "" : "d-none"}`}>
                            <ul style={{ listStyle: "none" }}>
                                <li className='nav_li' title='English'>
                                    <img src="https://img.icons8.com/color/48/000000/great-britain-circular.png" alt='English' className='me-2' />
                                    English
                                </li>
                                <li className='nav_li' title='French'>
                                    <img src="https://img.icons8.com/color/48/000000/france-circular.png" alt='French' className='me-2' />
                                    Français
                                </li>
                                <li className='nav_li m-0' title='Korean'>
                                    <img src="https://img.icons8.com/color/48/000000/south-korea-circular.png" alt='Korean' className='me-2' />
                                    한국인
                                </li>
                                <li className='nav_li m-0' title='Turkish'>
                                    <img src="https://img.icons8.com/color/48/000000/turkey-circular.png" alt='Turkish' className='me-2' />
                                    Türkçe
                                </li>
                                <li className='nav_li m-0' title='Chinese'>
                                    <img src="https://img.icons8.com/color/48/000000/china-circular.png" alt='Chinese' className='me-2' />
                                    中国人
                                </li>
                                <li className='nav_li m-0' title='Arabic'>
                                    <img src="https://img.icons8.com/color/48/000000/algeria-circular.png" alt='Arabic' className='me-2' />
                                    عربى
                                </li>
                                <li className='nav_li m-0' title='Spanish'>
                                    <img src="https://img.icons8.com/color/48/000000/spain-circular.png" alt='Spanish' className='me-2' />
                                    española
                                </li>
                                <li className='nav_li m-0' title='Vietnamese'>
                                    <img src="https://img.icons8.com/color/48/000000/vietnam-circular.png" alt='Vietnamese' className='me-2' />
                                    Tiếng Việt
                                </li>
                            </ul>
                        </div>
                    </button>
                    {/* Connect Wallet */}
                    <button style={{ width: "fit-content" }} className="wallet" onClick={openWallet}>
                        <img src={walletImg} width="30" className='me-2' />
                        <p> Connect wallet</p>
                    </button>
                    <div className={` wallet-popup ${walletActive ? "d-block" : "d-none"}`} >

                        <div className="body">
                            <div className="w-100 conatiner-fluid" >
                                <div className="cards container-fluid p-4">
                                    <h5 className='fw-600 text-start' style={{ fontSize: "1.1rem" }}><i className="fas fa-wallet" style={{ color: "#615A9E", fontSize: "1.3rem" }}></i>Wallet Info</h5>
                                    <div className="row my-2 mt-6 ">
                                        <div className="col-md-6 my-3 my-md-0 text-start text-md-center">
                                            <div className="d-flex flex-column">
                                                <p className='title bg-transparent text-light'>Total Balance</p>
                                                <p className='data text-light'>$6322 </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-3 my-md-0 text-start text-md-center">
                                            <div className="d-flex flex-column">
                                                <p className='title bg-transparent text-light'>Tokens Available</p>
                                                <div className="d-flex align-content-center justify-content-md-center mt-2">
                                                    <div className="token">
                                                        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png" alt="" className='img-fluid' />
                                                    </div>
                                                    <div className="token">
                                                        <img src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png" alt="" className='img-fluid' />
                                                    </div>
                                                    <div className="token">
                                                        <img src="https://bitcoin.org/img/icons/opengraph.png?1643058474" alt="" className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap align-content-center justify-content-center links">
                                        <button className='cw-btn mt-4 mb-2 d-flex align-content-center justify-content-center '>Buy on Uniswap<img src="https://cryptologos.cc/logos/uniswap-uni-logo.png" alt="" className='ms-2' />
                                        </button>
                                        <button className='cw-btn mt-4 mb-2 d-flex align-content-center justify-content-center '>Buy on Sushiswap<img src="https://cryptologos.cc/logos/sushiswap-sushi-logo.png" alt="" className='ms-2' />
                                        </button>
                                        <button className='cw-btn mt-4 mb-2 d-flex align-content-center justify-content-center '>Borrow on Rari Capital<img src="http://rari.capital/images/finallsmall.png" alt="" className='ms-2' />
                                        </button>
                                        <button className='cw-btn mt-4 mb-2 d-flex align-content-center justify-content-center '>Rusowsky's Dashboard
                                        </button>
                                        <button className='cw-btn mt-4 mb-2 d-flex align-content-center justify-content-center '>Shadow's Dashboard
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Mobile Nav button */}
                    <MobileNav />
                </div>
            </div >
        </>
    )

};

export default ActionBar;

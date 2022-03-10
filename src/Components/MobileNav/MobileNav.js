import React, { useState } from 'react';
import './MobileNav.css'
import Sidebar from '../Sidebar/Sidebar'

const MobileNav = () => {
    // Open and close State
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    return (
        <div className='mob-nav d-flex d-md-none'>
            {/* OPen Icon */}
            <button onClick={toggleNav} className='d-flex align-items-center'>
                <i className="fa-solid fa-ellipsis-vertical" />
            </button>
            <div className={`menu d-flex align-items-center justify-content-center ${navActive ? "open" : ""}`}>
                {/* Main Menu */}
                <Sidebar toggleNav={toggleNav} />
            </div>
        </div>
    );
};

export default MobileNav;

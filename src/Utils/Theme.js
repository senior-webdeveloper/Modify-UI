import React, { useState } from 'react';

const Theme = () => {
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light"
    const darkTheme = "dark"
    let theme;

    let nowTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark";

    const [curTheme, setCurTheme] = useState(nowTheme);

    if (localStorage) {
        theme = localStorage.getItem("theme")
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(darkTheme)
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass)
            localStorage.setItem("theme", "light")
            theme = lightTheme
            setCurTheme("light")
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass)
            localStorage.setItem("theme", "dark")
            theme = darkTheme
            setCurTheme("dark")
        }
    }

    return (
        <div className='theme'>
            <button className={theme === "dark" ? clickedClass : ""} id='darkMode' onClick={(e) => switchTheme(e)}>
                {curTheme === "dark" ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
            </button>
        </div>
    );
};

export default Theme;

import React, {useState} from 'react';

import './Navbar.css'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const menuButtonHandler = () => {
        /* setNavbarOpen(prevState => !prevState) */
        setNavbarOpen(!navbarOpen)
    }

    return (
        <div className="navBar">
            <button onClick={menuButtonHandler}>{navbarOpen ? "Close" : "Open"}</button>
            <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>this is ul</ul>
        </div>
    )
}

export default Navbar;
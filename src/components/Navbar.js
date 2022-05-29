import React, {useState} from 'react';

import './Navbar.css'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const menuButtonHandler = () => {
        /* setNavbarOpen(prevState => !prevState) */
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <div className="navBar">
            <button onClick={menuButtonHandler}>{navbarOpen ? "Close" : "Open"}</button>
            <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
                <NavLink
                    to={link.path}
                    activeClassName="active-link"
                    onClick={() => closeMenu()}
                    exact
                >
                    {link.text}
                </NavLink>


            </ul>

        </div>
    )
}

export default Navbar;
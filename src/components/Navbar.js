import React, {useState} from 'react';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const menuButtonHandler = () => {
        /* setNavbarOpen(prevState => !prevState) */
        setNavbarOpen(!navbarOpen)
    }

    return (
        <div>
            <button onClick={menuButtonHandler}>{navbarOpen ? "Close" : "Open"}</button>
            <ul className={`menunav ${navbarOpen ? "showMenu" : ""}`}>this is ul</ul>
        </div>
    )
}

export default Navbar;
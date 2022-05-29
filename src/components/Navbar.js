import React, {useState} from 'react';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const menuButtonHandler = () => {
        setNavbarOpen(prevState => !prevState)
    }

    return (
        <div>
            <button onClick={menuButtonHandler}>{navbarOpen ? "Close" : "Open"}</button>
        </div>
    )
}

export default Navbar;
import React, {useState} from 'react';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <div>
            <button>{navbarOpen ? "Open" : "Close"}</button>
        </div>
    )
}

export default Navbar;
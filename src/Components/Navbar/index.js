import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLists } from "../../Data/Navbar";
import {
    faBars,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";



const NavContainer = NavLists.map(NavList => {
    return (
        <li>
            <a href={NavList.link} className='navbar-links' key={NavList.id}>
                {NavList.title}
            </a>
        </li>
    )

})

const Navbar = (props) => {
    const [nav, setNav] = useState(false)

    const openNav = () => {
        setNav(!nav);
    };

    return (
        <section>
        <div className="navbar-section" id="navbar">

            <ul className="navbar-items">
                {NavContainer}
            </ul>

            {/* Mobile */}
            <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
                <div onClick={openNav} className="mobile-navbar-close">
                    <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
                </div>

                <ul className="mobile-navbar-links">
                    
                    {NavContainer}
                    
                </ul>
            </div>

            {/* Hamburger Icon */}
            <div className="mobile-nav">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={openNav}
                    className="hamb-icon"
                />
            </div>
        </div >
        </section>
    )
}

export default Navbar
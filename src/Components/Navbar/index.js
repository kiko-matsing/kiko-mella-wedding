import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLists } from "../../Data/Navbar";
import {
    faBars,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const NavContainer = NavLists.map(NavList => {
    return (
        <li>
            <Link to={NavList.link} className='navbar-links'>{NavList.title}</Link>
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
                    
                    <Link to="/" className='navbar-links' onClick={openNav}>Home</Link>
                    <Link to="/gifts" className='navbar-links' onClick={openNav}>Gifts</Link>
                    <Link to="/photo-book" className='navbar-links' onClick={openNav}>Photo Book</Link>
                    <Link to="/entourage" className='navbar-links' onClick={openNav}>Entourage</Link>
                    <Link to="/venue" className='navbar-links' onClick={openNav}>Venue</Link>
                    <Link to="/faq" className='navbar-links' onClick={openNav}>FAQ</Link>
                    <Link to="/rsvp" className='navbar-links' onClick={openNav}>RSVP</Link>
                    
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
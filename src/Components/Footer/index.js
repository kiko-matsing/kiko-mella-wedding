import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <section id="footer">
            <div className="main-footer">
                <ul className="footer-nav">
                    <Link to="/" className='navbar-links'>Home</Link>
                    <Link to="gifts" className='navbar-links'>Gifts</Link>
                    <Link to="photo-book" className='navbar-links'>Photo Book</Link>
                    <Link to="entourage" className='navbar-links'>Entourage</Link>
                    <Link to="venue" className='navbar-links'>Venue</Link>
                    <Link to="faq" className='navbar-links'>FAQ</Link>
                    <Link to="rsvp" className='navbar-links'>RSVP</Link>
                </ul>
                <hr />
                <h4 className="title">#MELLAIfetimepartnernasiKIKO</h4>
            </div>
        </section>
    )
}

export default Footer
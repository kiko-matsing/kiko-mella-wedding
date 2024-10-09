import React from "react";
import { motion, } from "framer-motion";
import { fadeUpAnimationVariants } from "../../../Data/FadeAnimation";
import RsvpSvg from "../../Svg/RsvpSvg";
import useTimer from "../Timer/Time";
import { Link } from "react-router-dom";

const Rsvp = () => {

    const { days } = useTimer("2025-04-05T23:59:59");

    return ( 
        <section className="main-rsvp" id="main-rsvp">
            <div className="content">
                <motion.ul className="rsvp-main-contents"
                    variants={fadeUpAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <li className="rsvp-main rsvp-left">
                        <ul className="rsvp-contents">
                            <li className="content">
                                <h6 className="rtc">Ready to Commit ?</h6>
                            </li>
                            <li className="content">
                                <h6 className="pls">PLS</h6>
                            </li>
                            <li className="content">
                                <h6 className="rsvp">RSVP</h6>
                            </li>
                            <li className="content">
                                <RsvpSvg />
                            </li>
                        </ul>
                    </li>
                    <li className="rsvp-main rsvp-right">
                        <ul className="rsvp-contents">
                            <li className="content">
                                <h6 className="timer">{days} DAYS TO EVENT</h6>
                            </li>
                            <li className="content">
                                <h6 className="title">
                                    Join us for a day of love and celebration 
                                    as Kiko and Mella tie the knot! Your presence will make our special day even more memorable. 
                                    Please RSVP by February 5 2025. We can’t wait to celebrate with you!
                                </h6>
                            </li>
                            <li className="content">
                                <h6 className="when">When</h6>
                                <hr />
                            </li>
                            <li className="content">
                                <h6 className="time">Apr 05, 2025, 2:00 PM – 10:00 PM</h6>
                            </li>
                            <li className="content">
                                <h6 className="where">Where</h6>
                                <hr />
                            </li>
                            <li className="content">
                                <h6 className="place">Manila, Cabildo, 132 Beaterio St, Intramuros, Manila, 1002 Metro Manila, Philippines
                                </h6>
                            </li>
                            <li className="rsvp-confirmation">
                                <p className="title">Can you make it ?</p>
                                <Link to="rsvp" className='rsvp-button'>Register Now</Link>
                            </li>
                        </ul>

                    </li>
                    
                </motion.ul>

            </div>


        </section>
    )
}

export default Rsvp
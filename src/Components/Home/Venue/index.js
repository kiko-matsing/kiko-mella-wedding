import React from "react";
import { motion } from "framer-motion";
import Reels from "../../Reels";
import ChurchSvg from "../../Svg/ChurchSvg";
import igop from "../../../Assets/prenup/final/igop.png"
import Divider from "../../Divider";
import { Link } from "react-router-dom";

const Venue = () => {
    return (
        <section id="venue">
            <ul className="venue-main">
                <li className="venue">
                    <div className="main-reels">
                        <div className="reels reel1">
                                <Reels reels={5}/>
                            </div>
                            <div className="reels reel2">
                                <Reels reels={5}/>
                            </div>
                    </div>
                    <div className="church">
                        <ChurchSvg />
                    </div>
                    <div className="main-button">
                        <Link to="venue" className="photo-button">Venue</Link>
                    </div>
                </li>
                <li className="photos">
                    <Divider reels={15}/>
                    <img src={igop} alt="igop" className="photo-image"/>
                    <div className="main-button">
                        <Link to="photo-book" className="photo-button">Photos</Link>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Venue
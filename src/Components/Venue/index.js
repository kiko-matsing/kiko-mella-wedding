import React from "react";
import { motion } from "framer-motion";
import Reels from "../Reels";
import ChurchSvg from "../Svg/ChurchSvg";
import kikomella from "../../Assets/kikomella5.png"

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
                        <button className="photo-button">Venue</button>
                    </div>
                </li>
                <li className="photos">
                    <img src={kikomella} alt="kikomella" className="photo-image"/>
                    <div className="main-button">
                        <button className="photo-button">Photos</button>
                    </div>
                </li>
            </ul>


        </section>
    )
}

export default Venue
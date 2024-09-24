import React from "react";
import { OurStoryData } from "../Data/OurStory";
import { motion } from "framer-motion";
import Reels from "../Components/Reels";
import { fadeDownAnimationVariants } from "../Data/FadeAnimation";
import church from "../Assets/church.webp"
import venue from "../Assets/venue.webp"
import map from "../Assets/map.png"


const MainVenue = () => {
    return (
        <div className="venue venue-page">
            <section className="venue" id="venue-page">

                <div className="bg-opac"></div>
                <div className="content">
                    <ul className="main-content">
                        <li className="main-venue venue-content">

                <span className="reels reel1">
                    <Reels reels={3}/>
                </span>
                            {/* <div className="reels reel1">
                                <Reels reels={3}/>
                            </div>
                            <div className="reels reel2">
                                <Reels reels={3}/>
                            </div> */}
                            <motion.div className="venue-main"           
                                variants={fadeDownAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                >
                            <h3 className="venue-title">Venue</h3>
                            <ul className="venue-info church">
                                <li className="location">
                                    <img src={church} alt="church" className="church" />
                                </li>
                                <li className="location-info">
                                    <p className="title">Ceremony at 3:00 PM</p>
                                    <p className="main-location">Manila Cathedral</p>
                                    <p className="main-pin">Cabildo, 132 Beaterio St, Intramuros, Manila</p>
                                </li>
                            </ul>

                            <ul className="venue-info reception">
                                <li className="location">
                                    <img src={venue} alt="church" className="venue" />
                                </li>
                                <li className="location-info">
                                    <p className="title">Reception at 5pm</p>
                                    <p className="main-location">La Castellana</p>
                                    <p className="main-pin">Cabildo St. Intramuros, 657 Zone 70, Manila</p>
                                </li>
                            </ul>
                            </motion.div>

                            <span className="reels reel2">
                                <Reels reels={3}/>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="maps">
                <h3 className="title">Maps</h3>
                <img src={map} alt="map" />

            </section>
        </div>
    )
}

export default MainVenue
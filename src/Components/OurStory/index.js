import React from "react";
import { OurStoryData } from "../../Data/OurStory";
import kikomella5 from "../../Assets/kikomella5.png"
import { motion } from "framer-motion";
import Reels from "../Reels";
import { fadeDownAnimationVariants } from "../../Data/FadeAnimation";

const OurStory = () => {
    return (
        <section className="OurStory" id="OurStory">
            <div className="content">
                <ul className="main-content">
                    <li className="main-story story-content">

                        <div className="reels reel1">
                            <Reels reels={3}/>
                        </div>
                        <div className="reels reel2">
                            <Reels reels={3}/>
                        </div>
                        <motion.div className="story-main"           
                            variants={fadeDownAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            >
                            <h1 className="title">Our Story</h1>
                            <p className="content">{OurStoryData}</p>
                        </motion.div>

                    </li>
                    <li className="main-pic story-content">
                        <div className="main-pic"> 
                            <div className="pic">
                                <img src={kikomella5} alt="kikomella5" className="kikomella5" />
                                <p className="pic-name">Kiko And Mella</p>

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )

}

export default OurStory
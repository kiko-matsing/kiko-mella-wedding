import React from "react";
import { OurStoryData } from "../../../Data/OurStory";
import momentum219 from "../../../Assets/prenup/final/momentum-219.jpg"
import { motion } from "framer-motion";
import Reels from "../../Reels";
import { fadeDownAnimationVariants } from "../../../Data/FadeAnimation";


const content_list = OurStoryData.map(content => {
    return (
        <>
          <p className="content">
            {content}</p>
        </>
    )})

const OurStory = () => {
    return (
        <section className="OurStory" id="OurStory">
            <div className="content">
                <ul className="main-content">
                    <li className="main-story story-content">

                        <div className="reels reel1">
                            <Reels reels={2}/>
                        </div>
                        <div className="reels reel2">
                            <Reels reels={2}/>
                        </div>
                        <motion.div className="story-main"           
                            variants={fadeDownAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            >
                            <h1 className="title">Our Story</h1>
                           {content_list}
                        </motion.div>

                    </li>
                    <li className="main-pic story-content">
                        <div className="main-pic"> 
                            <div className="pic">
                                <img src={momentum219} alt="momentum219" className="momentum219" />
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
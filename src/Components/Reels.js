import React from "react";
import Reel2 from "../Assets/reels2.png"
import { motion } from "framer-motion";
import { fadeUpAnimationVariants } from "../Data/FadeAnimation";

const MainReels = reels => {
    const reelsImg = [...Array(reels)].map((reel) => {
        return (
            <li key={reel} className="reel-main">
                <img src={Reel2} alt="reel" className="reel-img" />
            </li>
        )
    
    })
    return ( 
        reelsImg
    )
}

const Reels = ({ reels }) => {
    return ( 
        <div className="main-reels" id="main-reels">
            <motion.ul className="reels"           
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
            >
                {MainReels(reels)}
            </motion.ul>


        </div>
    )
}

export default Reels
import React from "react";
import Reel1 from "../Assets/reels.png"
import { motion } from "framer-motion";

const MainReels = reels => {
    const reelsImg = [...Array(reels)].map((reel) => {
        return (
            <li key={reel} className="reel-main">
                <img src={Reel1} alt="reel" className="reel-img" />
            </li>
        )
    
    })
    return ( 
        reelsImg
    )
}

const Divider = ({reels}) => {
    return (
        <section id="divider"           
        >
            <div className="content">
                <ul className="divider">
                {MainReels(reels)}
                </ul>
            </div>
        </section>
    )
}

export default Divider
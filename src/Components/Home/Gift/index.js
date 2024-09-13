import React from "react";
import { motion } from "framer-motion";
import Reels from "../../Reels";
import { fadeDownAnimationVariants } from "../../../Data/FadeAnimation";
import Bells from "../../../Assets/bells.webp"

import Gcash from "../../../Assets/gcash.jpg"

const Gift = () => {
    return (
        <section className="gift" id="gift">
            <div className="content">
                <div className="main-content">
                    <div className="gift-content">

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
                            <h1 className="title">Gift<span className="registry">registry</span></h1>

                            <img src={Bells} alt="Bells" className="bells"/>

                            <h6 className="thanks">With all that we have, we’ve been truly blessed, your presence and prayers are all that we request. But if you desire to give nonetheless, a monetary gift
                            is one we suggest.</h6>

                            <img src={Gcash} alt="Gcash" className="gcash"/>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )

}

export default Gift
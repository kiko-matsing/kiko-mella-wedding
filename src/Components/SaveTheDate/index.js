import React from "react";
import { motion, } from "framer-motion";
import { fadeUpAnimationVariants } from "../../Data/FadeAnimation";

const SaveTheDate = () => {

    return ( 
        <section className="main-save-the-date" id="main-save-the-date">
            <div className="content">
                <motion.ul className="text-contents"
                    variants={fadeUpAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <li className="text-content">
                        <p className="text text1">Save The Date</p>
                    </li>
                    <li className="text-content">
                        <p className="text text2">The Wedding</p>
                    </li>
                    <li className="text-content">
                        <p className="text text3">When And Where</p>
                    </li>
                    <li className="text-content">
                        <p className="text text4">April 5, 2025 at 2:00 PM</p>
                    </li>
                    <li className="text-content">
                        <p className="text text5">Manila Cathedral</p>
                    </li>
                </motion.ul>

            </div>


        </section>
    )
}

export default SaveTheDate
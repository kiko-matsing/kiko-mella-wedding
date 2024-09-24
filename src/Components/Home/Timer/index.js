import React from "react";
import useTimer from "./Time";
import Timer from "./Timer";
import { motion, useScroll } from "framer-motion";
import { fadeUpAnimationVariants } from "../../../Data/FadeAnimation";

const Time = () => {

    const { days, hours, minutes, seconds, } = useTimer("2025-04-05T23:59:59");
    return ( 
        <section className="main-timer" id="main-timer">
            <div className="content">
                <motion.div       
                    variants={fadeUpAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <h3 className="title">Join us for the upcoming Wedding of</h3>
                    <h1 className="couple">Kiko And Mella</h1>
                    <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
                </motion.div>

            </div>


        </section>
    )
}

export default Time
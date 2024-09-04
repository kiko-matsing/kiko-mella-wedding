import React from "react";
import { motion } from "framer-motion";


const Timer = ({ days, hours, minutes, seconds, }) => {
    return (
        <div id="timer">
            <ul className="main-timer">
                <li className="timer">
                    {days}d
                </li>
                <li className="timer">
                    {hours}h
                </li>
                <li className="timer">
                    {minutes}m
                </li>
                <li className="timer">
                    {seconds}s
                </li>
            </ul>
        </div>
    )
}

export default Timer
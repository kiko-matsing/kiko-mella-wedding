import React from "react";
import { motion } from "framer-motion";
import kikomella from "../../../Assets/prenup/final/momentum-562.jpg"

const Message = () => {
    return (
        <section className="message" id="message">
            <ul className="message-container">
                <li className="image">
                    <img src={kikomella} alt="kikomella" />

                </li>
                <li className="message">
                    <h2 className="title">Here’s to love, laughter, and happily ever after!</h2>
                    <p className="content">We are beyond thrilled to share that our big day
                         is just around the corner! As we prepare to say “I do,” we want you 
                         to know how much it means to us to have each and every one of you by our side.
                          Your love and support have been a guiding light for us, 
                          and we can’t wait to celebrate this joyous occasion with you.
                    </p>
                </li>
            </ul>
        </section>

    )
}


export default Message
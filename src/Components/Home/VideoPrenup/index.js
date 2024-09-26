import React from "react";
import prenupVideo from "../../../AssetsVideos/prenupVid.mp4"

const VideoPrenup = () => {
    return (
        <section id="prenup-video">
            <h1 className="title">Our Save the Date Video</h1>
            <video width="750" height="500" controls autoplay muted>
                <source src={prenupVideo} type="video/mp4"/>
            </video>
        </section>
    )
}

export default VideoPrenup
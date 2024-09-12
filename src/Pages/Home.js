import React, { useState } from "react";
import Faq from "../Components/Faq/Faq";
import Carousel from "../Components/Carousel";
import OurStory from "../Components/OurStory";
import Divider from "../Components/Divider";
import Time from "../Components/Timer";
import SaveTheDate from "../Components/SaveTheDate";
import VideoPrenup from "../Components/VideoPrenup";
import Rsvp from "../Components/Rsvp";
import Gift from "../Components/Gift";
import Venue from "../Components/Venue";
import Message from "../Components/Message";
import DressCode from "../Components/DressCode";
import Capture from "../Components/Capture";



const Home = () => {

    return (
        <div className="home">
            <Carousel />
            <OurStory />
            <Divider reels={15}/>
            <Time />
            <Divider reels={15}/>
            <SaveTheDate />
            <VideoPrenup />
            <Divider reels={15}/>
            <Rsvp />
            <Gift />
            <Divider reels={15}/>
            <Venue />
            <Divider reels={15}/>
            <Message />
            <Divider reels={15}/>
            <DressCode />
            <Capture />
            <Faq />
        </div>
    )
}

export default Home
import React, { useEffect } from "react";
import Faq from "../Components/Home/Faq/Faq";
import Carousel from "../Components/Home/Carousel";
import OurStory from "../Components/Home/OurStory";
import Divider from "../Components/Divider";
import Time from "../Components/Home/Timer";
import SaveTheDate from "../Components/Home/SaveTheDate";
import VideoPrenup from "../Components/Home/VideoPrenup";
import Rsvp from "../Components/Home/Rsvp";
import Gift from "../Components/Home/Gift";
import Venue from "../Components/Home/Venue";
import Message from "../Components/Home/Message";
import DressCode from "../Components/Home/DressCode";
import Capture from "../Components/Home/Capture";
import HeaderContent from "../Components/Home/Header/HeaderContent";



const Home = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    return (
        <div className="home">
            <Carousel />
            <OurStory />
            <Divider reels={15}/>
            <Time />
            <Divider reels={15}/>
            <SaveTheDate />
            {/* <VideoPrenup /> */}
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
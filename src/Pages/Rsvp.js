import React, { useEffect, useState } from "react";
import "react-photo-album/rows.css";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeDownAnimationVariants } from "../Data/FadeAnimation";

  
const Rsvp = () => {


    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])

    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccesful, setIsSuccesful] = useState("");
    const [error, setError] = useState("");

    
    const handleSubmit = (e) => {
  
      e.preventDefault();
      const serviceId = "service_k1l9heg"
      const templateId = "template_l4v41nt"
      const publicKey = "y77VhhP3PrgRq_WAP"
    
      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: 'Kiko and Mella',
          to_email: email,
          to_name: `${fName} ${lName}`,
        }
      }
      setIsLoading(true);
      axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
          .then((res) => {
            console.log(res.data);
            // setlName('');
            // setfName('');
            // setEmail('');
            setIsLoading(false);
            setIsSuccesful(true);
       }
       )
       .catch((error) => {
            console.error('Error Sending Message', error)
            setIsLoading(false);
            setIsSuccesful(false);
            setError(error.response.data);
       })
    }
  
    return (
      <div id="rsvp-page">


        <motion.div className="story-main"           
          variants={fadeDownAnimationVariants}
          initial="initial"
          whileInView="animate"
          >
        <div className="intro">
                <h1 className="main-title">RSVP</h1>
                <p className="note">We’re so excited to celebrate our special day with you! </p>
                <p className="note">Your presence means the world to us, and we can’t wait to share in the joy and love of this occasion.</p>
                <p className="note">Please take a moment to RSVP below. This will help us make sure everything is perfect for our big day.</p>
                <p className="note">Thank you for being a part of our journey. We can’t wait to see you!</p>
            <div className="date">
                <p className="title">Kiko and Mella</p>
                <p className="content">April 05, 2025, 03:00 PM</p>
                <p className="content">Manila Cathedral Intramuros Manila</p>
            </div>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="fName">
            <label className="label"><span className="hash">*</span> First Name</label>
            <input type="text"
                    name="from_name"
                    value={fName}
                    className="input"
                    onChange={(e) => setfName(e.target.value)}
                    required/>
          </div>

          <div className="lName">
            <label className="label"><span className="hash">*</span> Last Name</label>
            <input type="text"
                    name="from_name"
                    value={lName}
                    className="input"
                    onChange={(e) => setlName(e.target.value)} 
                    required/>
            
          </div>

          <div className="email">
            <label className="label"><span className="hash">*</span> Email</label>
            <input type="email"
                    name="email"
                    value={email}
                    className="input"
                    onChange={(e) => setEmail(e.target.value)} 
                    required/>
            </div>
          <input type="submit" value={!isLoading ? "Send" : "Sending..."} className="submit" disabled={!isLoading ? false : true}/>
          
            <p className={`msg pass ${isSuccesful ? "show" : ""} `}>Email confirmation sent, Please check your inbox. Please inform the couple about the rsvp email that you receive.</p>
            <p className={`msg fail ${!isSuccesful ? "show" : ""} `}>We're sorry, but the RSVP limit for this event has been reached (maximum of 200 responses) this month. Unfortunately, we can no longer accept any more submissions at this time.
                Please inform the couple of the issue by reaching out to them directly if you'd like to confirm your attendance or if you have any questions regarding the event. They may be able to accommodate you or provide additional details.
                Thank you for your understanding!</p>
          
        </form>
        </motion.div>
      </div>
    );
    
}



export default Rsvp
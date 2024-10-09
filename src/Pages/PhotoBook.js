import React, { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import axios from "axios";

const photos = [
    { src: "/kikomella5.png", width: 800, height: 600 },
    { src: "/image2.jpg", width: 1600, height: 900 },
  ];
  
const PhotoBook = () => {


    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])


    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setEmail] = useState("");
  
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
  
      axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
          .then((res) => {
            console.log(res.data);
            setlName('');
            setfName('');
            setEmail('');
       }
       )
       .catch((error) => {
        console.error('Error Sending Message', error)
       })
    }
  
    return (
      <div id="rsvp">
        <form onSubmit={handleSubmit} className="form">
          
          <label className="label">*First Name</label>
          <input type="text"
                name="from_name"
                value={fName}
                className="input"
                onChange={(e) => setfName(e.target.value)} />
          
          <label className="label">*Last Name</label>
          <input type="text"
                name="from_name"
                value={lName}
                className="input"
                onChange={(e) => setlName(e.target.value)} />
          
          <label>Email</label>
          <input type="email"
                name="email"
                value={email}
                className="input"
                onChange={(e) => setEmail(e.target.value)} />
          <input type="submit" value="Send" className="submit"/>
        </form>
      </div>
    );
    
}



export default PhotoBook
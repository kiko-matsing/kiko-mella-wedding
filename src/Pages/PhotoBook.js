// import React, { useState } from "react";
// import { kikoMellaImages } from "../Data/ImageList";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const PhotoBook = () => {

//     const [show, setShow] = useState(false);
//     const [imageModal, setImageModal] = useState("");

//     const handleClose = () => {
//         setShow(false);
//         setImageModal("")
//     }
//     function handleShow(image) {
//         setShow(true);
//         setImageModal(`${image}`)
//     }

//     return (
//         <div id="photo-book">
//             <h1>{imageModal}</h1>
//             <ul className="main">
//                 <li className="image">
//                     <img src={kikoMellaImages[0]} alt="sample" onClick={handleShow(0)}/>
//                 </li>
//                 <li className="image">
//                     <img src={kikoMellaImages[1]} alt="sample" onClick={handleShow}/>
//                 </li>
//                 <li className="image">
//                     <img src={kikoMellaImages[2]} alt="sample" onClick={handleShow}/>
//                 </li>
//                 <li className="image">
//                     <img src={kikoMellaImages[3]} alt="sample" onClick={handleShow}/>
//                 </li>
//                 <li className="image">
//                     <img src={kikoMellaImages[4]} alt="sample" onClick={handleShow}/>
//                 </li>
//                 <li className="image">
//                     <img src={kikoMellaImages[5]} alt="sample" onClick={handleShow}/>
//                 </li>
//                 <li className="image">
//                     <img src={kikoMellaImages[6]} alt="sample" onClick={handleShow}/>
//                 </li>
//                 <li className="image">
//                     <img src={kikoMellaImages[7]} alt="sample" onClick={handleShow}/>
//                 </li>
//                 <li className="image">
//                     <img src={kikoMellaImages[8]} alt="sample" onClick={handleShow}/>
//                 </li>
//             </ul>
//             <Modal
//                 show={show}
//                 onHide={handleClose}
//                 backdrop="static"
//                 keyboard={false}
//             >
//                 <Modal.Header closeButton>
//                 <Modal.Title>Modal title</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>

//                     {imageModal}
                    
//                 </Modal.Body>
//                 <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                     Close
//                 </Button>
//                 <Button variant="primary">Understood</Button>
//                 </Modal.Footer>
//             </Modal>

//         </div>

//     )
// }

// const Images = kikoMellaImages.map(ImgList => {
//     return (
//         <li className="image">
//             <img src={ImgList} alt={ImgList} onClick={PhotoBook.setShow}/>
//         </li>
//     )})

// export default PhotoBook

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


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
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
          from_name: name,
          from_email: email,
          to_name: 'Kiko',
          message: message
  
        }
      }
  
        axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
          .then((res) => {
            console.log(res.data);
            setName('');
            setEmail('');
            setMessage('');
       }
       )
       .catch((error) => {
        console.error('Error Sending Message', error)
       })
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="to_name" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
    
}



export default PhotoBook
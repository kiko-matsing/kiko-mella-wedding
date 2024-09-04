import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FaqContents from "./FaqContents";

function Faq() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <section id='faq'>
        <div className="faq-main">
          <div className="main-title">Your Questions<span className="title-2"> Answered</span></div>
          <ul className="faqs">
            <li className="faq faq1">
              <div className="question-title">What time should I arrive?</div>
              <div className="faq-answer">Help us get the party as scheduled! We recommend that you arrive an hour before the start of the ceremony to make sure everyone is seated on time.</div>
              <div className="question-title">Can I bring someone else to your wedding with me?</div>
              <div className="faq-answer">
              Unfortunately, no. We hope you understand that we can no longer accommodate those who are not in our guest list due to limited seats. Each seat has a name assigned.</div>
            </li>
            <li className="faq faq2">
              <div className="question-title">Can we take photos or video during the ceremony?</div>
              <div className="faq-answer">Our ceremony is unplugged, and we aim to keep it solemn. All guest are requested to refrain from taking pictures or videos during the wedding ceremony. After we announce ourselves as husband and wife, you're free to take a shot. Most importantly hired photo and video team. We promise to share the photos after the wedding. Thank you! </div>
              <div className="more">
                <p>Got more Question ? Please click here</p>
              </div>
              

          <>
            <Button variant="primary" onClick={handleShow} className="faq-button">
              Questions And Answer
            </Button>
            <Modal show={show} onHide={handleClose} className="faq-modal">
              <Modal.Header closeButton>
                <Modal.Title>FAQ</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FaqContents />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
            </li>

          </ul>
        </div>
      </section>
    );
  }
  
  export default Faq;
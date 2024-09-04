import React from "react";
import { Accordion } from "react-bootstrap";
import { contents } from "../../Data/FaqMainContent";
import 'bootstrap/dist/css/bootstrap.min.css'


const FaqContents = () => {

    const MainContent = contents.map((content) => {
        return (
                <Accordion.Item eventKey={content.id} key={content.title}>
                    <Accordion.Header>{content.title}</Accordion.Header>
                    <Accordion.Body>{content.content}</Accordion.Body>
                </Accordion.Item>
        )
    })

    return (
        <div className="main-accordion">
            <div className="accordion-contents">
                <Accordion defaultActiveKey="">
                    {MainContent}
                </Accordion>
            </div>
        </div>
    )
}


export default FaqContents
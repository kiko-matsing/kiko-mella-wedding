import React, { useEffect } from "react";

import { contents1, contents2 } from "../Data/FaqMainContent";

const contents_two = contents2.map(contents => {
    return (
        <>
          <div className="question-title">{contents.title}</div>
          <div className="faq-answer">{contents.content}</div>
        </>
    )})

const contents_one = contents1.map(contents => {
  return (
    <>
      <div className="question-title">{contents.title}</div>
      <div className="faq-answer">{contents.content}</div>
    </>
  )})

function MainFaq() {


    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])


    return (
      <section id='faq'>
        <div className="faq-main">
          <div className="main-title">Your Questions<span className="title-2"> Answered</span></div>
          <ul className="faqs">
            <li className="faq faq1">
              {contents_one}
            </li>
            <li className="faq faq2">
              {contents_two}
            </li>

          </ul>
        </div>
      </section>
    );
  }
  
  export default MainFaq;
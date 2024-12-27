import React from "react";
import DressCodeSvg from "../../Svg/DressCodeSvg";



const DressCode = () => {
    return (
        <section id="dress-code">
            <div className="title"><span className="the">The </span>Dress Code</div>
            <div className="main-text">
                <p className="lined-text">For Principal Sponsors</p>
                <p className="text">Formal</p>
            </div>
            <div className="main-text">
                <p className="text">Gentlemen:</p>
                <p className="text">Barong or Polo with Black Pants<span className="svg"><DressCodeSvg /></span></p>
             
            </div>
            <div className="main-text">
                <p className="text">Ladies:</p>
                <p className="text">Gown or Dress</p>
            </div>
            <div className="main-text">
                <p className="lined-text">FOR GUEST</p>
                <p className="text">Semi-Formal</p>
            </div>
            <div className="main-text">
                <p className="text">We'd love to see you in these colors:</p>
            </div>
            <div className="svg-mobile">
                <DressCodeSvg />
            </div>
            <div className="colors">
                <ul className="color-main">
                    <li className="color color1"></li>
                    <li className="color color2"></li>
                    <li className="color color3"></li>
                    <li className="color color4"></li>
                </ul>
            </div>

        </section>
    )
}



export default DressCode
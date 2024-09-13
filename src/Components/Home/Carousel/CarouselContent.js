import React, { lazy } from "react";
import kikomella5 from "./../../../Assets/kikomella5.png"
import Flickity from 'react-flickity-component'


export const CarouselContent = () => {

    const flickityOptions = {
        wrapAround: true,
        autoPlay: true,
        pauseAutoPlayOnHover: true,
        prevNextButtons: false,
        pageDots: false,
        initialIndex: 2,
        lazyload: true,
        accessibility: true,
        setGallerySize: true,
        resize: true
    }
    return (

        <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // defa  ult false
            >
            <div class="carousel-cell">
                <img src={kikomella5} alt="orange tree" />
            </div>
            <div class="carousel-cell">
                <img src={kikomella5} alt="orange tree" />
            </div>
            <div class="carousel-cell">
                <img src={kikomella5} alt="orange tree" />
            </div>
            <div class="carousel-cell">
                <img src={kikomella5} alt="orange tree" />
            </div>
            <div class="carousel-cell">
                <img src={kikomella5} alt="orange tree" />
            </div>
  
        </Flickity>

    )
    
}


export default CarouselContent
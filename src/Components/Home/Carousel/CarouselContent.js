import React, { lazy } from "react";


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

            <div className="carousel-cell">
                <p className="title">Kiko & Mella</p>
            </div>
  
    )
    
}


export default CarouselContent
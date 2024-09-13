import React from "react";

/// names
import { ParentsBride,
        ParentsGroom, 
        Ninongs, 
        Ninangs, 
        Groomesmen, 
        BridesMaid,
        MaifOfHonor,
        BestMan,
        Candle,
        Cord,
        Veil,
        RingBearer,
        CoinBearer,
        BibleBearer,
        FlowerGirl } from "../Data/Entourage";
import DressCodeSvg from "../Components/Svg/DressCodeSvg";



function ContentPlacer(contents) {

    const content_list = contents.map(content => {
        return (
            <>
              <li className="name">
                {content.name}</li>
            </>
        )})

    return content_list
}


const Entourage = () => {
    return (
        <section id='entourage'>
          <div className="entourage-main">
            <div className="main-title">The Entourage</div>
            <div className="svg"><DressCodeSvg /></div>
            <div className="wed">Señora - Quiñola</div>

            <div className="title">Parents of the Bride</div>
            <ul className="entourage">
              {ContentPlacer(ParentsBride)}
            </ul>

            <div className="title">Parents of the Groom</div>
            <ul className="entourage">
              {ContentPlacer(ParentsGroom)}
            </ul>
            <div className="title sub-title">Principal Sponsors</div>
            <div className="title">Ninongs</div>
            <ul className="entourage">
              {ContentPlacer(Ninongs)}
            </ul>

            <div className="title">Ninangs</div>
            <ul className="entourage">
              {ContentPlacer(Ninangs)}
            </ul>



            <div className="title sub-title">Principal Sponsors</div>
            <div className="title">Maif of Honor</div>
            <ul className="entourage">
              {ContentPlacer(MaifOfHonor)}
            </ul>
            <div className="title">Best Man</div>
            <ul className="entourage">
              {ContentPlacer(BestMan)}
            </ul>
            <div className="title">Groomsmen</div>
            <ul className="entourage">
              {ContentPlacer(Groomesmen)}
            </ul>
            <div className="title">Bridesmaid</div>
            <ul className="entourage">
              {ContentPlacer(BridesMaid)}
            </ul>



            <div className="title">Candle</div>
            <ul className="entourage">
              {ContentPlacer(Candle)}
            </ul>

            <div className="title">Cord</div>
            <ul className="entourage">
              {ContentPlacer(Cord)}
            </ul>


            <div className="title">Veil</div>
            <ul className="entourage">
              {ContentPlacer(Veil)}
            </ul>


            <div className="title">Ring Bearer</div>
            <ul className="entourage">
              {ContentPlacer(RingBearer)}
            </ul>


            <div className="title">Coin Bearer</div>
            <ul className="entourage">
              {ContentPlacer(CoinBearer)}
            </ul>


            <div className="title">Flower Girl</div>
            <ul className="entourage">
              {ContentPlacer(FlowerGirl)}
            </ul>
          </div>
        </section>
    )
}

export default Entourage
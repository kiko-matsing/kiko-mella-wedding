import React, {useEffect} from "react";
import Gift from "../Components/Home/Gift";


const MainGifts = () => {



    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
  
  
    return (
        <div>
            <Gift />
        </div>
    )
}

export default MainGifts
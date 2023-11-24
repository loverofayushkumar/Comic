import React from "react";
import hm_img from '../image/pngwing.com.png'
const HomeSec=()=>{
    return(
        <>
        <div className="homeSec">
            <div className="hm_left">
                <div className="hm_txt">Enter a world where heroes soar, villains scheme,</div>
                <div className="hm_txt">and imagination knows no bounds. Unleash your adventure!</div>
            </div>
            <div className="hm_right">
                <img src={hm_img} alt="Loading" />
            </div>
        </div>
        </>
    )
}

export default HomeSec;
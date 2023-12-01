import React from "react";
import notFoundImg from '../../images/2663517.jpg'

export default function NotFound(){
    return(
        <div className="container-fluid">
            <div className="container"
                style={{backgroundImage:`url(${notFoundImg})`,
                    backgroundSize:"contain",
                    backgroundRepeat:"no-repeat",
                    backgroundPositionX:"center",
                    height:"80vh",
                    width:"100vw"}}>
            </div>

        </div>
    );
}
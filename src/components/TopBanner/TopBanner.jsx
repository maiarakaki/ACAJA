import React from "react";
import './TopBanner.css';


export default function TopBanner({bannerElements}){
    console.log(bannerElements);

    return (
        <div className="container-fluid top-banner" 
            style={{backgroundImage:`url(${bannerElements.image})`,
                    backgroundPositionY:`${bannerElements.position}%`}}
            >
            <div className="container">
                <div className="container-fluid page-title-container p-lg-2"
                style={{color:"white",
                        backgroundColor:"rgb(0,0,0,0.5)"}}
                >
                    <h1>{bannerElements.title}</h1>
                    <h6>{bannerElements.abstract}</h6>
                </div>

            </div>
            
        </div>
    );
}
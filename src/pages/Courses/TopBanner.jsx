import React from "react";


export default function TopBanner({bannerElements}){

    return (
        <>
            <div className="container-fluid" style={{backgroundImage:`url(${bannerElements.image})`}}>
                <div className="container">
                    <h1>{bannerElements.title}</h1>
                    <p>{bannerElements.abstract}</p>
                </div>
            </div>
        </>
    );
}
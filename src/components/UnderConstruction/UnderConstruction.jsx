import React from "react";
import buildingImg from '../../images/3675500.jpg'

export default function UnderConstruction(){
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div style={{backgroundImage:`url(${buildingImg})`,
                        backgroundSize:"cover",
                        backgroundPositionY:"35%",
                        height:"500px",
                        width:"90%"}}
                    className="d-flex align-items-center">
                <div className="container text-center"
                     style={{color:"white",
                     backgroundColor:"rgb(0,0,0,0.5)"}}>
                    <h1>...en construcción</h1>
                    
                </div>
            </div>
        </div>
    );
}
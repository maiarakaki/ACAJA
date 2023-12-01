import React from "react";
import { Link } from "react-router-dom";
import flyerImg from "../../images/bazaa-flyer.jpg"

export default function EventsHome(){
    return(
        <>
            <div className="container-fluid events-container" id="events-section">
                <div className="container">
                    <div className="row">
                        <h1>Novedades y eventos</h1>
                        <div className="col-12 col-lg-6 spotlight-container">
                            <img src={flyerImg}
                                style={{objectFit:"contain",
                                        width:"100%"}}/>
                        </div>    
                        <div className="col-12 col-lg6 gallery-container">
                        </div>  
                    </div>
                    <div className="row container-fluid justify-content-center">
                        <Link to='/events'>
                            <button className="btn btn-primary">ver más</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
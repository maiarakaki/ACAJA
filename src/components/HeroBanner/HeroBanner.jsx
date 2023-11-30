import React from "react";
import './HeroBanner.css'
import { Link } from "react-router-dom";

export default function HeroBanner(){
    return (
        <>
            <div className="hero-banner container-fluid">
                <div className="container h-100 d-flex align-items-center" >
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-6">
                            <div className='row p-3' id="call-to-action">
                                <div className="col-12">
                                    <h1 style={{color:"white"}}>Aprendé sobre Japón y su cultura con nosotros</h1>
                                </div>
                                <div className="col-12">
                                <Link to="/courses">
                                    <button className="btn btn-primary" id="info-btn"> Más Info</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row"></div>

                </div>
            </div>
        </>
    );
}
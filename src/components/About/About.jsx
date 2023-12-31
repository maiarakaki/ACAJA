import React from 'react';
import './About.css';

export default function About(){
    return (
        <>
            <div className="about-banner pt-5 container-fluid bg-light" id='about-us'>
                <div className='container'>
                    <div className="row align-items-center">
                        <div className='col-12 col-md-6'>
                            <h1>Sobre ACAJA</h1>
                            <p>
                                Somos una asociación cultural sin fines de lucro 
                                que trabaja para preservar la lengua, las costumbres 
                                y distintos aspectos de la cultura japonesa, 
                                transmiténdolos tanto a descendientes de la colectividad 
                                japonesa como a la comunidad toda.
                            </p>
                        </div>
                        <div className='col'>
                            <div id="about-img-container">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
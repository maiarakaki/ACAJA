import React from "react";
import { Link } from "react-router-dom";
import flyerImg from "../../images/bazaa-flyer.jpg";
import taikoImg from '../../images/taiko.png';
import taikoImg2 from '../../images/taiko-2.jpeg';
import cocina from '../../images/cocina.jpeg';
import aeropuerto from '../../images/aeropuerto.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './EventsComponent.css'

function CarrouselGallery(){
    return(
        <div>
            <Carousel id='gallery'>
            <Carousel.Item>
                <Image 
                    className="d-block w-100 carousel-img"
                    src={taikoImg}
                    width={50}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    className="d-block w-100 carousel-img"
                    src={taikoImg2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    className="d-block w-100 carousel-img"
                    src={cocina}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    className="d-block w-100 carousel-img"
                    src={aeropuerto}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>  
    );
}



export default function EventsHome(){
    return(
        <>
            <div className="container-fluid events-container p-3 my-3" id="events-section">
                <div className="container">
                    <div className="row">
                        <h1>Novedades y eventos</h1>
                        <div className="col-12 col-lg-6 spotlight-container">
                            <img src={flyerImg}
                                style={{objectFit:"contain",
                                        width:"100%"}}/>
                        </div>    
                        <div className="col-12 col-lg6 gallery-container" id='gallery-wrapper'>
                                <CarrouselGallery />
                        </div>
                    </div>
                    <div className="row mt-3 ">
                        <div className="container col-2">
                            <Link to='/events'>
                                <button className="btn btn-primary">ver más</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
import React, { useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import SocialMedia from '../SocialMedia/SocialMedia';
import './ContactForm.css'


export default function ContactForm () {
    const [iconColor, setIconColor] = useState("ffffff");
    const form = useRef();
    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm(
            'service_ozuebbz', 
            'template_466qiol', 
            form.current, 
            'OkvsOMzRhPHgD1SPI'
        )
            .then((result)=>{
                console.log(result.text);
            }, (error)=>{
                console.log(error.text);
            });
            
            form.current.reset();
    };

    return (
        <div className="container-fluid" id="contact-us">
            <div className='container'>
                <div className="row">
                    <h1>Contactanos</h1>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 form-container d-flex  justify-content-center">
                        <form className="row" ref={form} onSubmit={handleSubmit} id="contact-us-form">
                            <div className='col-12'>
                                <label htmlFor="from_name">Nombre</label>
                            </div>
                            <div className='col-12'>
                                <input 
                                    type="text" 
                                    id="from_name" 
                                    name="from_name" 
                                    required />
                            </div>
                            <div className='col-12'>
                                <label htmlFor="reply_to">
                                    Email
                                </label>
                            </div>
                            <div className='col-12'>
                            <input 
                                    type="email" 
                                    id="reply_to" 
                                    name="reply_to" 
                                    required />
                            </div>
                            <div className='col-12'>
                                <label htmlFor="message">
                                    Mensaje
                                </label>
                            </div>
                            <div className='col-12'>
                            <textarea 
                                    id="message" 
                                    name="message" 
                                    required />
                            </div>
                            <div>
                                <div className='row button-container justify-content-end px-3'>
                                    <input 
                                        type="submit" 
                                        value="Enviar" 
                                        className="btn btn-success col-12 col-md-3 col-lg-2"/>
                                </div>
                            </div>
                        </form>

                    </div>

                    <div className="container-fluid col-12 col-md-4 order-md-first my-3 contact-info-container">
                        <div className='d-flex justify-content-center'>
                                <p id="contact-info">
                                    Asociación Cultural Argentino Japonesa de Acassuso<br/>
                                    アカス-ソ日亜文化文化会<br/>
                                    Talcahuano 1140<br/>
                                    B1640CZJ<br/>
                                    Martínez, Provincia de Buenos Aires<br/>
                                    <a href="mailto:acajagakko@gmail.com">acajagakko@gmail.com</a><br/>
                                    Tel.: (011) 4764-4115
                                </p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <SocialMedia iconColor={iconColor}/>
                        </div>
                    </div>

                </div>
            </div>

            </div>
    );
}
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia({iconColor}){
    return (
        <div className="row mb-1" id="social-media-icons">
            <div className='col-6 social-media-icon-container'>
                <a href="https://www.facebook.com/profile.php?id=100070317800435/" 
                    target="_blank"
                    style={{color:{iconColor}}}>
                    <FontAwesomeIcon icon={faFacebookSquare} style={{fontSize:"2rem", color: iconColor}} />
                </a> 
            </div>

        
            <div className="col-6 social-media-icon-container" >
                <a href="https://www.instagram.com/acaja.acassuso/" target="_blank" style={{color:{iconColor}}}>
                    <FontAwesomeIcon icon={faInstagram}  style={{fontSize:"2rem", color: iconColor}}/>
                </a>
            </div>

        </div>
    );
}
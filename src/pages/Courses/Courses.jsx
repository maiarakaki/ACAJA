import React, {useState} from "react";
import './Courses.css'
import TopBanner from "../../components/TopBanner/TopBanner";
import img from "../../images/pexels-kanji.jpg";

function Children(){
    return(
        <div id="children-courses">
            lalala
        </div>
    );
}

export default function Courses(){
    const bannerElements={
        title:"Nuestros Cursos", 
        abstract:"Ofrecemos cursos para todas las edades y niveles",
        image: img,
        position:40
    };

    return (
        <>
            <TopBanner bannerElements={bannerElements} />
            <Children />
        </>
    );
}
import React, {useState} from "react";
import './Courses.css'
import TopBanner from "./TopBanner";

export default function Courses(){
    const bannerElements={
        title:"Nuestros Cursos", 
        abstract:"Ofrecemos cursos para todas las edades y niveles",
        image: "./pexels-kanji.jpg"
    };

    return (
        <>
            <div className="container-fluid">
                <TopBanner bannerElements={bannerElements} />
            </div>
        </>
    );
}
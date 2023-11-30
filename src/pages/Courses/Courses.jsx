import React, {useState} from "react";
import './Courses.css'
import TopBanner from "../../components/TopBanner/TopBanner";
import img from "../../images/pexels-kanji.jpg";
import CourseContent from "../../components/Courses/CourseContent";
import childrenCourseImg from "../../images/pexels-kanji.jpg";

export default function Courses(){
    const childrenContent={
        id:"children-course",
        title:"Curso presencial para niños",
        description:"En este curso presencial para niños entre 10 y 14 años los chicos aprenden el idioma de forma lúdica, explorando distintos aspectos de la cultura japonesa.",
        schedule:[
            {day: "lunes", time:"10-14"},
            {day: "martes", time:"10-14"},
            {day: "miércoles", time:"10-14"},
        ],
        pricing:"$5.000/mes",
        background:childrenCourseImg,
        imgOrder:2
    };


    const bannerElements={
        title:"Nuestros Cursos", 
        abstract:"Ofrecemos cursos para todas las edades y niveles",
        image: img,
        position:40
    };

    return (
        <>
            <TopBanner bannerElements={bannerElements} />
            <CourseContent contentData={childrenContent}/>
        </>
    );
}
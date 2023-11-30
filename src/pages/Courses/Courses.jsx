import React, {useState} from "react";
import './Courses.css'
import TopBanner from "../../components/TopBanner/TopBanner";
import img from "../../images/pexels-kanji.jpg";
import CourseContent from "../../components/CoursePageBuilder/CourseContent";
import childrenCourseImg from "../../images/aula.jpeg";
import teenCourseImg from "../../images/adolescentes-grupo.jpeg"
import onlineCourseImg from "../../images/pexels-annushka-ahuja-8055848.jpg"

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
        invertOrder:false
    };

    const teenContent={
        id:"teen-course",
        title:"Curso presencial para adolescentes",
        description:"En este curso presencial para niños entre 13 y 15 años los alumnos comienzan a prepararse para rendir los JLPT, examenes internacionales de proficiencia en lengua japonesa.",
        schedule:[
            {day: "lunes", time:"10-14"},
            {day: "martes", time:"10-14"},
            {day: "miércoles", time:"10-14"},
        ],
        pricing:"$5.000/mes",
        background:teenCourseImg,
        invertOrder:true
    };

    const onlineContent={
        id:"online-course",
        title:"Cursos Online",
        description:"Ofrecemos cursos online grupales e individuales que se ajustan a las necesidades y objetivos del interesado.",
        schedule:[
            {day: "dias y horarios", time:"a convenir"}
        ],
        pricing:"$7.000/mes",
        background:onlineCourseImg,
        invertOrder:false
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
            <CourseContent contentData={teenContent}/>
            <CourseContent contentData={onlineContent}/>
        </>
    );
}
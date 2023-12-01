import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import About from "../components/About/About";
import CoursesComponent from "../components/Courses/CoursesComponent";
import EventsHome from "../components/EventComponent/EventsComponent";

export default function Landing(){
    return(
        <>
            <HeroBanner />
            <About />
            <CoursesComponent />
            <EventsHome />
            <ContactForm />
        </>
    );
}
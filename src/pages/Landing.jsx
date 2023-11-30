import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import About from "../components/About/About";

export default function Landing(){
    return(
        <>
            <HeroBanner />
            <About />
            <ContactForm />
        </>
    );
}
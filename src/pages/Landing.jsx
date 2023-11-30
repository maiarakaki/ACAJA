import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import HeroBanner from "../components/HeroBanner/HeroBanner";

export default function Landing(){
    return(
        <>
            <HeroBanner />
            <ContactForm />
        </>
    );
}
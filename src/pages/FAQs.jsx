import React from "react";
import TopBanner from "../components/TopBanner/TopBanner";
import faqImg from "../images/5176883.jpg"
import UnderConstruction from "../components/UnderConstruction/UnderConstruction";

export default function FAQs(){

    const bannerElements = {
        title:"FAQs",
        abstract:"Preguntas frecuentes",
        image: faqImg,
        position:15
        
    }

    return (
        <>
            <TopBanner bannerElements={bannerElements}/>
            <UnderConstruction />
        </>
    );
}
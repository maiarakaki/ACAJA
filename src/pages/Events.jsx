import React from "react";
import UnderConstruction from "../components/UnderConstruction/UnderConstruction";
import TopBanner from "../components/TopBanner/TopBanner";
import matsuriImg from "../images/Matsuri_Photos_Midory_Ni.jpg";

export default function Events(){
    const bannerElements={
        title:"Eventos",
        abstract:"Información de próximos eventos y fotos de eventos pasados",
        image: matsuriImg,
        position:40
    }

    return (
        <>
            <TopBanner bannerElements={bannerElements}/>
            <UnderConstruction />
        </>
    );
}
import React from 'react'
import './CourseContent.css'

export default function CourseContent({contentData}){

    return (
        <>
            <div id={contentData.id} className={`py-5 container-fluid ${contentData.invertOrder ? "bg-white" : "bg-light"}`}>
                <div className='container'>

                    <div className='row container-fluid'>
                        <h2>{contentData.title}</h2>
                        <div className='row container-fluid'>
                            <div className='col-12 col-lg-6' id='course-info'>
                                <div className='row container-fluid'>
                                    <h4>Acerca de este curso:</h4>
                                    <p>{contentData.description}</p>
                                </div>

                                <div className='row container-fluid'>
                                    <h4>Horarios:</h4>
                                        <p>
                                            {contentData.schedule.map((item, index) => (
                                                <span key={index}>
                                                {item.day} : {item.time}
                                                <br />
                                                </span>
                                            ))}
                                        </p>
                                </div>

                                <div className='row container-fluid'>
                                    <h4>Aranceles:</h4>
                                    <p>{contentData.pricing}</p>
                                </div>
                            </div>

                            <div className={`container col-12 col-lg-6 ${contentData.invertOrder ? "order-lg-first" : "order-lg-last"}`}>   

                                <div className='img-container'>
                                    <img src={contentData.background} 
                                    style={{objectFit:'contain' , 
                                        width: '100%', 
                                        height: '100%', 
                                        borderRadius:'30px'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <></>
            </div>      
        </>
    );
}
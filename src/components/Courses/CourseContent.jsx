import React from 'react'
import './CourseContent.css'

export default function CourseContent({contentData}){



    return (
        <>
            <div id={contentData.id} className='container'>
                <div className='row container'>
                    <h2>{contentData.title}</h2>
                    <div className='row'>
                        <div className='col-12 col-md-6' id='course-info'>
                            <div className='row'>
                                <h4>Acerca de este curso:</h4>
                                <p>{contentData.description}</p>
                            </div>

                            <div className='row'>
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

                            <div className='row'>
                                <h4>Aranceles:</h4>
                                <p>{contentData.pricing}</p>
                            </div>
                        </div>

                        <div className={`col ${contentData.invertOrder ? "order-lg-first" : "order-lg-last"}`}>   
                            <div className='img-container'
                                style={{backgroundImage:`url(${contentData.background})`
                                }}>
                            </div>
                        </div>
                    </div>
                </div>
                <></>
            </div>      
        </>
    );
}
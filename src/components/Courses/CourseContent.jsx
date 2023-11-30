import React from 'react'
import './CourseContent.css'

export default function CourseContent({contentData}){



    return (
        <>
            <div id={contentData.id} className='container'>
                <div className='row container'>
                    <h1>{contentData.title}</h1>
                    <div className='row'>
                        <div className='col-12 col-md-6' id='course-info'>
                            <div className='row'>
                                <h3>Acerca de este curso:</h3>
                                <p>{contentData.description}</p>
                            </div>

                            <div className='row'>
                                <h3>Horarios:</h3>
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
                                <h3>Aranceles:</h3>
                                <p>{contentData.pricing}</p>
                            </div>
                        </div>

                        <div className={`col ${contentData.invertOrder ? "order-first" : "order-last"}`}>   
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
import React from 'react'
import './CourseContent.css'

export default function CourseContent({contentData}){

    return (
        <>
            <div id={contentData.id} className='container'>
                <div className='row container'>
                    <h1>{contentData.title}</h1>
                    <div className='row'>
                            <h3>Acerca de este curso:</h3>
                        <div className='col-12 col-md-6' id='course-info'>
                            <p>{contentData.description}</p>
                            <h3>Horarios:</h3>
                                {contentData.schedule.map((item, index) => (
                                    <p key={index}>
                                    {item.day} : {item.time}
                                    </p>
                                ))}
                            <h3>Aranceles:</h3>
                            <p>{contentData.pricing}</p>
                        </div>
                        <div className='col'>   
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
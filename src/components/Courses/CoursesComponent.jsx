import React from 'react';
import onlineCourse from '../../images/online.jpeg'
import kidsCourse from '../../images/ninios.jpeg'
import teensCourse from '../../images/adolescentes.jpeg'
import './CoursesComponent.css'

export default function CoursesComponent(){

    return (
        <>
            <div className="courses pt-5 container-fluid mb-5" id='courses-section'>
                <div className="container">
                    <div className='row'>
                        <h1>Cursos</h1>
                    </div>
                    <div className='row align-items-center imgs-container'>
                        <div className='col-12 col-lg-4 mb-3'>
                            <img className="course-img" src={onlineCourse} alt="" />
                        </div>
                        <div className='col-12 col-lg-4 mb-3'>
                            <img className="course-img" src={kidsCourse} alt="" />
                        </div>
                        <div className='col-12 col-lg-4 mb-3'>
                            <img className="course-img" src={teensCourse} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
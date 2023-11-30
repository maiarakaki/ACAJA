import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactForm from './components/ContactForm/ContactForm';
import Landing from './pages/Landing';
import Courses from './pages/Courses/Courses';
import Events from './pages/Events';
import FAQs from './pages/FAQs';
import './App.css';
import SiteNavbar from './components/Navbar/SiteNavbar';
import ModalFAQs from './components/FAQModal/Modal';


function App() {

  const [lgShow, setLgShow] = useState(false);

  const handleLgShow = (show) => {
    setLgShow(show);
  };

  return (

    <BrowserRouter>
      <SiteNavbar onClick={handleLgShow}/>
      <ModalFAQs  show={lgShow}
        onHide={() => handleLgShow(false)}/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/courses" element={<Courses />} /> 
        <Route path="/events" element={<Events />} /> 
        <Route path="/faqs" element={<FAQs />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>

  );
}

function NotFound() {
  return (
    <div>
      <h2>404</h2>
    </div>
  );
}

function Home(){
  return(
    <div>
      <Landing />
    </div>
  );
}

export default App;

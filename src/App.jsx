import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactForm from './components/ContactForm/ContactForm';
import Landing from './pages/Landing';
import Courses from './pages/Courses';
import Events from './pages/Events';
import FAQs from './pages/FAQs';
import './App.css';


function App() {
  return (

    <BrowserRouter>
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

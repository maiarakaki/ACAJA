import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactForm from './components/ContactForm/ContactForm';
import Landing from './pages/Landing';
import Courses from './pages/Courses';
import './App.css';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/courses" element={<Courses />} /> 
      </Routes>
    </BrowserRouter>

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

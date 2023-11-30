import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactForm from './components/ContactForm/ContactForm';
import Landing from './pages/Landing';
import './App.css';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
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

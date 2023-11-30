import React, {useState} from "react";
import logo from '../../images/logo-acaja.jpg'
import SocialMedia from "../SocialMedia/SocialMedia";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function SiteNavbar(){
    const [iconColor] = useState("black");
    return(
        <>
            <Navbar collapseOnSelect expand="lg" id="navbar">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} width={80}/> ACAJA
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about-us">Sobre Nosotros</Nav.Link>
                        <Nav.Link href="#cursos">Cursos</Nav.Link>
                        <Nav.Link href="#eventos">Eventos</Nav.Link>
                        <Nav.Link href="#faqs">FAQs</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    <Nav>
                        <SocialMedia iconColor={iconColor}/>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
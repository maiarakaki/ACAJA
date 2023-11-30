import React, {useState} from "react";
import logo from '../../images/logo-acaja.jpg'
import SocialMedia from "../SocialMedia/SocialMedia";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { HashLink } from 'react-router-hash-link';
import { NavDropdown } from "react-bootstrap";


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
                            <HashLink className="nav-link" smooth to='/#about-us'>
                                Sobre Nosotros
                            </HashLink>
                            <NavDropdown title="Cursos" id="courses-dropdown">
                                <NavDropdown.Item>
                                    <HashLink className="nav-link" smooth to='/courses#children-course'>
                                        Niños
                                    </HashLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <HashLink className="nav-link" smooth to='/courses#teen-course'>
                                        Adolescentes
                                    </HashLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <HashLink className="nav-link" smooth to='/courses#online-course'>
                                        Online
                                    </HashLink>
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item>
                                    <HashLink className="nav-link" smooth to='/#courses-section'>
                                        Todos
                                    </HashLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <HashLink className="nav-link" smooth to='/#contact-us'>
                                Contacto
                            </HashLink>
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
import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap'
import imag from "./../../images/image 11.svg"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from 'react';

export default function Navbarpage() {


    const [activePage, setActivePage] = useState(() => localStorage.getItem("activePage") || 1);

    useEffect(() => {
        localStorage.setItem("activePage", activePage);
    }, [activePage]);

    const handleNavigateToInputForm = () => {
        setActivePage("1");
    };
    const handleNavigateToListView = () => {
        setActivePage("2");
    };

    const handleNavigateToGridView = () => {
        setActivePage("3");
    };
    
    const handleNavigateToNutrition = () =>{
        setActivePage("4");
    }

    
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" style={{ backgroundColor: "#071740", position: "sticky", top: "0", zIndex: "1000000" }} >
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={imag} alt="" />
                        <p className='healthy'>Live Healthy.Live Longer.</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto"
                            defaultActiveKey={activePage}
                            onSelect={(selectedKey, event) => {
                                // event.preventDefault();
                                console.log("selected key is: ", selectedKey);
                                setActivePage(selectedKey);
                            }}
                        >
            
                            <Nav.Link as={Link} to="/" className="navlink" eventKey="home" onClick={handleNavigateToInputForm}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/article" className="navlink" eventKey="article" onClick={handleNavigateToListView}>
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/fitness" className="navlink" eventKey="fitness" onClick={handleNavigateToGridView}>
                                Fitness
                            </Nav.Link>
                            <Nav.Link as={Link} to="/nutrition" className="navlink" eventKey="nutrition" onClick={handleNavigateToNutrition}>
                                Nutrition
                            </Nav.Link>
                            <Nav.Link as={Link} to="/weight" className="navlink" eventKey="weight" onClick={handleNavigateToGridView}>
                                Weight Management
                            </Nav.Link>
                            <Nav.Link as={Link} to="/tools" className="navlink" eventKey="tools" onClick={handleNavigateToGridView}>
                                Tools & Calculator
                            </Nav.Link>
                            <Nav.Link as={Link} to="/member" className="navlink member" eventKey="member" onClick={handleNavigateToGridView}>
                                Member
                            </Nav.Link>
                            {/* <Nav.Link as={Link} to="/member" className="navlink" eventKey="login" onClick={handleNavigateToGridView}>
                                <button type="" className='login'>Log in</button>
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

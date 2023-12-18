import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg='primary' variant='dark' >
                <Container className='hw-100'>
                    <NavbarBrand className='container d-flex justify-content-between'>
                        <NavLink className="nav-link" to="/"><img src="/assets/images/logo/logo.png" alt="logo"></img></NavLink>
                        <Nav >
                            <NavLink className="nav-link active" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/training">Training</NavLink>
                            <NavLink className="nav-link" to="/ınstructional">Instructional</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </Nav>
                    </NavbarBrand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;

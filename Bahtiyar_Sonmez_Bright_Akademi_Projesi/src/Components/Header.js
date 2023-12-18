import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg='primary' >
                <Container>
                    <NavbarBrand>
                        <NavLink className="nav-link" to="/"><img src="/assets/images/logo/logo.png" alt="logo"></img></NavLink>
                        <Nav className='ms-auto' >
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/training">Training</NavLink>
                            <NavLink className="nav-link" to="/ınstructional">Instructional</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            <NavLink>About</NavLink>
                        </Nav>
                    </NavbarBrand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;

import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Container >
                <div className=''>
                    <Navbar bg='primary' variant='dark' >

                        <NavbarBrand className='container d-flex justify-content-between align-items-center '>
                            <NavLink className="nav-link" to="/">BRİGHT AKADAMİ</NavLink>
                            <Nav >
                                <NavLink className="nav-link active" to="/">Home</NavLink>
                                <NavLink className="nav-link" to="/training">Training</NavLink>
                                <NavLink className="nav-link" to="/ınstructional">Instructional</NavLink>
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </Nav>
                        </NavbarBrand>

                    </Navbar>
                </div>
            </Container>
        </>
    )
}

export default Header;

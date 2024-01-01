import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg='primary' variant='dark' >
                <Container>
                    <NavbarBrand className='container d-flex justify-content-between align-items-center '>
                        <NavLink className="nav-link" to="/">BRİGHT AKADAMİ</NavLink>
                        <Nav >
                            <NavLink className="nav-link active" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/trainings">Trainings</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-link" to="/ınstructors">Instructors</NavLink>
                        </Nav>
                    </NavbarBrand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;

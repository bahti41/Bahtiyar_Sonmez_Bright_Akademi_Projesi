import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg='primary' variant='dark' >
                <Container>
                    <NavbarBrand className='container d-flex justify-content-between align-items-center text-White '>
                        <Link className="nav-link" to="/">BRİGHT AKADAMİ</Link>
                        <Nav >
                            <Link className="nav-link active" to="/">Ana Sayfa</Link>
                            <Link className="nav-link" to="/trainings">Eğitmenler</Link>
                            <Link className="nav-link" to="/contact">İletişim</Link>
                            <Link className="nav-link" to="/about">Hakkında</Link>
                        </Nav>
                    </NavbarBrand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;

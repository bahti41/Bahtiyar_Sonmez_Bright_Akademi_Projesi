import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-primary">
                <Container>
                    <img src="/Img/logo.png" alt="logo" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="/">Ana Sayfa</Nav.Link>
                            <Nav.Link href="/trainings">Eğitmenler</Nav.Link>
                            <Nav.Link href="/educationalPackagesList">Egitim Paketleri</Nav.Link>
                            <Nav.Link href="/contact">İletişim</Nav.Link>
                            <Nav.Link href="/about">Hakkında</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header;



import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className='bg-primary'>
                <Container>
                    <Navbar className='justify-content-between' expand="lg ">
                        <img className='logo' src="/Img/logo.png" alt="logo" />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="navbar m-auto ">
                                <Nav.Link href="/">Ana Sayfa</Nav.Link>
                                <Nav.Link href="/trainings">Eğitmenler</Nav.Link>
                                <Nav.Link href="/educationalPackagesList">Egitim Paketleri</Nav.Link>
                                <Nav.Link href="/contact">İletişim</Nav.Link>
                                <Nav.Link href="/about">Hakkında</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container >
            </div>
        </>
    )
}

export default Header;



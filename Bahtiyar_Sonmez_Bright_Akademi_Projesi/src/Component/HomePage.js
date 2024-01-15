import React from 'react';
import './HomePage.css';
import { Container, Nav, Row, Col } from 'react-bootstrap';
import Hero from './Hero';
import ProgressBar from 'react-bootstrap/ProgressBar';

const HomePage = () => {
    const Html = 99;
    const python = 99;
    const sql = 99;

    return (
        <>
            <section>
                <Hero />
            </section>
            <div className=" py-4">
                <Container>
                    <div className="overlay">
                        <h1 className="title">Bright Academy</h1>
                        <p className="welcome">Hoşgeldiniz</p>
                        <div className="buttons">
                            <Nav.Link className='nav-link' href="/about">Hakkımızda</Nav.Link>
                            <Nav.Link className='nav-link' href="/contact">İletişim</Nav.Link>
                        </div>
                    </div>
                </Container>
                <Container fluid>
                    <section className='about'>
                        <div className='title'>
                            <div className='subtitle d-flex justify-content-center py-5'>Learn more about us</div>
                            <Row className='main'>
                                <Col xs={12} md={6}  >
                                    <img
                                        src="/Img/enIyisi.webp"
                                        alt="About Us"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                        className='img-fluid'
                                    />
                                </Col>
                                <Col xs={12} md={6} >
                                    <div className='about-title'>
                                        <h5>Welcome to our platform, where we offer comprehensive software education. Our mission is to empower aspiring developers with the latest programming skills. From beginner to advanced levels, we provide a range of courses tailored to help you excel in the tech industry.</h5>
                                        <h5> Our expert instructors are industry veterans committed to fostering your growth. Join us to start your journey in coding and become a part of the innovative world of technology.</h5>

                                        <div className='progress-block'>
                                            <h4>HTML / CSS / JAVASCRIPT</h4>
                                            <ProgressBar variant="warning" now={Html} label={`${Html}%`} />
                                        </div>
                                        <div className='progress-block'>
                                            <h4>PYTHON / C AND C++ / PHP</h4>
                                            <ProgressBar variant="warning" now={python} label={`${python}%`} />
                                        </div>
                                        <div className='progress-block'>
                                            <h4>SQL / GİT / POWERSHELL</h4>
                                            <ProgressBar variant="warning" now={sql} label={`${sql}%`} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </Container>
            </div>
        </>
    );
}
export default HomePage;
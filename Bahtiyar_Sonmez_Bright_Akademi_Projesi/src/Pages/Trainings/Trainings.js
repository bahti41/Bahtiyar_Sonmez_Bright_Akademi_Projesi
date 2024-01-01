import React from 'react'
import { Row, Col, Card, CardGroup, Button, Container } from 'react-bootstrap';


const Trainings = () => {
    return (
        <>
            <Container>
                <Row className='mt-4 mb-4'>
                    <Col md={4}>
                        <Card >
                            <Card.Img src='Img/Egıtmenler/EngınNıyazı.png' />
                            <Card.Body>
                                <Card.Title>Engin NİYAZİ</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='grid'>
                                    <Button variant="primary">Detaylar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col >
                    <Col md={4}>
                        <Card className='g-4'>
                            <Card.Img src='Img/Egıtmenler/TalutSonmez.png' />
                            <Card.Body>
                                <Card.Title>Talut SONMEZ</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='grid'>
                                    <Button variant="primary">Detaylar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='g-4'>
                            <Card.Img src='Img/Egıtmenler/NumanDemirhan.png' />
                            <Card.Body>
                                <Card.Title>Numan DEMİRHAN</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='grid'>
                                    <Button variant="primary">Detaylar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='g-4'>
                            <Card.Img src='Img/Egıtmenler/BılalTunca.png' />
                            <Card.Body>
                                <Card.Title>Bilal TUNCA</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='grid'>
                                    <Button variant="primary">Detaylar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='g-4'>
                            <Card.Img src='Img/Egıtmenler/EnesTunca.png' />
                            <Card.Body>
                                <Card.Title>Enes TUNCA</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='grid'>
                                    <Button variant="primary">Detaylar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col >
                </Row>
            </Container>
        </>
    )
}

export default Trainings

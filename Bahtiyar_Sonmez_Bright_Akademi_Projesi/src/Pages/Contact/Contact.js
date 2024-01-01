import React from 'react';
import { Card, CardHeader, Col, Row } from 'react-bootstrap';
import Maps from '../Maps/Maps';
import ContactFrom from '../ContactForm/ContactFrom';



const Contact = () => {
    return (
        <>
            <div className='bg-primary' style={{ height: "100%" }} >
                <Card className='bg-primary'>
                    <Row>
                        <Col xs={12}>
                            <CardHeader className='d-flex justify-content-center align-items-center display-6 m-5 text-white'>
                                BİZİMLE İLETİSİME GECİN
                            </CardHeader>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Maps />
                        </Col>
                        <Col xs={6}>
                            <ContactFrom />
                        </Col>
                    </Row>
                </Card >
            </div>
        </>
    )
}

export default Contact;  
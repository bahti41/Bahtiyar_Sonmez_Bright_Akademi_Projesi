import React from 'react';
import { Card, CardHeader, Col, Row } from 'react-bootstrap';
import Maps from './Maps';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='bg-primary' style={{ height: "100%" }}>
            <Card className='bg-primary'>
                <Row>
                    <Col xs={12}>
                        <CardHeader className='d-flex justify-content-center align-items-center display-6 m-5 text-succsess'>
                            BİZİMLE İLETİŞİME GEÇİN
                        </CardHeader>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <Maps />
                    </Col>
                    <Col xs={12} md={6}>
                        <ContactForm />
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default Contact;
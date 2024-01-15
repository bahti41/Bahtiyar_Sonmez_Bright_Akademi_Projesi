import React from 'react';
import { Card, CardHeader, Col, Row } from 'react-bootstrap';
import Maps from './Maps';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='bg-primary' style={{ height: "100%" }}>
            <div className='d-flex justify-content-center align-items-center display-6 m-5 py-5 text-succsess'>
                BİZİMLE İLETİŞİME GEÇİN
            </div>
            <Row>
                <Col xs={12} md={6} >
                    <Maps />
                </Col>
                <Col xs={12} md={6}>
                    <ContactForm />
                </Col>
            </Row>
        </div >
    );
}

export default Contact;
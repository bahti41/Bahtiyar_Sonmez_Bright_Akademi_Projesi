import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap';

const ContactFrom = () => {
    return (
        <>
            <Form>
                <Row className="m-3">
                    <Form.Group as={Col} controlId="formName">
                        <Form.Label>Ad Soyad</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formMail">
                        <Form.Label>Mail</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Row>

                <Form.Group className="m-3" controlId="formAddress1">
                    <Form.Label>Adres</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group className="m-3" controlId="formAddress2">
                    <Form.Label>Adres 2</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Row className="m-3">
                    <Form.Group as={Col} controlId="formCity">
                        <Form.Label>Il</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formSemt">
                        <Form.Label>Ilce</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formTell">
                        <Form.Label>Telefon </Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>
                <Button variant="dark" type="submit">
                    Basvur
                </Button>
            </Form>
        </>
    )
}

export default ContactFrom

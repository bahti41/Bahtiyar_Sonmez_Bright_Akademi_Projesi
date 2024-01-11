import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';

const ContactFrom = () => {
    return (
        <Form>
            <Row className="m-3">
                <Form.Group as={Col} controlId="formName">
                    <Form.Label>Ad Soyad</Form.Label> {/* Düzeltildi */}
                    <Form.Control type="text" placeholder="Adınız ve soyadınız" />
                </Form.Group>

                <Form.Group as={Col} controlId="formMail">
                    <Form.Label>Mail</Form.Label> {/* Düzeltildi */}
                    <Form.Control type="email" placeholder="email@example.com" />
                </Form.Group>
            </Row>

            <Form.Group className="m-3" controlId="formAddress1">
                <Form.Label>Adres</Form.Label> {/* Düzeltildi */}
                <Form.Control placeholder="Adresiniz" />
            </Form.Group>

            <Form.Group className="m-3" controlId="formAddress2">
                <Form.Label>Adres 2</Form.Label> {/* Düzeltildi */}
                <Form.Control placeholder="İkincil adres (isteğe bağlı)" />
            </Form.Group>

            <Row className="m-3">
                <Form.Group as={Col} controlId="formCity">
                    <Form.Label>İl</Form.Label> {/* Düzeltildi */}
                    <Form.Control placeholder="İl" />
                </Form.Group>

                <Form.Group as={Col} controlId="formSemt">
                    <Form.Label>İlçe</Form.Label> {/* Düzeltildi */}
                    <Form.Control placeholder="İlçe" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formTell">
                    <Form.Label>Telefon</Form.Label> {/* Düzeltildi */}
                    <Form.Control type="tel" placeholder="Telefon numaranız" />
                </Form.Group>
            </Row>

            <Button variant="dark" type="submit" className="m-3">
                Başvur
            </Button>
        </Form>
    );
}

export default ContactFrom;
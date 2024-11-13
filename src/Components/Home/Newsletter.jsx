import React from 'react'
import { Col, Container, Row, Form, InputGroup, Button } from 'react-bootstrap'

function Newsletter() {
    return (
        <section className='newsletter notch position-relative bg-purple py-5'>

            <Container>
                <Row>
                    <Col lg={6}>
                        <h3 className='ff-bubblegum fw-700 fs-2 text-white'>Join our Newsletter!</h3>
                    </Col>

                    <Col lg={6}>
                        <Form>
                            <Row className="align-items-center">
                              
                                <Col xs="auto">
                                   
                                    <InputGroup className="mb-2">
                                       
                                        <Form.Control id="inlineFormInputGroup" className='rounded-0' type='email' placeholder="Enter your e-mail here" />
                                    </InputGroup>
                                </Col>
                             
                                <Col xs="auto">
                                    <Button type="submit" className="mb-2 rounded-0">
                                        Subscribe now
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Newsletter
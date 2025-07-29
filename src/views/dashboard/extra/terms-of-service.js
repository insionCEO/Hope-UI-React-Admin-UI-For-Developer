import React from 'react'
import {Container, Row, Col, Accordion,Card} from 'react-bootstrap'
const TermsofService = () => {
    return (
        <>
            <Container id="faqAccordion">
                <Row>
                    <Col lg={12}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        Lorem ipsum dolor sit
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <strong>Anim pariatur cliche reprehenderit,</strong> enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Card>
                            <Card>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                    consectetur adipiscing elit
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <strong>Anim pariatur cliche reprehenderit,</strong> enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Card>
                            <Card>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                    Etiam sit amet justo non
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <strong>Anim pariatur cliche reprehenderit,</strong> enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Card>
                            <Card>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                    velit accumsan laoreet
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <strong>Anim pariatur cliche reprehenderit,</strong> enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Card>
                            <Card>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                    Donec volutpat metus in erat
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <strong>Anim pariatur cliche reprehenderit,</strong> enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>   
        </>
    )
}

export default TermsofService

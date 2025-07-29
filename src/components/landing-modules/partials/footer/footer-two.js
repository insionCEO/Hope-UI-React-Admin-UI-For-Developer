import React, { Fragment, memo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Form, Link } from 'react-router-dom'

const FooterTwo = memo((props) => {
  return (
    <Fragment>
        <footer className="bg-secondary inner-box ">
    <Container>
        <Row>
            <Col lg={3}>
                <Link to="#" className="navbar-brand mb-4 d-flex pb-5 align-items-center">
                {/* <Link to="{{path}}dashboard/index.html" className="navbar-brand mb-4 d-flex pb-5 align-items-center"> */}
                    <svg className="icon-30 text-primary" width="30"
                        viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2"
                            transform="rotate(-45 -0.757324 19.2427)" fill="currentColor" />
                        <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)"
                            fill="currentColor" />
                        <rect x="10.5366" y="16.3945" width="16" height="4" rx="2"
                            transform="rotate(45 10.5366 16.3945)" fill="currentColor" />
                        <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2"
                            transform="rotate(45 10.5562 -0.556152)" fill="currentColor" />
                    </svg>
                    <h4 className="logo-title ms-3 text-white">{props.appName }</h4>
                </Link>

                <div className="d-flex align-items-center pt-5">
                    <h6 className="text-white">Follow Us:</h6>
                    <ul className="list-unstyled gap-3 d-flex m-0 ms-2 fw-bold">
                        <li>FB</li>
                        <span>|</span>
                        <li>IN</li>
                        <span>|</span>
                        <li>LI</li>
                    </ul>
                </div>
            </Col>

            <Col lg={3}>
                <h5 className="mb-4 text-white ">Quick Links</h5>
                <ul className="m-0 p-0 list-unstyled">
                    <li className="mb-3">Search</li>
                    <li className="mb-3">Terms of Service</li>
                    <li className="mb-3">Refund policy</li>
                    <li className="mb-3">Privacy Policy</li>

                </ul>

            </Col>

            <Col lg={6}>
                <h5 className="mb-4 text-white ">Subscribe to save your designs</h5>

                <Form className="row g-3">
                    <Col className="col-auto">
                        <input type="email" className="form-control" id="inputemail2" placeholder="Email Address"/>
                    </Col>
                    <Col className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Subscribe</button>
                    </Col>
                </Form>
            </Col>
            <hr className="bottom-hr" />
            <Col md={12} className="text-center">
                <p>©
                    <script>document.write(new Date().getFullYear())</script> Hope UI, All Rights Reserved.
                </p>
            </Col>
        </Row>
    </Container>

</footer>
    </Fragment>
  )
})

export default FooterTwo
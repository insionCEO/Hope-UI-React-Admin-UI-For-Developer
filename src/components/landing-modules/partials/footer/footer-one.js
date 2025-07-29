import React, { Fragment, memo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// image 
import image1 from '../../../../assets/images/brands/08.png'
import image2 from '../../../../assets/images/brands/09.png'
import image3 from '../../../../assets/images/brands/10.png'
import image4 from '../../../../assets/images/brands/13.png'

const FooterOne = memo((prop) => {
  return (
    <Fragment>
        <footer className="bg-secondary inner-box ">
    <Container>
        <Row>
            <Col lg={3}>
                    <Link to="/landing-modules/home" className="navbar-brand mb-4 d-flex align-items-center">
                    {/* <Link to="{{path}}dashboard/index.html" className="navbar-brand mb-4 d-flex align-items-center"> */}
                        <svg className="icon-30 text-primary"  width="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"/>
                            <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"/>
                            <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"/>
                            <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"/>
                        </svg>
                        <h4 className="logo-title ms-3 text-white">{prop.appName }</h4>
                    </Link>
            </Col>
            <Col lg={3}>
                <h5 className="mb-4 text-white">Company</h5>
                <ul className="m-0 ps-3">
                    <li className="mb-3">About us</li>
                    <li className="mb-3">Terms Of Use</li>
                    <li className="mb-3">Privacy Policy</li>
                    <li>FAQ</li>
                </ul>
            </Col>
            <Col lg={3}>
                <h5 className="mb-4 text-white">Services</h5>
                <ul className="m-0 ps-3">
                    <li className="mb-3">Branding</li>
                    <li className="mb-3">Design</li>
                    <li className="mb-3">Development</li>
                    <li>Marketing</li>
                </ul>
            </Col>
             <Col lg={3}>
                <h5 className="mb-4 text-white">Get In touch</h5>
                    <p>Need help? Let us hear about it!</p>
                    <p>Email us at:</p>
                    <Link to="#" className="text-decoration-underline text-white">support@hopeui.com</Link>
                    <ul className="list-unstyled p-0 m-0 d-flex mt-4">
                        <li>
                            <Link to="#"><img src={image1} alt="fb" loading="lazy" className="rounded-pill"/></Link>
                        </li>
                        <li className="ps-3">
                            <Link to="#"><img src={image2} alt="gm" loading="lazy" className="rounded-pill"/></Link>
                        </li>
                        <li className="ps-3">
                            <Link to="#"><img src={image3} alt="im" loading="lazy" className="rounded-pill"/></Link>
                        </li>
                        <li className="ps-3">
                            <Link to="#"><img src={image4} alt="li" loading="lazy" className="rounded-pill"/></Link>
                        </li>
                    </ul>
            </Col>
            <hr/>
            <Col md={12} className="text-center">
                <p>©<script>document.write(new Date().getFullYear())</script> Hope UI, All Rights Reserved.</p>
            </Col>
        </Row>
    </Container>
</footer>
    </Fragment>
  )
})

export default FooterOne
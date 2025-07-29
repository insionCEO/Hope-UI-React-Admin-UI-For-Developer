import React, { Fragment,memo} from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// image
import Image from '../../../assets/landing-modules/images/home-2/banner-contact.webp'

const ContactDetail = memo(() => {
  return (
    <Fragment>
         <Container>
    <Row>
            <Col lg={12}>
                <img src={Image} alt="" className="img-fluid mb-5"/>
            </Col>
            <Col className='col-lg-7 col-md-12 text-lg-start text-center'>
                <p className="text-primary text-uppercase">
                contact
                </p>
                <h2>Let’s Stay <br/><span className="text-primary">In Touch</span></h2>
            </Col>
            <Col lg={5} className='contact-detail mt-4 mt-lg-0'>
                <h5 className="mb-2">Themes, E-commerce website,
                    Dashboard and Apps.</h5>
                    <p className="mb-2">contact@hopeui.com</p>
                    <p>(239) 555-0108</p>
            </Col>
        </Row>
    </Container>
    </Fragment>
  )
})
ContactDetail.displayName = "ContactDetail"
export default ContactDetail
import React from 'react'
import {Row,Col,Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import mail from '../../../assets/images/auth/03.png'
import Card from '../../../components/Card'

const ConfirmMail = () => {
    return (
        <>
            <section className="login-content">
               <Row className="m-0 align-items-center bg-white vh-100">            
                  <Col md="6" className="p-0">    
                     <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-3">
                        <Card.Body>
                           <Link to="/dashboard" className="navbar-brand d-flex align-items-center mb-3">
                              <svg width="30" className="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"/>
                                 <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"/>
                                 <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"/>
                                 <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"/>
                              </svg>
                              <h4 className="logo-title ms-3">Hope UI</h4>
                           </Link>
                           <h2 className="mt-3 mb-0">Success !</h2>
                           <p className="cnf-mail mb-1">A email has been send to youremail@domain.com. Please check for an
                              email from company and click
                              on the included link to reset your password.</p>
                           <div className="d-inline-block w-100">
                              <Link to="/dashboard" className="btn btn-primary mt-3">Back to Home</Link>
                           </div>
                        </Card.Body>
                     </Card>          
                  </Col>
                  <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                     <Image src={mail} className="img-fluid gradient-main animated-scaleX" alt="images"/>
                  </Col>
               </Row>
            </section>
        </>
    )
}

export default ConfirmMail;

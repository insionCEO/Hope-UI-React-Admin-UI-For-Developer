import React from 'react'
import { Row, Col, Image, Form, Button, ListGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../../components/Card'

// img
import facebook from '../../../assets/images/brands/fb.svg'
import google from '../../../assets/images/brands/gm.svg'
import instagram from '../../../assets/images/brands/im.svg'
import linkedin from '../../../assets/images/brands/li.svg'
import auth5 from '../../../assets/images/auth/05.png'

const SignUp = () => {
   let history = useNavigate()
   return (
      <>
         <section className="login-content">
            <Row className="m-0 align-items-center bg-white vh-100">
               <div className="col-md-6 d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                  <Image src={auth5} className="Image-fluid gradient-main animated-scaleX" alt="images" />
               </div>
               <Col md="6">
                  <Row className="justify-content-center">
                     <Col md="10">
                        <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
                           <Card.Body>
                              <Link to="/dashboard" className="navbar-brand d-flex align-items-center mb-3">
                                 <svg width="30" className="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor" />
                                    <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor" />
                                    <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor" />
                                    <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor" />
                                 </svg>
                                 <h4 className="logo-title ms-3">Hope UI</h4>
                              </Link>
                              <h2 className="mb-2 text-center">Sign Up</h2>
                              <p className="text-center">Create your Hope UI account.</p>
                              <Form>
                                 <Row>
                                    <Col lg="6">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="full-name" className="">Full Name</Form.Label>
                                          <Form.Control type="text" className="" id="full-name" placeholder=" " />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="last-name" className="">Last Name</Form.Label>
                                          <Form.Control type="text" className="" id="last-name" placeholder=" " />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="email" className="">Email</Form.Label>
                                          <Form.Control type="email" className="" id="email" placeholder=" " />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="phone" className="">Phone No.</Form.Label>
                                          <Form.Control type="text" className="" id="phone" placeholder=" " />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="password" className="">Password</Form.Label>
                                          <Form.Control type="password" className="" id="password" placeholder=" " />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="confirm-password" className="">Confirm Password</Form.Label>
                                          <Form.Control type="text" className="" id="confirm-password" placeholder=" " />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="12" className="d-flex justify-content-center">
                                       <Form.Check className="mb-3 form-check">
                                          <Form.Check.Input type="checkbox" id="customCheck1" />
                                          <Form.Check.Label htmlFor="customCheck1">I agree with the terms of use</Form.Check.Label>
                                       </Form.Check>
                                    </Col>
                                 </Row>
                                 <div className="d-flex justify-content-center">
                                    <Button onClick={() => history.push('/dashboard')} type="button" variant="primary">Sign Up</Button>
                                 </div>
                                 <p className="text-center my-3">or sign in with other accounts?</p>
                                 <div className="d-flex justify-content-center">
                                    <ListGroup as="ul" className="list-group-horizontal list-group-flush">
                                       <ListGroup.Item as="li" className="list-group-item border-0 pb-0">
                                          <Link to="#"><Image src={facebook} alt="fb" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="list-group-item border-0 pb-0">
                                          <Link to="#"><Image src={google} alt="gm" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="list-group-item border-0 pb-0">
                                          <Link to="#"><Image src={instagram} alt="im" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="list-group-item border-0 pb-0">
                                          <Link to="#"><Image src={linkedin} alt="li" /></Link>
                                       </ListGroup.Item>
                                    </ListGroup>
                                 </div>
                                 <p className="mt-3 text-center">
                                    Already have an Account <Link to="/auth/sign-in" className="text-underline">Sign In</Link>
                                 </p>
                              </Form>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
                  <div className="sign-bg sign-bg-right">
                     <svg width="280" height="230" viewBox="0 0 421 359" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.05">
                           <rect x="-15.0845" y="154.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -15.0845 154.773)" fill="#3A57E8" />
                           <rect x="149.47" y="319.328" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 149.47 319.328)" fill="#3A57E8" />
                           <rect x="203.936" y="99.543" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 203.936 99.543)" fill="#3A57E8" />
                           <rect x="204.316" y="-229.172" width="543" height="77.5714" rx="38.7857" transform="rotate(45 204.316 -229.172)" fill="#3A57E8" />
                        </g>
                     </svg>
                  </div>
               </Col>
            </Row>
         </section>
      </>
   )
}

export default SignUp

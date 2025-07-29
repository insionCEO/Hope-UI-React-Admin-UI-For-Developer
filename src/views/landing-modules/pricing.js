import React, { Fragment, memo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import ContactDetail from '../../components/landing-modules/widgets/contact-detail'
import SubHeader from '../../components/landing-modules/widgets/sub-header'

const Pricing = memo(() => {
  return (
    <Fragment>
         <SubHeader title={"Pricing Plan"}/>
        <div className="section-card-padding">
    <Container>
        <Row className='mb-5'>
            <Col md={12} className="text-center">
                <p className="mb-2 text-uppercase text-primary">
                   PRICE PLAN
                </p>
                <h2 className="text-secondary mb-4">Some Of Our <span className="text-primary">Selected Projects</span></h2>
            </Col>
        </Row>
        <Row className=" row-cols-1 row-cols-lg-3">
            <Col>
                <Card>
                    <Card.Body>
                        <p className="mb-2 text-primary">
                            Basic
                        </p>
                        <h4 className="mb-3">$25 <span>/month</span></h4>
                        <p className="border-bottom pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul className="list-unstyled pt-2">
                            <li className="mb-2"><svg width="10" height="7" className="me-2" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="#1AA053"/>
                                </svg> 10 users included
                            </li>
                            <li className="mb-2"><svg width="10" height="7" className="me-2" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="#1AA053"/>
                                </svg> 2GB of storage
                            </li>
                            <li className="mb-2"><svg width="10" height="7" className="me-2" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="#1AA053"/>
                                </svg> Email support
                            </li>
                        </ul>
                        <Link to="#" className="btn btn-primary w-100 mt-4">Get Started</Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className=" bg-primary">
                    <Card.Body>
                        <p className="mb-2 text-white">
                            Professional
                        </p>
                        <h4 className="mb-3 text-white">$25 <small>/month</small></h4>
                        <p className="border-bottom pb-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul className="list-unstyled pt-2 text-white">
                            <li className="mb-2"><svg width="10" height="7" className="me-2" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="#ffffff"/>
                                </svg> 10 users included
                            </li>
                            <li className="mb-2"><svg width="10" height="7" className="me-2" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="#ffffff"/>
                                </svg> 2GB of storage
                            </li>
                            <li className="mb-2"><svg width="10" height="7" className="me-2" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="#ffffff"/>
                                </svg> Email support
                            </li>
                        </ul>
                        <Link to="#" className="btn btn-light w-100 mt-4">Get Started</Link>
                    </Card.Body>
                </Card>
            </Col>
             <Col>
                <Card>
                    <Card.Body>
                        <p className="mb-2 text-primary">
                            Startup
                        </p>
                        <h4 className="mb-3">$99 <span>/month</span></h4>
                        <p className="border-bottom pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul className="list-unstyled pt-2">
                            <li className="mb-2"><svg width="10" height="7" className="me-2" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="#1AA053"/>
                                </svg> 10 users included
                            </li>
                            <li className="mb-2"><svg width="10" height="7" className="me-2" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="#1AA053"/>
                                </svg> 2GB of storage
                            </li>
                            <li className="mb-2"><svg width="10" height="7" className="me-2" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="#1AA053"/>
                                </svg> Email support
                            </li>
                        </ul>
                        <Link to="#" className="btn btn-primary w-100 mt-4">Get Started</Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
        </div>
        <div className="section-padding bg-white">
            <ContactDetail />
         </div>
    </Fragment>
  )
})
Pricing.displayName = "Pricing"
export default Pricing
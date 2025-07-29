
import React,{useState} from 'react'
import {Col,Row,Table,Card,Button} from 'react-bootstrap'

const wrong=    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 20L20 4M20 20L4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>

const right=    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>

const Pricing = () => {
    const [pricing, setPricing]=useState('pricing') 
    const pricingLists = [
    {
        title: 'Feature 1',
        icon:  right,
        icon1: right,
        icon2: right,
        icon3: right
    },
    {
       title: 'Feature 2',
       icon:  wrong,
       icon1: right,
       icon2: right,
       icon3: right
    },
    {
        title: 'Feature 3',
        icon: wrong,
        icon1:right,
        icon2:right,
        icon3:right
    },
    {
       title: 'Feature 4',
       icon: right,
       icon1:right,
       icon2:right,
       icon3:right
    },
    {
       title: 'Feature 5',
       icon:  wrong,
       icon1: wrong,
       icon2: right,
       icon3: right
    }
]
    return (
        <div>
            <Row>
                <Col md="12">
                    <Row className=" row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3 text-center">
                        <Col>
                            <Card className=" mb-4 rounded-3 ">
                                <Card.Body>
                                    <Card.Title as="h1" className=" pricing-card-title">$0<small className="text-muted fw-light">/mo</small></Card.Title>
                                    <h4 className="my-0 fw-normal mt-3">Free</h4>
                                        <ul className="list-unstyled my-3 p-0">
                                        <li><p>10 users included</p></li>
                                        <li><p>2 GB of storage</p></li>
                                        <li><p>Email support</p></li>
                                        <li><p>Help center access</p></li>
                                        </ul>
                                    <button type="button" className="btn btn-outline-secondary disabled">Sign up for free</button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className=" mb-4 rounded-3 ">
                                <Card.Body>
                                    <Card.Title as="h1" className=" pricing-card-title">$15<small className="text-muted fw-light">/mo</small></Card.Title>
                                    <h4 className="my-0 fw-normal mt-3">Pro</h4>
                                    <ul className="list-unstyled my-3 p-0">
                                        <li><p>20 users included</p></li>
                                        <li><p>10 GB of storage</p></li>
                                        <li><p>Priority email support</p></li>
                                        <li><p>Help center access</p></li>
                                    </ul>
                                    <button type="button" className="btn btn-outline-primary">Get started</button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className=" mb-4 rounded-3 ">
                                <Card.Body>
                                    <Card.Title as="h1" className=" pricing-card-title">$29<small className="text-muted fw-light">/mo</small></Card.Title>
                                    <h4 className="my-0 fw-normal mt-3">Enterprise</h4>
                                    <ul className="list-unstyled my-3 p-0">
                                        <li><p>30 users included</p></li>
                                        <li><p>15 GB of storage</p></li>
                                        <li><p>Call and email support</p></li>
                                        <li><p>Help center access</p></li>
                                    </ul>
                                    <button type="button" className="btn btn-primary">Get Started</button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className=" mb-4 rounded-3 ">
                                <Card.Body>
                                    <Card.Title as="h1" className=" pricing-card-title">$49<small className="text-muted fw-light">/mo</small></Card.Title>
                                    <h4 className="my-0 fw-normal mt-3">Premium</h4>
                                    <ul className="list-unstyled my-3 p-0">
                                        <li><p>50 users included</p></li>
                                        <li><p>60 GB of storage</p></li>
                                        <li><p>24 X 7 call support</p></li>
                                        <li><p>Help center access</p></li>
                                    </ul>
                                    <button type="button" className="btn btn-primary">Get Started</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className=" row-cols-1">
                        <Col sm="12">
                            <Card>
                                <Card.Header className=" pb-3">
                                    <h3 className="block-title">Features</h3>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div className="table-responsive pricing pt-2">
                                        <Table id="my-table" className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="text-center prc-wrap"></th>
                                                    <th className="text-center prc-wrap">
                                                        <div className={`prc-box ${pricing === 'Basic' ? 'active' : ''} `} onClick={() =>setPricing('Basic')}>
                                                            <div className="h3 pt-4">$0<small> / month</small></div> 
                                                            <span className="type">Free</span>
                                                        </div>
                                                    </th>
                                                    <th className="text-center prc-wrap">
                                                        <div className={`prc-box  ${pricing === 'pricing' ? 'active' : ''}`} onClick={() =>setPricing('pricing')}>
                                                            <div className="h3 pt-4">$15<small> / month</small></div>
                                                            <span className="type">Pro</span>
                                                        </div>
                                                    </th>
                                                    <th className="text-center prc-wrap">
                                                        <div className={`prc-box ${pricing === 'Platinum' ? 'active' : ''}`} onClick={() =>setPricing('Platinum')}>
                                                            <div className="h3 pt-4">$29<small> / month</small></div>
                                                            <span className="type">Enterprise</span>
                                                        </div>
                                                    </th>
                                                    <th className="text-center prc-wrap">
                                                        <div className={`prc-box ${pricing === 'Premium' ? 'active' : ''} `} onClick={() =>setPricing('Premium')} >
                                                            <div className="h3 pt-4">$49<small> / month</small></div>
                                                            <span className="type">Premium</span>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                        <tbody>
                                            {pricingLists.map((item) => (
                                                <tr key={item.title}>
                                                    <th className="text-center" scope="row">{item.title}</th>
                                                    <td className={`text-center child-cell ${pricing === 'Basic' ? 'active' : ''}`}>{item.icon}</td>
                                                    <td className={`text-center child-cell ${pricing === 'pricing' ? 'active' : ''}`}>{item.icon1}</td>
                                                    <td className={`text-center child-cell ${pricing === 'Platinum' ? 'active' : ''}`}>{item.icon2}</td>
                                                    <td className={`text-center child-cell ${pricing === 'Premium' ? 'active' : ''}`}>{item.icon3}</td>
                                                </tr>
                                                ))}
                                                <tr>
                                                    <td className="text-center"><i className="ri-close-line i_close"></i></td>
                                                    <td className="text-center"> <Button href="#" variant="outline-primary">Free</Button></td>
                                                    <td className="text-center"> <Button href="#" variant="outline-primary">Purchase</Button></td>
                                                    <td className="text-center"> <Button href="#" variant="outline-primary">Purchase</Button></td>
                                                    <td className="text-center"> <Button href="#" variant="outline-primary">Purchase</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className=" pb-3">
                                    <h3 className="block-title">Payments</h3>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div className="table-responsive pricing pt-2">
                                        <Table className="table table-bordered mb-0">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>
                                                        <div>
                                                            <div className="text-bold h5">Free</div>
                                                            <div className="d-flex justify-content-start align-items-center mt-4">
                                                                <small>USD</small>
                                                                <div className="mx-2 h4">$0</div>
                                                                <small> / mo</small>
                                                            </div>
                                                            <div className="mt-3">
                                                                <div className="d-flex">billed yearly</div>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="bold me-2">$0.00</small> billed monthly
                                                                </div>
                                                            </div>
                                                            <button className="btn btn-primary rounded-pill mt-3 w-100">Free</button>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="text-bold h5">Pro</div>
                                                                <span className="badge rounded-pill bg-soft-success ms-2">Popular</span>
                                                            </div>
                                                            <div className="d-flex justify-content-start align-items-center mt-4">
                                                                <small>USD</small>
                                                                <div className="mx-2 h4">$15</div>
                                                                <small> / mo</small>
                                                            </div>
                                                            <div className="mt-3">
                                                                <div className="d-flex">billed yearly</div>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="bold me-2">$169.99</small> billed monthly
                                                                </div>
                                                            </div>
                                                            <button className="btn btn-primary rounded-pill mt-3 w-100">Buy Pro</button>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div>
                                                            <div className="text-bold h5">Enterprise</div>
                                                            <div className="d-flex justify-content-start align-items-center mt-4">
                                                                <small>USD</small>
                                                                <div className="mx-2 h4">$29</div>
                                                                <small> / mo</small>
                                                            </div>
                                                            <div className="mt-3">
                                                                <div className="d-flex">billed yearly</div>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="bold me-2">$319.89</small> billed monthly
                                                                </div>
                                                            </div>
                                                            <button className="btn btn-primary rounded-pill mt-3 w-100">Buy Enterprise</button>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div>
                                                            <div className="text-bold h5">Premium</div>
                                                            <div className="d-flex justify-content-start align-items-center mt-4">
                                                                <small>USD</small>
                                                                <div className="mx-2 h4">$49</div>
                                                                <small> / mo</small>
                                                            </div>
                                                            <div className="mt-3">
                                                                <div className="d-flex">billed yearly</div>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="bold me-2">$549.09</small> billed monthly
                                                                </div>
                                                            </div>
                                                            <button className="btn btn-primary rounded-pill mt-3 w-100">Buy Premium</button>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th colSpan="5" className="bg-light">Features</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Features 1</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Features 2</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Features 3</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Features 4</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th colSpan="5" className="bg-light">Payment</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Payment 1</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Payment 2</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Payment 3</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" stroke="currentColor"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Payment 4</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Row className=" no-gutters">
                                    <Col md="8">
                                        <Card.Body>
                                        <h4>Lifetime Membership</h4>
                                        <p className="mt-2">
                                            If you will take advantage of the above-listed amenities, classes, and services, Life Time's membership fees may be worth the cost.
                                        </p>
                                        <div className="mb-5 pt-2">
                                            <p className="line-around text-gray mb-0"><span className="line-around-1">Included Features</span></p>
                                        </div>
                                        <Row>
                                            <Col lg="6" md="6" sm="12" className="">
                                                <div className="d-flex align-items-center">
                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    <div className="ms-2">Private forum access</div>
                                                </div>                           
                                            </Col>
                                            <Col lg="6" md="6" sm="12" className="">
                                                <div className="d-flex align-items-center">
                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    <div className="ms-2">Private forum access</div>
                                                </div>                           
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6" md="6" sm="12" className="">
                                                <div className="d-flex align-items-center">
                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    <div className="ms-2">Private forum access</div>
                                                </div>                           
                                            </Col>
                                            <Col lg="6" md-="6" sm="12">
                                                <div className="d-flex align-items-center">
                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    <div className="ms-2">Private forum access</div>
                                                </div>                           
                                            </Col>
                                        </Row>
                                        </Card.Body>
                                    </Col>
                                    <Col md="4">
                                        <Card.Body className=" text-center h-100 iq-single-card">
                                            <div className="d-flex align-items-center justify-content-center mb-2">
                                                <Card.Title as="h1" className=" pricing-card-title mb-0">
                                                    $599                              
                                                </Card.Title>
                                                <small className="ms-1 text-muted fw-light">USD</small>
                                            </div>
                                            <div className="font-medium text-center text-gray">
                                                <div>No monthly subscription,</div>
                                                <div>you only pay once.</div>
                                            </div>
                                            <button className="btn btn-primary rounded-pill mt-5 w-100">Get Started</button>
                                        </Card.Body>
                                    </Col>
                                </Row>                  
                            </Card>               
                        </Col>
                    </Row>
                    <Row className=" iq-star-inserted row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5 mt-5 text-center">
                        <Col className=" iq-star-inserted-1">
                            <Card className=" my-5">
                                <Card.Body>
                                    <h2 className="my-0 fw-normal mb-4">Enterprise</h2>
                                    <Card.Title as="h1" className=" pricing-card-title mb-0">$29 <small className="text-gray"> / month</small></Card.Title>
                                    <p className="mb-0">billed yearly</p>
                                    <p>$79.9 billed monthly</p>
                                    <ul className="list-unstyled my-3 p-0">
                                        <li><p>30 users included</p></li>
                                        <li><p>15 GB of storage</p></li>
                                        <li><p>Call and email support</p></li>
                                        <li><p>Help center access</p></li>
                                    </ul>
                                    <button type="button" className="btn btn-primary rounded-pill w-100">Get Started</button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className=" iq-star-inserted-2">
                            <Card className=" mb-0 shadow-lg">
                                <Card.Body>
                                    <h2><span className="badge rounded-pill bg-soft-primary mb-4"><small className="text-uppercase px-3">Popular</small></span></h2>
                                    <h2 className="my-0 fw-normal mb-4">Pro</h2>
                                    <Card.Title as="h1" className=" pricing-card-title mb-0">$15<small className="text-gray"> / month</small></Card.Title>
                                    <p className="mb-0">billed yearly</p>
                                    <p>$55.0 billed monthly</p>
                                    <ul className="list-unstyled my-3 p-0">
                                        <li><p>20 users included</p></li>
                                        <li><p>10 GB of storage</p></li>
                                        <li><p>Priority email support</p></li>
                                        <li><p>Help center access</p></li>
                                    </ul>
                                    <button type="button" className="btn btn-primary rounded-pill w-100">Get Started</button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className=" iq-star-inserted-3">
                            <Card className=" my-5">
                                <Card.Body>
                                    <h2 className="my-0 fw-normal mb-4">Premium</h2>
                                    <Card.Title as="h1" className=" pricing-card-title mb-0">$49 <small className="text-gray"> / month</small></Card.Title>
                                    <p className="mb-0">billed yearly</p>
                                    <p>$99.9 billed monthly</p>
                                    <ul className="list-unstyled my-3 p-0">
                                        <li><p>50 users included</p></li>
                                        <li><p>60 GB of storage</p></li>
                                        <li><p>24 X 7 call support</p></li>
                                        <li><p>Help center access</p></li>
                                    </ul>
                                    <button type="button" className="btn btn-primary rounded-pill w-100">Get Started</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Pricing

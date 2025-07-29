import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
import {Button, NavDropdown, Container, Navbar, Dropdown, Nav, Tab} from 'react-bootstrap'
import Card from '../../../src/components/Card'

const Navbars =() =>{
    const [toggleState, setToggleState] = useState(true);
    return(
        <>
            <article id="navbar">
                <div className="bd-heading sticky-xl-top align-self-start">
                    <Card>
                        <Card.Body>
                            <h5>Navbar</h5>
                            <div className="d-flex align-items-center mt-2">
                                <Button bsPrefix=" d-flex" href="https://templates.iqonic.design/hope-ui/documentation/react/build/navbar" target="_blank">
                                    <svg width="20" className="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <span>Documentation</span>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Card className="iq-document-card">
                    <Tab.Container defaultActiveKey="first">
                        <div className="d-flex justify-content-end">
                            <Nav as="ul" className=" nav-tabs nav-tunnel nav-slider">
                                <Nav.Item as="li" role="presentation">
                                    <Nav.Link as="button" eventKey="first" className={toggleState === true ? "tabs active bg-primary" : "tabs d-flex align-items-center"} onClick={() => setToggleState(true)} data-bs-toggle="tab" data-bs-target="#content-Navbar-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                        <svg width="20" className="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                            <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                            <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                        </svg>
                                        Preview
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" role="presentation">
                                    <Nav.Link as="button" eventKey="second" className={toggleState === false ? "tabs active-tabs bg-primary" : "tabs d-flex align-items-center"} onClick={() => setToggleState(false)} data-bs-toggle="tab" data-bs-target="#content-Navbar-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                        <svg width="20" className="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                            <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                            <mask fill="white">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                            </mask>
                                            <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                            <mask fill="white">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                            </mask>
                                            <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                        </svg>
                                        Code
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className={toggleState === true ? "content  active-content" : "content"} id="content-Navbar-prv" role="tabpanel" aria-labelledby="typo-output">
                                    <div className="bd-example">
                                        <Navbar bg="light" expand="lg" className="navbar-light">
                                            <Container fluid>
                                                <Navbar.Brand href="#">
                                                    Logo
                                                </Navbar.Brand>
                                                <Navbar.Toggle as={Button} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-icon"></span>
                                                </Navbar.Toggle>
                                                <Navbar.Collapse className="collapse" id="navbarSupportedContent">
                                                    <Nav className=" me-auto mb-2 mb-lg-0">
                                                        <Nav.Item >
                                                            <Nav.Link active aria-current="page" h="#">Home</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link href="#">Link</Nav.Link>
                                                        </Nav.Item>
                                                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Something</NavDropdown.Item>
                                                            <NavDropdown.Divider />
                                                            <NavDropdown.Item href="#action/3.4">Something else ehere</NavDropdown.Item>
                                                        </NavDropdown>
                                                        <Nav.Item>
                                                            <Nav.Link disabled href="#" tabIndex="-1" aria-disabled="true">Disabled</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                    <form className="d-flex">
                                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                                        <button className="btn btn-outline-dark" type="submit">Search</button>
                                                    </form>
                                                </Navbar.Collapse>
                                            </Container>
                                        </Navbar>
                                        <Navbar className="navbar-dark rounded-1 mt-5" expand="lg" bg="primary">
                                            <Container fluid>
                                                <Navbar.Brand href="#">Logo</Navbar.Brand>
                                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#navbar-1" aria-controls="navbar-1" aria-expanded="false"
                                                    aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-icon"></span>
                                                    </button>
                                                <Navbar.Collapse className="collapse" id="navbar-1">
                                                    <Nav className="ms-auto mb-2 mb-lg-0">
                                                        <Nav.Item>
                                                            <Nav.Link className=" active" aria-current="page" href="#">Home</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item as='li'>
                                                            <Nav.Link href="#" className='text-white'>Link</Nav.Link>
                                                        </Nav.Item> 
                                                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown" className='text-white'>
                                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2">
                                                          Another action
                                                        </NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item href="#action/3.4">
                                                          Separated link
                                                        </NavDropdown.Item>
                                                      </NavDropdown>
                                                    </Nav>
                                                  
                                                </Navbar.Collapse>
                                            </Container>
                                        </Navbar>
                                        <Navbar className="navbar-dark rounded-1 mt-5" expand="lg" bg="danger">
                                            <Container fluid>
                                                <Navbar.Brand className="navbar-brand" to="#">Logo</Navbar.Brand>
                                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#navbar-2" aria-controls="navbar-2" aria-expanded="false"
                                                        aria-label="Toggle navigation">
                                                        <span className="navbar-toggler-icon"></span>
                                                    </button>
                                                <Navbar.Collapse className="collapse" id="navbar-2">
                                                    <Nav className=" ms-auto mb-2 mb-lg-0">
                                                        <Nav.Item>
                                                            <Nav.Link className="active" aria-current="page" href="#">
                                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                                        d="M14.2124 7.76241C14.2124 10.4062 12.0489 12.5248 9.34933 12.5248C6.6507 12.5248 4.48631 10.4062 4.48631 7.76241C4.48631 5.11865 6.6507 3 9.34933 3C12.0489 3 14.2124 5.11865 14.2124 7.76241ZM2 17.9174C2 15.47 5.38553 14.8577 9.34933 14.8577C13.3347 14.8577 16.6987 15.4911 16.6987 17.9404C16.6987 20.3877 13.3131 21 9.34933 21C5.364 21 2 20.3666 2 17.9174ZM16.1734 7.84875C16.1734 9.19506 15.7605 10.4513 15.0364 11.4948C14.9611 11.6021 15.0276 11.7468 15.1587 11.7698C15.3407 11.7995 15.5276 11.8177 15.7184 11.8216C17.6167 11.8704 19.3202 10.6736 19.7908 8.87118C20.4885 6.19676 18.4415 3.79543 15.8339 3.79543C15.5511 3.79543 15.2801 3.82418 15.0159 3.87688C14.9797 3.88454 14.9405 3.90179 14.921 3.93246C14.8955 3.97174 14.9141 4.02253 14.9396 4.05607C15.7233 5.13216 16.1734 6.44206 16.1734 7.84875ZM19.3173 13.7023C20.5932 13.9466 21.4317 14.444 21.7791 15.1694C22.0736 15.7635 22.0736 16.4534 21.7791 17.0475C21.2478 18.1705 19.5335 18.5318 18.8672 18.6247C18.7292 18.6439 18.6186 18.5289 18.6333 18.3928C18.9738 15.2805 16.2664 13.8048 15.5658 13.4656C15.5364 13.4493 15.5296 13.4263 15.5325 13.411C15.5345 13.4014 15.5472 13.3861 15.5697 13.3832C17.0854 13.3545 18.7155 13.5586 19.3173 13.7023Z"
                                                                        fill="#fff" />
                                                                </svg>
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link href="#">
                                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                                        d="M17.1801 4.41C17.1801 3.08 18.2601 2 19.5901 2C20.9201 2 22.0001 3.08 22.0001 4.41C22.0001 5.74 20.9201 6.82 19.5901 6.82C18.2601 6.82 17.1801 5.74 17.1801 4.41ZM13.33 14.7593L16.22 11.0303L16.18 11.0503C16.34 10.8303 16.37 10.5503 16.26 10.3003C16.151 10.0503 15.91 9.8803 15.651 9.8603C15.38 9.8303 15.111 9.9503 14.95 10.1703L12.531 13.3003L9.76 11.1203C9.59 10.9903 9.39 10.9393 9.19 10.9603C8.991 10.9903 8.811 11.0993 8.69 11.2593L5.731 15.1103L5.67 15.2003C5.5 15.5193 5.58 15.9293 5.88 16.1503C6.02 16.2403 6.17 16.3003 6.34 16.3003C6.571 16.3103 6.79 16.1893 6.93 16.0003L9.44 12.7693L12.29 14.9103L12.38 14.9693C12.7 15.1393 13.1 15.0603 13.33 14.7593ZM15.45 3.7803C15.41 4.0303 15.39 4.2803 15.39 4.5303C15.39 6.7803 17.21 8.5993 19.45 8.5993C19.7 8.5993 19.94 8.5703 20.19 8.5303V16.5993C20.19 19.9903 18.19 22.0003 14.79 22.0003H7.401C4 22.0003 2 19.9903 2 16.5993V9.2003C2 5.8003 4 3.7803 7.401 3.7803H15.45Z"
                                                                        fill="#fff" />
                                                                </svg>
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Dropdown as="li" className="nav-item">
                                                            <Dropdown.Toggle as={Button} href="#" variant=" nav-link" >
                                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                                        d="M6.11304 4.5H11.9051C14.3271 4.5 16.0181 6.16904 16.0181 8.56091V15.4391C16.0181 17.831 14.3271 19.5 11.9051 19.5H6.11304C3.69102 19.5 2 17.831 2 15.4391V8.56091C2 6.16904 3.69102 4.5 6.11304 4.5ZM19.958 6.87898C20.397 6.65563 20.912 6.67898 21.331 6.94294C21.75 7.20589 22 7.66274 22 8.16223V15.8384C22 16.3389 21.75 16.7947 21.331 17.0577C21.102 17.2008 20.846 17.2739 20.588 17.2739C20.373 17.2739 20.158 17.2231 19.957 17.1206L18.476 16.3734C17.928 16.0952 17.588 15.5369 17.588 14.9165V9.08305C17.588 8.46173 17.928 7.90335 18.476 7.62721L19.958 6.87898Z"
                                                                        fill="#fff" />
                                                                </svg>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                                <Dropdown.Divider />
                                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Nav>
                                                </Navbar.Collapse>
                                            </Container>
                                        </Navbar>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second"  id="content-Navbar-code" className={toggleState === false ? "content  active-content" : "content"} role="tabpanel" aria-labelledby="typo-output">
                                    <div className="section-block">
<pre className="language-markup"><code className="language-markup">
{`<div className="bd-example">
    <Navbar bg="light" expand="lg" className="navbar-light">
        <Container fluid>
            <Navbar.Brand href="#">
                Logo
            </Navbar.Brand>
            <Navbar.Toggle as={Button} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse className="collapse" id="navbarSupportedContent">
                <Nav className=" me-auto mb-2 mb-lg-0">
                    <Nav.Item >
                        <Nav.Link active aria-current="page" h="#">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Link</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Something else ehere</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link disabled href="#" tabIndex="-1" aria-disabled="true">Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-dark" type="submit">Search</button>
                </form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <Navbar className="navbar-dark rounded-1 mt-5" expand="lg" bg="primary">
        <Container fluid>
            <Navbar.Brand href="#">Logo</Navbar.Brand>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbar-1" aria-controls="navbar-1" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <Navbar.Collapse className="collapse" id="navbar-1">
                <Nav className="ms-auto mb-2 mb-lg-0">
                    <Nav.Item>
                        <Nav.Link className=" active" aria-current="page" href="#">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Link</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <Navbar className="navbar-dark rounded-1 mt-5" expand="lg" bg="danger">
        <Container fluid>
            <Navbar.Brand className="navbar-brand" to="#">Logo</Navbar.Brand>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar-2" aria-controls="navbar-2" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <Navbar.Collapse className="collapse" id="navbar-2">
                <Nav className=" ms-auto mb-2 mb-lg-0">
                    <Nav.Item>
                        <Nav.Link className="active" aria-current="page" href="#">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M14.2124 7.76241C14.2124 10.4062 12.0489 12.5248 9.34933 12.5248C6.6507 12.5248 4.48631 10.4062 4.48631 7.76241C4.48631 5.11865 6.6507 3 9.34933 3C12.0489 3 14.2124 5.11865 14.2124 7.76241ZM2 17.9174C2 15.47 5.38553 14.8577 9.34933 14.8577C13.3347 14.8577 16.6987 15.4911 16.6987 17.9404C16.6987 20.3877 13.3131 21 9.34933 21C5.364 21 2 20.3666 2 17.9174ZM16.1734 7.84875C16.1734 9.19506 15.7605 10.4513 15.0364 11.4948C14.9611 11.6021 15.0276 11.7468 15.1587 11.7698C15.3407 11.7995 15.5276 11.8177 15.7184 11.8216C17.6167 11.8704 19.3202 10.6736 19.7908 8.87118C20.4885 6.19676 18.4415 3.79543 15.8339 3.79543C15.5511 3.79543 15.2801 3.82418 15.0159 3.87688C14.9797 3.88454 14.9405 3.90179 14.921 3.93246C14.8955 3.97174 14.9141 4.02253 14.9396 4.05607C15.7233 5.13216 16.1734 6.44206 16.1734 7.84875ZM19.3173 13.7023C20.5932 13.9466 21.4317 14.444 21.7791 15.1694C22.0736 15.7635 22.0736 16.4534 21.7791 17.0475C21.2478 18.1705 19.5335 18.5318 18.8672 18.6247C18.7292 18.6439 18.6186 18.5289 18.6333 18.3928C18.9738 15.2805 16.2664 13.8048 15.5658 13.4656C15.5364 13.4493 15.5296 13.4263 15.5325 13.411C15.5345 13.4014 15.5472 13.3861 15.5697 13.3832C17.0854 13.3545 18.7155 13.5586 19.3173 13.7023Z"
                                    fill="#fff" />
                            </svg>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M17.1801 4.41C17.1801 3.08 18.2601 2 19.5901 2C20.9201 2 22.0001 3.08 22.0001 4.41C22.0001 5.74 20.9201 6.82 19.5901 6.82C18.2601 6.82 17.1801 5.74 17.1801 4.41ZM13.33 14.7593L16.22 11.0303L16.18 11.0503C16.34 10.8303 16.37 10.5503 16.26 10.3003C16.151 10.0503 15.91 9.8803 15.651 9.8603C15.38 9.8303 15.111 9.9503 14.95 10.1703L12.531 13.3003L9.76 11.1203C9.59 10.9903 9.39 10.9393 9.19 10.9603C8.991 10.9903 8.811 11.0993 8.69 11.2593L5.731 15.1103L5.67 15.2003C5.5 15.5193 5.58 15.9293 5.88 16.1503C6.02 16.2403 6.17 16.3003 6.34 16.3003C6.571 16.3103 6.79 16.1893 6.93 16.0003L9.44 12.7693L12.29 14.9103L12.38 14.9693C12.7 15.1393 13.1 15.0603 13.33 14.7593ZM15.45 3.7803C15.41 4.0303 15.39 4.2803 15.39 4.5303C15.39 6.7803 17.21 8.5993 19.45 8.5993C19.7 8.5993 19.94 8.5703 20.19 8.5303V16.5993C20.19 19.9903 18.19 22.0003 14.79 22.0003H7.401C4 22.0003 2 19.9903 2 16.5993V9.2003C2 5.8003 4 3.7803 7.401 3.7803H15.45Z"
                                    fill="#fff" />
                            </svg>
                        </Nav.Link>
                    </Nav.Item>
                    <Dropdown as="li" className="nav-item">
                        <Dropdown.Toggle as={Button} href="#" variant=" nav-link" >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M6.11304 4.5H11.9051C14.3271 4.5 16.0181 6.16904 16.0181 8.56091V15.4391C16.0181 17.831 14.3271 19.5 11.9051 19.5H6.11304C3.69102 19.5 2 17.831 2 15.4391V8.56091C2 6.16904 3.69102 4.5 6.11304 4.5ZM19.958 6.87898C20.397 6.65563 20.912 6.67898 21.331 6.94294C21.75 7.20589 22 7.66274 22 8.16223V15.8384C22 16.3389 21.75 16.7947 21.331 17.0577C21.102 17.2008 20.846 17.2739 20.588 17.2739C20.373 17.2739 20.158 17.2231 19.957 17.1206L18.476 16.3734C17.928 16.0952 17.588 15.5369 17.588 14.9165V9.08305C17.588 8.46173 17.928 7.90335 18.476 7.62721L19.958 6.87898Z"
                                    fill="#fff" />
                            </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="ul" className="dropdown-menu-end">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</div>`}
</code></pre>
                                </div>                          
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>   
                </Card>
            </article>
        </>
    )
}
export default Navbars;
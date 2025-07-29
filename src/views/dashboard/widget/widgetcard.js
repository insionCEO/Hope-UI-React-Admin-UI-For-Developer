import {useState,memo,Fragment} from 'react'
import {Row,Col,Image,Form,Button,InputGroup,FormControl} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import FsLightbox from 'fslightbox-react';

// import {bindActionCreators} from "redux"

import {Link} from 'react-router-dom'
// img
import shap2 from '../../../assets/images/shapes/02.png'
import shap4 from '../../../assets/images/shapes/04.png'
import shap6 from '../../../assets/images/shapes/06.png'

import icon1 from '../../../assets/images/icons/01.png'
import icon2 from '../../../assets/images/icons/02.png'
import icon3 from '../../../assets/images/icons/03.png'
import icon4 from '../../../assets/images/icons/04.png'
import icon5 from '../../../assets/images/icons/05.png'

import icon8 from '../../../assets/images/icons/08.png'
import icon6 from '../../../assets/images/icons/06.png'
import icon7 from '../../../assets/images/icons/07.png'

import avatars11 from '../../../assets/images/avatars/01.png'
import avatars22 from '../../../assets/images/avatars/avtar_1.png'
import avatars33 from '../../../assets/images/avatars/avtar_2.png'
import avatars44 from '../../../assets/images/avatars/avtar_3.png'
import avatars55 from '../../../assets/images/avatars/avtar_4.png'
import avatars66 from '../../../assets/images/avatars/avtar_5.png'

import avatars2 from '../../../assets/images/avatars/02.png'
import avatars3 from '../../../assets/images/avatars/03.png'
import avatars4 from '../../../assets/images/avatars/04.png'
import avatars5 from '../../../assets/images/avatars/05.png'
import ShareOffcanvas from '../../../components/partials/components/shareoffcanvas'
// Circularprogressbar
import Circularprogressbar from '../../../components/circularprogressbar'

const Widgetcard = memo((props) => {
    const [toggler, setToggler] = useState(false);
    return (
        <Fragment>
          <FsLightbox
                toggler={ toggler }
                sources={ [icon4,shap2,icon8,shap4,icon2,shap6,icon5,shap4,icon1] }
            />
            <Row>
                <Col lg="4">
                    <Card>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="d-flex flex-column text-center align-items-center justify-content-between ">
                                    <div className="fs-italic">
                                        <h5> Regina Miles</h5>
                                        <div className="text-black-50 mb-1">
                                            <small>Trainer Expert</small>
                                        </div>
                                    </div>	
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="orange">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="orange">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="orange">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="gary">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="gary">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <div className="card-profile-progress">
                                        <Circularprogressbar  stroke={props.colorprimarymode} Linecap='rounded' trailstroke='#ddd' strokewidth="4px" width="100" height="100" value={60} style={{width:'140px', height:'140px',}}>
                                        <Image className="theme-color-default-img  img-fluid rounded-circle card-img" src={avatars11} alt="profile-pic"/>
                                        <Image className="theme-color-purple-img img-fluid rounded-circle card-img" src={avatars22} alt="profile-pic"/>
                                        <Image className="theme-color-blue-img img-fluid rounded-circle card-img" src={avatars33} alt="profile-pic"/>
                                        <Image className="theme-color-green-img img-fluid rounded-circle card-img" src={avatars55} alt="profile-pic"/>
                                        <Image className="theme-color-yellow-img img-fluid rounded-circle card-img" src={avatars66} alt="profile-pic"/>
                                        <Image className="theme-color-pink-img img-fluid rounded-circle card-img" src={avatars44} alt="profile-pic"/>    
                                        </Circularprogressbar>
                                    </div>
                                    <div className="mt-3 text-center text-black-50">
                                        <p>Slate helps you see how many more days you need</p>
                                    </div>
                                    <div className="d-flex icon-pill">
                                        <Link to="#" className="btn btn-sm rounded-pill px-2 py-2 ms-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                        <Link to="#" className="btn btn-sm rounded-pill px-2 py-2  ms-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-danger" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                            </svg>
                                        </Link>
                                        <Link to="#" className="btn btn-sm rounded-pill px-2 py-2 ms-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-success" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>            
                <Col md="4">
                    <Card>
                        <Card.Header>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <div className="p-2 rounded bg-warning disabled">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="none" viewBox="0 0 24 24" stroke="white">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg> 
                                    </div>
                                    <h4 className="px-3">Conversion</h4>
                                </div> 
                                <div className="d-flex align-items-center justify-content-end">
                                    <Link to="#" className=" border rounded">
                                        <svg width="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.9393 12.0129H15.9483" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M11.9301 12.0129H11.9391" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M7.92128 12.0129H7.93028" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form className="d-grid gap-card">
                                <Form.Group className="mb-2">
                                    <InputGroup>
                                        <FormControl type="text" placeholder="1000" aria-label="Recipient's username" aria-describedby="basic-addon3"/>
                                        <InputGroup.Text as="span" className="input-group-text" id="basic-addon3">GRD</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <InputGroup>
                                        <FormControl type="text" placeholder="100" aria-label="Recipient's username" aria-describedby="basic-addon4"/>
                                        <InputGroup.Text as="span" className="input-group-text" id="basic-addon4">USD</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <InputGroup>
                                        <FormControl type="text" placeholder="150" aria-label="Recipient's username" aria-describedby="basic-addon4"/>
                                        <InputGroup.Text as="span" className="input-group-text" id="basic-addon4">Euro</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Button variant="btn btn-primary">Archive</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-4">
                                <div className="">
                                    <h2>59</h2>
                                    <h5>Holidays</h5>   
                                </div>
                                <div className="">
                                    <div className="badge bg-danger p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex  justify-content-start align-items-center mb-3">
                                <div className="pe-3">
                                    <Image src={avatars2} className="rounded-circle p-1 bg-soft-danger" width="60" height="60" alt="1"/>
                                </div>
                                <div>
                                    <h5 className="">Web Workshop</h5>
                                    <h6 className="mb-0">1 hour ago</h6>
                                </div>
                            </div>
                            <div>
                                <small>it is impossible to withhold education from the respective mind as</small>
                                <small>it is impossible to force it uopen the unreasoning</small>
                            </div>
                            <div className="pt-4">
                                <small>- Agens Reppligers</small>
                            </div>
                            <div className="pt-3">
                                <small>- Managements</small>
                            </div>
                            <div className="pt-3">
                                <small>- Creative Sprint</small>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">                
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Upcoming Birthday</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex justify-content-start align-items-center">
                                <div className="pe-3">
                                    <Image src={avatars3} className="rounded-circle bg-soft-primary p-1" width="50" height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className="mb-1">Anna Sthesia</h6>
                                    <p className="mb-0">Today</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center mt-4">
                                <div className="pe-3">
                                    <Image src={avatars4} className="rounded-circle bg-soft-danger p-1" width="50" height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className="mb-1">Annette Black</h6>
                                    <p className="mb-0">Today</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center mt-4">
                                <div className="pe-3">
                                    <Image src={avatars5} className="rounded-circle bg-soft-info p-1" width="50" height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className="mb-1">Daivid Wall</h6>
                                    <p className="mb-0">Today</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center mt-4">
                                <div className="pe-3">
                                    <Image src={avatars2} className="rounded-circle bg-soft-danger p-1" width="50" height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className="mb-1">Jphn Devid</h6>
                                    <p className="mb-0">Today</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="5">
                    <Card>
                        <Card.Body>
                            <div className="user-post-data">
                                <div className="d-flex flex-wrap">
                                    <div className="media-support-user-img me-3">
                                        <Image className="rounded-circle p-1 bg-soft-danger img-fluid avatar-60" src={avatars2} alt=""/>
                                    </div>
                                    <div className="media-support-info mt-2">
                                        <h5 className="mb-0 d-inline-block">Ira Membrit</h5>
                                        <p className="mb-0 text-primary">6 hour ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi.</p>
                            </div>
                            <div className="comment-area mt-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="like-block position-relative d-flex align-items-center">
                                        <div className="d-flex align-items-center">                                    
                                            <p className="mb-0">
                                                <svg width="18" className="me-1" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z" />
                                                </svg> 
                                                140 Likes</p>
                                            <p className="ms-3 mb-0">comments</p>
                                        </div>
                                    </div>
                                    <div className="share-block d-flex align-items-center feather-icon me-3">
                                        <ShareOffcanvas />
                                    </div>
                                </div>
                                <hr/>
                                <ul className="post-comments p-0 list-inline">
                                    <li className="mb-3">
                                        <div className="d-flex flex-wrap">
                                            <div className="user-img">
                                                <Image src={avatars3} alt="userimg" className="p-1 bg-soft-primary avatar-60 rounded-circle img-fluid"/>
                                            </div>
                                            <div className="comment-data-block ms-3">
                                                <h6 className="mb-2">Monty Carlo</h6>
                                                <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <Form action="#">
                                    <InputGroup className="mb-3">
                                        <FormControl type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <Button type="button" className="input-group-text btn-primary" id="basic-addon2">
                                            <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z" fill="currentColor"></path>
                                                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M3.01049 16.8079C2.81849 16.8079 2.62649 16.7349 2.48049 16.5879C2.18749 16.2949 2.18749 15.8209 2.48049 15.5279L3.84549 14.1619C4.13849 13.8699 4.61349 13.8699 4.90649 14.1619C5.19849 14.4549 5.19849 14.9299 4.90649 15.2229L3.54049 16.5879C3.39449 16.7349 3.20249 16.8079 3.01049 16.8079ZM6.77169 18.0003C6.57969 18.0003 6.38769 17.9273 6.24169 17.7803C5.94869 17.4873 5.94869 17.0133 6.24169 16.7203L7.60669 15.3543C7.89969 15.0623 8.37469 15.0623 8.66769 15.3543C8.95969 15.6473 8.95969 16.1223 8.66769 16.4153L7.30169 17.7803C7.15569 17.9273 6.96369 18.0003 6.77169 18.0003ZM7.02539 21.5683C7.17139 21.7153 7.36339 21.7883 7.55539 21.7883C7.74739 21.7883 7.93939 21.7153 8.08539 21.5683L9.45139 20.2033C9.74339 19.9103 9.74339 19.4353 9.45139 19.1423C9.15839 18.8503 8.68339 18.8503 8.39039 19.1423L7.02539 20.5083C6.73239 20.8013 6.73239 21.2753 7.02539 21.5683Z" fill="currentColor"></path>
                                            </svg>
                                        </Button>
                                    </InputGroup>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Stories</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ul className="media-story m-0 p-0">
                                <li className="d-flex mb-4 align-items-center active">
                                    <Image src={avatars4} alt="story-img" className="avatar-50 rounded-circle p-1 bg-soft-danger img-fluid"/>
                                    <div className="stories-data ms-3">
                                        <h5>Anna Mull</h5>
                                        <p className="mb-0">1 hour ago</p>
                                    </div>
                                </li>
                                <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars2} alt="story-img" className="avatar-50 rounded-circle p-1 bg-soft-danger img-fluid"/>
                                    <div className="stories-data ms-3">
                                        <h5>Ira Membrit</h5>
                                        <p className="mb-0">4 hour ago</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <Image src={avatars3} alt="story-img" className="avatar-50 rounded-circle p-1 bg-soft-primary img-fluid"/>
                                    <div className="stories-data ms-3">
                                        <h5>Bob Frapples</h5>
                                        <p className="mb-0">9 hour ago</p>
                                    </div>
                                </li>
                            </ul>
                            <Link to="#" className="btn btn-primary d-block mt-4">See All</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Header className="d-flex align-items-center justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Gallery</h4>
                            </div>
                            <span>132 pics</span>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-grid gap-card grid-cols-3">
                                <Link onClick={ () => setToggler(!toggler) }   to="#">
                                    <Image src={icon4} className="img-fluid bg-soft-info rounded" alt="profile-image"/>
                                </Link>
                                <Link onClick={ () => setToggler(!toggler) }   to="#">
                                    <Image src={shap2} className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
                                </Link>
                                <Link onClick={ () => setToggler(!toggler) }   to="#">
                                    <Image src={icon8} className="img-fluid bg-soft-info rounded" alt="profile-image"/>
                                </Link>
                                <Link onClick={ () => setToggler(!toggler) }   to="#">
                                    <Image src={shap4} className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
                                </Link>
                                <Link onClick={ () => setToggler(!toggler) }   to="#">
                                    <Image src={icon2} className="img-fluid bg-soft-warning rounded" alt="profile-image"/>
                                </Link>
                                <Link onClick={ () => setToggler(!toggler) }   to="#">
                                    <Image src={shap6} className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
                                </Link>
                                <Link onClick={ () => setToggler(!toggler) }   to="#">
                                    <Image src={icon5} className="img-fluid bg-soft-danger rounded" alt="profile-image"/>
                                </Link>
                                <Link onClick={ () => setToggler(!toggler) }   to="#">
                                    <Image src={shap4} className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
                                </Link>
                                <Link onClick={ () => setToggler(!toggler) }   to="#">
                                    <Image src={icon1} className="img-fluid bg-soft-success rounded" alt="profile-image"/>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Header>
                            <div className="header-title">
                                <h4 className="card-title">Twitter Feeds</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="twit-feed">
                                <div className="d-flex align-items-center mb-4">
                                    <Image className="theme-color-default-img rounded-pill img-fluid avatar-60 me-3" src={avatars11} alt="profile-pic"/>
                                    <Image className="theme-color-purple-img rounded-pill img-fluid avatar-60 me-3" src={avatars22} alt="profile-pic"/>
                                    <Image className="theme-color-blue-img rounded-pill img-fluid avatar-60 me-3" src={avatars33} alt="profile-pic"/>
                                    <Image className="theme-color-green-img rounded-pill img-fluid avatar-60 me-3" src={avatars55} alt="profile-pic"/>
                                    <Image className="theme-color-yellow-img rounded-pill img-fluid avatar-60 me-3" src={avatars66} alt="profile-pic"/>
                                    <Image className="theme-color-pink-img rounded-pill img-fluid avatar-60 me-3" src={avatars44} alt="profile-pic"/>
                                    <div className="media-support-info">
                                    <h6 className="mb-0">Anna Sthesia</h6>
                                    <p className="mb-0">@anna59 
                                        <span className="text-primary">
                                            <svg width="15" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                                            </svg>
                                        </span>
                                    </p>
                                    </div>
                                </div>
                                <div className="media-support-body">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    <div className="d-flex flex-wrap mb-1">
                                    <Link to="#" className="twit-meta-tag pe-2">#Html</Link>
                                    <Link to="#" className="twit-meta-tag pe-2">#Bootstrap</Link>
                                    </div>
                                    <div className="twit-date">07 Jan 2021</div>
                                </div>
                            </div>
                            <hr className="my-4"/>
                            <div className="twit-feed">
                                <div className="d-flex align-items-center mb-4">
                                    <Image className="rounded-pill p-1 bg-soft-primary img-fluid avatar-60 me-3" src={avatars3} alt=""/>
                                    <div className="media-support-info">
                                    <h6 className="mb-0">Paige Turner</h6>
                                    <p className="mb-0">@paige30
                                        <span className="text-primary">
                                            <svg width="15" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                                            </svg>
                                        </span>
                                    </p>
                                    </div>
                                </div>
                                <div className="media-support-body">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    <div className="d-flex flex-wrap mb-1">
                                    <Link to="#" className="twit-meta-tag pe-2">#Js</Link>
                                    <Link to="#" className="twit-meta-tag pe-2">#Bootstrap</Link>
                                    </div>
                                    <div className="twit-date">18 Feb 2021</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Header>
                            <div className="header-title">
                                <h4 className="card-title">Suggestions</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-inline m-0 p-0">
                                <li className="d-flex mb-4 align-items-center">
                                    <div className="img-fluid bg-soft-warning rounded-pill"><Image src={icon5} alt="story-img" className="rounded-pill avatar-40"/></div>
                                    <div className="ms-3 flex-grow-1">
                                    <h6>Paul Molive</h6>
                                    <p className="mb-0">4 mutual friends</p>
                                    </div>
                                    <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                                    <span className="btn-inner">
                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
                                        </svg> 
                                    </span>                            
                                    </Link>
                                </li>
                                <li className="d-flex mb-4 align-items-center">
                                    <div className="img-fluid bg-soft-danger rounded-pill"><Image src={icon3} alt="story-img" className="rounded-pill avatar-40"/></div>
                                    <div className="ms-3 flex-grow-1">
                                    <h6>Robert Fox</h6>
                                    <p className="mb-0">4 mutual friends</p>
                                    </div>
                                    <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                                    <span className="btn-inner">
                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
                                        </svg> 
                                    </span>                            
                                    </Link>
                                </li>
                                <li className="d-flex mb-4 align-items-center">
                                    <div className="img-fluid bg-soft-dark rounded-pill"><Image src={icon6} alt="story-img" className="rounded-pill avatar-40"/></div>
                                    <div className="ms-3 flex-grow-1">
                                    <h6>Jenny Wilson</h6>
                                    <p className="mb-0">6 mutual friends</p>
                                    </div>
                                    <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                                    <span className="btn-inner">
                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
                                        </svg> 
                                    </span>                            
                                    </Link>
                                </li>
                                <li className="d-flex mb-4 align-items-center">
                                    <div className="img-fluid bg-soft-primary rounded-pill"><Image src={icon7} alt="story-img" className="rounded-pill avatar-40"/></div>
                                    <div className="ms-3 flex-grow-1">
                                    <h6>Cody Fisher</h6>
                                    <p className="mb-0">8 mutual friends</p>
                                    </div>
                                    <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                                    <span className="btn-inner">
                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
                                        </svg> 
                                    </span>                            
                                    </Link>
                                </li>
                                <li className="d-flex mb-4 align-items-center">
                                    <div className="img-fluid bg-soft-info rounded-pill"><Image src={icon4} alt="story-img" className="rounded-pill avatar-40"/></div>
                                    <div className="ms-3 flex-grow-1">
                                    <h6>Bessie Cooper</h6>
                                    <p className="mb-0">1 mutual friends</p>
                                    </div>
                                    <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                                    <span className="btn-inner">
                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
                                        </svg> 
                                    </span>                            
                                    </Link>
                                </li>
                                <li className="d-flex mb-4 align-items-center">
                                    <div className="img-fluid bg-soft-warning rounded-pill"><Image src={icon2} alt="story-img" className="rounded-pill avatar-40"/></div>
                                    <div className="ms-3 flex-grow-1">
                                    <h6>Wade Warren</h6>
                                    <p className="mb-0">3 mutual friends</p>
                                    </div>
                                    <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                                    <span className="btn-inner">
                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
                                        </svg> 
                                    </span>                            
                                    </Link>
                                </li>
                                <li className="d-flex mb-4 align-items-center">
                                    <div className="img-fluid bg-soft-success rounded-pill"><Image src={icon1} alt="story-img" className="rounded-pill avatar-40"/></div>
                                    <div className="ms-3 flex-grow-1">
                                    <h6>Guy Hawkins</h6>
                                    <p className="mb-0">12 mutual friends</p>
                                    </div>                        
                                    <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                                    <span className="btn-inner">
                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
                                        </svg> 
                                    </span>                            
                                    </Link>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="img-fluid bg-soft-info rounded-pill"><Image src={icon8} alt="story-img" className="rounded-pill avatar-40"/></div>
                                    <div className="ms-3 flex-grow-1">
                                    <h6>Floyd Miles</h6>
                                    <p className="mb-0">2 mutual friends</p>
                                    </div>
                                    <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
                                    <span className="btn-inner">
                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
                                            <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
                                        </svg> 
                                    </span>                            
                                    </Link>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
)

Widgetcard.displayName="Widgetcard"
export default Widgetcard

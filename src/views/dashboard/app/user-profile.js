import React, {Fragment, useState}from 'react'
import FsLightbox from 'fslightbox-react';

import {Row,Col,Image,Form,Nav,Dropdown,Tab} from 'react-bootstrap'
import Card from '../../../components/Card'

import {Link} from 'react-router-dom'
// img

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


import icon1 from '../../../assets/images/icons/01.png'
import icon2 from '../../../assets/images/icons/02.png'
import icon3 from '../../../assets/images/icons/03.png'
import icon4 from '../../../assets/images/icons/04.png'
import icon8 from '../../../assets/images/icons/08.png'
import icon6 from '../../../assets/images/icons/06.png'
import icon7 from '../../../assets/images/icons/07.png'

import icon5 from '../../../assets/images/icons/05.png'
import shap2 from '../../../assets/images/shapes/02.png'
import shap4 from '../../../assets/images/shapes/04.png'
import shap6 from '../../../assets/images/shapes/06.png'
import pages2 from '../../../assets/images/pages/02-page.png'

import ShareOffcanvas from '../../../components/partials/components/shareoffcanvas'

const UserProfile =() =>{
   const [toggler, setToggler] = useState();
  return(
      <Fragment>
         <FsLightbox
                  toggler={ toggler }
                  sources={ [icon4,shap2,icon8,shap4,icon2,shap6,icon5,shap4,icon1] }
               />
         <Tab.Container  defaultActiveKey="first">
            <Row>
               <Col lg="12">
                  <Card>
                        <Card.Body>
                           <div className="d-flex flex-wrap align-items-center justify-content-between">
                              <div className="d-flex flex-wrap align-items-center">
                                 <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
                                    <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic"/>
                                    <Image className="theme-color-purple-img img-fluid rounded-pill avatar-100" src={avatars22} alt="profile-pic"/>
                                    <Image className="theme-color-blue-img img-fluid rounded-pill avatar-100" src={avatars33} alt="profile-pic"/>
                                    <Image className="theme-color-green-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic"/>
                                    <Image className="theme-color-yellow-img img-fluid rounded-pill avatar-100" src={avatars66} alt="profile-pic"/>
                                    <Image className="theme-color-pink-img img-fluid rounded-pill avatar-100" src={avatars44} alt="profile-pic"/>
                                 </div>
                                 <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                                    <h4 className="me-2 h4">Austin Robertson</h4>
                                    <span> - Web Developer</span>
                                 </div>
                              </div>
                              <Nav as="ul" className="d-flex nav-pills mb-0 text-center profile-tab" data-toggle="slider-tab" id="profile-pills-tab" role="tablist">
                                 <Nav.Item as="li">
                                    <Nav.Link eventKey="first">Feed</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item as="li">
                                    <Nav.Link eventKey="second">Activity</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item as="li">
                                    <Nav.Link eventKey="third">Friends</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item as="li">
                                    <Nav.Link eventKey="fourth">Profile</Nav.Link>
                                 </Nav.Item>
                              </Nav>
                           </div>
                        </Card.Body>
                  </Card>
               </Col>
               <Col lg="3" className="col-lg-3">
                  <Card>
                     <Card.Header>
                        <div className="header-title">
                           <h4 className="card-title">News</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <ul className="list-inline m-0 p-0">
                           <li className="d-flex mb-2">
                              <div className="news-icon me-3">
                                 <svg width="20" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />
                                 </svg>
                              </div>
                              <p className="news-detail mb-0">there is a meetup in your city on fryday at 19:00. <Link to="#">see details</Link></p>
                           </li>
                           <li className="d-flex">
                              <div className="news-icon me-3">
                                 <svg width="20" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />
                                 </svg>
                              </div>
                              <p className="news-detail mb-0">20% off coupon on selected items at pharmaprix </p>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header className="d-flex align-items-center justify-content-between">
                        <div className="header-title">
                           <h4 className="card-title">Gallery</h4>
                        </div>
                        <span>132 pics</span>
                     </Card.Header>
                     <Card.Body>
                        <div className="d-grid gap-card grid-cols-3">
                           <Link onClick={ () => setToggler(!toggler) }  to="#">
                           <Image  src={icon4} className="img-fluid bg-soft-info rounded" alt="profile-image"/>
                           </Link>
                           <Link onClick={ () => setToggler(!toggler) } to="#">
                           <Image   src={shap2} className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
                           </Link>
                           <Link onClick={ () => setToggler(!toggler) } to="#">
                           <Image   src={icon8} className="img-fluid bg-soft-info rounded" alt="profile-image"/>
                           </Link>
                           <Link onClick={ () => setToggler(!toggler) } to="#">
                           <Image   src={shap4} className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
                           </Link>
                           <Link onClick={ () => setToggler(!toggler) } to="#">
                           <Image   src={icon2} className="img-fluid bg-soft-warning rounded" alt="profile-image"/>
                           </Link>
                           <Link  onClick={ () => setToggler(!toggler) }  to="#">
                           <Image src={shap6} className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
                           </Link>
                           <Link to="#">
                              <Image  onClick={ () => setToggler(!toggler) } src={icon5} className="img-fluid bg-soft-danger rounded" alt="profile-image"/>
                           </Link>
                           <Link onClick={ () => setToggler(!toggler) }  to="#">
                              <Image  src={shap4} className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
                           </Link>
                           <Link onClick={ () => setToggler(!toggler) } to="#">
                              <Image src={icon1} className="img-fluid bg-soft-success rounded" alt="profile-image"/>
                           </Link>
                        </div>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <div className="header-title">
                           <h4 className="card-title">Twitter Feeds</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <div className="twit-feed">
                           <div className="d-flex align-items-center mb-2">
                              <Image className="rounded-pill img-fluid avatar-50 me-3 p-1 bg-soft-danger ps-2" src={icon3} alt=""/>
                              <div className="media-support-info">
                                 <h6 className="mb-0">Figma Community</h6>
                                 <p className="mb-0">@figma20 
                                    <span className="text-primary">
                                       <svg width="15" viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                                       </svg>
                                    </span>
                                 </p>
                              </div>
                           </div>
                           <div className="media-support-body">
                              <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                              <div className="d-flex flex-wrap">
                                 <Link to="#" className="twit-meta-tag pe-2">#Html</Link>
                                 <Link to="#" className="twit-meta-tag pe-2">#Bootstrap</Link>
                              </div>
                              <div className="twit-date">07 Jan 2021</div>
                           </div>
                        </div>
                        <hr className="my-4"/>
                        <div className="twit-feed">
                           <div className="d-flex align-items-center mb-2">
                              <Image className="rounded-pill img-fluid avatar-50 me-3 p-1 bg-soft-primary" src={icon4} alt=""/>
                              <div className="media-support-info">
                                 <h6 className="mb-0">Flutter</h6>
                                 <p className="mb-0">@jane59
                                    <span className="text-primary">
                                       <svg width="15" viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                                       </svg>
                                    </span>
                                 </p>
                              </div>
                           </div>
                           <div className="media-support-body">
                              <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                              <div className="d-flex flex-wrap">
                                 <Link to="#" className="twit-meta-tag pe-2">#Js</Link>
                                 <Link to="#" className="twit-meta-tag pe-2">#Bootstrap</Link>
                              </div>
                              <div className="twit-date">18 Feb 2021</div>
                           </div>
                        </div>
                        <hr className="my-4"/>
                        <div className="twit-feed">
                           <div className="d-flex align-items-center mb-2">
                                 <Image className="rounded-pill img-fluid avatar-50 me-3 p-1 bg-soft-warning pt-2" src={icon2} alt=""/>
                              <div className="mt-2">
                                 <h6 className="mb-0">Blender</h6>
                                 <p className="mb-0">@blender59
                                    <span className="text-primary">
                                       <svg width="15" viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                                       </svg>
                                    </span>
                                 </p>
                              </div>
                           </div>
                           <div className="media-support-body">
                              <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                              <div className="d-flex flex-wrap">
                                 <Link to="#" className="twit-meta-tag pe-2">#Html</Link>
                                 <Link to="#" className="twit-meta-tag pe-2">#CSS</Link>
                              </div>
                              <div className="twit-date">15 Mar 2021</div>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="6">
                  <Tab.Content className="profile-content">
                     <Tab.Pane eventKey="first" id="profile-feed">
                        <Card>
                           <Card.Header className="d-flex align-items-center justify-content-between pb-4">
                              <div className="header-title">
                                 <div className="d-flex flex-wrap">
                                    <div className="media-support-user-img me-3">
                                       <Image className="rounded-pill img-fluid avatar-60 bg-soft-danger p-1 ps-2" src={avatars2} alt=""/>
                                    </div>
                                    <div className="media-support-info mt-2">
                                       <h5 className="mb-0">Anna Sthesia</h5>
                                       <p className="mb-0 text-primary">colleages</p>
                                    </div>
                                 </div>
                              </div>                        
                              <Dropdown >
                                 <Dropdown.Toggle as="span"  id="dropdownMenuButton7" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                 29 mins 
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton7">
                                    <Dropdown.Item  href="#">Action</Dropdown.Item>
                                    <Dropdown.Item  href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item  href="#">Something else here</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </Card.Header>
                           <Card.Body className="p-0">
                              <div className="user-post">
                                 <Link to="#"><Image src={pages2} alt="post-image" className="img-fluid"/></Link>
                              </div>
                              <div className="comment-area p-3">
                                 <div className="d-flex flex-wrap justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                       <div className="d-flex align-items-center message-icon me-3">                                          
                                          <svg width="20" height="20" viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                          </svg>
                                          <span className="ms-1">140</span>
                                       </div>
                                       <div className="d-flex align-items-center feather-icon">
                                          <svg width="20" height="20" viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
                                          </svg>
                                          <span className="ms-1">140</span>
                                       </div>
                                    </div>
                                    <div className="share-block d-flex align-items-center feather-icon">
                                       <ShareOffcanvas />
                                    </div>
                                 </div>
                                 <hr/>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                                 <hr/>
                                 <ul className="list-inline p-0 m-0">
                                    <li className="mb-2">
                                       <div className="d-flex">
                                          <Image src={avatars3} alt="userimg" className="avatar-50 p-1 pt-2 bg-soft-primary rounded-pill img-fluid"/>
                                          <div className="ms-3">
                                             <h6 className="mb-1">Monty Carlo</h6>
                                             <p className="mb-1">Lorem ipsum dolor sit amet</p>
                                             <div className="d-flex flex-wrap align-items-center mb-1">
                                                <Link to="#" className="me-3">
                                                   <svg width="20" height="20" className="text-body me-1" viewBox="0 0 24 24">
                                                      <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                                   </svg>
                                                   like
                                                </Link>
                                                <Link to="#" className="me-3">
                                                   <svg width="20" height="20" className="me-1" viewBox="0 0 24 24">
                                                      <path fill="currentColor" d="M8,9.8V10.7L9.7,11C12.3,11.4 14.2,12.4 15.6,13.7C13.9,13.2 12.1,12.9 10,12.9H8V14.2L5.8,12L8,9.8M10,5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9" />
                                                   </svg>
                                                   reply
                                                </Link>
                                                <Link to="#" className="me-3">translate</Link>
                                                <span> 5 min </span>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="d-flex">
                                          <Image src={avatars4} alt="userimg" className="avatar-50 p-1 bg-soft-danger rounded-pill img-fluid"/>
                                          <div className="ms-3">
                                             <h6 className="mb-1">Paul Molive</h6>
                                             <p className="mb-1">Lorem ipsum dolor sit amet</p>
                                             <div className="d-flex flex-wrap align-items-center">
                                                <Link to="#" className="me-3">
                                                   <svg width="20" height="20" className="text-body me-1" viewBox="0 0 24 24">
                                                      <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                                   </svg>
                                                   like
                                                </Link>
                                                <Link to="#" className="me-3">
                                                   <svg width="20" height="20" className="me-1" viewBox="0 0 24 24">
                                                      <path fill="currentColor" d="M8,9.8V10.7L9.7,11C12.3,11.4 14.2,12.4 15.6,13.7C13.9,13.2 12.1,12.9 10,12.9H8V14.2L5.8,12L8,9.8M10,5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9" />
                                                   </svg>
                                                   reply
                                                </Link>
                                                <Link to="#" className="me-3">translate</Link>
                                                <span> 5 min </span>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                                 <Form className="comment-text d-flex align-items-center mt-3" action="">
                                    <Form.Control type="text" className="rounded" placeholder="Lovely!"/>
                                    <div className="comment-attagement d-flex">
                                          <Link to="#" className="me-2 text-body">
                                             <svg width="20" height="20" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
                                             </svg>
                                          </Link>
                                          <Link to="#" className="text-body">
                                             <svg width="20" height="20" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z" />
                                             </svg>
                                          </Link>
                                    </div>
                                 </Form>
                              </div>                              
                           </Card.Body>
                        </Card>
                        <Card>
                           <Card.Header className="d-flex align-items-center justify-content-between pb-4">
                              <div className="header-title">
                                 <div className="d-flex flex-wrap">
                                    <div className="media-support-user-img me-3">
                                       <Image className="rounded-pill img-fluid avatar-60 p-1 bg-soft-info" src={avatars5} alt=""/>
                                    </div>
                                    <div className="media-support-info mt-2">
                                       <h5 className="mb-0">Wade Warren</h5>
                                       <p className="mb-0 text-primary">colleages</p>
                                    </div>
                                 </div>
                              </div>                        
                              <Dropdown>
                                 <Dropdown.Toggle as="span" id="dropdownMenuButton07" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                 1 Hr
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton07">
                                    <Dropdown.Item  href="#">Action</Dropdown.Item >
                                    <Dropdown.Item  href="#">Another action</Dropdown.Item >
                                    <Dropdown.Item  href="#">Something else here</Dropdown.Item >
                                 </Dropdown.Menu>
                              </Dropdown>
                           </Card.Header>
                           <Card.Body className="p-0">
                                 <p className="p-3 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                                 <div className="comment-area p-3"><hr className="mt-0"/>
                                 <div className="d-flex flex-wrap justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                       <div className="d-flex align-items-center message-icon me-3">                                          
                                          <svg width="20" height="20" viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                          </svg>
                                          <span className="ms-1">140</span>
                                       </div>
                                       <div className="d-flex align-items-center feather-icon">
                                          <svg width="20" height="20" viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
                                          </svg>
                                          <span className="ms-1">140</span>
                                       </div>
                                    </div>
                                    <div className="share-block d-flex align-items-center feather-icon">
                                    <ShareOffcanvas />
                                    </div>
                                 </div>
                                 <Form className="comment-text d-flex align-items-center mt-3" action="">
                                    <Form.Control type="text" className="rounded" placeholder="Lovely!"/>
                                    <div className="comment-attagement d-flex">
                                       <Link to="#" className="me-2 text-body">
                                          <svg width="20" height="20" viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
                                          </svg>
                                       </Link>
                                       <Link to="#" className="text-body">
                                          <svg width="20" height="20" viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z" />
                                          </svg>
                                       </Link>
                                    </div>
                                 </Form>
                              </div>                              
                           </Card.Body>
                        </Card>
                     </Tab.Pane>
                     <Tab.Pane eventKey="second" id="profile-activity">
                        <Card>
                           <Card.Header className="d-flex justify-content-between">
                              <div className="header-title">
                                 <h4 className="card-title">Activity</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                              <div className="iq-timeline0 m-0 d-flex align-items-center justify-content-between position-relative">
                                 <ul className="list-inline p-0 m-0">
                                    <li>
                                       <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                                       <h6 className="float-left mb-1">Client Login</h6>
                                       <small className="float-right mt-1">24 November 2019</small>
                                       <div className="d-inline-block w-100">
                                          <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="timeline-dots timeline-dot1 border-success text-success"></div>
                                       <h6 className="float-left mb-1">Scheduled Maintenance</h6>
                                       <small className="float-right mt-1">23 November 2019</small>
                                       <div className="d-inline-block w-100">
                                          <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="timeline-dots timeline-dot1 border-danger text-danger"></div>
                                       <h6 className="float-left mb-1">Dev Meetup</h6>
                                       <small className="float-right mt-1">20 November 2019</small>
                                       <div className="d-inline-block w-100">
                                          <p>Bonbon macaroon jelly beans <Link to="#">gummi bears</Link>gummi bears jelly lollipop apple</p>
                                          <div className="iq-media-group iq-media-group-1">
                                             <Link to="#" className="iq-media-1">
                                                <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                                             </Link>
                                             <Link to="#" className="iq-media-1">
                                                <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                                             </Link>
                                             <Link to="#" className="iq-media-1">
                                                <div className="icon iq-icon-box-3 rounded-pill">MM</div>
                                             </Link>
                                          </div>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                                       <h6 className="float-left mb-1">Client Call</h6>
                                       <small className="float-right mt-1">19 November 2019</small>
                                       <div className="d-inline-block w-100">
                                          <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="timeline-dots timeline-dot1 border-warning text-warning"></div>
                                       <h6 className="float-left mb-1">Mega event</h6>
                                       <small className="float-right mt-1">15 November 2019</small>
                                       <div className="d-inline-block w-100">
                                          <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </Card.Body>
                        </Card>
                     </Tab.Pane >
                     <Tab.Pane eventKey="third" id="profile-friends">
                        <Card>
                           <Card.Header>
                              <div className="header-title">
                                 <h4 className="card-title">Friends</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                              <ul className="list-inline m-0 p-0">
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image className="theme-color-default-img  rounded-pill avatar-40" src={avatars11} alt="profile-pic"/>
                                    <Image className="theme-color-purple-img rounded-pill avatar-40" src={avatars22} alt="profile-pic"/>
                                    <Image className="theme-color-blue-img rounded-pill avatar-40" src={avatars33} alt="profile-pic"/>
                                    <Image className="theme-color-green-img rounded-pill avatar-40" src={avatars55} alt="profile-pic"/>
                                    <Image className="theme-color-yellow-img rounded-pill avatar-40" src={avatars66} alt="profile-pic"/>
                                    <Image className="theme-color-pink-img rounded-pill avatar-40" src={avatars44} alt="profile-pic"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Paul Molive</h6>
                                       <p className="mb-0">Web Designer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars5} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Paul Molive</h6>
                                       <p className="mb-0">trainee</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars2} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Anna Mull</h6>
                                       <p className="mb-0">Web Developer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars3} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Paige Turner</h6>
                                       <p className="mb-0">trainee</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars4} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Barb Ackue</h6>
                                       <p className="mb-0">Web Designer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars5} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Greta Life</h6>
                                       <p className="mb-0">Tester</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars3} alt="story-img" className="rounded-pill avatar-40"/>                              <div className="ms-3 flex-grow-1">
                                       <h6>Ira Membrit</h6>
                                       <p className="mb-0">Android Developer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars2} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Pete Sariya</h6>
                                       <p className="mb-0">Web Designer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                              </ul>
                           </Card.Body>
                        </Card>
                     </Tab.Pane >
                     <Tab.Pane eventKey="fourth" id="profile-profile">
                        <Card>
                           <Card.Header>
                              <div className="header-title">
                                 <h4 className="card-title">Profile</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                              <div className="text-center">
                                 <div className="user-profile">
                                    <Image className="theme-color-default-img  rounded-pill avatar-130 img-fluid" src={avatars11} alt="profile-pic"/>
                                    <Image className="theme-color-purple-img rounded-pill avatar-130 img-fluid" src={avatars22} alt="profile-pic"/>
                                    <Image className="theme-color-blue-img rounded-pill avatar-130 img-fluid" src={avatars33} alt="profile-pic"/>
                                    <Image className="theme-color-green-img rounded-pill avatar-130 img-fluid" src={avatars55} alt="profile-pic"/>
                                    <Image className="theme-color-yellow-img rounded-pill avatar-130 img-fluid" src={avatars66} alt="profile-pic"/>
                                    <Image className="theme-color-pink-img rounded-pill avatar-130 img-fluid" src={avatars44} alt="profile-pic"/>
                                 </div>
                                 <div className="mt-3">
                                    <h3 className="d-inline-block">Austin Robertson</h3>
                                    <p className="d-inline-block pl-3"> - Web developer</p>
                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                 </div>
                              </div>
                           </Card.Body>
                        </Card>
                        <Card>
                           <Card.Header>
                              <div className="header-title">
                                 <h4 className="card-title">About User</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                              <div className="user-bio">
                                 <p>Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer.</p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Joined:</h6>
                              <p>Feb 15, 2021</p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Lives:</h6>
                              <p>United States of America</p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Email:</h6>
                              <p><Link to="#" className="text-body"> austin@gmail.com</Link></p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Url:</h6>
                              <p><Link to="#" className="text-body" target="_blank"> www.bootstrap.com </Link></p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Contact:</h6>
                              <p><Link to="#" className="text-body">(001) 4544 565 456</Link></p>
                              </div>
                           </Card.Body>
                        </Card>
                     </Tab.Pane >
                  </Tab.Content>
               </Col>
               <Col lg="3">
                  <Card>
                     <Card.Header>
                        <div className="header-title">
                           <h4 className="card-title">About</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <p>Lorem ipsum dolor sit amet, contur adipiscing elit.</p>
                        <div className="mb-1">Email: <Link to="#" className="ms-3">nikjone@demoo.com</Link></div>
                        <div className="mb-1">Phone: <Link to="#" className="ms-3">001 2351 256 12</Link></div>
                        <div>Location: <span className="ms-3">USA</span></div>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <div className="header-title">
                           <h4 className="card-title">Stories</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <ul className="list-inline m-0 p-0">
                           <li className="d-flex mb-4 align-items-center active">
                              <Image src={icon6} alt="story-img" className="rounded-pill avatar-70 p-1 border bg-soft-light img-fluid"/>
                              <div className="ms-3">
                                 <h5>Web Design</h5>
                                 <p className="mb-0">1 hour ago</p>
                              </div>
                           </li>
                           <li className="d-flex mb-4 align-items-center">
                              <Image src={icon3} alt="story-img" className="rounded-pill avatar-70 p-1 border img-fluid bg-soft-danger"/>
                              <div className="ms-3">
                                 <h5>App Design</h5>
                                 <p className="mb-0">4 hour ago</p>
                              </div>
                           </li>
                           <li className="d-flex align-items-center">
                              <Image src={icon7} alt="story-img" className="rounded-pill avatar-70 p-1 border bg-soft-primary img-fluid"/>
                              <div className="ms-3">
                                 <h5>Abstract Design</h5>
                                 <p className="mb-0">9 hour ago</p>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
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
         </Tab.Container>
      </Fragment>
  )

}

export default UserProfile;
import React,{memo,Fragment} from 'react'

// react-bootstrap
import {Col,Row,Container,Card} from 'react-bootstrap'

import Client from '../../components/landing-modules/widgets/client'
import SubHeader from '../../components/landing-modules/widgets/sub-header'
import TestimonialOne from '../../components/landing-modules/widgets/testimonial-one'

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";    
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 

// react-router
import {Link} from 'react-router-dom'

// image 
import image from '../../assets/landing-modules/images/home-4/service.webp'
import Image1 from '../../assets/landing-modules/images/home-4/banner-left.webp'
import Image2 from '../../assets/landing-modules/images/home-4/banner-right.webp'
import Image4 from '../../assets/landing-modules/images/home-4/Image-1.webp'
import image5 from '../../assets/landing-modules/images/home-1/07.webp'
import image6 from '../../assets/landing-modules/images/home-1/08.webp'
import image7 from '../../assets/landing-modules/images/home-1/09.webp'
import image8 from '../../assets/landing-modules/images/home-1/10.webp'
import image9 from '../../assets/landing-modules/images/home-1/11.webp'
import image10 from '../../assets/landing-modules/images/home-2/user-1.webp'
import image11 from '../../assets/landing-modules/images/home-2/user-2.webp'
import image12 from '../../assets/landing-modules/images/home-2/user-2.webp'




const About = memo(() => {
  return (
    <Fragment>
        <SubHeader title={"About Us"}/>
        <div className="section-padding bg-white">
    <Container>
        <Row className='align-items-center'>
            <Col md={6}>
                <p className="mb-3 text-uppercase text-primary">
                   about us
                </p>
                <h2 className=" mb-4">Get <span className="text-primary">Unique <br/>Solutions</span> With Us!</h2>
            </Col>
            <Col md={6}>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ac integer semper sit semper laoreet donec. Vitae turpis pretium placerat augue mauris, adipiscing. Risus pretium, amet mi fringilla gravida risus accumsan.</p>
                <Link to="#" className="btn btn-primary mt-4">Know More</Link>            
            </Col>
            <Col md={8} className='mt-4 mt-md-0'> 
                <img src={Image1} alt="" className="img-fluid "/>
            </Col>
            <Col md={4} className='mt-4 mt-md-0'> 
                <img src={Image2} alt="" className="img-fluid "/>
            </Col>
            <Col md={4}> 
                <Card className='mb-lg-0'>
                    <Card.Body>
                        <h4  className="mb-2">Our Vision</h4>
                        <p className="mb-0">
                            It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className='mb-lg-0'>
                    <Card.Body>
                        <h4 className="mb-2">Our Mission</h4>
                        <p className="mb-0">
                            It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
             <Col md={4}>
                <Card className='mb-lg-0'>
                    <Card.Body>
                        <h4  className="mb-2">Our Strategies</h4>
                        <p className="mb-0">
                            It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
         </div>
    <div className="section-padding bg-secondary">
    <Container>
        <Row className='align-items-center'>
            <Col md={6}>
                <p className="mb-3 text-uppercase text-primary">
                our services
                </p>
                <h2 className=" mb-4 text-white">Services <span className="text-primary">We Offer</span></h2>
                <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                <Link to="#" className="btn btn-primary mt-4">Know More</Link>    
                <img src={image} alt="" className="img-fluid mt-4"/>        
            </Col>
            <Col md={6}>
                <Row className='row-cols-1 row-cols-lg-2'>
                    <Col>
                        <Card className='services-box  rounded-1'>
                            <Card.Body>
                                <h5 className="mb-3">Branding</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                <Link to="#">Read More</Link>
                            </Card.Body>  
                        </Card>
                    </Col>
                    <Col>
                        <Card className='services-box  rounded-1'>
                            <Card.Body>
                                <h5 className="mb-3">Design</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                <Link to="#">Read More</Link>
                            </Card.Body>  
                        </Card>
                    </Col>
                    <Col>
                        <Col>
                            <Card className='services-box mb-lg-0  rounded-1'>
                            <Card.Body>
                                <h5 className="mb-3">Development</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                <Link to="#">Read More</Link>
                            </Card.Body>
                            </Card>  
                        </Col>
                    </Col>
                    <Col>
                        <Card className='services-box mb-lg-0  rounded-1'>
                            <Card.Body>
                                <h5 className="mb-3">Marketing</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                <Link to="#">Read More</Link>
                            </Card.Body>  
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
</div>
        <div className="section-padding bg-white">
    <Container>
        <Row className='align-items-center'>
            <Col md={6}>
                <p className="mb-3 text-uppercase text-primary">
                   Why choose us?
                </p>
                <h2 className=" mb-4">We Make <span className="text-primary">Your <br/>Idea Come True</span></h2>
                <p className="mb-4">Orci ipsum tempus amet libero turpis enim sed quis. Maecenas suspendisse ac integer orci, suspendisse nulla. Dignissim pretium enim neque facilisi faucibus magna lectus ipsum feugiat.</p>
                <Row className='row-cols-1 row-cols-lg-2'>
                    <Col className='mb-4'>
                        <div className="d-flex align-items-center">
                            <svg width="24" height="24" className="me-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M16.3402 1.99976H7.67024C4.28024 1.99976 2.00024 4.37976 2.00024 7.91976V16.0898C2.00024 19.6198 4.28024 21.9998 7.67024 21.9998H16.3402C19.7302 21.9998 22.0002 19.6198 22.0002 16.0898V7.91976C22.0002 4.37976 19.7302 1.99976 16.3402 1.99976Z" fill="#3A57E8"/>
                                <path d="M10.8133 15.248C10.5893 15.248 10.3653 15.163 10.1943 14.992L7.82132 12.619C7.47932 12.277 7.47932 11.723 7.82132 11.382C8.16332 11.04 8.71632 11.039 9.05832 11.381L10.8133 13.136L14.9413 9.00796C15.2833 8.66596 15.8363 8.66596 16.1783 9.00796C16.5203 9.34996 16.5203 9.90396 16.1783 10.246L11.4323 14.992C11.2613 15.163 11.0373 15.248 10.8133 15.248Z" fill="#3A57E8"/>
                            </svg>
                            Easy Communication
                        </div>
                    </Col>
                    <Col className='mb-4'>
                            <div className="d-flex align-items-center">
                                <svg width="24" className="me-2" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M16.3402 1.99976H7.67024C4.28024 1.99976 2.00024 4.37976 2.00024 7.91976V16.0898C2.00024 19.6198 4.28024 21.9998 7.67024 21.9998H16.3402C19.7302 21.9998 22.0002 19.6198 22.0002 16.0898V7.91976C22.0002 4.37976 19.7302 1.99976 16.3402 1.99976Z" fill="#3A57E8"/>
                                    <path d="M10.8133 15.248C10.5893 15.248 10.3653 15.163 10.1943 14.992L7.82132 12.619C7.47932 12.277 7.47932 11.723 7.82132 11.382C8.16332 11.04 8.71632 11.039 9.05832 11.381L10.8133 13.136L14.9413 9.00796C15.2833 8.66596 15.8363 8.66596 16.1783 9.00796C16.5203 9.34996 16.5203 9.90396 16.1783 10.246L11.4323 14.992C11.2613 15.163 11.0373 15.248 10.8133 15.248Z" fill="#3A57E8"/>
                                </svg>
                                Security Assured 
                            </div>
                    </Col>
                    <Col className='mb-4'>
                        <div className="d-flex align-items-center">
                            <svg width="24" className="me-2" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M16.3402 1.99976H7.67024C4.28024 1.99976 2.00024 4.37976 2.00024 7.91976V16.0898C2.00024 19.6198 4.28024 21.9998 7.67024 21.9998H16.3402C19.7302 21.9998 22.0002 19.6198 22.0002 16.0898V7.91976C22.0002 4.37976 19.7302 1.99976 16.3402 1.99976Z" fill="#3A57E8"/>
                                <path d="M10.8133 15.248C10.5893 15.248 10.3653 15.163 10.1943 14.992L7.82132 12.619C7.47932 12.277 7.47932 11.723 7.82132 11.382C8.16332 11.04 8.71632 11.039 9.05832 11.381L10.8133 13.136L14.9413 9.00796C15.2833 8.66596 15.8363 8.66596 16.1783 9.00796C16.5203 9.34996 16.5203 9.90396 16.1783 10.246L11.4323 14.992C11.2613 15.163 11.0373 15.248 10.8133 15.248Z" fill="#3A57E8"/>
                            </svg>
                            Expert Advise
                        </div>
                    </Col>
                    <Col className='mb-4'>
                        <div className="d-flex align-items-center">
                            <svg width="24" className="me-2"  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M16.3402 1.99976H7.67024C4.28024 1.99976 2.00024 4.37976 2.00024 7.91976V16.0898C2.00024 19.6198 4.28024 21.9998 7.67024 21.9998H16.3402C19.7302 21.9998 22.0002 19.6198 22.0002 16.0898V7.91976C22.0002 4.37976 19.7302 1.99976 16.3402 1.99976Z" fill="#3A57E8"/>
                                <path d="M10.8133 15.248C10.5893 15.248 10.3653 15.163 10.1943 14.992L7.82132 12.619C7.47932 12.277 7.47932 11.723 7.82132 11.382C8.16332 11.04 8.71632 11.039 9.05832 11.381L10.8133 13.136L14.9413 9.00796C15.2833 8.66596 15.8363 8.66596 16.1783 9.00796C16.5203 9.34996 16.5203 9.90396 16.1783 10.246L11.4323 14.992C11.2613 15.163 11.0373 15.248 10.8133 15.248Z" fill="#3A57E8"/>
                            </svg>
                            Pocket Friendly Prices
                        </div>
                    </Col>
                </Row>
                <Link to="#" className="btn btn-primary">Know More</Link>    
            </Col>
            <Col md={6} className='mt-4'>
                <img src={Image4} alt="" className="img-fluid "/>
            </Col>
        </Row>
    </Container>
       </div>
       <div className="inner-box bg-secondary">
    <Container>
        <Row className=' row-cols-1 row-cols-sm-2 row-cols-md-5 align-items-center  '>
            <Col className="mb-lg-0 mb-5 d-flex justify-content-center">
                <Client clientImage={image5}/>
            </Col>
            <Col className="mb-lg-0 mb-5 d-flex justify-content-center">
                <Client clientImage={image6}/>
            </Col>
            <Col className="mb-lg-0 mb-5 d-flex justify-content-center">
            <Client clientImage={image7}/>
            </Col>
            <Col className="mb-lg-0 mb-5 d-flex justify-content-center">
            <Client clientImage={image8}/>
            </Col>
            <Col className="mb-lg-0 mb-5 d-flex justify-content-center">
            <Client clientImage={image9}/>
            </Col>
        </Row>
    </Container>
     </div>
     <div className="section-card-padding">
        <Container>
            <Row className='align-items-center'>
                <Col lg={12} className='text-center'>
                    <p className="mb-3 text-primary">Reviews</p>
                    <h2 className="mb-5 text-secondary">What our <span className="text-primary">Customer’s are saying</span></h2>
                </Col> 
                <div className="overflow-hidden slider-circle-btn" id="testimonial-one-slider">
                    <Swiper  className="p-0 m-0  swiper-wrapper list-inline"
                    slidesPerView={3}
                    spaceBetween={32}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}
                    breakpoints= {{
                        320: { slidesPerView: 1 },
                        550: { slidesPerView: 2 },
                        991: { slidesPerView: 3 },
                        1400: { slidesPerView: 3 },
                        1500: { slidesPerView: 3 },
                        1920: { slidesPerView: 3 },
                        2040: { slidesPerView: 3 },
                        2440: { slidesPerView: 3 }
                    }}>
                        <SwiperSlide className='card-slide overflow-hidden'>
                            <Card>
                            <TestimonialOne testTitle="A true game changer."  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image10}  userTitle="Eleen Rogers" Id="01"/>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide className='card-slide overflow-hidden'>
                            <Card>
                            <TestimonialOne testTitle="Best you can Get"  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image11}  userTitle="Brooklyn Simmons" Id="02"/>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide className='card-slide overflow-hidden'>
                            <Card>
                            <TestimonialOne testTitle="Perfect poduct for your business"  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image12}  userTitle="Jenny Wilson" Id="03"/>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide className='card-slide overflow-hidden'>
                            <Card>
                            <TestimonialOne testTitle="A true game changer."  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image10}  userTitle="Eleen Rogers" Id="01"/>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide className='card-slide overflow-hidden'>
                            <Card>
                            <TestimonialOne testTitle="Best you can Get"  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image11}  userTitle="Brooklyn Simmons" Id="02"/>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide className='card-slide overflow-hidden'>
                            <Card>
                            <TestimonialOne testTitle="Perfect poduct for your business"  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image12}  userTitle="Jenny Wilson" Id="03" />
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-button swiper-button-next"></div>
                    <div className="swiper-button swiper-button-prev"></div>
                </div>
            </Row>
        </Container>
    </div>
    </Fragment>
  )
})
About.displayName = "About"
export default About
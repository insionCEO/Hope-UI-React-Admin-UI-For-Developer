import React,{memo,Fragment} from 'react'

// react-bootstrap
import {Col,Row,Container,Card} from 'react-bootstrap'
import Team from '../../components/landing-modules/widgets/team'
import BlogWidget  from '../../components/landing-modules/widgets/blog'
import Counter from '../../components/landing-modules/widgets/counter'
import Client from '../../components/landing-modules/widgets/client'
import Testiominal from '../../components/landing-modules/widgets/testiominal'


//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";    
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image from '../../assets/landing-modules/images/home-1/banner-top.webp'
import image1 from '../../assets/landing-modules/images/home-1/aboutus.webp'
import image2 from '../../assets/landing-modules/images/home-1/playstore.webp'
import image3 from '../../assets/landing-modules/images/home-1/appstore.webp'
import image4 from '../../assets/landing-modules/images/home-1/dwn-1.webp'
import image5 from '../../assets/landing-modules/images/home-1/dwn-2.webp'
import image6 from '../../assets/landing-modules/images/home-1/01.webp'
import image7 from '../../assets/landing-modules/images/home-1/02.webp'
import image8 from '../../assets/landing-modules/images/home-1/03.webp'
import image9 from '../../assets/landing-modules/images/home-1/team1.webp'
import image10 from '../../assets/landing-modules/images/home-1/team2.webp'
import image11 from '../../assets/landing-modules/images/home-1/team-3.webp'
import image12 from '../../assets/landing-modules/images/home-1/team-4.webp'
import image13 from '../../assets/landing-modules/images/home-1/04.webp'
import image14 from '../../assets/landing-modules/images/home-1/05.webp'
import image15 from '../../assets/landing-modules/images/home-1/06.webp'
import image16 from '../../assets/landing-modules/images/home-1/07.webp'
import image17 from '../../assets/landing-modules/images/home-1/08.webp'
import image18 from '../../assets/landing-modules/images/home-1/09.webp'
import image19 from '../../assets/landing-modules/images/home-1/10.webp'
import image20 from '../../assets/landing-modules/images/home-1/11.webp'


// react-router
import {Link} from 'react-router-dom'


const Home = memo(() => {
  return (
    <Fragment>
        <div className="banner-one-app">
            <Container>
                <Row>
                    <Col sm={6} className="col-sm-6 banner-one-img text-center ms-2 ms-sm-0">
                     <img src={image} alt="img" className="img-fluid "/>
                    </Col>
                    <Col className="inner-box">
                        <p className="mb-2 text-uppercase text-secondary">
                            Look fit, feel fit
                        </p>
                        <h1 className="text-secondary mb-4">The Joy Of<br /><span className="text-primary">Right Health</span></h1>
                        <p className="mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <div className="d-flex align-items-center store-btn">
                            <Link className="btn btn-primary" to="#">Download Free</Link>
                            <Link className="btn btn-secondary ms-3" to="#">Download Pro</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="bg-secondary features-card">
    <Container> 
        <Row className='mx-2 mx-sm-0'>
            <Col lg={6}></Col>
            <Col lg={6} className='top-feature'>
                <div className="text-right">
                    <p className="mb-2 text-white text-uppercase">Why HopeUI rocks</p>
                    <h2 className="mb-3 text-white notch-feature-txt">Top Notch Features </h2>
                    <p className="mb-5 text-white pb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
            </Col>
        </Row>
        <Row className='row-cols-sm-2 row-cols-lg-4'>
            <Col>
                <Card className='services-box  rounded-1'>
                    <Card.Body>
                        <h4 className="mb-3">400+ UI Components</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.45109 0.343108L5.46396 1.36387L10.0063 1.42104L0.0568434 11.3704L0.787737 12.1013L10.7371 2.15194L10.7943 6.6942L11.8151 6.70706L11.736 0.422159L5.45109 0.343108Z" fill="currentColor"/>
                        </svg>
                    </Card.Body>  
                </Card>
            </Col>
            <Col>
                <Card className='services-box  rounded-1'>
                    <Card.Body>
                        <h4 className="mb-3">Refreshing<br/> Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.45109 0.343108L5.46396 1.36387L10.0063 1.42104L0.0568434 11.3704L0.787737 12.1013L10.7371 2.15194L10.7943 6.6942L11.8151 6.70706L11.736 0.422159L5.45109 0.343108Z" fill="currentColor"/>
                        </svg>
                    </Card.Body>  
                </Card>
            </Col>
            <Col>
                <Card className='services-box  rounded-1'>
                    <Card.Body>
                        <h4 className="mb-3">Universal UI Toolkit</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.45109 0.343108L5.46396 1.36387L10.0063 1.42104L0.0568434 11.3704L0.787737 12.1013L10.7371 2.15194L10.7943 6.6942L11.8151 6.70706L11.736 0.422159L5.45109 0.343108Z" fill="currentColor"/>
                        </svg>
                    </Card.Body>  
                </Card>
            </Col>
            <Col className='mb-4'>
                <Card className='services-box  rounded-1'>
                    <Card.Body>
                        <h4 className="mb-3">Fully<br/> Responsive</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.45109 0.343108L5.46396 1.36387L10.0063 1.42104L0.0568434 11.3704L0.787737 12.1013L10.7371 2.15194L10.7943 6.6942L11.8151 6.70706L11.736 0.422159L5.45109 0.343108Z" fill="currentColor"/>
                        </svg>
                    </Card.Body>  
                </Card>
            </Col>
        </Row>
    </Container>
        </div> 
<div className="section-padding bg-white">
    <Container>
        <Row className='align-items-center'>
            <Col md={6}>
                <img src={image1} alt="" className="img-fluid "/>
            </Col>
            <Col md={6}>
                <p className="mb-2 text-secondary text-uppercase">
                    about us
                </p>
                <h2 className="text-secondary mb-4">What they say <br/> <span className="text-primary">About Us</span></h2>
                <p className="mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <Link to="#" className="btn btn-primary">Get Started</Link>
            </Col>
        </Row>
    </Container>
</div>
<div className="section-padding page-bg">
    <Container>
        <Row className='align-items-center'>
            <Col lg={6}>
                <p className="mb-2 text-secondary text-uppercase">
                    Download now
                </p>
                <h2 className="text-secondary mb-4 fast-afrd-txt">Fast, easy, and <br/> <span className="text-primary">Affordable</span></h2>
                <p className="mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <div className="d-flex align-items-center store-btn flex-wrap">
                        <img src={image2} alt="" className="img-fluid mb-3 mb-md-0"/>
                         <img src={image3} alt="" className="img-fluid ms-0 ms-md-3"/>
                    </div>
            </Col>
            <Col lg={6} className='mt-lg-0 mt-5'>
                <Row className='align-items-center'>
                    <Col>
                        <img src={image4} alt="" className="img-fluid"/>
                    </Col>
                    <Col>
                        <img src={image5} alt="" className="img-fluid"/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
</div>
<div className="section-padding  bg-white">
    <Container>
        <Row className='align-items-center'>
            <Col lg={4}>
                <p className="mb-2 text-secondary text-uppercase">
                    Pricing
                </p>
                <h2 className="text-secondary mb-4">Our <span className="text-primary">Price<br/> Plans</span></h2>
                <p className="mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <Link href="#" className="btn btn-primary mt-2">View demo</Link>
            </Col>
            <Col lg={8}>
               <Row className='iq-star-inserted row-cols-1 row-cols-md-2 row-cols-lg-2 text-center'>
            <Col className='iq-star-inserted-2'>
               <Card className='mb-0 shadow-lg'>
                  <Card.Body>
                     <h5 className="my-0 fw-normal mb-4">Pro</h5>
                     <h4 className="card-title pricing-card-title mb-0 text-primary mb-4">$15<small className="text-secondary"> / month</small></h4>
                     <p className="">Billed Yearly</p>
                     <p>$169.99 Billed Monthly</p>
                     <ul className="list-unstyled my-3 p-0">
                        <li className="mb-4">20 users included</li>
                        <li className="mb-4">10GB of storage</li>
                        <li className="mb-4">Priority Email support</li>
                        <li className="mb-4">Help center access</li>
                         <li className="mb-4">Help center access</li>
                        <li><p>Help center access</p></li>
                     </ul>
                     <button type="button" className="btn btn-primary w-100">Get Started</button>
                  </Card.Body>
               </Card>
            </Col>
            <Col className='iq-star-inserted-3'>
               <Card className='my-5'>
                  <Card.Body className='page-bg'>
                     <h5 className="my-0 fw-normal mb-4">Premium</h5>
                     <h4 className="card-title pricing-card-title mb-0 text-primary mb-4">$49 <small className="text-secondary"> / month</small></h4>
                     <p className="">Billed Yearly</p>
                     <p>$169.9 Billed Monthly</p>
                     <ul className="list-unstyled my-3 p-0">
                        <li className="mb-3">30 users included</li>
                        <li className="mb-3">15 GB of storage</li>
                        <li className="mb-3">Call and email support</li>
                        <li className="mb-3">Help center access</li>
                        <li className="mb-3">Help center access</li>
                        <li>Help center access</li>
                    </ul>
                     <button type="button" className="btn btn-primary w-100">Get Started</button>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
            </Col>
        </Row>
    </Container>
</div>
<div className="section-padding ">
    <Container>
        <Row className='row-cols-1 row-cols-sm-2 row-cols-md-3'>
            <Col>
                <img src={image6} alt="" className="img-fluid "/>
            </Col>
            <Col>
                <img src={image7} alt="" className="img-fluid "/>
            </Col>
            <Col>
                <img src={image8} alt="" className="img-fluid "/>
            </Col>
        </Row>
    </Container>
</div>
<div className="section-card-padding bg-white">
    <Container>
        <Row className='align-items-center'>
            <Col md={12} className='text-center'>
                <p className="mb-2 text-uppercase text-secondary">
                   team
                </p>
                <h2 className="text-secondary mb-4">Expert  <span className="text-primary">Teams</span></h2>
            </Col>
        <Col md={3} sm={2}>
            <Card className='team-image'>
                <Team teamImage={image9} teamTitle="Darlene Robertson" teamText="Founder"/>
            </Card>
        </Col>
        <Col md={3} sm={2}>
            <Card className='team-image'>
                <Team teamImage={image10} teamTitle="Floyd Miles" teamText="UI designer" />
            </Card>
        </Col>
        <Col md={3} sm={2}>
            <Card className='team-image'>
                <Team teamImage={image11} teamTitle="Arlene McCoy" teamText="Researcher"/>
            </Card>
        </Col>
        <Col md={3} sm={2}>
            <Card className='team-image'>
                <Team teamImage={image12} teamTitle="Darlene Robertson" teamText="Founder"/>
            </Card>
        </Col>
        </Row>
    </Container>
</div>
<div className="section-card-padding page-bg">
    <Container>
        <Row className='align-items-center'>
            <Col md={12} className='text-center'> 
                <p className="mb-2 text-uppercase text-secondary">
                   Blog
                </p>
                <h2 className="text-secondary mb-4">All the <span className="text-primary">Support you Need</span></h2>
            </Col>
            <div className="overflow-hidden slider-circle-btn mt-5" id="app-slider">
                <Swiper  className="p-0 m-0 mb-2 swiper-wrapper list-inline"
                       slidesPerView={3}
                       spaceBetween={32}
                       modules={[Navigation]}
                       navigation={{
                           nextEl: '#app-slider-next',
                           prevEl: '#app-slider-prev'
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
                        <BlogWidget blogImage={image13} blogTitle="The Shaping the futures, part by part." blogText="Video" />
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className=' card-slide overflow-hidden'>
                        <Card>
                        <BlogWidget blogImage={image14} blogTitle="Technology that unwinds your potential." blogText="Video" />
                        </Card>
                        </SwiperSlide>
                    <SwiperSlide className='swiper-slide card-slide overflow-hidden'>
                        <Card>
                        <BlogWidget blogImage={image15} blogTitle="Generating the best online environment." blogText="Video" />  
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide card-slide overflow-hidden'>
                        <Card>
                        <BlogWidget blogImage={image13} blogTitle="The Shaping the futures, part by part." blogText="Video" />
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide card-slide overflow-hidden'>
                        <Card>
                        <BlogWidget blogImage={image14} blogTitle="Technology that unwinds your potential." blogText="Video" /> 
                        </Card>                       
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide card-slide overflow-hidden'>
                        <Card>
                        <BlogWidget blogImage={image15} blogTitle="Generating the best online environment." blogText="Video"/>
                        </Card>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-button swiper-button-next" id="app-slider-next"></div>
                <div className="swiper-button swiper-button-prev" id="app-slider-prev"></div>
            </div>
        </Row>
    </Container>
</div>
<div className="section-padding bg-white">
    <Container>
         <Row className='align-items-center text-center row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4'>
            <Col className='mb-lg-0 mb-4'>
                <Counter couterVlue="3" counterTitle="Best Designer Award"/>
            </Col>
            <Col className='col mb-lg-0 mb-4'>
            <Counter couterVlue="50+" counterTitle="Loyal Clients"/>
            </Col>
            <Col>
            <Counter couterVlue="158+" counterTitle="Nominee Awards"/>
            </Col>
            <Col>
            <Counter couterVlue="92+" counterTitle="CSS Designs"/>
            </Col>
        </Row>
    </Container>
</div>
<div className="inner-box bg-secondary">
    <Container>
        <Row className='row row-cols-1 row-cols-sm-2 row-cols-md-5 justify-content-center '>
            <Col className='col mb-lg-0 mb-4 d-flex justify-content-center'>
                <Client clientImage={image16} />
            </Col>
            <Col className='col mb-lg-0 mb-4 d-flex justify-content-center'>
            <Client clientImage={image17}/>
            </Col>
            <Col className='col mb-lg-0 mb-4 d-flex justify-content-center'>
            <Client clientImage={image18}/>
            </Col>
            <Col className='col mb-lg-0 mb-4 d-flex justify-content-center'>
            <Client clientImage={image19}/>
            </Col>
            <Col className='col mb-lg-0 mb-4 d-flex justify-content-center'>
            <Client clientImage={image20}/>
            </Col>
        </Row>
    </Container>
</div>
<div className="section-padding">
    <Container>
        <Row className='align-items-center text-center'>
            <Col lg={12}>
                <p className="mb-4 text-uppercase text-secondary">Testimony</p>
                <h2 className="text-secondary customer-txt">What our <span className="text-primary">Customer’s <br/> are saying</span></h2>
            </Col>
            <div className="overflow-hidden slider-circle-btn" id="testimonial-slider">
                <Swiper  className="p-0 m-0 swiper-wrapper list-inline"
                slidesPerView={1}
                spaceBetween={32}
                modules={[Navigation]}
                navigation={{
                    nextEl: '#testimonial-slider-next',
                    prevEl: '#testimonial-slider-prev'
                }}
                breakpoints= {{
                    320: { slidesPerView: 1 },
                    550: { slidesPerView: 1 },
                    991: { slidesPerView: 1 },
                    1400: { slidesPerView: 1 },
                    1500: { slidesPerView: 1 },
                    1920: { slidesPerView: 1 },
                    2040: { slidesPerView: 1 },
                    2440: { slidesPerView: 1 }
                }}>
                    <SwiperSlide>
                    <Testiominal testText="Torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis.hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Mea facilisis urbanitas.Torquatos nec eu, detr periculis ex, nihil expetendis in mei." testOwner="Elsa Schmidt" testSubtitle="Spa"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Testiominal testText="Torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis.hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Mea facilisis urbanitas.Torquatos nec eu, detr periculis ex, nihil expetendis in mei." testOwner="Elsa Schmidt" testSubtitle="Spa"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Testiominal testText="Torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis.hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Mea facilisis urbanitas.Torquatos nec eu, detr periculis ex, nihil expetendis in mei." testOwner="Elsa Schmidt" testSubtitle="Spa"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Testiominal testText="Torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis.hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Mea facilisis urbanitas.Torquatos nec eu, detr periculis ex, nihil expetendis in mei." testOwner="Elsa Schmidt" testSubtitle="Spa"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Testiominal testText="Torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis.hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Mea facilisis urbanitas.Torquatos nec eu, detr periculis ex, nihil expetendis in mei." testOwner="Elsa Schmidt" testSubtitle="Spa"/>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-button swiper-button-next" id="testimonial-slider-next"></div>
                <div className="swiper-button swiper-button-prev" id="testimonial-slider-prev"></div>
            </div>
        </Row>
    </Container>
</div>
    </Fragment>
  )
})

Home.displayName = "Home"
export default Home
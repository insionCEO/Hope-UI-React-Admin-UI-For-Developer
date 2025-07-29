import React, { Fragment, memo } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import FeatureWidget from '../../components/landing-modules/widgets/features'
import Team from '../../components/landing-modules/widgets/team'
import Client from '../../components/landing-modules/widgets/client'
import Blog from '../../components/landing-modules/widgets/blog'
import FeatureSection from '../../components/landing-modules/widgets/header-section'

import TestimonialOne from '../../components/landing-modules/widgets/testimonial-one'
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";    
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Image 
import Image from '../../assets/landing-modules/images/home-5/top-banner.webp'
import Image1 from '../../assets/landing-modules/images/home-5/about-5.webp'
import image2 from '../../assets/landing-modules/images/home-1/team1.webp'
import image3 from '../../assets/landing-modules/images/home-1/team2.webp'
import image4 from '../../assets/landing-modules/images/home-1/team-3.webp'
import image5 from '../../assets/landing-modules/images/home-1/team-4.webp'
import image6 from '../../assets/landing-modules/images/home-1/07.webp'
import image7 from '../../assets/landing-modules/images/home-1/08.webp'
import image8 from '../../assets/landing-modules/images/home-1/09.webp'
import image9 from '../../assets/landing-modules/images/home-1/10.webp'
import image10 from '../../assets/landing-modules/images/home-1/11.webp'
import Image11 from '../../assets/landing-modules/images/home-3/02.webp'
import Image12 from '../../assets/landing-modules/images/home-3/03.webp'
import Image13 from '../../assets/landing-modules/images/home-3/04.webp'
import image14 from '../../assets/landing-modules/images/home-2/user-1.webp'
import image15 from '../../assets/landing-modules/images/home-2/user-2.webp'
import image16 from '../../assets/landing-modules/images/home-2/user-3.webp'


const SoftwareLandingPage = memo(() => {
  return (
    <Fragment>    
        {/* <frameElement> */}
    <div className="banner-one-app bg-white">
<Container>
    <Row className="align-items-center">
         <Col lg={8}>
            <h1 className="text-primary mb-4">We Build Products  <br/> to <span className="text-secondary">Solve Problems</span> </h1>
        </Col>
        <Col lg={4}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vel sed in ac aliquam nisl sed. Non arcu quam aliquet amet, donec enim. </p>
            <div className="d-flex align-items-center">
                <Link to="#" className="btn btn-primary">Try It For Free</Link>
                <Link to="#" className="btn btn-secondary ms-3">Download Pro</Link>
            </div>
        </Col> 
        <Col lg={12} className='mt-4 mt-lg-0'>
            <img src={Image} alt="" className="img-fluid "/>
        </Col>
    </Row>
</Container>
   </div>
   <div className="section-padding page-bg">
<Container>
    <Row className="align-items-center">
        <Col md={6}>
            <p className="mb-3 text-uppercase text-primary">
               about us
            </p>
            <h2 className=" mb-4">What are <span className="text-primary">we</span></h2>
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ac integer semper sit semper laoreet donec. Vitae turpis pretium placerat augue mauris, adipiscing. Risus pretium, amet mi fringilla gravida risus accumsan.</p>
                <div className="d-flex align-items-center">
                    <div>
                        <h5 className="text-primary mb-2">100%</h5>
                        <p className="mb-0">Satisfaction</p>
                    </div>
                    <div className="ms-4">
                        <h5 className="text-primary mb-2">15k</h5>
                        <p className="mb-0">Downloads</p>
                    </div>
                    <div className="ms-4">
                        <h5 className="text-primary mb-2">24/7</h5>
                        <p className="mb-0">Support</p>
                    </div>
                </div>
                <Link to="#" className="btn btn-primary mt-4">Get Started</Link>
        </Col>
        <Col md={6} className='mt-4 mt-md-0'>
            <img src={Image1} alt="" className="img-fluid "/>
        </Col>
    </Row>
</Container>
  </div>
  <div className="section-padding bg-white">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <p className="mb-3 text-uppercase text-primary">
                Features 
                </p>
                <h2 className=" mb-4">Features Provided <span className="text-primary">For You </span></h2>
            </div>
        </div>
            <FeatureSection/>
    </div>
</div>
 <div className="section-padding bg-secondary">
    <Container>
        <Row className="align-items-center">
            <Col md={12} className="text-center">
                <p className="mb-2 text-white">
                Download now
                </p>
                <h2 className="mb-5 text-white">Fast, easy, and <span className="text-primary">Affordable</span> </h2>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at diam vivamus sodales magna suspendisse. Mi volutpat vel convallis sed risus egestas.</p>
                <div className="d-flex align-items-center justify-content-center">
                    <Link to="#" className="btn btn-primary">Try It For Free</Link>
                    <Link to="#" className="btn btn-light ms-2">Download Pro</Link>
                </div>
            </Col>
        </Row>
    </Container>
 </div>
 <div className="section-padding">
<Container>
    <Row className="align-items-center">
        <Col lg={12} className="text-center">
            <p className="mb-3 text-primary text-uppercase">Pricing</p>
            <h2 className="mb-4">Our <span className="text-primary">Price Plans</span></h2>
        </Col> 
    </Row>
    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
        <Col>
            <Card className="text-center mb-4 mb-lg-0">
                <div className="card-header bg-soft-primary pb-4">
                    <h6 className="mb-3">Free</h6>
                    <h4 className="">$0 </h4>
                    <h6>/Month</h6>
                    <Link to="#" className="btn btn-primary mt-3">Get Started</Link>
                </div>
                <Card.Body>
                    <p>10 users included</p>
                    <p className="text-decoration-line-through">2GB of storage</p>
                    <p className="text-decoration-line-through">Email support</p>
                    <p className="text-decoration-line-through">Help center access</p>
                    <p className="text-decoration-line-through mb-0">Help center access</p>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="text-center mb-4 mb-lg-0">
                <div className="card-header bg-soft-primary pb-4">
                    <h6 className="mb-3">Pro</h6>
                    <h4 className="">$199</h4>
                    <h6>/Month</h6>
                    <Link to="#" className="btn btn-primary mt-3">Get Started</Link>
                </div>
                <Card.Body>
                    <p>10 users included</p>
                    <p>10GB of storage</p>
                    <p>Priority Email support</p>
                    <p>Help center access</p>
                    <p className=" mb-0">Help center access</p>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="text-center mb-4 mb-lg-0">
                <div className="card-header bg-primary pb-4">
                    <h6 className="mb-3 text-white">Enterprise</h6>
                    <h4 className="text-white">$399</h4>
                    <h6 className=" text-white">/Month</h6>
                    <Link to="#" className="btn btn-outline-light mt-3">Get Started</Link>
                </div>
                <Card.Body>
                    <p>30 users included</p>
                    <p>15GB of storage</p>
                    <p>Help center access</p>
                    <p className="text-decoration-line-through">Help center access</p>
                    <p className="mb-0 text-decoration-line-through">Call and email support</p>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="text-center mb-0">
                <div className="card-header bg-soft-primary pb-4">
                    <h6 className="mb-3">Premium</h6>
                    <h4 className="">5399</h4>
                    <h6>/Month</h6>
                    <Link to="#" className="btn btn-primary mt-3">Get Started</Link>
                </div>
                <Card.Body>
                    <p>50 users included</p>
                    <p>60GB of storage</p>
                    <p>24 x 7 call support</p>
                    <p className="text-decoration-line-through">Help center access</p>
                    <p className="mb-0 text-decoration-line-through">Help center access</p>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>
</div>
<div className="section-padding bg-white">
<Container>
    <Row className="align-items-center">
        <div className="col-md-12 text-center">
            <p className="mb-2 text-uppercase text-primary">
               Team
            </p>
            <h2 className="text-secondary mb-4">Expert  <span className="text-primary">Teams</span></h2>
        </div>
     <Col md={6} lg={3}>
        <Card className=" team-image mb-4 mb-lg-0">
            <Team teamImage={image2} teamTitle="Darlene Robertson" teamText="Founder"/>
        </Card>
    </Col>
    <Col md={6} lg={3}>
        <Card className=" team-image mb-4 mb-lg-0">
        <Team teamImage={image3} teamTitle="Floyd Miles" teamText="UI designer"/>
        </Card>
    </Col>
    <Col md={6} lg={3}>
        <Card className="team-image mb-4 mb-lg-0">
        <Team teamImage={image4} teamTitle="Arlene McCoy" teamText="Researcher"/>
        </Card>
    </Col>
    <Col md={6} lg={3}>
        <Card className= "team-image mb-4 mb-lg-0">
        <Team teamImage={image5} teamTitle="Darlene Robertson" teamText="Founder"/>
        </Card>
    </Col>
    </Row>
</Container>
</div>
<div className="section-card-padding">
<Container>
    <Row className="align-items-center">
        <Col lg={12} className="text-center">
            <p className="mb-3 text-primary text-uppercase">Reviews</p>
            <h2 className="mb-5">What our <span className="text-primary">Customer’s are saying</span></h2>
        </Col> 
        <div className="overflow-hidden slider-circle-btn" id="testimonial-one-slider">
            <Swiper className="p-0 m-0 swiper-wrapper list-inline"
            slidesPerView={3}
            spaceBetween={32}
            modules={[Navigation]}
            navigation={{
                nextEl: '#testimonial-one-next',
                prevEl: '#testimonial-one-prev'
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
                <SwiperSlide className="swiper-slide card-slide  overflow-hidden ">
                    <Card>
                    <TestimonialOne testTitle="A true game changer."  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image14}  userTitle="Eleen Rogers" Id="01"/>
                    </Card>
                </SwiperSlide>
                 <SwiperSlide className="swiper-slide card-slide  overflow-hidden ">
                    <Card>
                        <TestimonialOne testTitle="Best you can Get"  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image15}  userTitle="Brooklyn Simmons" Id="02"/>
                    </Card>
                 </SwiperSlide>
                <SwiperSlide className="swiper-slide card-slide  overflow-hidden ">
                    <Card>
                        <TestimonialOne testTitle="Perfect poduct for your business"  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image16}  userTitle="Jenny Wilson" Id="03"/>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide card-slide  overflow-hidden ">
                    <Card>
                        <TestimonialOne testTitle="A true game changer."  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image14}  userTitle="Eleen Rogers" Id="01"/>
                    </Card>
                </SwiperSlide>
                 <SwiperSlide className="swiper-slide card-slide  overflow-hidden ">
                    <Card>
                        <TestimonialOne testTitle="Best you can Get"  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image15}  userTitle="Brooklyn Simmons" Id="02"/>
                    </Card>
                 </SwiperSlide>
                <SwiperSlide className="swiper-slide card-slide  overflow-hidden ">
                    <Card>
                        <TestimonialOne testTitle="Perfect poduct for your business"  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image16}  userTitle="Jenny Wilson" Id="03"/>
                    </Card>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-button swiper-button-next" id="testimonial-one-next"></div>
            <div className="swiper-button swiper-button-prev" id="testimonial-one-prev"></div>
        </div>
    </Row>
</Container>
</div>
<div className="inner-box bg-secondary">
<Container>
    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-5 align-items-center ">
        <Col className="mb-md-0 mb-5 d-flex justify-content-center">
            <Client clientImage={image6}/>
        </Col>
        <Col className="mb-md-0 mb-5 d-flex justify-content-center">
        <Client clientImage={image7}/>
        </Col>
        <Col className="mb-md-0 mb-5 d-flex justify-content-center">
        <Client clientImage={image8}/>
        </Col>
        <Col className="mb-md-0 mb-5 d-flex justify-content-center">
        <Client clientImage={image9}/>
        </Col>
        <Col className="mb-md-0 mb-5 d-flex justify-content-center">
        <Client clientImage={image10}/>
        </Col>
    </Row>
</Container>
</div>
<div className="section-card-padding bg-white">
<Container>
    <Row className="align-items-center">
        <Col md={12} className="text-center">
            <p className="mb-2 text-uppercase text-primary">
               Blog
            </p>
            <h2 className="text-secondary mb-4">All the <span className="text-primary">Support you Need</span></h2>
        </Col>
        <div className="overflow-hidden slider-circle-btn mt-5" id="app-slider">
            <Swiper  className="p-0 m-0 swiper-wrapper list-inline"
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
                <SwiperSlide className="card-slide  overflow-hidde">
                    <Card>
                    <Blog blogImage={Image11} blogTitle="The Shaping the futures, part by part." blogText="Video"/>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="card-slide overflow-hidden ">
                    <Card>
                    <Blog blogImage={Image12} blogTitle="Technology that unwinds your potential." blogText="Video"/>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="card-slide overflow-hidden ">
                    <Card>
                    <Blog blogImage={Image13} blogTitle="Generating the best online environment." blogText="Video"/>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="card-slide overflow-hidden ">
                    <Card>
                    <Blog blogImage={Image11} blogTitle="The Shaping the futures, part by part." blogText="Video"/>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="card-slide overflow-hidden ">
                    <Card>
                    <Blog blogImage={Image12} blogTitle="Technology that unwinds your potential." blogText="Video"/>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className="card-slide overflow-hidden ">
                    <Card>
                    <Blog blogImage={Image13} blogTitle="Generating the best online environment." blogText="Video"/>
                    </Card>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-button swiper-button-next" id="app-slider-next"></div>
            <div className="swiper-button swiper-button-prev" id="app-slider-prev"></div>
        </div>
    </Row>
</Container>
</div>
<div className="section-card-padding">
<Container>
    <Row>
        <Col  xl={6} lg={5}>
            <p className="mb-2 text-uppercase text-primary">
               faq
            </p>
            <h2 className="text-secondary mb-4">Foremost Common  <span className="text-primary">Questions</span></h2>
            <p className="mb-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
        </Col>
        <Col  xl={6} lg={7} className=" mt-4 mt-lg-0">
            <div className="accordion custom-accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className="mb-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className="mb-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className="mb-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                    </div>
                    </div>
                </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className="mb-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className="mb-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
</Container>
</div>
{/* </frameElement> */}
</Fragment>

  )
})
SoftwareLandingPage.displayName = "SoftwareLandingPage"
export default SoftwareLandingPage
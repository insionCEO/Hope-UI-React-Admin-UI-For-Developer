import React, { Fragment, memo } from 'react'
import {Card, Col, Container, Row } from 'react-bootstrap'

import BlogWidget from '../../components/landing-modules/widgets/blog'
import SubHeader from '../../components/landing-modules/widgets/sub-header'
import TestimonialOne from '../../components/landing-modules/widgets/testimonial-one'

// import TestimonialTwo from '../../components/landing-modules/widgets/testimonial-two'

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";    
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 

// image
import Image1 from '../../assets/landing-modules/images/home-3/02.webp'
import Image2 from '../../assets/landing-modules/images/home-3/03.webp'
import image3 from '../../assets/landing-modules/images/home-3/04.webp'
import image4 from '../../assets/landing-modules/images/home-2/user-1.webp'
import image5 from '../../assets/landing-modules/images/home-2/user-2.webp'
import image6 from '../../assets/landing-modules/images/home-2/user-3.webp'
import FeatureSection from '../../components/landing-modules/widgets/header-section'

const Features = memo(() => {
  return (
    <Fragment>
        <SubHeader title={"Features"}/>
        <div className="section-padding bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p className="mb-3 text-uppercase">
                        Features 
                        </p>
                        <h2 className=" mb-4">Features Provided <span className="text-primary">For You </span></h2>
                    </div>
                </div>
                    <FeatureSection/>
            </div>
        </div>
        <div className="section-card-padding">
            <Container>
                <Row className="align-items-center">
                    <Col lg={12} className="text-center">
                        <p className="mb-3 text-primary">Reviews</p>
                        <h2 className="mb-5">What our <span className="text-primary">Customer’s are saying</span></h2>
                    </Col> 
                    <div className="overflow-hidden slider-circle-btn" id="testimonial-one-slider">
                        <Swiper  className="p-0 m-0 swiper-wrapper list-inline"
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
                            <SwiperSlide className="card-slide  overflow-hidden">
                                <Card>
                                    <TestimonialOne Id="01" testTitle="A true game changer."   testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image4} userTitle="Eleen Rogers" />
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide className="card-slide  overflow-hidden">
                            <Card>
                                <TestimonialOne testTitle="Best you can Get"  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image5}  userTitle="Brooklyn Simmons" Id="02"/>
                            </Card>
                            </SwiperSlide>
                            <SwiperSlide className="card-slide  overflow-hidden">
                            <Card>
                                <TestimonialOne testTitle="Perfect poduct for your business"  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image6}  userTitle="Jenny Wilson" Id="03"/>
                            </Card>
                            </SwiperSlide>
                            <SwiperSlide className="card-slide  overflow-hidden">
                            <Card>
                                <TestimonialOne testTitle="A true game changer."  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image4}  userTitle="Eleen Rogers" Id="01"/>
                            </Card>
                            </SwiperSlide>
                            <SwiperSlide className="card-slide  overflow-hidden">
                            <Card>
                                <TestimonialOne testTitle="Best you can Get"  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image5}  userTitle="Brooklyn Simmons" Id="02"/>
                            </Card>
                            </SwiperSlide>
                            <SwiperSlide className="card-slide  overflow-hidden">
                            <Card>
                                <TestimonialOne testTitle="Perfect poduct for your business"  testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”" testImage={image6}  userTitle="Jenny Wilson" Id="03"/>
                            </Card>
                            </SwiperSlide>
                        </Swiper>
                        <div className="swiper-button swiper-button-next" id="testimonial-one-next"></div>
                        <div className="swiper-button swiper-button-prev" id="testimonial-one-prev"></div>
                    </div>
                </Row>
            </Container>
        </div>
        <div className="section-padding pt-0">
            <Container>
                <Row className='align-items-center'>
                    <Col md={12} className='text-center'>
                        <p className="mb-2 text-uppercase text-primary">
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
                                <BlogWidget blogImage={Image1} blogTitle="The Shaping the futures, part by part." blogText="Video" />
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide className='card-slide overflow-hidden'>
                                <Card>
                                <BlogWidget blogImage={Image2} blogTitle="Technology that unwinds your potential." blogText="Video"/>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide className="card-slide overflow-hidden">
                                <Card>
                                <BlogWidget blogImage={image3} blogTitle="Generating the best online environment." blogText="Video"/>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide className="card-slide overflow-hidden">
                            <Card>
                            <BlogWidget blogImage={Image1} blogTitle="The Shaping the futures, part by part." blogText="Video"/>
                            </Card>
                            </SwiperSlide>
                            <SwiperSlide className="card-slide overflow-hidden">
                                <Card>
                                <BlogWidget blogImage={Image2} blogTitle="Technology that unwinds your potential." blogText="Video"/>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide className="card-slide  overflow-hidden">
                                <Card>
                                <BlogWidget blogImage={image3} blogTitle="Generating the best online environment." blogText="Video"/>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                        <div className="swiper-button swiper-button-next" id="app-slider-next"></div>
                        <div className="swiper-button swiper-button-prev" id="app-slider-prev"></div>
                    </div>
                </Row>
            </Container>
        </div>
    </Fragment>
  )
})
Features.displayName = "Features"
export default Features
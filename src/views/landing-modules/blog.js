import React, { Fragment, memo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlogWidget2 from '../../components/landing-modules/widgets/blog-1'
import SubHeader from '../../components/landing-modules/widgets/sub-header'

// image 
import image1 from '../../assets/landing-modules/images/blog/01.webp'
import image2 from '../../assets/landing-modules/images/blog/02.webp'
import image3 from '../../assets/landing-modules/images/blog/03.webp'
import image4 from '../../assets/landing-modules/images/blog/04.webp'
import image5 from '../../assets/landing-modules/images/blog/05.webp'
import image6 from '../../assets/landing-modules/images/blog/06.webp'
import image7 from '../../assets/landing-modules/images/blog/07.webp'
import image8 from '../../assets/landing-modules/images/blog/08.webp'
import image9 from '../../assets/landing-modules/images/blog/09.webp'


const Blog = memo(() => {
  return (
    <Fragment>
        <SubHeader title={"Blog"}/>
        <div className='inner-card-box'> 
    <Container>
        <Row>
            <Col lg={4} md={6}>
                <BlogWidget2 blogImage={image1} blogDate="December 26, 2022"  blogTitle="The Cheapest Destinations Of All Time, A List Of Beauty And Budget." blogAuther="Travel"  blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."/>
            </Col>
            <Col lg={4} md={6}>
            <BlogWidget2 blogImage={image2} blogDate="December 20, 2022"  blogTitle="“A Year From Now You May Wish You Had Started Today.”" blogAuther="Video" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book." />
            </Col>
            <Col lg={4} md={6}>
            <BlogWidget2 blogImage={image3} blogDate="December 20, 2022"  blogTitle="Travelers Like To Know Which Public Transportation Options Are Best." blogAuther="Video" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book." />
            </Col>
            <Col lg={4} md={6}>
            <BlogWidget2 blogImage={image4} blogDate="December 20, 2022"  blogTitle="Travelers Like To Know Which Public Transportation Options Are Best." blogAuther="Video" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."/>
            </Col>
            <Col lg={4} md={6}>
            <BlogWidget2 blogImage={image5} blogDate="December 20, 2022"  blogTitle="WIT AND DELIGHT: The Advice From A Twenty Something" blogAuther="Video" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."/>
            </Col>
            <Col lg={4} md={6}>
            <BlogWidget2 blogImage={image6} blogDate="December 20, 2022"  blogTitle="Paranomal And Ghost Experience: The Man Behind The Musical" blogAuther="Travel" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."/>
            </Col>
            <Col lg={4} md={6}>
            <BlogWidget2 blogImage={image7} blogDate="December 20, 2022"  blogTitle="I Do Indeed Write On The Road. My Laptop Goes With Me Everywhere." blogAuther="Travel" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."/>
            </Col>
            <Col lg={4} md={6}>
            <BlogWidget2 blogImage={image8} blogDate="December 20, 2022"  blogTitle="The Cheapest Destinations Of All Time, A List Of Beauty And Budget." blogAuther="Travel" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."/>
            </Col>
            <Col lg={4} md={6}>
            <BlogWidget2 blogImage={image9} blogDate="December 20, 2022"  blogTitle="The Ultimate Travel Guide: What To Do, See & Eat." blogAuther="Travel" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."/>
            </Col>
            <Col lg={4} md={6}>
            <BlogWidget2 blogImage={image9} blogDate="December 20, 2022"  blogTitle="We Take Photos As A Return Ticket To The Moment Otherwise Gone." blogAuther="Travel" blogDescription="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."/>
            </Col>
        </Row>
    </Container>
</div> 
    </Fragment>
  )
})

Blog.displayName = "Blog"
export default Blog
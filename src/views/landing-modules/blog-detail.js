import React, { Fragment, memo } from 'react'
import { Card, Col, Container, FormGroup, Row,Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogWidget from '../../components/landing-modules/widgets/blog'

// image 
import image from '../../assets/landing-modules/images/blog/01.webp'

const BlogDetail = memo(() => {
  return (
    <Fragment>
        <div className='inner-box'>
            <Container>
        <Row>
            <Col lg={12}>
                <BlogWidget blogImage={image} cardClass="mt-4" blogDate="December 26, 2022"  blogTitle="The Cheapest Destinations Of All Time, A List Of Beauty And Budget." blogAuther="Travel"/>
                {/* {{> modules/landing-pages/components/widgets/blog-deatail  blogImage="blog/01.png" cardClass="mt-4" blogDate="December 26, 2022"  blogTitle="The Cheapest Destinations Of All Time, A List Of Beauty And Budget." blogAuther="Travel"  }} */}
            </Col>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <h3>Leave a Apply</h3>
                        <p className="my-4">Your Email Address Will Not Be Published. Required Fields Are Marked *</p>
                        <FormGroup className="mb-3">
                            <Form.Label htmlFor="your-message" >Comment *</Form.Label>
                            <textarea name="message" rows="10" className="form-control" ></textarea>
                        </FormGroup>
                        <Form.Group>
                            <Form.Label htmlFor="full-name" >Name *</Form.Label>
                            <input type="text" className="form-control" id="full-name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="your-email">Email *</Form.Label>
                            <input type="text" className="form-control" id="your-email"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="your-subject">Website</Form.Label>
                            <input type="text" className="form-control" id="your-subject"/>
                        </Form.Group>
                        <Form.Check className="mb-3">
                            <input type="checkbox" className="form-check-input" id="customCheck1"/>
                            <Form.Check.Label className="form-check-label" htmlFor="customCheck1">Save My Name, Email, And Website In This Browser For The Next Time I Comment.</Form.Check.Label>
                        </Form.Check>
                        <Link to="#" className="btn btn-primary">Post Comment</Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </div>
    </Fragment>
  )
})
export default BlogDetail
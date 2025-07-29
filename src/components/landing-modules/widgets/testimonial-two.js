import React, { Fragment, memo } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
// import RatingFill from '../../landing-modules/widgets/rating-fill'
import RatingStar from '../../landing-modules/widgets/rating-star'

const TestimonialTwo = memo((props) => {
  return (
   <Fragment>
    <Card className='mb-3'>
  <Row className='g-0'>
    <Col className='col-md-4 col-xl-2'>
      <img src={props.testImage} alt={props.Id} className="img-fluid rounded-start"/>
    </Col>
    <Col className='col-md-8 col-xl-10'>
       <Card.Body>
        <h6 className="mb-2">{props.testTitle}</h6>
        <RatingStar unfillStar={1} fillStar={4} />
        {/* <RatingFill rating="4" fill="true"/> */}
        {/* {{> modules/landing-pages/components/widgets/rating-fill rating="4" fill="true" }} */}
        <p className="pt-2 mb-0">{props.testText}</p>
      </Card.Body> 
    </Col>
  </Row>
</Card>
   </Fragment>
  )
})

export default TestimonialTwo
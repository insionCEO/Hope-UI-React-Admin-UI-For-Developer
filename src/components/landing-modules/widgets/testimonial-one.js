import React, { Fragment, memo } from 'react'
import { Card } from 'react-bootstrap'
import RatingFill from '../../../components/landing-modules/widgets/rating-star'

// image
// import Image from '../../../assets/landing-modules/images/home-2/shape.png'

const TestimonialOne = memo((props) => {
  return (
    <Fragment>
        <div className=" position-relative">
    <div className="shape">
        {/* <img src={props.testImage} alt={props.id} className="img-fluid"/> */}
    </div>
    <Card.Body className='position-relative'>
        <h6 className="mb-3 mt-3">{props.testTitle}</h6>
        <p>{props.testText}</p>
        <div className="border-bottom"></div>
        <div className="d-flex align-items-center mt-3">
            {/* <img src="{{path}}landing-pages/assets/images/home-2/{{testUser}}" alt="{{Id}}" className="img-fluid  rounded-pill"/> */}
            <img src={props.testImage} alt={props.id} className="img-fluid  rounded-pill"/>
            <div className="ms-3">
                <p className="mb-2">{props.userTitle}</p>
                    <RatingFill unfillStar={1} fillStar={4}/>
            </div>
        </div> 
    </Card.Body>
</div>
    </Fragment>
  )
})

export default TestimonialOne
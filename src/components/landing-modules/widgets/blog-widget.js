import React, { Fragment,memo} from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const BlogWidget1 = memo((props) => {
  return (
    <Fragment>
        <Card className={props.cardClass}>
    <Card.Body className='p-3'>
        <img src={props.blogImage} alt={props.Id} className="img-fluid rounded
        " loading="lazy"/>
        <p className="text-primary pt-3">{props.blogDate}</p>
        <Link to="blog-detail.html" className="my-3 h6">{props.blogTitle}</Link>
        <div className="d-flex align-items-center my-3">
            <span>{props.blogAuther}</span> 
            <span className="ms-3 text-primary">Admin</span>
        </div>
        <Link to="blog-detail.html" className="btn btn-primary">Read More</Link>
    </Card.Body>
</Card>
    </Fragment>
  )
})
BlogWidget1.displayName = "BlogWidget1"
export default BlogWidget1

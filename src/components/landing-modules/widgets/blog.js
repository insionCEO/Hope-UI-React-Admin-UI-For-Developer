import React,{memo,Fragment}  from 'react'

// react-bootstrap
import {Card} from 'react-bootstrap'

const BlogWidget = memo((props) => {
  return (
    <Fragment>
        <img src={props.blogImage} alt={props.id} className="img-fluid" loading="lazy"/>
<Card.Body>
    <p>{props.blogText}</p>
    <h6 className="my-2">{props.blogTitle}</h6>
</Card.Body> 
    </Fragment>
  )
})
BlogWidget.displayName = "BlogWidget"
export default BlogWidget

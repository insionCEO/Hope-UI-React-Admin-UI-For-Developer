import React,{memo,Fragment} from 'react'

// react-bootstrap
import {Card} from 'react-bootstrap'

const Team = memo((props) => {
     return(
        <Fragment>
           <img src={props.teamImage} alt="team-details" className="img-fluid rounded-top" loading="lazy"/>
            <Card.Body>
            <h6 className="my-2">{props.teamTitle}</h6>
           <p className="mb-0">{props.teamText}</p>
            </Card.Body> 
        </Fragment>
     )
})
Team.displayName = "Team"
export default Team

import React from 'react'
import { Link } from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import Card from '../../../components/Card'

 const HeaderBread = () => {
     return(
         <>
            <Row>
                <Col md="12">
                    <Card>
                        <Card.Body className="d-flex justify-content-between align-items-center">
                            <div className="card-title mb-0">
                                <h4 className="mb-0">Calender</h4>
                            </div>
                            <div className="card-action">
                                <Link to="#" className="btn btn-primary" role="button">Back</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default HeaderBread
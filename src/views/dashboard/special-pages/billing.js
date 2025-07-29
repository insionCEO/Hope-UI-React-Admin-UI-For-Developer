
import React from 'react'
import { Row,Col,Table, } from 'react-bootstrap'
import Card from '../../../components/Card'

const Billing = () => {
    return (
        <>
            <Row className="">                  
                <Col lg="12" className="">
                    <Card className="rounded">
                        <Card.Body className="">
                            <Row className="">
                                <Col sm="12" className="">    
                                    <h4 className="mb-2">Invoice  #215462</h4>                              
                                    <h5 className="mb-3">Hello , Devon Lane </h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                </Col>
                            </Row>
                            <Row className="">
                                <Col sm="12" className=" mt-4">
                                <div className="table-responsive-lg">
                                    <Table className="">
                                        <thead>
                                            <tr>
                                                <th scope="col">Item</th>
                                                <th className="text-center" scope="col">Quantity</th>
                                                <th className="text-center" scope="col">Price</th>
                                                <th className="text-center" scope="col">Totals</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Item 1</h6>
                                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </p>
                                                </td>
                                                <td className="text-center">5</td>
                                                <td className="text-center">$120.00</td>
                                                <td className="text-center">$2,880.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Item 2</h6>
                                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </p>
                                                </td>
                                                <td className="text-center">5</td>
                                                <td className="text-center">$120.00</td>
                                                <td className="text-center">$2,880.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Item 1</h6>
                                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </p>
                                                </td>
                                                <td className="text-center">5</td>
                                                <td className="text-center">$120.00</td>
                                                <td className="text-center">$2,880.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Item 1</h6>
                                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </p>
                                                </td>
                                                <td className="text-center">5</td>
                                                <td className="text-center">$120.00</td>
                                                <td className="text-center">$2,880.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Total</h6>
                                                </td>
                                                <td className="text-center"></td>
                                                <td className="text-center"></td>
                                                <td className="text-center">$2,880.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Taxs</h6>
                                                </td>
                                                <td className="text-center"></td>
                                                <td className="text-center"></td>
                                                <td className="text-center">$2,880.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Discount</h6>
                                                </td>
                                                <td className="text-center"></td>
                                                <td className="text-center"></td>
                                                <td className="text-center">$2,880.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Net Amount</h6>
                                                </td>
                                                <td className="text-center"></td>
                                                <td className="text-center"></td>
                                                <td className="text-center"><b>$2,880.00</b></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                </Col>                              
                            </Row>
                            <Row>
                                <Col sm="12">
                                    <p className="mb-0 mt-4">
                                        <svg width="30" className="text-primary mb-3 me-2" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"/>
                                            <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"/>
                                            <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"/>
                                            <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"/>
                                        </svg>
                                        It is a long established fact that a reader will be distracted by the readable content of a page
                                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                        as opposed to using 'Content here, content here', making it look like readable English.
                                    </p>  
                                    <div className="d-flex justify-content-center mt-4">
                                        <button type="button" className="btn btn-primary">Print</button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>                                    
            </Row>
        </>
    )
}

export default Billing

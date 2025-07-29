import {memo,Fragment} from 'react'
import {Row,Col,Image} from 'react-bootstrap'
import Card from '../../../components/Card'

//progressbar
import Progress from '../../../components/progress.js'

import {Link} from 'react-router-dom'
// img
import avatars11 from '../../../assets/images/avatars/01.png'
import avatars22 from '../../../assets/images/avatars/avtar_1.png'
import avatars33 from '../../../assets/images/avatars/avtar_2.png'
import avatars44 from '../../../assets/images/avatars/avtar_3.png'
import avatars55 from '../../../assets/images/avatars/avtar_4.png'
import avatars66 from '../../../assets/images/avatars/avtar_5.png'

//Count-up
import CountUp from 'react-countup';

const Widgetbasic = memo(() => {
    return (
      <Fragment>
         <Row>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="text-center">AVG Impressions</div>
                     <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                           <h2 className="counter"><CountUp  start={0.563} end={2.648} duration={3}  decimals={3}/></h2>
                           26.84%
                        </div>
                        <div className="border  bg-soft-danger rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                           </svg>
                        </div>
                     </div>
                     <div className="mt-4">
                        <Progress softcolors="danger" color="danger" className="shadow-none w-100" value={50} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="text-center">AVG Engagements Rate</div>
                     <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                           <h2 className="counter"><CountUp  start={0.563} end={2.648} duration={3}  decimals={3}/></h2>
                           26.84%
                        </div>
                        <div className="border bg-soft-info rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                           </svg>
                        </div>
                     </div>
                     <div className="mt-4">
                        <Progress softcolors="info" color="info" className="shadow-none w-100" value={70} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="text-center">AVG Reach</div>
                     <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                           <h2 className="counter"><CountUp  start={0.563} end={2.648} duration={3}  decimals={3}/></h2>
                           26.84%
                        </div>
                        <div className="border bg-soft-success rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                           </svg>
                        </div>
                     </div>
                     <div className="mt-4">
                        <Progress softcolors="success" color="success" className="shadow-none w-100" value={75} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="text-center">AVG Transport</div>
                     <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                           <h2 className="counter"><CountUp  start={0.563} end={2.648} duration={3}  decimals={3}/></h2>
                           26.84%
                        </div>
                        <div className="border  bg-soft-primary rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                           </svg>
                        </div>
                     </div>
                     <div className="mt-4">
                           <Progress softcolors="primary" color="primary" className="shadow-none w-100" value={60} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6" className="col-lg-3 col-md-6">
               <Card className="bg-soft-info">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-soft-info rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           <h2 className="counter"><CountUp  start={565} end={5600} duration={3} /></h2>
                           Doctors
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="bg-soft-warning">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-soft-warning rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           <h2 className="counter"><CountUp  start={513} end={5600} duration={3} /></h2>
                           Nurses
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="bg-soft-danger">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-soft-danger rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                           </svg>
                        </div>
                        <div className="text-end">
                           <h2 className="counter"><CountUp  start={584} end={3500} duration={3} /></h2>
                           Patients
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="bg-soft-primary">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-soft-primary rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                              <h2 className="counter"><CountUp  start={546} end={4500} duration={3}/></h2>
                           Pharmacists
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-info text-white rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                           </svg>
                        </div>
                        <div className="text-end">
                           Customers
                              <h2 className="counter"><CountUp  start={15} end={75} duration={3} /></h2>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-warning text-white rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           Products
                              <h2 className="counter"><CountUp  start={19} end={60} duration={3}/></h2>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-success text-white rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           User
                              <h2 className="counter"><CountUp  start={24} end={80} duration={3}/></h2>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-danger text-white rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           Category
                              <h2 className="counter"><CountUp  start={8} end={45} duration={3} /></h2>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="border-bottom border-4 border-0 border-primary">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div>
                           <span>Worked Today</span>
                        </div>
                        <div>
                           <span>08:00 Hr</span>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="border-bottom border-4 border-0 border-info">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div>
                           <span>Worked Week</span>
                        </div>
                        <div>
                           <span>40:00 Hr</span>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="border-bottom border-4 border-0 border-danger">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div>
                           <span>Worked Issue</span>
                        </div>
                        <div>
                           <span className="counter"><CountUp  start={275} end={1200} duration={3}/></span>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="border-bottom border-4 border-0 border-warning">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div>
                           <span>Worked Income</span>
                        </div>
                        <div>
                           <span className="counter">$<CountUp  start={10000} end={54000} duration={3}/></span>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>      
            <Col xl="4">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-itmes-center">
                        <div>
                           <div className="p-3 rounded bg-soft-primary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                              </svg>
                           </div>
                        </div>
                        <div>
                           <h1>21K</h1>
                           <p className="mb-0">Order Served</p>
                        </div>
                        <div>
                           <div className="badge bg-primary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 20 20" fill="currentColor">
                                 <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                              </svg>
                              <span>3.48%</span>
                           </div>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col xl="4" lg="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex align-items-center justify-content-between">
                        <div className=" bg-soft-success rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="35px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </div>
                        <div>
                           <h1 className="counter text-success"><CountUp  start={48} end={250} duration={3} />M</h1>
                           <p className="text-success mb-0">Total Earning</p>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col xl="4" lg="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex align-items-center">                  
                        <div className=" bg-soft-info rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="40px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </div>
                        <div className="ms-5">
                           <h5 className="mb-1">Positive Reviews</h5>
                           <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="15px" color="orange" fill="orange" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="15px" color="orange" fill="orange" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="15px" color="orange" fill="orange" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="15px" color="orange" fill="orange" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="15px" color="orange" fill="orange" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                              </svg>
                           </div>
                           <h6 className="text-info">4.5/5</h6>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4">
               <Card>
                  <Card.Body>
                     <h2 className="counter">$<CountUp  start={495} end={3450} duration={3}/></h2>
                     <p className="mb-2">Your Current Balance</p> 
                     <h6>20% ($520)</h6>
                     <Link to="#" className="mt-4 btn btn-danger d-block rounded">Add credit</Link>
                     <div className="mt-3">
                        <div className="pb-3">
                           <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="mb-0">Insurance</p>
                              <h4>18</h4>
                           </div>
                           <Progress softcolors="info" color="info" className="shadow-none w-100" value={60} minvalue={0} maxvalue={100} style={{height: "10px"}} />
                        </div>
                        <div className="pb-3">
                           <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="mb-0">Savings</p>
                              <h4>124</h4>
                           </div>
                           <Progress softcolors="success" color="success" className="shadow-none w-100" value={80} minvalue={0} maxvalue={100} style={{height: "10px"}} />
                        </div>
                        <div className="pb-3">
                           <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="mb-0">Investment</p>
                              <h4>74</h4>
                           </div>
                           <Progress softcolors="primary" color="primary" className="shadow-none w-100" value={55} minvalue={0} maxvalue={100} style={{height: "10px"}} />
                        </div>
                        <div>
                           <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="mb-0">Progress</p>
                              <h4>89</h4>
                           </div>
                           <Progress softcolors="success" color="success" className="shadow-none w-100" value={89} minvalue={0} maxvalue={100} style={{height: "10px"}} />
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4">
               <Row>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex flex-column align-items-between">
                              <div>
                                 <div className="d-flex">
                                    <div className="bg-primary text-white p-3 rounded">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                       </svg>
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <span>CUSTOMER</span>
                                 <div>
                                    <h3 className="counter"><CountUp  start={21.497} end={60.586} duration={3} decimals={3} decimal="," /></h3>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <div className="badge bg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 20 20" fill="currentColor">
                                       <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>3.48%</span>
                                 </div>
                              </div>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex flex-column align-items-between">
                              <div>
                                 <div className="d-flex">
                                    <div className="bg-warning text-white p-3 rounded">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                       </svg>
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <span>SALES</span>
                                 <div>
                                    <h3 className="counter"><CountUp  start={20.487} end={80.586} duration={3} decimals={3} decimal="," /></h3>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <div className="badge bg-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 20 20" fill="currentColor">
                                       <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>3.48%</span>
                                 </div>
                              </div>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
               <Row>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex flex-column align-items-between">
                              <div>
                                 <div className="d-flex">
                                    <div className="bg-info text-white p-3 rounded">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                       </svg>
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <span>PROFIT</span>
                                 <div>
                                    <h3 className="counter"><CountUp  start={11} end={80} duration={3} />%</h3>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <div className="badge bg-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 20 20" fill="currentColor">
                                       <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>3.48%</span>
                                 </div>
                              </div>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex flex-column align-items-between">
                              <div>
                                 <div className="d-flex">
                                    <div className="bg-danger text-white p-3 rounded">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                       </svg>
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <span>LOSS</span>
                                 <div>
                                    <h3 className="counter"><CountUp  start={6} end={15} duration={3}/>%</h3>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <div className="badge bg-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 20 20" fill="currentColor">
                                       <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>3.48%</span>
                                 </div>
                              </div>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Col>
            <Col lg="4">
               <Card>
                  <Card.Body className="p-3">
                     <h5>Assets</h5>
                     <div className="text-center">
                        <h1 className="counter">-<CountUp  start={42.456} end={108.56} duration={3} decimals={2}/>K</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                     </div>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Body className="p-3">
                     <h5>Liabilities</h5>
                     <div className="text-center">
                        <h1 className="counter">-<CountUp  start={152.46} end={425.20} duration={3} decimals={2}/>K</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                     </div>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Body className="p-3">
                     <h5>Working Capital</h5>
                     <div className="text-center">
                        <h1 className="counter">-<CountUp  start={102.46} end={380.40} duration={3} decimals={2}/>K</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
         <Row>
            <Col lg="6">
               <Row>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex justify-content-between">
                              <div>
                                 <span><b>Revenue</b></span>
                                 <div className="mt-2">
                                    <h2 className="counter">$<CountUp  start={12163} end={35000} duration={3} /></h2>
                                 </div>
                              </div>
                              <div>
                                 <span className="badge bg-primary">Monthly</span>
                              </div>
                           </div>
                           <div className="d-flex justify-content-between mt-2">
                              <div>
                                 <span>Total Revenue</span>
                              </div>
                              <div>
                                 <span>35%</span>
                              </div>
                           </div>
                           <div className="mt-3">
                              <Progress softcolors="primary" color="primary" className="shadow-none w-100" value={70} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex justify-content-between">
                              <div>
                                 <span><b>Orders</b></span>
                                 <div className="mt-2">
                                    <h2 className="counter"><CountUp  start={754} end={2500} duration={3}/></h2>
                                 </div>
                              </div>
                              <div>
                                 <span className="badge bg-warning">Anual</span>
                              </div>
                           </div>
                           <div className="d-flex justify-content-between mt-2">
                              <div>
                                 <span>New Orders</span>
                              </div>
                              <div>
                                 <span>24%</span>
                              </div>
                           </div>
                           <div className="mt-3">
                              <Progress softcolors="warning" color="warning" className="shadow-none w-100" value={24} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
               <Row>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex justify-content-between">
                              <div>
                                 <span><b>Leads</b></span>
                                 <div className="mt-2">
                                 <h2 className="counter">$<CountUp  start={12000} end={35000} duration={3}/></h2>
                                 </div>
                              </div>
                              <div>
                                 <span className="badge bg-danger">Today</span>
                              </div>
                           </div>
                           <div className="d-flex justify-content-between mt-2">
                              <div>
                                 <span>New Leads</span>
                              </div>
                              <div>
                                 <span>50%</span>
                              </div>
                           </div>
                           <div className="mt-3">
                              <Progress softcolors="danger" color="danger" className="shadow-none w-100" value={50} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex justify-content-between">
                              <div>
                                 <span><b>Conversion</b></span>
                                 <div className="mt-2">
                                    <h2 className="counter"><CountUp  start={4} end={35} duration={3}/>%</h2>
                                 </div>
                              </div>
                              <div>
                                 <span className="badge bg-info">This Month</span>
                              </div>
                           </div>
                           <div className="d-flex justify-content-between mt-2">
                              <div>
                                 <span>This Month</span>
                              </div>
                              <div>
                                 <span className="counter">30%</span>
                              </div>
                           </div>
                           <div className="mt-3">
                              <Progress softcolors="info" color="info" className="shadow-none w-100" value={30} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Col>
            <Col lg="6">
               <Card>
                  <Card.Body>
                     <div className="border-bottom text-center pb-3">
                        <Image className="theme-color-default-img  img-fluid avatar-80 mb-4" src={avatars11} alt="profile-pic"/>
                        <Image className="theme-color-purple-img img-fluid avatar-80 mb-4" src={avatars22} alt="profile-pic"/>
                        <Image className="theme-color-blue-img img-fluid avatar-80 mb-4" src={avatars33} alt="profile-pic"/>
                        <Image className="theme-color-green-img img-fluid avatar-80 mb-4" src={avatars55} alt="profile-pic"/>
                        <Image className="theme-color-yellow-img img-fluid avatar-80 mb-4" src={avatars66} alt="profile-pic"/>
                        <Image className="theme-color-pink-img img-fluid avatar-80 mb-4" src={avatars44} alt="profile-pic"/>
                        <div>
                           <h5 className="mb-3">Bini Jets</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                        <button type="button" className="btn btn-info mb-2">Assign</button>
                     </div>
                     <div className="d-flex justify-content-between mt-3">
                        <div>
                              <h2 className="counter"><CountUp  start={784} end={4500} duration={3}/></h2>
                           <div>Operations</div>
                        </div>
                        <div>
                              <h2 className="mb-0">3.9</h2>
                           <div>Medical Rating</div>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Fragment>
    )
}
)

Widgetbasic.displayName="Widgetbasic"
export default Widgetbasic

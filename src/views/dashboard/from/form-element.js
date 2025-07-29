import React from 'react'
import {Row,Col,Form,Button} from 'react-bootstrap'
import Card from '../../../components/Card'



const FormElement = () => {
    return (
        <>
            <div>
                <Row>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Basic Form</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form>
                                    <Form.Group className="form-group">
                                        <Form.Label htmlFor="email">Email address:</Form.Label>
                                        <Form.Control type="email"  id="email1"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label htmlFor="pwd">Password:</Form.Label>
                                        <Form.Control type="password"  id="pwd"/>
                                    </Form.Group>
                                    <div className="checkbox mb-3">
                                        <Form.Check className="form-check ">
                                            <Form.Check.Input  type="checkbox" defaultValue="" id="flexCheckDefault3"/>
                                            <Form.Check.Label  htmlFor="flexCheckDefault3">
                                                Remember me
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                    <Button type="button" variant="btn btn-primary">Submit</Button>{' '}
                                    <Button type="button" variant="btn btn-danger">cancel</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Form Grid</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form>
                                    <Row>
                                        <Col>
                                        <Form.Control type="text"  placeholder="First name"/>
                                        </Col>
                                        <Col>
                                        <Form.Control type="text"  placeholder="Last name"/>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Input</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputText1">Input Text </Form.Label>
                                        <Form.Control type="text"  id="exampleInputText1" defaultValue="Mark Jhon" placeholder="Enter Name"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputEmail3">Email Input</Form.Label>
                                        <Form.Control type="email"  id="exampleInputEmail3" defaultValue="markjhon@gmail.com" placeholder="Enter Email"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputurl">Url Input</Form.Label>
                                        <Form.Control type="url"  id="exampleInputurl" defaultValue="https://getbootstrap.com" placeholder="Enter Url"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputphone">Teliphone Input</Form.Label>
                                        <Form.Control type="tel"  id="exampleInputphone" defaultValue="1-(555)-555-5555"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputNumber1">Number Input</Form.Label>
                                        <Form.Control type="number"  id="exampleInputNumber1" defaultValue="2356"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputPassword3">Password Input</Form.Label>
                                        <Form.Control type="password"  id="exampleInputPassword3" defaultValue="markjhon123" placeholder="Enter Password"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputdate">Date Input</Form.Label>
                                        <Form.Control type="date"  id="exampleInputdate" defaultValue="2019-12-18"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputmonth">Month Input</Form.Label>
                                        <Form.Control type="month"  id="exampleInputmonth" defaultValue="2019-12"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputweek">Week Input</Form.Label>
                                        <Form.Control type="week"  id="exampleInputweek" defaultValue="2019-W46"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputtime">Time Input</Form.Label>
                                        <Form.Control type="time"  id="exampleInputtime" defaultValue="13:45"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputdatetime">Date and Time Input</Form.Label>
                                        <Form.Control type="datetime-local"  id="exampleInputdatetime" defaultValue="2019-12-19T13:45:00"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 form-group">
                                        <Form.Label  htmlFor="exampleFormControlTextarea1">Example textarea</Form.Label>
                                        <Form.Control as="textarea"  id="exampleFormControlTextarea1" rows="5"/>
                                    </Form.Group>
                                    <Button type="button" variant="btn btn-primary">Submit</Button>{' '}
                                    <Button type="button" variant="btn btn-danger">cancel</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Input Size</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="colFormLabelSm">Small</Form.Label>
                                        <Form.Control type="email" className=" form-control-sm" id="colFormLabelSm" placeholder="form-control-sm"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="colFormLabel">Default</Form.Label>
                                        <Form.Control type="email" id="colFormLabel" placeholder="form-control"/>
                                    </Form.Group >
                                    <Form.Group className=" mb-0 form-group">
                                        <Form.Label className="pb-0" htmlFor="colFormLabelLg">Large</Form.Label>
                                        <Form.Control type="email" className="form-control-lg" id="colFormLabelLg" placeholder="form-control-lg"/>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Select Size</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form.Group className="form-group">
                                    <Form.Label>Small</Form.Label>
                                    <select  className="form-select form-select-sm mb-3 shadow-none">
                                        <option defaultValue>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label>Default</Form.Label>
                                    <select  className="form-select mb-3 shadow-none">
                                        <option defaultValue>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label>Large</Form.Label>
                                    <select  className="form-select form-select-lg shadow-none">
                                        <option defaultValue>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Horizontal Form</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form className="form-horizontal" action="/action_page.php">
                                    <Form.Group as={Row} className="form-group">
                                        <Form.Label column sm="3" className="control-label align-self-center mb-0" htmlFor="email">Email:</Form.Label>
                                        <Col sm="9">
                                        <Form.Control type="email"  placeholder="Enter Your  email"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="form-group">
                                        <Form.Label column sm="3" className="control-label  align-self-center mb-0" htmlFor="pwd1">Password:</Form.Label>
                                        <Col sm="9">
                                        <Form.Control type="password"  placeholder="Enter Your password"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Check className="mb-3">
                                            <Form.Check.Input type="checkbox" className="me-2" defaultValue id="flexCheckDefault"/>
                                            <Form.Check.Label htmlFor="flexCheckDefault">
                                                Remember me
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Button type="button" variant="btn btn-primary">Submit</Button>{' '}
                                        <Button type="button" variant="btn btn-danger">cancel</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Form row</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Control type="text" placeholder="First name"/>
                                        </Col>
                                        <Col>
                                            <Form.Control type="text" placeholder="Last name"/>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Input</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form>
                                    <Form.Group className="form-group">
                                        <Form.Label htmlFor="exampleInputDisabled1">Disabled Input</Form.Label>
                                        <Form.Control type="text"  id="exampleInputDisabled1" disabled defaultValue="Mark Jhon"/>
                                    </Form.Group>
                                </Form>
                                <Card.Body>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                    <Form className="form-horizontal" action="/action_page.php">
                                        <Form.Group as={Row} className="form-group">
                                            <Form.Label column sm="3" className="control-label align-self-center mb-0" htmlFor="email">Email:</Form.Label>
                                            <Col sm="9">
                                                <Form.Control type="email" placeholder="Enter Your  email"/>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="form-group">
                                            <Form.Label column sm="3" className="control-label align-self-center mb-0" htmlFor="pwd1">Password:</Form.Label>
                                            <Col sm="9">
                                                <Form.Control type="password"   placeholder="Enter Your password"/>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Check className="mb-3">
                                                <Form.Check.Input  type="checkbox" className="me-2" defaultValue="" id="flexCheckDefault1"/>
                                                <Form.Check.Label  htmlFor="flexCheckDefault1">
                                                    Remember me
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Button type="button" variant="btn btn-primary">Submit</Button>{' '}
                                            <Button type="button" variant="btn btn-danger">cancel</Button>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card.Body>
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Form row</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group className="form-group">
                                    <Form.Label htmlFor="exampleInputReadonly">Readonly</Form.Label>
                                    <Form.Control type="text"  id="exampleInputReadonly" disabled defaultValue="Mark Jhon"/>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label  htmlFor="exampleInputcolor">Input Color </Form.Label>
                                    <Form.Control type="color"  id="exampleInputcolor" defaultValue="#50b5ff"/>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label  htmlFor="exampleFormControlSelect1">Select Input</Form.Label>
                                    <select  className="form-select" id="exampleFormControlSelect1">
                                        <option>Select your age</option>
                                        <option>0-18</option>
                                        <option>18-26</option>
                                        <option>26-46</option>
                                        <option>46-60</option>
                                        <option>Above 60</option>
                                    </select>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label  htmlFor="choices-single-default">Select Input New</Form.Label>
                                    <select  className="form-select" data-trigger name="choices-single-default" id="choices-single-default">
                                        <option defaultValue>This is a placeholder</option>
                                        <option value="Choice 1">Choice 1</option>
                                        <option value="Choice 2">Choice 2</option>
                                        <option value="Choice 3">Choice 3</option>
                                    </select>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label  htmlFor="choices-multiple-default">Default</Form.Label>
                                    <select  className="form-select" data-trigger name="choices-multiple-default"  id="choices-multiple-default" multiple>
                                        <option>Choice 1</option>
                                        <option value="Choice 2">Choice 2</option>
                                        <option value="Choice 3">Choice 3</option>
                                        <option value="Choice 4" disabled>Choice 4</option>
                                    </select>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label htmlFor="exampleFormControlSelect2">Example multiple select</Form.Label>
                                    <select multiple="" className="form-select" id="exampleFormControlSelect2">
                                        <option>select-1</option>
                                        <option>select-2</option>
                                        <option>select-3</option>
                                        <option>select-4</option>
                                        <option>select-5</option>
                                        <option>select-6</option>
                                        <option>select-7</option>
                                        <option>select-8</option>
                                    </select>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label htmlFor="customRange1">Range Input</Form.Label>
                                    <Form.Range  id="customRange1" disabled/>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Check className="d-block">
                                        <Form.Check.Input className="me-2"  type="checkbox" defaultValue="" id="flexCheckDefault"/>
                                        <Form.Check.Label  htmlFor="flexCheckDefault">
                                            Default checkbox
                                        </Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="d-block form-group">
                                        <Form.Check.Input className="me-2"  type="checkbox" defaultValue="" id="flexCheckChecked" defaultChecked/>
                                        <Form.Check.Label  htmlFor="flexCheckChecked">
                                            Checked checkbox
                                        </Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="d-block form-group">
                                        <Form.Check.Input className="me-2"  type="checkbox" defaultValue="" id="flexCheckDisabled" disabled/>
                                        <Form.Check.Label  htmlFor="flexCheckDisabled">
                                            Disabled checkbox
                                        </Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="d-block">
                                        <Form.Check.Input className="me-2"  type="checkbox" defaultValue="" id="flexCheckCheckedDisabled" defaultChecked disabled/>
                                        <Form.Check.Label  htmlFor="flexCheckCheckedDisabled">
                                            Disabled checked checkbox
                                        </Form.Check.Label>
                                    </Form.Check>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check className="d-block">
                                        <Form.Check.Input className="me-2"  type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <Form.Check.Label  htmlFor="flexRadioDefault1">
                                            Default radio
                                        </Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="d-block">
                                        <Form.Check.Input className="me-2"  type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked/>
                                        <Form.Check.Label  htmlFor="flexRadioDefault2">
                                            Default checked radio
                                        </Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="d-block">
                                        <Form.Check.Input className="me-2" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled/>
                                        <Form.Check.Label htmlFor="flexRadioDisabled">
                                            Disabled radio
                                        </Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="d-block">
                                        <Form.Check.Input className="me-2" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" defaultChecked disabled/>
                                        <Form.Check.Label htmlFor="flexRadioCheckedDisabled">
                                            Disabled checked radio
                                        </Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="form-radio">
                                        <Form.Check.Input className="me-2" type="radio" id="customRadio5" name="customRadio5"  disabled="" defaultChecked/>
                                        <Form.Check.Label htmlFor="customRadio5"> Selected and  disabled radio</Form.Check.Label>
                                    </Form.Check>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <Form.Check.Input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input me-2"/>
                                        <Form.Label className="custom-control-label" htmlFor="customRadio6"> Default radio</Form.Label>
                                    </div>
                                    <Form.Group className="form-group">
                                        <Form.Check className="d-block">
                                            <Form.Check.Input className="me-2" type="checkbox" defaultValue="" id="flexCheckDefault2"/>
                                            <Form.Check.Label  htmlFor="flexCheckDefault2">
                                                Default checkbox
                                            </Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check className="d-block">
                                            <Form.Check.Input className="me-2" type="checkbox" defaultValue="" id="flexCheckChecked" defaultChecked/>
                                            <Form.Check.Label  htmlFor="flexCheckChecked">
                                                Checked checkbox
                                            </Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check className="d-block">
                                            <Form.Check.Input className="me-2" type="checkbox" defaultValue="" id="flexCheckDisabled" disabled/>
                                            <Form.Check.Label htmlFor="flexCheckDisabled">
                                                Disabled checkbox
                                            </Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check className="d-block">
                                            <Form.Check.Input className="me-2" type="checkbox" defaultValue="" id="flexCheckCheckedDisabled" defaultChecked disabled/>
                                            <Form.Check.Label  htmlFor="flexCheckCheckedDisabled">
                                                Disabled checked checkbox
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </Form.Group>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <Form.Check.Input type="radio" id="customRadio8" name="customRadio6" className="custom-control-input me-2" defaultChecked/>
                                        <Form.Label className="custom-control-label" htmlFor="customRadio8"> Selected radio</Form.Label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <Form.Check.Input type="radio" id="customRadio9" name="customRadio7" className="custom-control-input me-2" disabled/>
                                        <Form.Label className="custom-control-label" htmlFor="customRadio9"> disabled radio</Form.Label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <Form.Check.Input type="radio" id="customRadio10" name="customRadio8" className="custom-control-input me-2" disabled defaultChecked/>
                                        <Form.Label className="custom-control-label" htmlFor="customRadio10"> Selected and  disabled radio</Form.Label>
                                    </div>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Check className="form-switch">
                                        <Form.Check.Input type="checkbox" className="me-2" id="flexSwitchCheckDefault"/>
                                        <Form.Check.Label htmlFor="flexSwitchCheckDefault">Default switch checkbox input</Form.Check.Label>
                                    </Form.Check>
                                    <Form.Group>
                                        <Form.Label  className="custom-file-input">Choose file</Form.Label>
                                        <Form.Control  type="file" id="customFile1"/>
                                    </Form.Group>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label  className="custom-file-input">Example file input</Form.Label>
                                    <Form.Control type="file" id="customFile"/>
                                </Form.Group>
                                <Form.Group className="mb-3 form-group">
                                    <Form.Label   className="custom-file-input">Choose file</Form.Label>
                                    <Form.Control type="file" id="customFile"/>
                                </Form.Group>
                                <Button type="button" variant="btn btn-primary">Submit</Button>{' '}
                                <Button type="button" variant="btn btn-danger">cancel</Button>
                            </Card.Body>
                        </Card>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default FormElement

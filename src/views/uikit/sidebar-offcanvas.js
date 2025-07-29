import React, {useState} from 'react'
import { Offcanvas ,Nav, Button, Collapse} from 'react-bootstrap'


const SidebarOffcanvas =()=> {

     // collapse
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return(
        <>
            
                <button data-trigger="left-side-bar" className="d-xl-none btn btn-xs mid-menu" onClick={handleShow}>
                    <i className="icon">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.75 11.7256L4.75 11.7256" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </i>
                </button>
            
            <Offcanvas show={show} onHide={handleClose} className=" mobile-offcanvas bd-aside card iq-document-card sticky-xl-top text-muted align-self-start mb-5 mt-n5">
                <Offcanvas.Header closeButton>       
                <h2 className="h6 pb-2 border-bottom">On this page</h2>
                </Offcanvas.Header>
                <Offcanvas.Body>
                
                        <ul className="list-unstyled mb-0">
                            <li className="mt-2">
                                <Button variant=" d-inline-flex align-items-center "   
                                        onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}>
                                    Components
                                </Button>
                                <Collapse in={open}>
                                    <ul className="list-unstyled ps-3 " id="components-collapse" to="#components">
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#accordion">Accordion</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#alerts">Alerts</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#badge">Badge</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#breadcrumb">Breadcrumb</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#buttons">Buttons</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#button-group">Button Group</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#calendar">Calendar</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#card">Card</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#carousel">Carousel</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#dropdowns">Dropdowns</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#list-group">List Group</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#modal">Modal</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#navs">Navs</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#navbar">Navbar</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#off-canvas">Off Canvas</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#pagination">Pagination</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#popovers">Popovers</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#progress">Progress</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#scrollspy">Scrollspy</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#spinners">Spinners</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#toasts">Toasts</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#tooltips">Tooltips</Nav.Link></li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className="my-2">
                                <Button variant=" d-inline-flex align-items-center "
                                        onClick={() => setOpen1(!open1)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open1}>
                                    Forms
                                </Button>
                                <Collapse in={open1}>
                                    <ul className="list-unstyled ps-3 " id="forms-collapse" to="#forms">
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#overview">Overview</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#disabled-forms">Disabled Forms</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#sizing">Sizing</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#input-group">Input Group</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#a-form-control">Alertnate Input</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#floating-labels">Floating Labels</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#a-floating-labels">Alertnate Float Labels</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#toggle-btn">Toggle Button</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#validation">Validation</Nav.Link></li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className="mb-2">
                                <Button variant=" d-inline-flex align-items-center " 
                                        onClick={() => setOpen2(!open2)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open2}>
                                    Contents
                                </Button>
                                <Collapse in={open2}>
                                    <ul className="list-unstyled ps-3 " id="contents-collapse" to="#content">
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#typography">Typography</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#images">Images</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#tables">Tables</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#figures">Figures</Nav.Link></li>
                                    </ul>
                                </Collapse>
                            </li>                    
                        </ul>
                    
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SidebarOffcanvas
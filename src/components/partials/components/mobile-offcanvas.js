import React, {useState} from 'react'
import { Offcanvas ,Nav} from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const MobildeOffcanvas =()=> {
    //location
    let location = useLocation();
    
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return(
        <>
            <button data-trigger="navbar_main" className="d-xl-none btn btn-primary rounded-pill p-1 pt-0" type="button" onClick={handleShow}>
                <svg width="20px" height="20px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                </svg>
            </button>
            <Offcanvas show={show} onHide={handleClose} className=" mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav mx-md-auto">
                <Offcanvas.Header closeButton>       
                    <div className="navbar-brand">
                        <svg width="30" className="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"/>
                            <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"/>
                            <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"/>
                            <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"/>
                        </svg>
                        <h4 className="logo-title">Hope UI</h4>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="navbar-nav nav">
                        <Nav.Item as="li"><Link className={`${location.pathname === '/horizontal' ? 'active' : ''} nav-link `} to="/horizontal"> Horizontal </Link></Nav.Item>
                        <Nav.Item as="li"><Link className={`${location.pathname === '/dual-horizontal' ? 'active' : ''} nav-link `} to="/dual-horizontal"> Dual Horizontal </Link></Nav.Item>
                        <Nav.Item as="li"><Link className={`${location.pathname === '/dual-compact' ? 'active' : ''} nav-link `} to="/dual-compact"><span className="item-name">Dual Compact</span></Link></Nav.Item>
                        <Nav.Item as="li"><Link className={`${location.pathname === '/boxed' ? 'active' : ''} nav-link `} to="/boxed"> Boxed Horizontal </Link></Nav.Item>
                        <Nav.Item as="li"><Link className={`${location.pathname === '/boxedFancy' ? 'active' : ''} nav-link `} to="/boxedFancy"> Boxed Fancy</Link></Nav.Item>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default MobildeOffcanvas
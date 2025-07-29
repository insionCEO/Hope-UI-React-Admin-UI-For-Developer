//react
import React, { Fragment, memo } from 'react'
//react-bootstrap
import { Nav, Navbar,Container,Dropdown } from 'react-bootstrap'

//react-router
import { Link,useLocation } from 'react-router-dom'


//components
import HorizontalNav from '../../partials/header/horizontal-nav'
import LandingOffcanvasHeader from '../../partials/header/landing-offcanvas-header'
import CustomToggle from '../../../dropdowns'


const Header1 = memo(() => {
  let location = useLocation();
  return (
    <Fragment>
      <Navbar expand="xl" className="nav navbar-expand-xl navbar-light iq-navbar header-hover-menu">
        <Container fluid className="navbar-inner">
          <div className="d-flex align-items-center justify-content-between w-100 landing-header"> 
            <HorizontalNav/>
            <div className="d-flex align-items-center d-xl-none">
        <LandingOffcanvasHeader/>
        <Link to="home" className="navbar-brand ms-3"> 
            <svg className="icon-30 text-primary" width="30"  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
                <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
                <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
                <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
            </svg> 
            <h5 className="logo-title">Hope UI</h5>
        </Link>
        </div>  
        <ul className="d-block d-xl-none list-unstyled m-0">
        <Dropdown as="li" className="nav-item iq-responsive-menu ">
                    <Dropdown.Toggle as={CustomToggle} variant="btn btn-sm bg-body">
                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                            <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu as="ul" className="dropdown-menu-end" style={{width: '18rem'}} >
                        <li className="px-3 py-0">
                            <div className="form-group input-group mb-0"> 
                            <input type="text" className="form-control" placeholder="Search..." />
                            <span className="input-group-text">
                                <svg className="icon-20" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                    <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </span>
                            </div>
                        </li>
                    </Dropdown.Menu>
                      </Dropdown>
                    </ul>
                    <Link to="home" className=" navbar-nav  align-items-center d-none d-xl-flex"> 
            <svg className="icon-30 text-primary" width="30"  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
                <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
                <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
                <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
            </svg> 
            <h5 className="logo-title ms-3">Hope UI</h5>
        </Link>
            <Nav as="ul" className=" navbar-nav  align-items-center navbar-list d-none d-xl-flex">
              <Nav.Item as="li">
                <Link className={`${location.pathname === '/landing-modules/blog' ? 'active' : ''} nav-link `} to="/landing-modules/blog">Blog</Link>
                </Nav.Item> 
              <Nav.Item as="li">
                <Link className={`${location.pathname === '/landing-modules/faq' ? 'active' : ''} nav-link `} to="/landing-modules/faq">Faq</Link>
                </Nav.Item>
              <Nav.Item as="li">
                <Link className={`${location.pathname === '/landing-modules/contact-us' ? 'active' : ''} nav-link `} to="/landing-modules/contact-us">Contact Us</Link></Nav.Item>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  )
})

export default Header1
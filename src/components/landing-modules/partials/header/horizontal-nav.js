import React, { Fragment, memo } from 'react'
import Logo from '../../../partials/components/logo'
import { Offcanvas,Navbar,Container,Nav} from 'react-bootstrap'
//Router
import { Link,useLocation } from 'react-router-dom'


const HorizontalNav = memo(() => {
  let location = useLocation();

  return (
    <Fragment>
        <Navbar expand="xl" id="navbar_main" className="mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav">
<Container fluid className="p-lg-0">
   <Offcanvas.Header className="px-0">
      <Navbar.Brand className="ms-3">
        <Logo color="true"/>
         {/* {{> partials/components/logo color="true"}} */}
         <h5 className="logo-title">Hope Ui</h5>
      </Navbar.Brand>
      <button className="btn-close float-end px-3"></button>
   </Offcanvas.Header>
  <Nav as="ul" className="navbar-nav iq-nav-menu  list-unstyled" id="header-menu">
  <Nav.Item as="li">
                <Link className={`${location.pathname === '/landing-modules/home'} nav-link `} to="/landing-modules/home">
                  <span className="item-name">Home</span>
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-18" width="18" height="18" viewBox="0 0 24 24"><path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </Link>
                <Nav as="ul" className="iq-header-sub-menu list-unstyled collapse" id="homeData">
                  <Nav.Item as="li">  <Link className={`${location.pathname === '/landing-modules/home' ? 'active' : ''} nav-link `} to="/landing-modules/home">App Landing Page</Link></Nav.Item> 
                  <Nav.Item as="li">  <Link className={`${location.pathname === '/landing-modules/software-landing-page' ? 'active' : ''} nav-link `} to="/landing-modules/software-landing-page"> Software Landing Page </Link> </Nav.Item>
                </Nav>
            </Nav.Item>
      <Nav.Item as="li">
        <Link className={`${location.pathname === '/landing-modules/about' ? 'active' : ''} nav-link `} to="/landing-modules/about">About Us </Link>
        </Nav.Item>
      <Nav.Item as="li">
        <Link className={`${location.pathname === '/landing-modules/features' ? 'active' : ''} nav-link `} to="/landing-modules/features"> Features </Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link className={`${location.pathname === '/landing-modules/pricing' ? 'active' : ''} nav-link `} to="/landing-modules/pricing">Pricing</Link>
        </Nav.Item>
      <Nav.Item as="li" className=" d-xl-none">
        <Link className={`${location.pathname === '/landing-modules/blog' ? 'active' : ''} nav-link `} to="/landing-modules/blog">Blog</Link>
        </Nav.Item> 
      <Nav.Item as="li" className="d-xl-none">
        <Link className={`${location.pathname === '/landing-modules/faq' ? 'active' : ''} nav-link `} to="/landing-modules/faq">Faq</Link>
        </Nav.Item>
      <Nav.Item as="li" className="d-xl-none">
        <Link className={`${location.pathname === '/landing-modules/contact-us' ? 'active' : ''} nav-link `} to="/landing-modules/contact-us">Contact Us</Link>
        </Nav.Item>
   </Nav>
</Container> 
{/* <!-- container-fluid.// --> */}
</Navbar>
    </Fragment>
  )
})

export default HorizontalNav
import React, { Fragment, memo } from 'react'

const Header = memo((props) => {
  return (
    <Fragment>
        <nav className="navbar navbar-expand-md navbar-light main-nav">
    <div className="container-fluid navbar-inner">
         <Link to="#" className="navbar-brand d-lg-none d-flex">
         {/* <Link to="{{path}}dashboard/index.html" className="navbar-brand d-lg-none d-flex"> */}
            <svg className="icon-30 text-primary"  width="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"/>
                <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"/>
                <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"/>
                <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"/>
            </svg>
            <h5 className="logo-title ms-3 text-white">{props.appName }</h5>
        </Link>
        <button className="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Toggle offcanvas</button>
        <div className="offcanvas-lg offcanvas-end header-one" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
            <ul className=" navbar-nav iq-nav-menu list-unstyled">
                <li className="nav-item">
                    <Link className="nav-link menu-arrow justify-content-start" to="#" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="homeData">Home</Link>
                     <ul className="iq-header-sub-menu list-unstyled collapse" id="homeData">
                      <li className="nav-item">
                  <Link className="nav-link {{#compare active '==' 'index'}}active{{/compare}}" to="{{path}}landing-pages/index.html">
                    App Landing Page
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link {{#compare active '==' 'ecommerce-landing-page'}}active{{/compare}}" to="{{path}}landing-pages/ecommerce-landing-page.html">
                    Ecommerce Landing Page
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link {{#compare active '==' 'saas-marketing-landing-page'}}active{{/compare}}" to="{{path}}landing-pages/saas-marketing-landing-page.html">
                    Saas Marketing Landing Page
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link {{#compare active '==' 'software-landing-page'}}active{{/compare}}" to="{{path}}landing-pages/software-landing-page.html">
                      Software Landing Page
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link {{#compare active '==' 'startup-landing-page'}}active{{/compare}}" to="{{path}}landing-pages/startup-landing-page.html">
                    Startup Landing Page
                  </Link>
              </li>
                     </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="about.html">about us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="feature.html">Features</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="pricing.html">Pricing</Link>
                </li>
            </ul>
             <Link to="#" className="navbar-brand order-first order-md-0 mx-0 d-flex">
             {/* <Link to="{{path}}dashboard/index.html" className="navbar-brand order-first order-md-0 mx-0 d-flex"> */}
                <svg className="icon-30 text-primary"  width="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"/>
                    <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"/>
                    <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"/>
                    <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"/>
                </svg>
                <h5 className="logo-title ms-3 text-white">{props.appName}</h5>
            </Link>
            <ul className=" navbar-nav ">
                <li className="nav-item">
                    <Link className="nav-link" to="#">Blog</Link>
                    {/* <Link className="nav-link" to="{{path}}landing-pages/blog.html">Blog</Link> */}
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Shop</Link>
                    {/* <Link className="nav-link" to="{{path}}landing-pages/shop.html">Shop</Link> */}
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Faq</Link>
                    {/* <Link className="nav-link" to="{{path}}landing-pages/faq.html">Faq</Link> */}
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Contact Us</Link>
                    {/* <Link className="nav-link" to="{{path}}landing-pages/contact-us.html">Contact Us</Link> */}
                </li>
            </ul>
        </div>
         
    </div>
</nav>
    </Fragment>
  )
})

export default Header
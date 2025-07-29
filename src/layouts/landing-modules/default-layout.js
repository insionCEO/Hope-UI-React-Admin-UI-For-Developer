import React,{memo,Fragment,useEffect} from 'react'

// react-router
import { Outlet } from 'react-router-dom'

//react-bootstrap
import { Link } from "react-router-dom";

// headers
import Header1 from '../../components/landing-modules/partials/header/header-1'
import Header2 from '../../components/landing-modules/partials/header/header-2'

// import Sidebar from "../../components/partials/dashboard/SidebarStyle/sidebar";

// footers
import Footer from '../../components/landing-modules/partials/footer/footer'

// scss
import '../../assets/landing-modules/scss/landing-pages.scss'
import { Button } from 'react-bootstrap'


const DefaultLayout = memo((props) => {

    useEffect (() =>{
      document.body.classList.add('landing-pages');
      return () => {
        document.body.classList.remove("landing-pages");
      };
    })

  return (
    <Fragment>
      {/* <Sidebar/> */}
      <main className="main-content">
        <div className="position-relative">
          {/* <!--Nav Start--> */}
          {
            props.header1 === "true" &&
            <Header1 />
          }
          {
            props.header2 === "true" &&
            <Header2 />
          }
          {/* <!--Nav End--> */}
        </div>
        <Outlet />
      </main>
      {/* <!--Nav Start--> */}
        <Footer />
        {/* <!--Nav End--> */}

        {/* {{!-- Back-To-Top --}} */}
        <div id="back-to-top" style={{ display: "none" }}>
          <Button size="xs" variant="primary  p-0 position-fixed top" href="#top">
            <svg
              width="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15.5L12 8.5L19 15.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Button>
        </div>
    {/* {{!-- Back-To-end --}} */}
    <Link className="btn btn-fixed-end btn-primary btn-icon btn-landing" to="/dashboard" target="_blank" >
         Dashboard Pages
    </Link>
    </Fragment>
  )
})

DefaultLayout.displayName = "DefaultLayout"
export default DefaultLayout
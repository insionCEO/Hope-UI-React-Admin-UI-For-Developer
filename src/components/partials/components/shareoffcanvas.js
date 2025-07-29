import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Offcanvas} from 'react-bootstrap'
import image1 from '../../../assets/images/brands/08.png'
import image2 from '../../../assets/images/brands/09.png'
import image3 from '../../../assets/images/brands/10.png'
import image4 from '../../../assets/images/brands/11.png'
import image5 from '../../../assets/images/brands/13.png'
import image6 from '../../../assets/images/brands/12.png'

const ShareOffcanvas = ( ) => {
   const [show, setShow] = useState(false);
   const handleShow = () => setShow(true);
   const handleClose = () => setShow(false);
      return (
         <> 
            <Link type="button" to="#" onClick={handleShow}>
               <span className="ms-1" >
                  <svg width="18" className="me-1" viewBox="0 0 24 24">
                     <path fill="currentColor" d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z"></path>
                  </svg>
                  99 Share
               </span>
            </Link>
            <Offcanvas show={show} onHide={handleClose} placement='bottom'>
               <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Share</Offcanvas.Title>
               </Offcanvas.Header>
               <Offcanvas.Body>
                  <div className="d-flex flex-wrap align-items-center">
                     <div className="text-center me-3 mb-3">
                        <img src={image1} className="img-fluid rounded mb-2" alt=""/>
                        <h6>Facebook</h6>
                     </div>
                     <div className="text-center me-3 mb-3">
                        <img src={image2} className="img-fluid rounded mb-2" alt=""/>
                        <h6>Twitter</h6>
                     </div>
                     <div className="text-center me-3 mb-3">
                        <img src={image3} className="img-fluid rounded mb-2" alt=""/>
                        <h6>Instagram</h6>
                     </div>
                     <div className="text-center me-3 mb-3">
                        <img src={image4} className="img-fluid rounded mb-2" alt=""/>
                        <h6>Google Plus</h6>
                     </div>
                     <div className="text-center me-3 mb-3">
                        <img src={image5} className="img-fluid rounded mb-2" alt=""/>
                        <h6>In</h6>
                     </div>
                     <div className="text-center me-3 mb-3">
                        <img src={image6} className="img-fluid rounded mb-2" alt=""/>
                        <h6>YouTube</h6>
                     </div>
                  </div>
               </Offcanvas.Body>
            </Offcanvas>
         </>
   )
}
    
    export default ShareOffcanvas
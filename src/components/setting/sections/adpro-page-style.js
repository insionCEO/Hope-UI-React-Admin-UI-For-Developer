import {memo,Fragment}from 'react'
import RadioBtn from '../elements/radio-btn'

//react-bootstrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

const AdProPageStyle = memo((props) => {
    return (
        <Fragment>
            <div>
                <h6 className="d-inline-block mb-3 me-2">Page Style </h6>
                <small className="badge bg-warning rounded-pill">Pro</small>
                <OverlayTrigger placement="right" overlay={
                    <Tooltip>Wrap your content layout and select Full Width or Boxed styles.  </Tooltip>
                }>
                    <span>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </OverlayTrigger>
            </div>
            <div className="d-grid gap-3 grid-cols-2 mb-4">
                <RadioBtn btnName="page_layout"  labelclassName="d-block"  id="page-layout-boxed" defaultChecked={props.pageLayout} value="container" >
                    Boxed
                </RadioBtn>
                <RadioBtn btnName="page_layout" labelclassName="d-block"  id="page-layout-full-width" defaultChecked={props.pageLayout} value="container-fluid" >
                    Full Width
                </RadioBtn>
            </div>
        </Fragment>
    )
}
)

AdProPageStyle.displayName="AdProPageStyle"
export default AdProPageStyle
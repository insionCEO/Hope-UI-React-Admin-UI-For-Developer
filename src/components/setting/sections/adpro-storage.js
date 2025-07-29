import {memo,Fragment}from 'react'
import RadioBtn from '../elements/radio-btn'

//react-bootstrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

const AdProStorage = memo((props) => {
    return (
        <Fragment>
            <div>
                <h6 className="mb-3 d-inline-block">Storage</h6>
                <OverlayTrigger placement="right" overlay={
                    <Tooltip >You can save the setting changes you made for your project on either Local storage, Session storage.</Tooltip>
                }>
                    <span>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </OverlayTrigger>
            </div>
            <div className="d-grid gap-3 grid-cols-3 mb-4">
                <RadioBtn btnName="saveLocal" id="save-localstorage" labelclassName="d-block" defaultChecked={props.saveLocal} value="localStorage" >
                    Local
                </RadioBtn>
                <RadioBtn btnName="saveLocal" id="save-sessionstorage" labelclassName="d-block" defaultChecked={props.saveLocal} value="sessionStorage" >
                    Session
                </RadioBtn>
                <RadioBtn btnName="saveLocal" id="save-none" labelclassName="d-block" defaultChecked={props.saveLocal} value="none" >
                    None
                </RadioBtn>
            </div>
        </Fragment>
    )
}
)

AdProStorage.displayName="AdProStorage"
export default AdProStorage
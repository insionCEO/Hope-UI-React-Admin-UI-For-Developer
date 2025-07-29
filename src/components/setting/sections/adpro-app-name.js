import {memo,Fragment}from 'react'

import { useDispatch } from 'react-redux'

import SettingAction from '../../../store/setting/actions'

//react-bootstrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

const AdProAppName = memo((props) => {
    const dispatch = useDispatch();
    return (
        <Fragment>
            <h6 className="mb-3 d-inline-block">App Name</h6>
            <OverlayTrigger placement="right" overlay={
                <Tooltip >Edit the App Name with your business name to familiarize your audience.</Tooltip>
            }>
                <span>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
            </OverlayTrigger>
            <div className="d-grid gap-3 grid-cols-1 mb-4">
                <div className="form-group mb-0">
                    <input type="text" data-setting="input" className="form-control" defaultValue={props.appName} onChange={(e) => dispatch(SettingAction.app_name(e.target.value))} maxLength="10" name="app_name" />
                </div>
            </div>
        </Fragment>
    )
})

AdProAppName.displayName="AdProAppName"
export default AdProAppName
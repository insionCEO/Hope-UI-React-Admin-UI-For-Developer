import {memo, Fragment} from 'react'
import CheckboxBtn from '../elements/checkbox-btn'



const MenuHide = memo((props) => {

    return (
        <Fragment>
            <div className="d-flex justify-content-between align-items-center">
            <h5 className="mt-4 mb-3">Menu Hide</h5>
                <div className="form-check form-switch">
                <CheckboxBtn btnName="sidebar_show" type="switch" className="text-center" label="Mini"  labelclassName="overflow-hidden p-0" id="sidebar-hide" defaultChecked={props.sidebarHide} value="sidebar-none" >
                </CheckboxBtn>
                </div>
            </div>
        </Fragment>
    )
}
)

MenuHide.displayName = 'MenuHide'
export default MenuHide
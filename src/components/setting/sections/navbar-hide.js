import {memo, Fragment} from 'react'
import CheckboxBtn from '../elements/checkbox-btn'



const NavbarHide = memo((props) => {

    return (
        <Fragment>
            <div className="d-flex justify-content-between align-items-center">
            <h5 className="mt-4 mb-3">Navbar Hide</h5>
                <div className="form-check form-switch">
                <CheckboxBtn btnName="navbar_show" type="switch" className="text-center" label="Mini"  labelclassName="overflow-hidden p-0" id="navbar-hide" defaultChecked={props.navbarHide} value="iq-navbar-none" >
                </CheckboxBtn>
                </div>
            </div>
        </Fragment>
    )
}
)

NavbarHide.displayName = 'NavbarHide'
export default NavbarHide
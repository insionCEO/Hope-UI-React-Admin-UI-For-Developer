import {memo,Fragment} from 'react'
import RadioBtn from '../elements/radio-btn'

const AdproAnimation = memo((props) => {
  return (
    <Fragment>
         <div>
              <h6 className="d-inline-block mb-3 me-2">Page Transition </h6>
              <small className="badge bg-warning rounded-pill">Pro</small>
            </div>
            <div className="d-grid gap-3 grid-cols-2 mb-4">
                <RadioBtn btnName="theme_transition" id="page-animation" labelclassName="d-block" defaultChecked={props.animation} value="theme-with-animation" >
                    Animation
                </RadioBtn>
                <RadioBtn btnName="theme_transition" id="without-page-animation" labelclassName="d-block" defaultChecked={props.animation} value="theme-without-animation" >
                    No Animation
                </RadioBtn>
            </div>
    </Fragment>
  )
})

AdproAnimation.displayName="AdproAnimation"
export default AdproAnimation
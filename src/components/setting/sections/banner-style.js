import {memo,Fragment}from 'react'
import RadioBtn from '../elements/radio-btn'

// Images
import image4 from '../../../assets/images/settings/dark/04.png'
import image5 from '../../../assets/images/settings/light/04.png'
import image6 from '../../../assets/images/settings/dark/05.png'
import image7 from '../../../assets/images/settings/light/05.png'
import image11 from '../../../assets/images/settings/dark/11.png'
import image12 from '../../../assets/images/settings/light/11.png'

const BannerStyle = memo((props) => {
    return (
        <Fragment>
             <div>
              <h6 className="mt-4 mb-3">Banner Style</h6>
              <div className="d-grid gap-3 grid-cols-3 mb-4">
                <RadioBtn btnName="header_banner" imgComponent={true} label="Color" className="text-center" labelclassName="p-0 d-block overflow-hidden" id="header-banner-color" defaultChecked={props.headerBanner} value="navs-bg-color" >
                    <img src={image11} alt="image1" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <img src={image12} alt="image2" className={` mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="header_banner" imgComponent={true} label="Image" className="text-center" labelclassName="p-0 d-block overflow-hidden" id="header-banner-default" defaultChecked={props.headerBanner} value="default" >
                    <img src={image4} alt="image1" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <img src={image5} alt="image2" className={` mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                </RadioBtn>
                <RadioBtn btnName="header_banner" imgComponent={true} label="Hide" className="text-center" labelclassName="p-0 d-block overflow-hidden" id="hide-banner" defaultChecked={props.headerBanner} value="hide" >
                    <img src={image6} alt="image1" className={` mode dark-img img-fluid`} height="200" width="200" loading="lazy" />
                    <img src={image7} alt="image2" className={` mode light-img img-fluid`} height="200" width="200" loading="lazy" />
                    <small className="badge bg-danger position-absolute top-1 end-0 m-2">Pro</small>
                </RadioBtn>
              </div>
            </div>
        </Fragment>
    )
}
)

BannerStyle.displayName="BannerStyle"
export default BannerStyle
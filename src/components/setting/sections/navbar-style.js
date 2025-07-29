import { memo, Fragment } from "react";
import RadioBtn from "../elements/radio-btn";

// Images
import image1 from "../../../assets/images/settings/dark/01.png";
import image2 from "../../../assets/images/settings/light/01.png";
import image19 from "../../../assets/images/settings/dark/10.png";
import image20 from "../../../assets/images/settings/light/10.png";
import image23 from "../../../assets/images/settings/dark/12.png";
import image24 from "../../../assets/images/settings/light/12.png";

const NavbarStyle = memo((props) => {
  return (
    <Fragment>
      <h5 className="mt-4 mb-3">Navbar Style</h5>
      <div className="d-grid gap-3 grid-cols-2 mb-4">
        <RadioBtn
          btnName="header_navbar"
          imgComponent={true}
          label="Glass"
          className="text-center"
          labelclassName="p-0 overflow-hidden mb-2"
          id="nav-glass"
          defaultChecked={props.headerNavbar}
          value="nav-glass"
        >
          <img
            src={image19}
            alt="image1"
            className={` mode dark-img img-fluid`}
            height="200"
            width="200"
            loading="lazy"
          />
          <img
            src={image20}
            alt="image2"
            className={` mode light-img img-fluid`}
            height="200"
            width="200"
            loading="lazy"
          />
        </RadioBtn>
        <RadioBtn
          btnName="header_navbar"
          imgComponent={true}
          label="Color"
          className="text-center"
          labelclassName="p-0 overflow-hidden mb-2"
          id="navs-color"
          defaultChecked={props.headerNavbar}
          value="navs-color"
        >
          <img
            src={image1}
            alt="image1"
            className={` mode dark-img img-fluid`}
            height="200"
            width="200"
            loading="lazy"
          />
          <img
            src={image2}
            alt="image2"
            className={` mode light-img img-fluid`}
            height="200"
            width="200"
            loading="lazy"
          />
        </RadioBtn>
        <RadioBtn
          btnName="header_navbar"
          imgComponent={true}
          label="Sticky"
          className="text-center"
          labelclassName="p-0 overflow-hidden mb-2"
          id="navs-sticky"
          defaultChecked={props.headerNavbar}
          value="navs-sticky"
        >
          <img
            src={image23}
            alt="image1"
            className={` mode dark-img img-fluid`}
            height="200"
            width="200"
            loading="lazy"
          />
          <img
            src={image24}
            alt="image2"
            className={` mode light-img img-fluid`}
            height="200"
            width="200"
            loading="lazy"
          />
        </RadioBtn>
        <RadioBtn
          btnName="header_navbar"
          imgComponent={true}
          label="Transparent"
          className="text-center"
          labelclassName="p-0 overflow-hidden mb-2"
          id="navs-transparent"
          defaultChecked={props.headerNavbar}
          value="navs-transparent"
        >
          <img
            src={image23}
            alt="image1"
            className={` mode dark-img img-fluid`}
            height="200"
            width="200"
            loading="lazy"
          />
          <img
            src={image24}
            alt="image2"
            className={` mode light-img img-fluid`}
            height="200"
            width="200"
            loading="lazy"
          />
        </RadioBtn>
      </div>
    </Fragment>
  );
});

NavbarStyle.displayName = "NavbarStyle";
export default NavbarStyle;

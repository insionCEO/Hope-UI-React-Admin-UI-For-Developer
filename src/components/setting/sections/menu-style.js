import { memo, Fragment } from "react";
import CheckboxBtn from "../elements/checkbox-btn";

// Images
import image5 from "../../../assets/images/settings/dark/03.png";
import image6 from "../../../assets/images/settings/light/03.png";
import image7 from "../../../assets/images/settings/dark/04.png";
import image8 from "../../../assets/images/settings/light/04.png";
import image9 from "../../../assets/images/settings/dark/05.png";
import image10 from "../../../assets/images/settings/light/05.png";

const MenuStyle = memo((props) => {
  return (
    <Fragment>
      <h5 className="mt-4 mb-3">Sidebar Types</h5>
      <div className="d-grid gap-3 grid-cols-3 mb-4">
        <CheckboxBtn
          btnName="sidebar_type"
          className="text-center"
          imgComponent={true}
          label="Mini"
          labelclassName="overflow-hidden p-0 mb-2"
          id="sidebar-mini"
          defaultChecked={props.sidebarType}
          value="sidebar-mini"
        >
          <img
            src={image5}
            alt="mini"
            className="mode dark-img img-fluid"
            width="200"
            height="200"
            data-setting="sidebar"
            data-name="sidebar-type"
            data-value="sidebar-mini"
            loading="lazy"
          />
          <img
            src={image6}
            alt="mini"
            className="mode light-img img-fluid"
            width="200"
            height="200"
            data-setting="sidebar"
            data-name="sidebar-type"
            data-value="sidebar-mini"
            loading="lazy"
          />
        </CheckboxBtn>
        <CheckboxBtn
          btnName="sidebar_type"
          className="text-center"
          imgComponent={true}
          label="Hover"
          labelclassName="overflow-hidden p-0 mb-2"
          id="sidebar-hover"
          defaultChecked={props.sidebarType}
          value="sidebar-hover"
        >
          <img
            src={image7}
            alt="hover"
            className="mode dark-img img-fluid"
            width="200"
            height="200"
            data-setting="sidebar"
            data-name="sidebar-type"
            data-value="sidebar-hover"
            loading="lazy"
          />
          <img
            src={image8}
            alt="hover"
            className="mode light-img img-fluid"
            width="200"
            height="200"
            data-setting="sidebar"
            data-name="sidebar-type"
            data-value="sidebar-hover"
            loading="lazy"
          />
        </CheckboxBtn>
        <CheckboxBtn
          btnName="sidebar_type"
          className="text-center"
          imgComponent={true}
          label="Boxed"
          labelclassName="overflow-hidden p-0 mb-2"
          id="sidebar-boxed"
          defaultChecked={props.sidebarType}
          value="sidebar-boxed"
        >
          <img
            src={image9}
            alt="boxed"
            className="mode dark-img img-fluid"
            width="200"
            height="200"
            data-setting="sidebar"
            data-name="sidebar-type"
            data-value="sidebar-boxed"
            loading="lazy"
          />
          <img
            src={image10}
            alt="boxed"
            className="mode light-img img-fluid"
            width="200"
            height="200"
            data-setting="sidebar"
            data-name="sidebar-type"
            data-value="sidebar-boxed"
            loading="lazy"
          />
        </CheckboxBtn>
      </div>
    </Fragment>
  );
});

MenuStyle.displayName = "MenuStyle";
export default MenuStyle;

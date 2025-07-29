import { memo, Fragment } from "react";
import RadioBtn from "../elements/radio-btn";

const MenuColor = memo((props) => {
  return (
    <Fragment>
      <h5 className="mt-4 mb-3">Sidebar Color</h5>
      <div className="d-grid gap-3 grid-cols-2 mb-3">
      <RadioBtn
          btnName="sidebar_color"
          imgComponent
          labelclassName="text-center d-block"
          id="sidebar-white"
          defaultChecked={props.sidebarColor}
          value="sidebar-white"
        >
          <span className="">Defult </span>
        </RadioBtn>
        <RadioBtn
          btnName="sidebar_color"
          imgComponent
          labelclassName="text-center d-block"
          id="sidebar-dark"
          defaultChecked={props.sidebarColor}
          value="sidebar-dark"
        >
          <span className=" ">Dark</span>
        </RadioBtn>
        
        <RadioBtn
          btnName="sidebar_color"
          imgComponent
          labelclassName="text-center d-block"
          id="sidebar-color"
          defaultChecked={props.sidebarColor}
          value="sidebar-color"
        >

          <span className="">Color</span>
        </RadioBtn>
      

        <RadioBtn
          btnName="sidebar_color"
          imgComponent
          labelclassName="text-center d-block"
          id="sidebar-transparent"
          defaultChecked={props.sidebarColor}
          value="sidebar-transparent"
        >

          <span className=" ">Transparent</span>
        </RadioBtn>
      </div>
    </Fragment>
  );
});

MenuColor.displayName = "MenuColor";
export default MenuColor;

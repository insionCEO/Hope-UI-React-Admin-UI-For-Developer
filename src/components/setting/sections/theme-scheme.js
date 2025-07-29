import { memo, Fragment, useState } from "react";
import RadioBtn from "../elements/radio-btn";

import _ from "lodash";
//react-bootstrap
import { Tooltip, OverlayTrigger, Collapse } from "react-bootstrap";

// Images
import image1 from "../../../assets/images/settings/dark/01.png";
import image2 from "../../../assets/images/settings/light/01.png";
import image3 from "../../../assets/images/settings/dark/02.png";
import image4 from "../../../assets/images/settings/light/02.png";

import { useDispatch } from "react-redux";
import { theme_color } from "../../../store/setting/actions";

const ThemeScheme = memo((props) => {
  const [open] = useState(false);

  const dispatch = useDispatch();

  const colorValue = props.themeColor;

  const updateColor = (colorClassName, colorObj) => {
    dispatch(theme_color({ value: colorClassName, colors: colorObj }));
  };

  const slowChange = _.debounce((colorClassName, colorObj) => {
    updateColor(colorClassName, colorObj);
  }, 300);

  const colorChange = (colorClassName, colorObj, isDebounce = false) => {
    if (isDebounce) {
      slowChange(colorClassName, colorObj);
    } else {
      updateColor(colorClassName, colorObj);
    }
  };

  return (
    <Fragment>
      <h5 className="mb-3">Scheme</h5>
      <div className="d-grid gap-3 grid-cols-3 mb-4">
        <RadioBtn
          btnName="theme_scheme"
          id="color-mode-auto"
          labelclassName="d-block"
          defaultChecked={props.themeScheme}
          value="auto"
        >
          <svg
            width="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="currentColor" d="M7,2V13H10V22L17,10H13L17,2H7Z" />
          </svg>
          Auto
        </RadioBtn>
        <RadioBtn
          btnName="theme_scheme"
          id="color-mode-dark"
          labelclassName="d-block"
          defaultChecked={props.themeScheme}
          value="dark"
        >
          <svg
            width="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M9,2C7.95,2 6.95,2.16 6,2.46C10.06,3.73 13,7.5 13,12C13,16.5 10.06,20.27 6,21.54C6.95,21.84 7.95,22 9,22A10,10 0 0,0 19,12A10,10 0 0,0 9,2Z"
            />
          </svg>
          Dark
        </RadioBtn>
        <RadioBtn
          btnName="theme_scheme"
          imgComponent
          id="color-mode-light"
          labelclassName="d-block"
          defaultChecked={props.themeScheme}
          value="light"
        >
          <svg
            width="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"
            ></path>
          </svg>
          Light
        </RadioBtn>
      </div>
      <hr className="hr-horizontal" />
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="mt-4 mb-3">Color Customizer</h5>
        <div className="d-flex align-items-center">
          {/*<Link to="#custom-color" role="button" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>Custom</Link>*/}
          <div data-setting="radio">
            <input
              type="radio"
              value="theme-color-default"
              className="btn-check"
              name="theme_color"
              id="theme-color-default"
            />
            <label
              className="btn bg-transparent"
              htmlFor="theme-color-default"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Reset Color"
              data-bs-original-title="Reset color"
            >
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Reset Color</Tooltip>}
              >
                <div
                  data-value="theme-color-default"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Default"
                  data-bs-original-title="Default"
                  onClick={() => {
                    colorChange("theme-color-default", {
                      "--{{prefix}}primary": "#3a57e8",
                      "--{{prefix}}info": "#4bc7d2",
                    });
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.4799 12.2424C21.7557 12.2326 21.9886 12.4482 21.9852 12.7241C21.9595 14.8075 21.2975 16.8392 20.0799 18.5506C18.7652 20.3986 16.8748 21.7718 14.6964 22.4612C12.518 23.1505 10.1711 23.1183 8.01299 22.3694C5.85488 21.6205 4.00382 20.196 2.74167 18.3126C1.47952 16.4293 0.875433 14.1905 1.02139 11.937C1.16734 9.68346 2.05534 7.53876 3.55018 5.82945C5.04501 4.12014 7.06478 2.93987 9.30193 2.46835C11.5391 1.99683 13.8711 2.2599 15.9428 3.2175L16.7558 1.91838C16.9822 1.55679 17.5282 1.62643 17.6565 2.03324L18.8635 5.85986C18.945 6.11851 18.8055 6.39505 18.549 6.48314L14.6564 7.82007C14.2314 7.96603 13.8445 7.52091 14.0483 7.12042L14.6828 5.87345C13.1977 5.18699 11.526 4.9984 9.92231 5.33642C8.31859 5.67443 6.8707 6.52052 5.79911 7.74586C4.72753 8.97119 4.09095 10.5086 3.98633 12.1241C3.8817 13.7395 4.31474 15.3445 5.21953 16.6945C6.12431 18.0446 7.45126 19.0658 8.99832 19.6027C10.5454 20.1395 12.2278 20.1626 13.7894 19.6684C15.351 19.1743 16.7062 18.1899 17.6486 16.8652C18.4937 15.6773 18.9654 14.2742 19.0113 12.8307C19.0201 12.5545 19.2341 12.3223 19.5103 12.3125L21.4799 12.2424Z"
                      fill="#31BAF1"
                    />
                    <path
                      d="M20.0941 18.5594C21.3117 16.848 21.9736 14.8163 21.9993 12.7329C22.0027 12.4569 21.7699 12.2413 21.4941 12.2512L19.5244 12.3213C19.2482 12.3311 19.0342 12.5633 19.0254 12.8395C18.9796 14.283 18.5078 15.6861 17.6628 16.8739C16.7203 18.1986 15.3651 19.183 13.8035 19.6772C12.2419 20.1714 10.5595 20.1483 9.01246 19.6114C7.4654 19.0746 6.13845 18.0534 5.23367 16.7033C4.66562 15.8557 4.28352 14.9076 4.10367 13.9196C4.00935 18.0934 6.49194 21.37 10.008 22.6416C10.697 22.8908 11.4336 22.9852 12.1652 22.9465C13.075 22.8983 13.8508 22.742 14.7105 22.4699C16.8889 21.7805 18.7794 20.4073 20.0941 18.5594Z"
                      fill="#0169CA"
                    />
                  </svg>
                </div>
              </OverlayTrigger>
            </label>
          </div>
        </div>
      </div>

      <Collapse in={open}>
        <div>
          <div className="form-group d-flex justify-content-between align-items-center">
            <label htmlFor="custom-primary-color">Primary</label>
            <input
              name="theme_color"
              data-extra="primary"
              onInput={(e) =>
                colorChange(
                  "custom-color",
                  { "--{{prefix}}primary": e.target.value },
                  true
                )
              }
              type="color"
              id="custom-primary-color"
              value={colorValue.colors["--{{prefix}}primary"]}
            />
          </div>
          <div className="form-group d-flex d-flex justify-content-between align-items-center">
            <label htmlFor="custom-info-color">Secondary</label>
            <input
              name="theme_color"
              data-extra="info"
              onInput={(e) =>
                colorChange(
                  "custom-color",
                  { "--{{prefix}}info": e.target.value },
                  true
                )
              }
              type="color"
              id="custom-info-color"
              value={colorValue.colors["--{{prefix}}info"]}
            />
          </div>
        </div>
      </Collapse>
      <div className="grid-cols-5 mb-4 d-grid gap-3">
        <OverlayTrigger placement="top" overlay={<Tooltip>Theme-1</Tooltip>}>
          <div>
            <input
              type="radio"
              value="theme-color-blue"
              className="btn-check"
              name="theme_color"
              id="theme-color-1"
              onClick={() =>
                colorChange("theme-color-blue", {
                  "--{{prefix}}info": "#573BFF",
                  "--{{prefix}}primary": "#00C3F9",
                })
              }
              defaultChecked={colorValue.value === "theme-color-blue"}
            />
            <label
              className={`btn btn-border d-block bg-transparent`}
              htmlFor="theme-color-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Theme-1"
            >
              <svg
                className="customizer-btn"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="26"
                height="26"
              >
                {" "}
                <circle cx="12" cy="12" r="10" fill="#00C3F9" />{" "}
                <path d="M2,12 a1,1 1 1,0 20,0" fill="#573BFF" />
              </svg>
            </label>
          </div>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Theme-2</Tooltip>}>
          <div>
            <input
              type="radio"
              value="theme-color-gray"
              className="btn-check"
              name="theme_color"
              id="theme-color-2"
              onClick={() =>
                colorChange("theme-color-gray", {
                  "--{{prefix}}info": "#FD8D00",
                  "--{{prefix}}primary": "#91969E",
                })
              }
              defaultChecked={colorValue.value === "theme-color-gray"}
            />
            <label
              className={` btn btn-border d-block bg-transparent`}
              htmlFor="theme-color-2"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Theme-2"
            >
              <svg
                className="customizer-btn"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="26"
                height="26"
              >
                {" "}
                <circle cx="12" cy="12" r="10" fill="#91969E" />{" "}
                <path d="M2,12 a1,1 1 1,0 20,0" fill="#FD8D00" />
              </svg>
            </label>
          </div>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Theme-3</Tooltip>}>
          <div>
            <input
              type="radio"
              value="theme-color-red"
              className="btn-check"
              name="theme_color"
              id="theme-color-3"
              onClick={() => {
                colorChange("theme-color-red", {
                  "--{{prefix}}info": "#366AF0",
                  "--{{prefix}}primary": "#DB5363",
                });
              }}
              defaultChecked={colorValue.value === "theme-color-red"}
            />
            <label
              className={` btn btn-border d-block bg-transparent`}
              htmlFor="theme-color-3"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Theme-3"
            >
              <svg
                className="customizer-btn"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="26"
                height="26"
              >
                {" "}
                <circle cx="12" cy="12" r="10" fill="#DB5363" />{" "}
                <path d="M2,12 a1,1 1 1,0 20,0" fill="#366AF0" />
              </svg>
            </label>
          </div>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Theme-4</Tooltip>}>
          <div>
            <input
              type="radio"
              value="theme-color-yellow"
              className="btn-check"
              name="theme_color"
              id="theme-color-4"
              onClick={() => {
                colorChange("theme-color-yellow", {
                  "--{{prefix}}info": "#6410F1",
                  "--{{prefix}}primary": "#EA6A12",
                });
              }}
              defaultChecked={colorValue.value === "theme-color-yellow"}
            />
            <label
              className={` btn btn-border d-block bg-transparent`}
              htmlFor="theme-color-4"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Theme-4"
            >
              <svg
                className="customizer-btn"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="26"
                height="26"
              >
                {" "}
                <circle cx="12" cy="12" r="10" fill="#EA6A12" />{" "}
                <path d="M2,12 a1,1 1 1,0 20,0" fill="#6410F1" />
              </svg>
            </label>
          </div>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Theme-5</Tooltip>}>
          <div>
            <input
              type="radio"
              value="theme-color-pink"
              className="btn-check"
              name="theme_color"
              id="theme-color-5"
              onClick={() => {
                colorChange("theme-color-pink", {
                  "--{{prefix}}info": "#25C799",
                  "--{{prefix}}primary": "#E586B3",
                });
              }}
              defaultChecked={colorValue.value === "theme-color-pink"}
            />
            <label
              className={`btn btn-border d-block bg-transparent`}
              htmlFor="theme-color-5"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Theme-5"
            >
              <svg
                className="customizer-btn"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="26"
                height="26"
              >
                {" "}
                <circle cx="12" cy="12" r="10" fill="#E586B3" />{" "}
                <path d="M2,12 a1,1 1 1,0 20,0" fill="#25C799" />
              </svg>
            </label>
          </div>
        </OverlayTrigger>
      </div>
      <hr className="hr-horizontal" />

      <h5 className="mt-4 mb-3">Scheme Direction</h5>
      <div className="d-grid gap-3 grid-cols-2 mb-4">
        <RadioBtn
          btnName="theme_scheme_direction"
          imgComponent={true}
          label="LTR"
          className="text-center"
          labelclassName="p-0 mb-2"
          id="theme-scheme-direction-ltr"
          defaultChecked={props.themeSchemeDirection}
          value="ltr"
        >
          <img
            src={image1}
            alt="ltr"
            className={`mode dark-img img-fluid`}
            data-setting="dir-mode"
            data-name="dir"
            data-value="ltr"
            loading="lazy"
          />
          <img
            src={image2}
            alt="ltr"
            className={`mode light-img img-fluid`}
            data-setting="dir-mode"
            data-name="dir"
            data-value="ltr"
            loading="lazy"
          />
        </RadioBtn>
        <RadioBtn
          btnName="theme_scheme_direction"
          imgComponent={true}
          label="RTL"
          className="text-center"
          labelclassName="p-0 mb-2"
          id="theme-scheme-direction-rtl"
          defaultChecked={props.themeSchemeDirection}
          value="rtl"
        >
          <img
            src={image3}
            alt="rtl"
            className={` mode dark-img img-fluid`}
            data-setting="dir-mode"
            data-name="dir"
            data-value="rtl"
            loading="lazy"
          />
          <img
            src={image4}
            alt="rtl"
            className={` mode light-img img-fluid`}
            data-setting="dir-mode"
            data-name="dir"
            data-value="rtl"
            loading="lazy"
          />
        </RadioBtn>
      </div>
    </Fragment>
  );
});
ThemeScheme.displayName = "ThemeScheme";
export default ThemeScheme;

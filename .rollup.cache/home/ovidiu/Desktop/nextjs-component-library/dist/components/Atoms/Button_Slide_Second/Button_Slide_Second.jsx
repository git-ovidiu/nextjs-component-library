import React from "react";
import "./Button_Slide_Second.scss";
export default function Button_Slide_Second(props) {
    return (<>
        <div className="tertiary-button">
            <button className={"\n            ".concat(props.hover_effect === "tertiary" ? 'btn_hover_left' : "", "\n          ")}>
              <span className={"".concat(props.iconPosition === "left" ? "reverse" : '')}>
                  {props.text}
                {props.icon ? (<div className="icon">
                    {props.icon}
                  </div>) : ''}
              </span>
            </button>
        </div>
    </>);
}
//# sourceMappingURL=Button_Slide_Second.jsx.map
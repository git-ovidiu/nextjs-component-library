import React from "react";
import "./Button_Slide.scss";
export default function Button_slide(props) {
    return (<>
        <div className="btn_holder">
            <button className={"\n          ".concat(props.hover_effect === "slide-down" ? "btn_hover_slide slide_down" : "", "\n          ").concat(props.hover_effect === "slide-up" ? "btn_hover_slide slide_up" : "", "\n          ").concat(props.hover_effect === "slide-right" ? "btn_hover_slide slide_right" : "", "\n          ").concat(props.hover_effect === "slide-left" ? "btn_hover_slide slide_left" : "", "\n          ")}>
              <span>{props.text}</span>
            </button>
        </div>
    </>);
}
//# sourceMappingURL=Button_Slide.jsx.map
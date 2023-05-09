import React from "react";
import "./Button_Slide.scss";
export default function Button_slide(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: "".concat(props.padding === "xs" ? "padding-xs" : "").concat(props.padding === "s" ? "padding-s" : "").concat(props.padding === "m" ? "padding-m" : "").concat(props.padding === "l" ? "padding-l" : "").concat(props.padding === "xl" ? "padding-xl" : "").concat(props.padding === "xxl" ? "padding-xxl" : "", " ").concat(props.hover_effect === "slide-down"
                ? "btn_hover_slide slide_down"
                : "").concat(props.hover_effect === "slide-up" ? "btn_hover_slide slide_up" : "").concat(props.hover_effect === "slide-right"
                ? "btn_hover_slide slide_right"
                : "").concat(props.hover_effect === "slide-left"
                ? "btn_hover_slide slide_left"
                : "", " ") },
            React.createElement("span", { className: "".concat(props.iconPosition === "left" ? "reverse" : "") },
                props.text,
                props.icon ? React.createElement("div", { className: "icon" }, props.icon) : ""))));
}
//# sourceMappingURL=Button_Slide.js.map
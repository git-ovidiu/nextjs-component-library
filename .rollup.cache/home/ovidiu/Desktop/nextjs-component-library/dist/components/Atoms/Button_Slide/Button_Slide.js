import React from "react";
import "./Button_Slide.scss";
export default function Button_slide(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "btn_holder" },
            React.createElement("button", { className: "\n          ".concat(props.hover_effect === "slide-down" ? "btn_hover_slide slide_down" : "", "\n          ").concat(props.hover_effect === "slide-up" ? "btn_hover_slide slide_up" : "", "\n          ").concat(props.hover_effect === "slide-right" ? "btn_hover_slide slide_right" : "", "\n          ").concat(props.hover_effect === "slide-left" ? "btn_hover_slide slide_left" : "", "\n          ") },
                React.createElement("span", { className: "".concat(props.iconPosition === "left" ? "reverse" : '') },
                    props.text,
                    props.icon ? (React.createElement("div", { className: "icon" }, props.icon)) : '')))));
}
//# sourceMappingURL=Button_Slide.js.map
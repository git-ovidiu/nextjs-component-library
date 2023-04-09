import React from "react";
import "./Button_Slide_Second.scss";
export default function Button_Slide_Second(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "tertiary-button" },
            React.createElement("button", { className: "\n            ".concat(props.hover_effect === "tertiary" ? 'btn_hover_left' : "", "\n          ") },
                React.createElement("span", { className: "".concat(props.iconPosition === "left" ? "reverse" : '') },
                    props.text,
                    props.icon ? (React.createElement("div", { className: "icon" }, props.icon)) : '')))));
}
//# sourceMappingURL=Button_Slide_Second.js.map
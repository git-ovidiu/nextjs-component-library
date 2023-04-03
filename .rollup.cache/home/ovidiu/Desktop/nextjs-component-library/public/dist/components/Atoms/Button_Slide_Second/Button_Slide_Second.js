import React from "react";
import "./Button_Slide_Second.scss";
export default function Button_Slide_Second(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "btn_holder" },
            React.createElement("button", { className: "\n            ".concat(props.hover_effect === "tertiary" ? 'btn_hover_left' : "", "\n          ") },
                React.createElement("span", null, props.text)))));
}
//# sourceMappingURL=Button_Slide_Second.js.map
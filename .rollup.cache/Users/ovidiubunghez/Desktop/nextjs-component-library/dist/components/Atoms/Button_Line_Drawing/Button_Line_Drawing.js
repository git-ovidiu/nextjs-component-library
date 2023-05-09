import React from "react";
import "./Button_Line_Drawing.scss";
export default function Button_Line_Drawing(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: "".concat(props.padding === "xs" ? "padding-xs" : "").concat(props.padding === "s" ? "padding-s" : "").concat(props.padding === "m" ? "padding-m" : "").concat(props.padding === "l" ? "padding-l" : "").concat(props.padding === "xl" ? "padding-xl" : "").concat(props.padding === "xxl" ? "padding-xxl" : "", " ").concat(props.line_effect === "line-below" ? "btn_hover_line line_below" : "").concat(props.line_effect === "line-above" ? "btn_hover_line line_above" : "").concat(props.line_effect === "line-side" ? "btn_hover_line line_side" : "", " ") },
            React.createElement("span", null, props.text))));
}
//# sourceMappingURL=Button_Line_Drawing.js.map
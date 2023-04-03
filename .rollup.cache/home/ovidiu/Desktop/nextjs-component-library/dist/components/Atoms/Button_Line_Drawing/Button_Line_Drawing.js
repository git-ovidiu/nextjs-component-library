import React from "react";
import "./Button_Line_Drawing.scss";
export default function Button_Line_Drawing(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "btn_holder" },
            React.createElement("button", { className: "\n            ".concat(props.line_effect === "line-below" ? 'btn_hover_line line_below' : "", "\n          ").concat(props.line_effect === "line-above" ? 'btn_hover_line line_above' : "", "\n          ").concat(props.line_effect === "line-side" ? 'btn_hover_line line_side' : "", "\n          ") },
                React.createElement("span", null, props.text)))));
}
//# sourceMappingURL=Button_Line_Drawing.js.map
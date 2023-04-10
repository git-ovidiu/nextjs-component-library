import { __assign } from "tslib";
import React from "react";
import "./Label.scss";
export default function Label(props) {
    return (React.createElement("div", { className: "a-label", style: __assign({ '--a-label-color': props.color, '--a-label-background-color': props.backgroundColor }, props.style) }, props.text));
}
//# sourceMappingURL=Label.js.map
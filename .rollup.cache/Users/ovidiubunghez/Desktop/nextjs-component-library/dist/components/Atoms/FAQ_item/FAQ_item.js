import React from "react";
import "./FAQ_item.scss";
export default function FAQ_item(props) {
    var _a = React.useState(false), toggle = _a[0], setToggle = _a[1];
    var toggleFaq = function () {
        setToggle(function (prevToggle) { return !prevToggle; });
    };
    return (React.createElement("div", { className: "faq-item ".concat(toggle ? "toggle" : ""), onClick: toggleFaq },
        React.createElement("div", { className: "content" },
            React.createElement("div", { className: "title" }, props.title),
            React.createElement("div", { className: "hidden-text animated-title" }, props.description)),
        React.createElement("div", { className: "arrow" }, props.arrow)));
}
//# sourceMappingURL=FAQ_item.js.map
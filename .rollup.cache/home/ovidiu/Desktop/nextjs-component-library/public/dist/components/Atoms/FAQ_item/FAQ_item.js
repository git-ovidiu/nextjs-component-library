import React from "react";
import "./FAQ_item.scss";
import { motion } from 'framer-motion';
export default function FAQ_item(props) {
    var _a = React.useState(false), toggle = _a[0], setToggle = _a[1];
    var toggleFaq = function () {
        setToggle(function (prevToggle) { return !prevToggle; });
    };
    return (React.createElement(motion.div, { className: "faq-item ".concat(toggle ? 'toggle' : ''), onClick: toggleFaq, initial: { y: -200, opacity: 0 }, animate: { y: 0, opacity: 1 } },
        React.createElement("div", { className: "content" },
            React.createElement("div", { className: "title" }, props.title),
            React.createElement("div", { className: "hidden-text" }, props.description)),
        React.createElement("div", { className: "arrow" }, props.arrow),
        React.createElement("div", { className: "close" }, props.close)));
}
//# sourceMappingURL=FAQ_item.js.map
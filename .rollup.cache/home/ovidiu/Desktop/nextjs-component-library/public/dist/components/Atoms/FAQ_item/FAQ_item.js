import React from "react";
import "./FAQ_item.scss";
export default function FAQ_item(props) {
    var toggle = false;
    var toggleFaq = function () {
        toggle = !toggle;
        var faqItem = document.querySelector('.faq-item');
        if (faqItem !== null) {
            if (toggle) {
                faqItem.classList.add('toggle');
            }
            else {
                faqItem.classList.remove('toggle');
            }
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "faq-item ".concat(toggle ? 'toggle' : ''), onClick: toggleFaq },
            React.createElement("div", { className: "content" },
                React.createElement("div", { className: "title" }, props.title),
                React.createElement("div", { className: "hidden-text" }, props.description)),
            React.createElement("div", { className: "arrow" }, props.arrow),
            React.createElement("div", { className: "close" }, props.close))));
}
//# sourceMappingURL=FAQ_item.js.map
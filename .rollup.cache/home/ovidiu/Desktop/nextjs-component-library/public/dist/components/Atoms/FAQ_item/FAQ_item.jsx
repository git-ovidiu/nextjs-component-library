import React from "react";
import "./FAQ_item.scss";
export default function FAQ_item(props) {
    var _a = React.useState(false), toggle = _a[0], setToggle = _a[1];
    var toggleFaq = function () {
        setToggle(function (prevToggle) { return !prevToggle; });
    };
    return (<div className={"faq-item ".concat(toggle ? 'toggle' : '')} onClick={toggleFaq}>
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="hidden-text">{props.description}</div>
      </div>
      <div className="arrow">{props.arrow}</div>
      <div className="close">{props.close}</div>
    </div>);
}
//# sourceMappingURL=FAQ_item.jsx.map
import React from "react";
import "./Card.scss";
export default function Card(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "m-card" },
            props.image ? React.createElement("div", { className: "image" }, props.image) : "",
            props.labels ? React.createElement("div", { className: "labels" }, props.labels) : "",
            props.title ? React.createElement("div", { className: "title" }, props.title) : "",
            props.description ? React.createElement("div", { className: "description" }, props.description) : "",
            props.buttons ? React.createElement("div", { className: "buttons" }, props.buttons) : "")));
}
//# sourceMappingURL=Card.js.map
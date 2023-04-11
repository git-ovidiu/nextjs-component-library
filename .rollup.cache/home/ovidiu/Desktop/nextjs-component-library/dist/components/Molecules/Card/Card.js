import React from "react";
import "./Card.scss";
export default function Card(props) {
    return (React.createElement("div", { className: "card-container" }, props.image_full_width ? (React.createElement("div", { className: "m-card image-full-width" },
        React.createElement("div", { className: "image" }, props.image ? React.createElement("div", { className: "image" }, props.image) : ""),
        React.createElement("div", { className: "content" },
            props.labels ? React.createElement("div", { className: "labels" }, props.labels) : "",
            props.title ? React.createElement("div", { className: "title" }, props.title) : "",
            props.description ? (React.createElement("div", { className: "description" }, props.description)) : (""),
            props.buttons ? (React.createElement("div", { className: "buttons" }, props.buttons)) : ("")))) : (React.createElement("div", { className: "m-card" },
        props.image ? React.createElement("div", { className: "image" }, props.image) : "",
        props.labels ? React.createElement("div", { className: "labels" }, props.labels) : "",
        props.title ? React.createElement("div", { className: "title" }, props.title) : "",
        props.description ? (React.createElement("div", { className: "description" }, props.description)) : (""),
        props.buttons ? React.createElement("div", { className: "buttons" }, props.buttons) : ""))));
}
//# sourceMappingURL=Card.js.map
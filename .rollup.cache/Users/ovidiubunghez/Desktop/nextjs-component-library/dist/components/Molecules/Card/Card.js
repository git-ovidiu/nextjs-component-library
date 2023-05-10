import React from "react";
import "./Card.scss";
export default function Card(props) {
    var imageElement = props.image ? (React.createElement("div", { className: "image" }, props.image)) : null;
    var labelsElement = props.labels ? (React.createElement("div", { className: "labels" }, props.labels)) : null;
    var titleElement = props.title ? (React.createElement("div", { className: "title" }, props.title)) : null;
    var descriptionElement = props.description ? (React.createElement("div", { className: "description" }, props.description)) : null;
    var buttonsElement = props.buttons ? (React.createElement("div", { className: "buttons" }, props.buttons)) : null;
    var cardImageClass = props.image_full_width
        ? "m-card image-full-width"
        : "";
    var isOverlapped = props.is_overlapped ? "m-card m-card-overlapped" : "";
    return (React.createElement("div", { className: "card-container" },
        React.createElement("div", { className: "m-card ".concat(isOverlapped, " ").concat(cardImageClass) },
            imageElement,
            React.createElement("div", { className: "content" },
                labelsElement,
                titleElement,
                descriptionElement,
                buttonsElement))));
}
//# sourceMappingURL=Card.js.map
import React from "react";
import "./Colors.scss";
export default function Colors() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "colors-container" },
            React.createElement("div", { className: "small-container" },
                React.createElement("p", { className: "title" }, "Primary"),
                React.createElement("div", { className: "color-only primary" })),
            React.createElement("div", { className: "small-container" },
                React.createElement("p", { className: "title" }, "Secondary"),
                React.createElement("div", { className: "color-only secondary" })),
            React.createElement("div", { className: "small-container" },
                React.createElement("p", { className: "title" }, "Tertiary"),
                React.createElement("div", { className: "color-only tertiary" })),
            React.createElement("div", { className: "small-container" },
                React.createElement("p", { className: "title" }, "Extra"),
                React.createElement("div", { className: "color-only extra" })))));
}
//# sourceMappingURL=Colors.js.map
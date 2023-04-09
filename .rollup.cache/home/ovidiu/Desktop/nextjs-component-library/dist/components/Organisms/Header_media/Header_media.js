import React from "react";
import "./Header_media.scss";
import "bootstrap/dist/css/bootstrap.css";
export default function Header_media(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "o-header-media" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "backgrund-image" }, props.backgroundImage),
                React.createElement("div", { className: "row d-flex flex-row flex-row-reverse justify-content-center align-items-center" },
                    React.createElement("div", { className: "col-12 col-md-6" }, props.content),
                    React.createElement("div", { className: "col-12 col-md-6" }, props.visual))))));
}
//# sourceMappingURL=Header_media.js.map
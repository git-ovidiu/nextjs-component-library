import React from "react";
import "./Media.scss";
import Image from "next/image";
export default function Media(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Image, { src: props.src, alt: "Placeholder", width: 200, height: 200, layout: "responsive" })));
}
//# sourceMappingURL=Media.js.map
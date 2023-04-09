import React from "react";
import "./Header_media.scss";
import "bootstrap/dist/css/bootstrap.css";
export default function Header_media(props) {
    return (<>
      <section className="o-header-media">
        <div className="container">
        <div className="backgrund-image">{props.backgroundImage}</div>
          <div className="row d-flex flex-row flex-row-reverse justify-content-center align-items-center">
            <div className="col-12 col-md-6">{props.content}</div>
            <div className="col-12 col-md-6">{props.visual}</div>
          </div>
        </div>
      </section>
    </>);
}
//# sourceMappingURL=Header_media.jsx.map
import React, { ReactElement } from "react";
import "./Media_and_paragraph.scss";
export interface Media_and_paragraphProps {
  content?: ReactElement;
  image?: ReactElement;
  "reverse-media"?: boolean;
  "align-elements-center"?: string;
}
export default function Media_and_paragraph(props: Media_and_paragraphProps) {
  return (
    <>
      <section className="o-media-and-paragraph">
        <div className="container">
          <div
            className={`row ${
              props["reverse-media"] ? "flex-row-reverse" : ""
            } ${props["align-elements-center"] ? "align-items-end" : ""}`}
          >
            <div className="col-md-6">{props.content}</div>
            <div className="col-md-6">
              <div className="image-container">{props.image}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

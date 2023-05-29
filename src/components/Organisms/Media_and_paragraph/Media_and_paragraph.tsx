import React, { ReactElement } from "react";
import "./Media_and_paragraph.scss";
export interface Media_and_paragraphProps {
  content?: ReactElement;
  image?: ReactElement;
  "reverse-media"?: boolean;
  "align-elements"?: string;
  "image-col-md"?: number
  "content-col-md"?: number
    "image-offset-breakpoint"?: string;
    "content-offset-breakpoint"?: string;
    "image-offset-value"?: number;
    "content-offset-value"?: number;
}
export default function Media_and_paragraph(props: Media_and_paragraphProps) {
  const alignment =
    props["align-elements"] === "end"
      ? "end"
      : props["align-elements"] === "start"
      ? "start"
      : "center";

  const row_alignment_classes = `row ${props["reverse-media"] ? "flex-md-row-reverse" : ""} align-items-${alignment}`;

  return (
    <>
      <section className="o-media-and-paragraph">
        <div className="container">
          <div className={row_alignment_classes}>
            <div className={`col-12 col-md-${props["image-col-md"]} offset-${props["image-offset-breakpoint"]}-${props["image-offset-value"]}`}>
              <div className="image-container">{props.image}</div>
            </div>
            <div className={`col-12 col-md-${props["content-col-md"]} offset-${props["content-offset-breakpoint"]}-${props["content-offset-value"]}`}>{props.content}</div>
          </div>
        </div>
      </section>
    </>
  );
}

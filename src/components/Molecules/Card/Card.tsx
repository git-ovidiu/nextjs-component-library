import React, {CSSProperties, ReactElement} from "react";
import "./Card.scss";

interface CardStyle extends CSSProperties {
  "--m-card-image-height-mobile"? : string;
  "--m-card-image-height-tablet"? : string;
  "--m-card-image-height-desktop"? : string;
}

export interface CardProps {
  style?: CardStyle;
  image?: ReactElement | string;
  labels?: ReactElement | string;
  title?: ReactElement | string;
  description?: ReactElement | string;
  buttons?: ReactElement | string;
  "image-full-width"?: boolean;
  "is-overlapped"?: boolean;
  "image-height-mobile"?: string;
  "image-height-tablet"?: string;
  "image-height-desktop"?: string;
}

export default function Card(props: CardProps) {
  const imageElement = props.image ? (
    <div className="image">{props.image}</div>
  ) : null;

  const labelsElement = props.labels ? (
    <div className="labels">{props.labels}</div>
  ) : null;

  const titleElement = props.title ? (
    <div className="title">{props.title}</div>
  ) : null;

  const descriptionElement = props.description ? (
    <div className="description">{props.description}</div>
  ) : null;

  const buttonsElement = props.buttons ? (
    <div className="buttons">{props.buttons}</div>
  ) : null;

  const imageFullWidth = props["image-full-width"]
    ? "m-card image-full-width"
    : "";
  const isOverlapped = props["is-overlapped"] ? "m-card m-card-overlapped" : "";

  return (
    <div className="m-card" style={{"--m-card-image-height-mobile": props["image-height-mobile"], "--m-card-image-height-tablet": props["image-height-tablet"], "--m-card-image-height-desktop": props["image-height-desktop"], ...props.style}}>
      <div className={`card-container ${isOverlapped} ${imageFullWidth}`}>
        {imageElement}
        <div className="content">
          <div className="text-content">
          {labelsElement}
          {titleElement}
          {descriptionElement}
          </div>
          <div className="action-content">
          {buttonsElement}
          </div>
        </div>
      </div>
    </div>
  );
}

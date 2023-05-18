import React, { ReactNode } from "react";
import "./Card.scss";

export interface CardProps {
  image?: ReactNode | string;
  labels?: ReactNode | string;
  title?: ReactNode | string;
  description?: ReactNode | string;
  buttons?: ReactNode | string;
  image_full_width?: boolean;
  is_overlapped?: boolean;
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

  const cardImageClass = props.image_full_width
    ? "m-card image-full-width"
    : "";
  const isOverlapped = props.is_overlapped ? "m-card m-card-overlapped" : "";

  return (
    <div className="card-container">
      <div className={`m-card ${isOverlapped} ${cardImageClass}`}>
        {imageElement}
        <div className="content">
          {labelsElement}
          {titleElement}
          {descriptionElement}
          {buttonsElement}
        </div>
      </div>
    </div>
  );
}

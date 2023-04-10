import React, { ReactElement, CSSProperties } from "react";
import "./Card.scss";

export interface CardProps {
  image?: ReactElement;
  labels?: ReactElement;
  title?: ReactElement;
  description?: ReactElement;
  buttons?: ReactElement;
}

export default function Card(props: CardProps) {
  return (
    <>
      <div className="m-card">
        {props.image ? <div className="image">{props.image}</div> : ""}
        {props.labels ? <div className="labels">{props.labels}</div> : ""}
        {props.title ? <div className="title">{props.title}</div> : ""}
        {props.description ? <div className="description">{props.description}</div> : ""}
        {props.buttons ? <div className="buttons">{props.buttons}</div> : ""}
      </div>
    </>
  );
}

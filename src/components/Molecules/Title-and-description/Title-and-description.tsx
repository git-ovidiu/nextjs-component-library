import React, { ReactElement } from "react";
import "./Title-and-description.scss";
export interface TitleAndDescriptionProps {
  label?: ReactElement | string;
  title?: ReactElement | string;
  description?: ReactElement | string;
  action?: ReactElement | string;
  "text-align": string;
}
export default function TitleAndDescription(props: TitleAndDescriptionProps) {
  return (
    <>
      <div className={`m-title-and-description ${props["text-align"]} === "center" ? 'center' : ''} ${props["text-align"] === "right" ? "right" : ''}`}>
        {props.label ? <div className="label">{props.label}</div> : ""}
        {props.title ? <div className="title">{props.title}</div> : ""}
        {props.description ? <div className="description">{props.description}</div> : ""}
        {props.action ? <div className="action">{props.action}</div> : ""}
      </div>
    </>
  );
}

// todo de facut update la snippet-ul de buton peste tot unde apare !!!
import React, { ReactElement } from "react";
import "./Title_and_description.scss";
export interface TitleAndDescriptionProps {
  label?: ReactElement | string;
  title?: ReactElement | string;
  description?: ReactElement | string;
  action?: ReactElement | string;
  text_align: string;
}
export default function Title_and_description(props: TitleAndDescriptionProps) {
  return (
    <>
      <div className={`m-title-and-description ${props.text_align === "center" ? 'center' : ''} ${props.text_align === "right" ? "right" : ''}`}>
        {props.label ? <div className="label">{props.label}</div> : ""}
        {props.title ? <div className="title">{props.title}</div> : ""}
        {props.description ? <div className="description">{props.description}</div> : ""}
        {props.action ? <div className="action">{props.action}</div> : ""}
      </div>
    </>
  );
}

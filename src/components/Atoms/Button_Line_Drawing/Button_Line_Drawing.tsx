import React, { ReactElement } from "react";
import "./Button_Line_Drawing.scss";

export interface Button_Line_Drawing_Props {
  text?: string;
  "line-effect": string;
  padding: string;
  icon?: ReactElement | string;
  "icon-position"?: string;
}

export default function Button_Line_Drawing(props: Button_Line_Drawing_Props) {
  return (
    <>
      <button
        className={`${props.padding === "xxs" ? "padding-xxs" : ""}${
          props.padding === "xs" ? "padding-xs" : ""
        }${props.padding === "s" ? "padding-s" : ""}${
          props.padding === "m" ? "padding-m" : ""
        }${props.padding === "l" ? "padding-l" : ""}${
          props.padding === "xl" ? "padding-xl" : ""
        }${props.padding === "xxl" ? "padding-xxl" : ""} ${
          props["line-effect"] === "line-below" ? "btn_hover_line line_below" : ""
        }${
          props["line-effect"] === "line-above" ? "btn_hover_line line_above" : ""
        }${
          props["line-effect"] === "line-side" ? "btn_hover_line line_side" : ""
        } `}
      >
        <span className={`${props["icon-position"] === "left" ? "reverse" : ""}`}>
          {props.text}
          {props.icon ? <div className="icon">{props.icon}</div> : ""}
        </span>
      </button>
    </>
  );
}

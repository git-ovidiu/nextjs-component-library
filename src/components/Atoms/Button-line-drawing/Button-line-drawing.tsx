import React, { ReactElement } from "react";
import "./Button-line-drawing.scss";
import Link from "next/link"

export interface ButtonLineDrawingProps {
  text?: string;
  "line-effect": string;
  padding: string;
  icon?: ReactElement | string;
  "icon-position"?: string;
  "link-url"?: string;
  "open-in-new-tab"?: boolean;
}

export default function ButtonLineDrawing(props: ButtonLineDrawingProps) {
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
        <Link href={props["link-url"] || ""} target={props["open-in-new-tab"] ? '_blank' : ''}
            className={`${props["icon-position"] === "left" ? "reverse" : ""}`}>
          {props.text}
          {props.icon ? <div className="icon">{props.icon}</div> : ""}
        </Link>
      </button>
    </>
  );
}

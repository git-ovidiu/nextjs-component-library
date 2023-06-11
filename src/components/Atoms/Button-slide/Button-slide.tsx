import React, { ReactElement } from "react";
import "./Button-slide.scss";
import Link from "next/link"
export interface ButtonProps {
  text: string;
  "hover-effect": string;
  icon?: ReactElement | string;
  "icon-position"?: string;
  padding: string;
  "link-url"?: string;
  "open-in-new-tab"?: boolean;
}
export default function ButtonSlide(props: ButtonProps) {
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
          props["hover-effect"] === "slide-down"
            ? "btn_hover_slide slide_down"
            : ""
        }${
          props["hover-effect"] === "slide-up" ? "btn_hover_slide slide_up" : ""
        }${
          props["hover-effect"] === "slide-right"
            ? "btn_hover_slide slide_right"
            : ""
        }${
          props["hover-effect"] === "slide-left"
            ? "btn_hover_slide slide_left"
            : ""
        } `}
      >
          <Link href={props["link-url"] || ""} target={props["open-in-new-tab"] ? '_blank' : ''}
            className={`${props["icon-position"] === "left" ? "reverse" : ""}`}
          >
            {props.text}
            {props.icon ? <div className="icon">{props.icon}</div> : ""}
        </Link>
      </button>
    </>
  );
}

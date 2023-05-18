import React, { ReactElement } from "react";
import "./Button_Slide.scss";
export interface ButtonProps {
  text: string;
  hover_effect: string;
  icon?: ReactElement | string;
  iconPosition?: string;
  padding?: string;
}
export default function Button_slide(props: ButtonProps) {
  return (
    <>
      <button
        className={`${props.padding === "xs" ? "padding-xs" : ""}${
          props.padding === "s" ? "padding-s" : ""
        }${props.padding === "m" ? "padding-m" : ""}${
          props.padding === "l" ? "padding-l" : ""
        }${props.padding === "xl" ? "padding-xl" : ""}${
          props.padding === "xxl" ? "padding-xxl" : ""
        } ${
          props.hover_effect === "slide-down"
            ? "btn_hover_slide slide_down"
            : ""
        }${
          props.hover_effect === "slide-up" ? "btn_hover_slide slide_up" : ""
        }${
          props.hover_effect === "slide-right"
            ? "btn_hover_slide slide_right"
            : ""
        }${
          props.hover_effect === "slide-left"
            ? "btn_hover_slide slide_left"
            : ""
        } `}
      >
        <span className={`${props.iconPosition === "left" ? "reverse" : ""}`}>
          {props.text}
          {props.icon ? <div className="icon">{props.icon}</div> : ""}
        </span>
      </button>
    </>
  );
}

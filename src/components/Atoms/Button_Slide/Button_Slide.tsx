import React from "react";
import "./Button_Slide.scss";

export interface ButtonProps {
  text: string;
  hover_effect: string;
  test: string;
}

export default function Button_slide(props: ButtonProps) {
  return (
    <>
        <div className="btn_holder">
            <button
              className={`
          ${props.hover_effect === "slide-down" ? "btn_hover_slide slide_down" : ""}
          ${props.hover_effect === "slide-up" ? "btn_hover_slide slide_up" : ""}
          ${props.hover_effect === "slide-right" ? "btn_hover_slide slide_right" : ""}
          ${props.hover_effect === "slide-left" ? "btn_hover_slide slide_left" : ""}
          `}
            >
              <span>{props.text} +++ {props.test}</span>
            </button>
        </div>
    </>
  );
}

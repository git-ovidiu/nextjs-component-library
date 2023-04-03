import React from "react";
import "./Button_Slide_Second.scss";

export interface ButtonProps {
  text: string;
  hover_effect: string;
}

export default function Button_Slide_Second(props: ButtonProps) {
  return (
    <>
        <div className="btn_holder">
            <button
              className={`
            ${props.hover_effect === "tertiary" ? 'btn_hover_left' : ""}
          `}
            >
              <span>{props.text}</span>
            </button>
        </div>
    </>
  );
}

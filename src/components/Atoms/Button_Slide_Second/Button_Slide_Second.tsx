import React from "react";
import "./Button_Slide_Second.scss";

export interface Button_Slide_Second_Props {
  text: string;
  hover_effect: string;
}

export default function Button_Slide_Second(props: Button_Slide_Second_Props) {
  return (
    <>
        <div className="tertiary-button">
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

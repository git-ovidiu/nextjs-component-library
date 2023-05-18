import React, { ReactNode } from "react";
import "./Button_Slide_Second.scss";

export interface Button_Slide_Second_Props {
  text: string;
  hover_effect: string;
  icon? : ReactNode | string;
  iconPosition? : string;
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
              <span className={`${props.iconPosition === "left" ? "reverse" : ''}`}>
                  {props.text}
                {props.icon ? (
                  <div className="icon">
                    {props.icon}
                  </div>
                ) : ''}
              </span>
            </button>
        </div>
    </>
  );
}

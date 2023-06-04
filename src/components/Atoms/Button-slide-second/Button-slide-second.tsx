import React, { ReactNode } from "react";
import "./Button-slide-second.scss";

export interface ButtonSlideSecondProps {
  text: string;
  hover_effect: string;
  icon? : ReactNode | string;
  iconPosition? : string;
}

export default function ButtonSlideSecond(props: ButtonSlideSecondProps) {
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

// todo DE VERIFICAT CA TOTUL E OK AICI
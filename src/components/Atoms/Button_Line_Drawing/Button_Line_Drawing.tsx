import React from "react";
import "./Button_Line_Drawing.scss";

export interface Button_Line_Drawing_Props {
  text: string;
  line_effect: string;
}

export default function Button_Line_Drawing(props: Button_Line_Drawing_Props) {
  return (
    <>
        <div className="btn_holder">
            <button
              className={`
            ${props.line_effect === "line-below" ? 'btn_hover_line line_below' : ""}
          ${props.line_effect === "line-above" ? 'btn_hover_line line_above' : ""}
          ${props.line_effect === "line-side" ? 'btn_hover_line line_side' : ""}
          `}
            >
              <span>{props.text}</span>
            </button>
        </div>
    </>
  );
}

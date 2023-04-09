import React from "react";
import "./Button_Line_Drawing.scss";
export default function Button_Line_Drawing(props) {
    return (<>
        <div className="btn_holder">
            <button className={"\n            ".concat(props.line_effect === "line-below" ? 'btn_hover_line line_below' : "", "\n          ").concat(props.line_effect === "line-above" ? 'btn_hover_line line_above' : "", "\n          ").concat(props.line_effect === "line-side" ? 'btn_hover_line line_side' : "", "\n          ")}>
              <span>{props.text}</span>
            </button>
        </div>
    </>);
}
//# sourceMappingURL=Button_Line_Drawing.jsx.map
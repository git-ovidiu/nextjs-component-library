import React, { ReactElement, CSSProperties } from "react";
import "./Label.scss";

interface LabelStyle extends CSSProperties {
  "--a-label-color"?: string;
  "--a-label-background-color"?: string;
}

export interface LabelProps {
  style?: LabelStyle;

  text: string;
  color: string;
  "background-color": string;
}

export default function Label(props: LabelProps): ReactElement {
  return (
    <div
      className="a-label"
      style={{
        "--a-label-color": props.color,
        "--a-label-background-color": props["background-color"],
        ...props.style,
      }}
    >
      {props.text}
    </div>
  );
}

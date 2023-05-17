import React, { ReactElement, CSSProperties } from "react";
import "./Label.scss";

interface LabelStyle extends CSSProperties {
  "--a-label-color"?: string;
  "--a-label-background-color"?: string;
}

export interface LabelProps {
  text: string;
  color: string;
  backgroundColor: string;
  style?: LabelStyle;
}

export default function Description(props: LabelProps): ReactElement {
  return (
    <div
      className="a-label"
      style={{
        "--a-label-color": props.color,
        "--a-label-background-color": props.backgroundColor,
        ...props.style,
      }}
    >
      {props.text}
    </div>
  );
}

import React, { ReactNode, CSSProperties } from "react";
import "./Description.scss";

interface DescriptionStyle extends CSSProperties {
    "--a-description-color"?: string;
}

export interface DescriptionProps {
    style?: DescriptionStyle;
    text?: ReactNode | string;
    color?: string;
    underline?: boolean;
    italic?: boolean;
}

export default function Description(props: DescriptionProps): JSX.Element {
    return (
        <div
            className={`a-description ${props.underline ? "underline" : ""} ${
                props.italic ? "italic" : ""
            }`}
            style={{
                "--a-description-color": props.color,
                ...props.style,
            }}
        >
            {props.text}
        </div>
    );
}

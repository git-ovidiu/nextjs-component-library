import {CSSProperties} from "react";
import "./Animated_text.scss";

interface AnimatedText extends CSSProperties {
    "--a-animated-text-color"?: string;
}
export interface AnimatedTextProps {
    style?: AnimatedText;
    color?: string;
    text?: string;
    variant?: string;
}
export default function Animated_text(props: AnimatedTextProps): JSX.Element;
export {};

/// <reference types="react" />
import "./Button.scss";
export interface ButtonProps {
    text: string;
    hover_effect: string;
}
export default function Button(props: ButtonProps): JSX.Element;

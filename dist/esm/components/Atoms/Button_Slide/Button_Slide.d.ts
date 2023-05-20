import { ReactElement } from "react";
import "./Button_Slide.scss";
export interface ButtonProps {
    text: string;
    hover_effect: string;
    icon?: ReactElement | string;
    iconPosition?: string;
    padding?: string;
}
export default function Button_slide(props: ButtonProps): JSX.Element;

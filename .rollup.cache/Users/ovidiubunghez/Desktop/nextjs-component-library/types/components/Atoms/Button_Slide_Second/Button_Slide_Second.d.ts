import { ReactElement } from "react";
import "./Button_Slide_Second.scss";
export interface Button_Slide_Second_Props {
    text: string;
    hover_effect: string;
    icon?: ReactElement;
    iconPosition?: string;
}
export default function Button_Slide_Second(props: Button_Slide_Second_Props): JSX.Element;

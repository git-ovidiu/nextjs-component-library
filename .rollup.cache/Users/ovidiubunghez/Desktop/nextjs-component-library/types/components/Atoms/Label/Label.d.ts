import { ReactElement, CSSProperties } from "react";
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
export default function Label(props: LabelProps): ReactElement;
export {};

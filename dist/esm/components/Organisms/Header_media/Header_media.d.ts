import { ReactElement } from "react";
import "./Header_media.scss";
import "bootstrap/dist/css/bootstrap.css";
export interface Header_media_Props {
    content: ReactElement;
    visual: ReactElement;
    backgroundImage?: ReactElement;
    reverse: string;
}
export default function Header_media(props: Header_media_Props): JSX.Element;

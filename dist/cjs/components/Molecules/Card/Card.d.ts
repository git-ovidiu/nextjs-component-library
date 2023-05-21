import { ReactElement } from "react";
import "./Card.scss";
export interface CardProps {
    image?: ReactElement | string;
    labels?: ReactElement | string;
    title?: ReactElement | string;
    description?: ReactElement | string;
    buttons?: ReactElement | string;
    image_full_width?: boolean;
    is_overlapped?: boolean;
}
export default function Card(props: CardProps): JSX.Element;

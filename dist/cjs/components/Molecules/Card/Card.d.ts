import { ReactElement } from "react";
import "./Card.scss";
export interface CardProps {
    image?: ReactElement;
    labels?: ReactElement;
    title?: ReactElement;
    description?: ReactElement;
    buttons?: ReactElement;
    image_full_width?: boolean;
    is_overlapped?: boolean;
}
export default function Card(props: CardProps): JSX.Element;

import { ReactElement } from "react";
import "./Card.scss";
export interface CardProps {
    image?: ReactElement;
    labels?: ReactElement;
    title?: ReactElement;
    description?: ReactElement;
    buttons?: ReactElement;
}
export default function Card(props: CardProps): JSX.Element;

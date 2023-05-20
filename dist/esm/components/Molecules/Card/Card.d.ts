import { ReactNode } from "react";
import "./Card.scss";
export interface CardProps {
    image?: ReactNode | string;
    labels?: ReactNode | string;
    title?: ReactNode | string;
    description?: ReactNode | string;
    buttons?: ReactNode | string;
    image_full_width?: boolean;
    is_overlapped?: boolean;
}
export default function Card(props: CardProps): JSX.Element;

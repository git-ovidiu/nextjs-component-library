import { ReactElement } from "react";
import "./Footer_card.scss";
export interface FooterCardProps {
    logo?: ReactElement;
    description?: ReactElement;
    action?: ReactElement;
}
export default function Footer_card(props: FooterCardProps): JSX.Element;

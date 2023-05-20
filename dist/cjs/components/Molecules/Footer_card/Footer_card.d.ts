import { ReactNode } from "react";
import "./Footer_card.scss";
export interface FooterCardProps {
    logo?: ReactNode | string;
    description?: ReactNode | string;
    action?: ReactNode | string;
}
export default function Footer_card(props: FooterCardProps): JSX.Element;

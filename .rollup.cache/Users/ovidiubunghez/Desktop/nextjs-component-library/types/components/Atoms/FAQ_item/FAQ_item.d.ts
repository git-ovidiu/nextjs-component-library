import { ReactNode } from "react";
import "./FAQ_item.scss";
interface FAQProps {
    title: ReactNode | string;
    description: string;
    arrow: ReactNode | string;
}
export default function FAQ_item(props: FAQProps): JSX.Element;
export {};

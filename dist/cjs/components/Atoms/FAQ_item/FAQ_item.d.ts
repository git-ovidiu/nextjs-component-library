import { ReactElement } from "react";
import "./FAQ_item.scss";
interface FAQProps {
    title: ReactElement;
    description: string;
    arrow: ReactElement;
}
export default function FAQ_item(props: FAQProps): JSX.Element;
export {};

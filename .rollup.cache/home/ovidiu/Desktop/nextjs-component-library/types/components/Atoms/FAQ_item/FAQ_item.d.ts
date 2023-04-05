/// <reference types="react" />
import "./FAQ_item.scss";
interface FAQProps {
    title: string;
    description: string;
    arrow: string;
    close: string;
}
export default function FAQ_item(props: FAQProps): JSX.Element;
export {};

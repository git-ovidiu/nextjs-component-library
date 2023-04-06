import { ReactElement } from "react";
import "./FAQ_item.scss";
import 'intersection-observer';
interface FAQProps {
    title: ReactElement;
    description: string;
    arrow: ReactElement;
    close: ReactElement;
}
export default function FAQ_item(props: FAQProps): JSX.Element;
export {};

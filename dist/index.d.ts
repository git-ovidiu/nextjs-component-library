/// <reference types="react" />
import { ReactElement, CSSProperties } from 'react';

interface ButtonProps {
    text: string;
    hover_effect: string;
    icon?: ReactElement;
    iconPosition?: string;
}
declare function Button_slide(props: ButtonProps): JSX.Element;

interface Button_Line_Drawing_Props {
    text: string;
    line_effect: string;
}
declare function Button_Line_Drawing(props: Button_Line_Drawing_Props): JSX.Element;

interface Button_Slide_Second_Props {
    text: string;
    hover_effect: string;
    icon?: ReactElement;
    iconPosition?: string;
}
declare function Button_Slide_Second(props: Button_Slide_Second_Props): JSX.Element;

interface FAQProps {
    title: ReactElement;
    description: string;
    arrow: ReactElement;
    close: ReactElement;
}
declare function FAQ_item(props: FAQProps): JSX.Element;

interface LabelStyle extends CSSProperties {
    '--a-label-color'?: string;
    '--a-label-background-color'?: string;
}
interface LabelProps {
    text: string;
    color: string;
    backgroundColor: string;
    style?: LabelStyle;
}
declare function Label(props: LabelProps): ReactElement;

interface Animated_text_Props {
    text: string;
    variant: string;
}
declare function Animated_text(props: Animated_text_Props): JSX.Element;

interface CardProps {
    image?: ReactElement;
    labels?: ReactElement;
    title?: ReactElement;
    description?: ReactElement;
    buttons?: ReactElement;
    image_full_width?: boolean;
    is_overlapped?: boolean;
}
declare function Card(props: CardProps): JSX.Element;

export { Animated_text, Button_Line_Drawing, Button_Slide_Second, Button_slide, Card, FAQ_item, Label };

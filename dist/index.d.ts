/// <reference types="react" />
interface ButtonProps {
    text: string;
    hover_effect: string;
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
}
declare function Button_Slide_Second(props: Button_Slide_Second_Props): JSX.Element;

interface FAQProps {
    title: string;
    description: string;
    arrow: string;
    close: string;
}
declare function FAQ_item(props: FAQProps): JSX.Element;

export { Button_Line_Drawing, Button_Slide_Second, Button_slide, FAQ_item };

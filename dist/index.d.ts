/// <reference types="react" />
interface ButtonProps$1 {
    text: string;
    hover_effect: string;
}
declare function Button_slide(props: ButtonProps$1): JSX.Element;

interface ButtonProps {
    text: string;
    line_effect: string;
}
declare function Button_Line_Drawing(props: ButtonProps): JSX.Element;

export { Button_Line_Drawing, Button_slide };

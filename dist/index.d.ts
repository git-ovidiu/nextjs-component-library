/// <reference types="react" />
import { ReactElement, ReactNode, CSSProperties } from 'react';

interface ButtonProps {
    text: string;
    hover_effect: string;
    icon?: ReactElement | string;
    iconPosition?: string;
    padding?: string;
}
declare function Button_slide(props: ButtonProps): JSX.Element;

interface Button_Line_Drawing_Props {
    text?: string;
    line_effect?: string;
    padding?: string;
}
declare function Button_Line_Drawing(props: Button_Line_Drawing_Props): JSX.Element;

interface Button_Slide_Second_Props {
    text: string;
    hover_effect: string;
    icon?: ReactNode | string;
    iconPosition?: string;
}
declare function Button_Slide_Second(props: Button_Slide_Second_Props): JSX.Element;

interface DescriptionStyle extends CSSProperties {
    "--a-description-color"?: string;
}
interface DescriptionProps {
    style?: DescriptionStyle;
    text?: ReactNode | string;
    color?: string;
    underline?: boolean;
    italic?: boolean;
}
declare function Description(props: DescriptionProps): JSX.Element;

interface FAQProps {
    title: ReactNode | string;
    description: string;
    arrow: ReactNode | string;
}
declare function FAQ_item(props: FAQProps): JSX.Element;

interface LabelStyle extends CSSProperties {
    "--a-label-color"?: string;
    "--a-label-background-color"?: string;
}
interface LabelProps {
    text: string;
    color: string;
    backgroundColor: string;
    style?: LabelStyle;
}
declare function Label(props: LabelProps): ReactElement;

interface AnimatedText extends CSSProperties {
    "--a-animated-text-color"?: string;
}
interface AnimatedTextProps {
    style?: AnimatedText;
    color?: string;
    text?: string;
    variant?: string;
}
declare function Animated_text(props: AnimatedTextProps): JSX.Element;

interface FooterLinkProps {
    link_type?: string;
    link: ReactElement | string;
}
declare function Footer_link(props: FooterLinkProps): ReactElement;

interface FooterLinkListProps {
    link_element?: ReactElement | string;
    position?: string;
}
declare function Footer_link_list(props: FooterLinkListProps): ReactElement;

interface FooterCardProps {
    logo?: ReactNode | string;
    description?: ReactNode | string;
    action?: ReactNode | string;
}
declare function Footer_card(props: FooterCardProps): JSX.Element;

interface CardProps {
    image?: ReactElement | string;
    labels?: ReactElement | string;
    title?: ReactElement | string;
    description?: ReactElement | string;
    buttons?: ReactElement | string;
    image_full_width?: boolean;
    is_overlapped?: boolean;
}
declare function Card(props: CardProps): JSX.Element;

interface TitleAndDescriptionProps {
    label?: ReactElement | string;
    title?: ReactElement | string;
    description?: ReactElement | string;
    action?: ReactElement | string;
    text_align: string;
}
declare function Title_and_description(props: TitleAndDescriptionProps): JSX.Element;

interface ProgressLineBackgroundColor extends CSSProperties {
    "--a-video-progress-line-background"?: string;
    "--a-video-object-fit"?: string;
}
interface MediaComponentProps {
    style?: ProgressLineBackgroundColor;
    image?: ReactElement;
    "object-fit"?: string;
    "label-top-left"?: ReactElement;
    "label-top-right"?: ReactElement;
    "label-bottom-left"?: ReactElement;
    "label-bottom-right"?: ReactElement;
    "auto-play"?: boolean;
    "fullscreen-icon-color"?: string;
    "prev-icon-color"?: string;
    "play-icon-color"?: string;
    "pause-icon-color"?: string;
    "forward-icon-color"?: string;
    "progress-bar-color"?: string;
    showControlsProperty?: boolean;
    hideShowControls?: boolean;
    video?: string;
    muted?: boolean;
    loop?: boolean;
}
declare function Media(props: MediaComponentProps): JSX.Element;

export { Animated_text, Button_Line_Drawing, Button_Slide_Second, Button_slide, Card, Description, FAQ_item, Footer_card, Footer_link, Footer_link_list, Label, Media, Title_and_description };

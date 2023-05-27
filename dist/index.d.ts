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

interface LogoInterface extends CSSProperties {
    "--a-logo-border-radius"?: string;
    "--a-logo-background"?: string;
}
interface LogoProps {
    style?: LogoInterface;
    logo?: ReactElement;
    background?: string;
    "border-radius": string;
}
declare function Logo(props: LogoProps): JSX.Element;

interface SimpleDividerStyle extends CSSProperties {
    "--a-simple-divider-background"?: string;
    "--a-simple-divider-height"?: string;
    "--a-simple-divider-width"?: string;
    "--a-simple-divider-animation-duration"?: string;
    "--a-simple-divider-border-radius"?: string;
}
interface SimpleDividerProps {
    style?: SimpleDividerStyle;
    color?: string;
    height?: string;
    width?: string;
    animate?: boolean;
    "animate-vertical"?: boolean;
    "animation-duration"?: string;
    "border-radius"?: string;
}
declare function SimpleDivider(props: SimpleDividerProps): JSX.Element;

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
    "--a-media-image-border-radius"?: string;
    "--a-video-border-radius"?: string;
}
interface MediaComponentProps {
    style?: ProgressLineBackgroundColor;
    image?: ReactElement;
    "object-fit"?: string;
    "label-top-left"?: ReactElement;
    "label-top-right"?: ReactElement;
    "label-bottom-left"?: ReactElement;
    "label-bottom-right"?: ReactElement;
    "image-border-radius"?: string;
    video?: string;
    muted?: boolean;
    loop?: boolean;
    "show-controls"?: boolean;
    "remove-controls"?: boolean;
    "video-border-radius"?: string;
    "auto-play"?: boolean;
    "progress-bar-color"?: string;
    "custom-fullscreen-icon"?: ReactElement;
    "custom-play-icon"?: ReactElement;
    "custom-pause-icon"?: ReactElement;
    "custom-prev-icon"?: ReactElement;
    "custom-next-icon"?: ReactElement;
}
declare function Media(props: MediaComponentProps): JSX.Element;

interface DividerStyle extends CSSProperties {
    "--m-divider-width"?: string;
}
interface DividerProps {
    style?: DividerStyle;
    divider?: ReactElement;
    vertical?: boolean;
    position?: string;
    width?: string;
}
declare function Divider(props: DividerProps): JSX.Element;

export { Animated_text, Button_Line_Drawing, Button_Slide_Second, Button_slide, Card, Description, Divider, FAQ_item, Footer_card, Footer_link, Footer_link_list, Label, Logo, Media, SimpleDivider as Simple_Divider, Title_and_description };

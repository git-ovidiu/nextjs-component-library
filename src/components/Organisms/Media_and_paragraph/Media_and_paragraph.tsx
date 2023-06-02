import React, {CSSProperties, ReactElement, ReactNode} from "react";
import "./Media_and_paragraph.scss";

interface MediaAndParagraphStyle extends CSSProperties{
  "--o-media-and-paragraph-background-custom"?: string;
}
export interface MediAndParagraphProps {
  style?: MediaAndParagraphStyle;

  children: ReactNode;
  "space-top"?: string;
  "space-bottom"?: string;
  "background-color"?: string;
  "border-radius"?: string;
  "custom-background"?: string | ReactElement;
}
export default function Media_and_paragraph({children, "space-top": spaceTop, "space-bottom": spaceBottom, "background-color" : backgroundColor, "custom-background": customBackground}: MediAndParagraphProps) {

  return (
    <>
      <section className={`o-media-and-paragraph ${spaceTop ? `padding_${spaceTop}` : ''}  ${spaceBottom ? `padding_${spaceBottom}` : ''} ${backgroundColor ? `${backgroundColor}` : ''}`}
      style={{"--o-media-and-paragraph-background-custom" : customBackground, ...style}}
      >
        <div className="container">
          {children}
        </div>
      </section>
    </>
  );
}

import React, { CSSProperties, ReactElement, ReactNode } from "react";
import "./Media_and_paragraph.scss";

interface MediaAndParagraphStyle extends CSSProperties {
    "--o-media-and-paragraph-background-custom"?: string;
}

export interface MediaAndParagraphProps {
    style?: MediaAndParagraphStyle;
    children: ReactNode;
    "space-top"?: string;
    "space-bottom"?: string;
    "background-color"?: string;
    "border-radius"?: string;
    "custom-background"?: string | ReactElement;
    "custom-background-image"?: ReactElement;
}

export default function Media_and_paragraph({
                                                children,
                                                "space-top": spaceTop,
                                                "space-bottom": spaceBottom,
                                                "background-color": backgroundColor,
                                                "custom-background": customBackground,
                                                "custom-background-image": customBackgroundImage,
                                                style,
                                            }: MediaAndParagraphProps) {
    if (customBackground) {
        backgroundColor = undefined;
    }

    return (
        <>
            <section
                className={`o-media-and-paragraph ${
                    spaceTop ? `padding_top_${spaceTop}` : ""
                } ${spaceBottom ? `padding_bottom_${spaceBottom}` : ""} ${
                    backgroundColor ? `${backgroundColor}` : ""
                }`}
                style={{
                    "--o-media-and-paragraph-background-custom": customBackground,
                    ...style,
                }}
            >
                {customBackgroundImage ? (
                    <div className="custom-background-image-container">
                        <div className="has-background-image">
                            {customBackgroundImage}
                        </div>
                            {children}
                    </div>
            ) : (
                    children
            )}
            </section>
        </>
    );
}

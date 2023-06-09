import React, { CSSProperties, ReactNode } from "react";
import "./Custom-wrapper.scss";
import Image from "next/image";
import { MediaVideo } from "../../../index";
interface CustomWrapperStyle extends CSSProperties {
  "--s-custom-wrapper-background-custom"?: string;
  "--s-custom-wrapper-border-radius"?: string;
}

export interface CustomWrapperProps {
  style?: CustomWrapperStyle;
  children: ReactNode;

  "space-top"?: string;
  "space-bottom"?: string;
  "border-radius"?: string;
  "background-color-theme"?: string;
  "custom-background-color"?: string;
  "custom-background-image"?: string;
  "custom-background-video"?: string;
  "container-fluid"?: boolean;
  "image-priority"?: boolean;
}
export default function CustomWrapper({
  children,
  "space-top": spaceTop,
  "space-bottom": spaceBottom,
  "background-color-theme": backgroundColorTheme,
  "custom-background-color": customBackgroundColor,
  "custom-background-image": customBackgroundImage,
  "custom-background-video": customBackgroundVideo,
  "container-fluid": containerFluid,
  "border-radius": borderRadius,
  "image-priority": imagePriority,
  style,
}: CustomWrapperProps) {
  //will remove the theme and the custom background color if the background-image is set
  customBackgroundImage
    ? ((backgroundColorTheme = undefined) ||
      (customBackgroundColor = undefined))
    : customBackgroundColor
    ? (backgroundColorTheme = undefined)
    : null;

  // will remove the theme, custom background color and the background image if set
  customBackgroundVideo
    ? ((backgroundColorTheme = undefined) ||
      (customBackgroundColor = undefined) ||
      (customBackgroundImage = undefined))
    : null;

  // will remove the background color, the background image and the background video if set
  customBackgroundColor
    ? ((customBackgroundVideo = undefined) ||
      (backgroundColorTheme = undefined) ||
      (customBackgroundImage = undefined)
    )
    : null;


  return (
    <section
      className={`s-custom-wrapper 
				${spaceTop ? `padding_top_${spaceTop}` : ""} 
				${spaceBottom ? `padding_bottom_${spaceBottom}` : ""} 
				${backgroundColorTheme ? `${backgroundColorTheme}` : ""}`}
      style={{
        "--s-custom-wrapper-background-custom": customBackgroundColor,
        "--s-custom-wrapper-border-radius": borderRadius,
        ...style,
      }}
    >
      {customBackgroundImage ? (
        <div className="has-background-image">
          <div
            className={`${containerFluid ? "container-fluid" : "container"}`}
          >
            <div className="image-container">
              <picture>
                <Image fill src={customBackgroundImage} priority={!!imagePriority} alt="placeholder" style={{borderRadius: borderRadius}} />
              </picture>
            </div>
            {children}
          </div>
        </div>
      ) : customBackgroundVideo ? (
        <div className="has-background-video">
          <div
            className={`${containerFluid ? "container-fluid" : "container"}`}
          >
            <div className="video-container">
              <MediaVideo
                auto-play
                loop
                muted
                object-fit="cover"
                progress-bar-color="red"
                remove-controls
                video={customBackgroundVideo}
                video-border-radius={borderRadius}
              />
            </div>
            {children}
          </div>
        </div>
      ) : (
        <div className={`${containerFluid ? "container-fluid" : "container"}`}>
          {children}
        </div>
      )}
    </section>
  );
}

//todo custom-background-color not working
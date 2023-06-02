import React, { CSSProperties, ReactElement, ReactNode } from "react";
import "./Custom_wrapper.scss";
import Image from "next/image";
import {Media_video} from "../../../index"
interface CustomWrapperStyle extends CSSProperties {
  "--s-custom-wrapper-background-custom"?: string;
}

export interface CustomWrapperProps {
  style?: CustomWrapperStyle;

  children: ReactNode;
  "space-top"?: string;
  "space-bottom"?: string;
  "background-color-theme"?: string;
  "border-radius"?: string;
  "custom-background-color"?: string | ReactElement;
  "custom-background-image"?: string;
  "custom-background-video"?: string;
}
export default function Custom_wrapper({
  children,
  "space-top": spaceTop,
  "space-bottom": spaceBottom,
  "background-color-theme": backgroundColorTheme,
  "custom-background-color": customBackgroundColor,
  "custom-background-image": customBackgroundImage,
  "custom-background-video": customBackgroundVideo,
  style,
}: CustomWrapperProps) {
  // if (customBackgroundImage) {
  // 	backgroundColorTheme = undefined;
  // 	customBackgroundColor = undefined;
  // }
  //
  // if(customBackgroundColor){
  // 	backgroundColorTheme = undefined;
  // }

  customBackgroundImage
    ? ((backgroundColorTheme = undefined), (customBackgroundColor = undefined))
    : customBackgroundColor
    ? (backgroundColorTheme = undefined)
    : null;

  customBackgroundVideo ? ((backgroundColorTheme = undefined), (customBackgroundColor = undefined), (customBackgroundImage = undefined)) : null;

  return (
    <section
      className={`s-custom-wrapper 
				${spaceTop ? `padding_top_${spaceTop}` : ""} 
				${spaceBottom ? `padding_bottom_${spaceBottom}` : ""} 
				${backgroundColorTheme ? `${backgroundColorTheme}` : ""}`}
      style={{
        "--s-custom-wrapper-background-custom": customBackgroundColor,
        ...style,
      }}
    >
      {customBackgroundImage ? (
          <div className="has-background-image">
            <div className="container">
              <div className="image-container">
                <picture>
                  <Image fill src={customBackgroundImage} alt="placeholder" />
                </picture>
              </div>
              {children}
            </div>
          </div>
      ) :
		  customBackgroundVideo ? (
			  <div className="has-background-video">
				  <div className="container">
					  <div className="video-container">
					  <Media_video
						  auto-play
						  loop
						  muted
						  object-fit="cover"
						  progress-bar-color="red"
						  remove-controls
						  video="https://res.cloudinary.com/dxbivmheq/video/upload/v1664097081/samples/sea-turtle.mp4"
						  video-source="https://res.cloudinary.com/dxbivmheq/video/upload/v1664097081/samples/sea-turtle.mp4"
					  />
					  </div>
					  {children}
				  </div>
			  </div>
		  ) :
		  (
        <div className="container">{children}</div>
      )}
    </section>
  );
}

// todo de pus si custom link de video aici ca poate e nevoie
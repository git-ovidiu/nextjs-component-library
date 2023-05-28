import React, {CSSProperties, ReactElement} from "react";
import "./Media_image.scss";

interface MediaImageStyle extends CSSProperties {
  "--a-media-image-border-radius"?: string;
}
interface MediaComponentProps {
  style?: MediaImageStyle;

  image?: ReactElement;
  "object-fit"?: string;
  "label-top-left"?: ReactElement;
  "label-top-right"?: ReactElement;
  "label-bottom-left"?: ReactElement;
  "label-bottom-right"?: ReactElement;
  "image-border-radius"?: string;
}

export default function Media_image(props: MediaComponentProps) {
  return (
            <div className="m-media-image" style={{ "--a-media-image-border-radius": props["image-border-radius"], ...props.style }}>
              {props["label-top-left"] && <div className="label top-left">{props["label-top-left"]}</div>}
              {props["label-top-right"] && <div className="label top-right">{props["label-top-right"]}</div>}
              {props["label-bottom-left"] && <div className="label bottom-left">{props["label-bottom-left"]}</div>}
              {props["label-bottom-right"] && <div className="label bottom-right">{props["label-bottom-right"]}</div>}
              {props.image}
            </div>
  );
}

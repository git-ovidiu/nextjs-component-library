import React, { CSSProperties, ReactElement } from "react";
import "./Media-image.scss";

interface MediaImageStyle extends CSSProperties {
  "--m-media-image-border-radius"?: string;
  "--m-media-image-object-fit"?: string;
  "--m-media-image-padding-bottom-mobile"?: string;
  "--m-media-image-padding-bottom-tablet"?: string;
  "--m-media-image-padding-bottom-desktop"?: string;
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
  "padding-bottom-mobile"?: string;
  "padding-bottom-tablet"?: string;
  "padding-bottom-desktop"?: string;
}

export default function MediaImage(props: MediaComponentProps) {
  return (
    <div
      className="m-media-image"
      style={{
        "--m-media-image-border-radius": props["image-border-radius"],
        "--m-media-image-object-fit": props["object-fit"],
        "--m-media-image-padding-bottom-mobile": props["padding-bottom-mobile"],
        "--m-media-image-padding-bottom-tablet": props["padding-bottom-tablet"],
        "--m-media-image-padding-bottom-desktop":
          props["padding-bottom-desktop"],
        ...props.style,
      }}
    >
      {props["label-top-left"] && (
        <div className="label top-left">{props["label-top-left"]}</div>
      )}
      {props["label-top-right"] && (
        <div className="label top-right">{props["label-top-right"]}</div>
      )}
      {props["label-bottom-left"] && (
        <div className="label bottom-left">{props["label-bottom-left"]}</div>
      )}
      {props["label-bottom-right"] && (
        <div className="label bottom-right">{props["label-bottom-right"]}</div>
      )}
      <div className="image-container">{props.image}</div>
    </div>
  );
}


// todo te pus custom shapes pe fiecare organism in parte (pentru asta trebuie facut un ceva modul separat pentru asta care sa aiba position: absolute probabil (in colturile organismului)

// todo de facut o componenta care sa fie un listing-cards by default, dar cu o proprietate de 'slider' care sa integreze SPLIDE SWIPER
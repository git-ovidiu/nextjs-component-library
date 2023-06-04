import React, { CSSProperties } from "react";
import "./Logo.scss";
import Image from "next/image";

interface LogoInterface extends CSSProperties {
  "--a-logo-border-radius"?: string;
  "--a-logo-background"?: string;
  "--a-logo-width"?: string;
  "--a-logo-height"?: string;
}

export interface LogoProps {
  style?: LogoInterface;

  width?: string;
  height?: string;
  "logo-image-url"?: string;
  background?: string;
  "border-radius"?: string;
  "logo-alt"?: string;
}
export default function Logo(props: LogoProps) {
  return (
    <div
      className="a-logo"
      style={{
        "--a-logo-border-radius": props["border-radius"],
        "--a-logo-background": props.background,
        "--a-logo-width": props.width,
        "--a-logo-height": props.height,
        ...props.style,
      }}
    >
      {props["logo-image-url"] && <Image src={props["logo-image-url"]} alt="Placeholder" fill />}
    </div>
  );
}

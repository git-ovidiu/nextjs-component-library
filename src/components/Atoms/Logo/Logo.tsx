import React, { CSSProperties, ReactElement } from "react";
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
  logo?: string;
  background?: string;
  "border-radius": string;
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
      {props.logo && <Image src={props.logo} alt="Placeholder" fill />}
    </div>
  );
}

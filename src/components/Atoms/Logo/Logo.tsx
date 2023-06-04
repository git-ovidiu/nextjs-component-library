import React, {CSSProperties, ReactElement} from "react";
import "./Logo.scss";
import Image from "next/image";
import Link from "next/link";

interface LogoInterface extends CSSProperties {
  "--a-logo-border-radius-desktop"?: string;
  "--a-logo-background"?: string;
  "--a-logo-width"?: string;
  "--a-logo-height"?: string;
  "--a-logo-default-opacity-mobile"?: string;
  "--a-logo-default-opacity-desktop"?: string;
  "--a-logo-border-radius-mobile"?: string;
}

export interface LogoProps {
  style?: LogoInterface;

  width?: string;
  height?: string;
  background?: string;
  "logo-image-url"?: string;
  "border-radius-desktop"?: string;
  "logo-alt"?: string;
  "default-opacity-mobile"?: string;
  "default-opacity-desktop"?: string;
  "border-radius-mobile"?: string;
  "link-url"?: string;
  "open-in-new-tab"?: boolean;
}
export default function Logo(props: LogoProps) {
  return (
    <div
      className="a-logo"
      style={{
        "--a-logo-border-radius-desktop": props["border-radius-desktop"],
        "--a-logo-background": props.background,
        "--a-logo-width": props.width,
        "--a-logo-height": props.height,
        "--a-logo-default-opacity-mobile": props["default-opacity-mobile"],
        "--a-logo-default-opacity-desktop": props["default-opacity-desktop"],
        "--a-logo-border-radius-mobile": props["border-radius-mobile"],
        ...props.style,
      }}
    >
      <Link href={props["link-url"] || ""} target={props["open-in-new-tab"] ? '_blank' : ''}>
        {props["logo-image-url"] && (
          <Image src={props["logo-image-url"]} alt="Placeholder" fill />
        )}
      </Link>
    </div>
  );
}

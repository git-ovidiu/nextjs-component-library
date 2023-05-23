import React, {CSSProperties, ReactElement} from "react";
import "./Logo.scss";

interface LogoInterface extends CSSProperties {
  "a-logo-background"?: string;
  "--a-logo-border-radius"?: string;
  "--a-logo-background"?: string;
}
export interface LogoProps {
  style?: LogoInterface;

  logo: ReactElement;
  background?: string;
  "border-radius": string;
}
export default function Logo(props: LogoProps) {
  return (
    <div
      className="a-logo"
      style={{ "a-logo-background": props.background, "--a-logo-border-radius": props["border-radius"], "--a-logo-background" : props.background, ...props.style }}
    >
      {props.logo}
    </div>
  );
}

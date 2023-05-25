import React, {CSSProperties, ReactElement} from "react";
import "./Logo.scss";

interface LogoInterface extends CSSProperties {
  "--a-logo-border-radius"?: string;
  "--a-logo-background"?: string;
}

const extraColor = '#{$extra-color}';

export interface LogoProps {
  style?: LogoInterface;

  logo?: ReactElement;
  background?: string;
  "border-radius": string;
}
export default function Logo(props: LogoProps) {
  return (
    <div
      className="a-logo"
      style={{"--a-logo-border-radius": props["border-radius"], "--a-logo-background" : props.background, ...props.style,  background: `${extraColor}` }}
    >
      {props.logo}
    </div>
  );
}

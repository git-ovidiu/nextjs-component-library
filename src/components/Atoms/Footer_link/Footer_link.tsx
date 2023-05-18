import React, { ReactNode } from "react";
import "./Footer_link.scss";

export interface Animated_text_Props {}

export interface FooterLinkProps {
  link_type?: string;
  link: ReactNode | string;
}

export default function Footer_link(props: FooterLinkProps): ReactNode {
  return (
    <div className="a-footer-link">
      {props.link_type === "main" ? (
        <div className="main-link">{props.link}</div>
      ) : (
        ""
      )}
      {props.link_type === "secondary" ? (
        <div className="secondary-link">{props.link}</div>
      ) : (
        ""
      )}
    </div>
  );
}

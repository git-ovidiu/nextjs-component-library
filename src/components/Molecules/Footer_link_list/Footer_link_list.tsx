import React, { ReactElement } from "react";
import "./Footer_link_list.scss";

export interface Animated_text_Props {}

export interface FooterLinkListProps {
  "link-element"?: ReactElement | string;
  position?: string;
}

export default function Footer_link_list(props: FooterLinkListProps): ReactElement {
  return (
    <div className={`m-footer-link-list ${props.position == 'center' ? 'center' : ''}${props.position == 'right' ? 'right' : ''}`}>
      {props["link-element"]}
    </div>
  );
}
//test

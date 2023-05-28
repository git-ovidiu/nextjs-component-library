import React, { ReactElement } from "react";
import "./Link_list.scss";

export interface Animated_text_Props {}

export interface LinkListProps {
  "link-element"?: ReactElement | string;
  position?: string;
}

export default function Link_list(props: LinkListProps): ReactElement {
  return (
    <div className={`m-link-list ${props.position == 'center' ? 'center' : ''}${props.position == 'right' ? 'right' : ''}`}>
      {props["link-element"]}
    </div>
  );
}
//test

import React, {ReactElement} from "react";
import "./Link-item.scss";

export interface Animated_text_Props {}

export interface LinkItemProps {
  "link-type"?: string;
  link: ReactElement | string;
}

export default function LinkItem(props: LinkItemProps): ReactElement {
  return (
    <div className="a-link-item">
      {props["link-type"] === "main" ? (
        <div className="main-link">{props.link}</div>
      ) : (
        ""
      )}
      {props["link-type"] === "secondary" ? (
        <div className="secondary-link">{props.link}</div>
      ) : (
        ""
      )}
    </div>
  );
}

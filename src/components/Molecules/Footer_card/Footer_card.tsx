import React, { ReactElement } from "react";
import "./Footer_card.scss";

export interface FooterCardProps {
  logo? : ReactElement;
  description? : ReactElement;
  action? : ReactElement;
}

export default function Footer_card(props: FooterCardProps) {
  return (
    <div className="footer-card-container">
      <div className="logo">{props.logo}</div>
      <div className="description">{props.description}</div>
      <div className="action">{props.action}</div>
    </div>
  );
}
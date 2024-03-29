import React, { ReactNode } from "react";
import "./Footer-card.scss";

export interface FooterCardProps {
  logo? : ReactNode | string;
  description? : ReactNode | string;
  action? : ReactNode | string;
}

export default function FooterCard(props: FooterCardProps) {
  return (
    <div className="footer-card-container">
      <div className="logo">{props.logo}</div>
      <div className="description">{props.description}</div>
      <div className="action">{props.action}</div>
    </div>
  );
}
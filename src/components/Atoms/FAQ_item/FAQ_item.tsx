import React, { ReactNode } from "react";
import "./FAQ_item.scss";
interface FAQProps {
  title: ReactNode | string;
  description: string;
  arrow: ReactNode | string;
}

export default function FAQ_item(props: FAQProps) {
  const [toggle, setToggle] = React.useState(false);

  const toggleFaq = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className={`faq-item ${toggle ? "toggle" : ""}`} onClick={toggleFaq}>
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="hidden-text animated-title">{props.description}</div>
      </div>
      <div className="arrow">{props.arrow}</div>
    </div>
  );
}

import React, {useState} from "react";
import "./FAQ_item.scss";

export interface FAQProps {
  title: string;
  description: string;
  arrow: string;
  close: string;
}

export default function FAQ_item(props: FAQProps) {
  

  const [toggle, setToggle] = useState(false)  

  const toggleFaq = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div className={`faq-item ${toggle ? 'toggle' : ''}`} onClick={toggleFaq}>
        <div className="content">
          <div className="title">{props.title}</div>
          <div className="hidden-text">{props.description}</div>
        </div>
        <div className="arrow">{props.arrow}</div>
        <div className="close">{props.close}</div>
      </div>
    </>
  );
}
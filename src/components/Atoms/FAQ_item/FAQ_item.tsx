import React from "react";
import "./FAQ_item.scss";

export interface FAQProps {
  title: string;
  description: string;
  arrow: string;
  close: string;
}

export default function FAQ_item(props: FAQProps) {
  let toggle = false;

  const toggleFaq = () => {
    toggle = !toggle;
    const faqItem = document.querySelector('.faq-item');
    if (faqItem !== null) {
      if (toggle) {
        faqItem.classList.add('toggle');
      } else {
        faqItem.classList.remove('toggle');
      }
    }
  };

  return (
    <>
      <div className={`faq-item ${toggle ? 'toggle' : ''}`} onClick={toggleFaq}
      >
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
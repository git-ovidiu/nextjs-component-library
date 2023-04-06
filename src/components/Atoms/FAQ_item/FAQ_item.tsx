import React, {ReactElement} from "react";
import "./FAQ_item.scss";
import {motion} from 'framer-motion';
import { useState, useEffect } from 'react';
import 'intersection-observer';

interface FAQProps {
  title: ReactElement;
  description: string;
  arrow: ReactElement;
  close: ReactElement;
}

export default function FAQ_item(props: FAQProps) {
  const [toggle, setToggle] = React.useState(false);

  const [titles, setTitles] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const titles = document.querySelectorAll('.animated-title');
    setTitles(Array.from(titles) as HTMLElement[]);
  }, []);

  const breakTextIntoWords = function(text: HTMLElement) {
    const words = (text.innerText || '').trim().split(' ');
    text.innerText = '';
  
    for (const word of words) {
      const span1 = document.createElement('span');
      const span2 = document.createElement('span');
      span1.innerText = `${word}`;
      span2.append(span1);
  
      text.append(span2);
      text.append(' ');
    }
  };

  const addAnimatedTitleObserver = function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        }
      });
    });

    for (const title of titles) {
      observer.observe(title);
    }
  };

  const initializeAnimatedTitle = function() {
    for (const title of titles) {
      breakTextIntoWords(title);
    }
  };

  useEffect(() => {
    if (titles.length > 0) {
      initializeAnimatedTitle();
      addAnimatedTitleObserver();
    }
  }, [titles]);

  const toggleFaq = () => {
    setToggle(prevToggle => !prevToggle);
  };

  return (
    <motion.div className={`faq-item ${toggle ? 'toggle' : ''}`} onClick={toggleFaq}
    initial={{y: -200, opacity: 0}}
    animate={{y:0, opacity: 1}}
    >
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="hidden-text animated-title">{props.description}</div>
      </div>
      <div className="arrow">{props.arrow}</div>
      <div className="close">{props.close}</div>
    </motion.div>
  );
}

import React, {ReactElement} from "react";
import "./FAQ_item.scss";
import {motion} from 'framer-motion';

interface FAQProps {
  title: ReactElement;
  description: string;
  arrow: ReactElement;
  close: ReactElement;
}

export default function FAQ_item(props: FAQProps) {
  const [toggle, setToggle] = React.useState(false);

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
        <div className="hidden-text">{props.description}</div>
      </div>
      <div className="arrow">{props.arrow}</div>
      <div className="close">{props.close}</div>
    </motion.div>
  );
}

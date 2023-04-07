import React, { ReactElement, useEffect, useRef } from "react";
import "./Animated_text.scss";

export interface Animated_text_Props {
  text: string;
  variant: string;
}

export default function Animated_text(props: Animated_text_Props) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;

    if (titleElement && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleElement.classList.add("slide-in");
          } else {
            titleElement.classList.remove("slide-in");
          }
        });
      });

      observer.observe(titleElement);

      return () => {
        observer.unobserve(titleElement);
      };
    }
  }, []);

  const breakTextIntoWords = function (text: HTMLElement) {
    const words = (text.innerText || '').trim().split(' ');
    text.innerText = "";

    for (const word of words) {
      const span1 = document.createElement("span");
      const span2 = document.createElement("span");
      span1.innerText = `${word}`;
      span2.append(span1);

      text.append(span2);
      text.append(" ");
    }
  };

  useEffect(() => {
    const titleElement = titleRef.current;

    if (titleElement) {
      breakTextIntoWords(titleElement);
    }
  }, [props.text]);

  return (
    <>
      {props.variant == 'h1' ? (
        <h1 ref={titleRef} className="animated-title">
          {props.text}
        </h1>
      ) : props.variant == 'h2' ? (
      <h2 ref={titleRef} className="animated-title">
        {props.text}
      </h2>
      ) : props.variant == 'h3' ? (
        <h3 ref={titleRef} className="animated-title">
          {props.text}
        </h3>
        ) : props.variant == 'h4' ? (
          <h4 ref={titleRef} className="animated-title">
            {props.text}
          </h4>
          ) : props.variant == 'p' ? (
            <p ref={titleRef} className="animated-title">
              {props.text}
            </p>
            ) : ''}
    </>
  );
}
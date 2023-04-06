import React, { useEffect, useRef } from "react";
import "./Animated_text.scss";

export interface Animated_text_Props {
  text: string;
}

export default function Button_slide(props: Animated_text_Props) {
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
    const words = text.innerText.trim().split(" ");
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
      <div className="tot">
        <h2>cacat</h2>
        <h1 ref={titleRef} className="animated-title">
          {props.text}
        </h1>
      </div>
    </>
  );
}
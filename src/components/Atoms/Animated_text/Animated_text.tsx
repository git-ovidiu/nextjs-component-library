import React, {CSSProperties, useEffect, useRef} from "react";
import "./Animated_text.scss";

interface AnimatedText extends CSSProperties {
  "--a-animated-text-color"?: string;
}

export interface AnimatedTextProps {
  style?: AnimatedText;

  color?: string;
  text?: string;
  variant?: string;
}

export default function Animated_text(props: AnimatedTextProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;

    if (titleElement && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            titleElement.classList.add("slide-in");
            observer.unobserve(titleElement);
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

  useEffect(() => {
    const titleElement = titleRef.current;

    if (titleElement) {
      breakTextIntoWords(titleElement);
    }
  }, [props.text]);

  return (
    <>
      {props.variant === "h1" ? (
        <h1 ref={titleRef} className="animated-title font-size-h1" style={{"--a-animated-text-color": props.color, ...props.style}}>
          {props.text}
        </h1>
      ) : props.variant === "h2" ? (
        <h2 ref={titleRef} className="animated-title font-size-h2" style={{"--a-animated-text-color": props.color, ...props.style}}>
          {props.text}
        </h2>
      ) : props.variant === "h3" ? (
        <h3 ref={titleRef} className="animated-title font-size-h3" style={{"--a-animated-text-color": props.color, ...props.style}}>
          {props.text}
        </h3>
      ) : props.variant === "h4" ? (
        <h4 ref={titleRef} className="animated-title font-size-h4" style={{"--a-animated-text-color": props.color, ...props.style}}>
          {props.text}
        </h4>
      ) : props.variant === "p" ? (
        <p ref={titleRef} className="animated-title" style={{"--a-animated-text-color": props.color, ...props.style}}>
          {props.text}
        </p>
      ) : (
        ""
      )}
    </>
  );
}

function breakTextIntoWords(text: HTMLElement) {
  const words = (text.innerText || "").trim().split(" ");
  text.innerText = "";

  for (const word of words) {
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    span1.innerText = `${word}`;
    span2.append(span1);

    text.append(span2);
    text.append(" ");
  }
}

//test
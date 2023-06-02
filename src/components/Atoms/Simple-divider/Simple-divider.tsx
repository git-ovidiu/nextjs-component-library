import React, { CSSProperties, useEffect, useRef } from "react";
import "./Simple-divider.scss";

interface SimpleDividerStyle extends CSSProperties {
  "--a-simple-divider-background"?: string;
  "--a-simple-divider-height"?: string;
  "--a-simple-divider-width"?: string;
  "--a-simple-divider-animation-duration"?: string;
  "--a-simple-divider-border-radius"?: string;
  "--a-simple-divider-animation-delay"?: string;
}

export interface SimpleDividerProps {
  style?: SimpleDividerStyle;

  color?: string;
  height?: string;
  width?: string;
  animate?: boolean;
  "animate-vertical"?: boolean;
  "animation-duration"?: string;
  "border-radius"?: string;
  loop?: boolean;
  "animation-delay"?: string;
}

export default function SimpleDivider(props: SimpleDividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null);
  const dividerRefLoop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ("IntersectionObserver" in window) {
      const options = { root: null, rootMargin: "0px", threshold: 0 };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (props.animate) dividerRef.current?.classList.add("animate");
            if (props["animate-vertical"])
              dividerRef.current?.classList.add("animate-vertical");
            observer.unobserve(entry.target);
          }
        });
      }, options);

      if (dividerRef.current) observer.observe(dividerRef.current);

      return () => {
        if (dividerRef.current) observer.unobserve(dividerRef.current);
      };
    }
  }, [props.animate, props["animate-vertical"]]);

  useEffect(() => {
    if ("IntersectionObserver" in window && dividerRefLoop.current) {
      const options = { root: null, rootMargin: "0px", threshold: 0 };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (props.animate) dividerRefLoop.current?.classList.add("animate");
            if (props["animate-vertical"])
              dividerRefLoop.current?.classList.add("animate-vertical");
          } else {
            if (props.animate) dividerRefLoop.current?.classList.remove("animate");
            if (props["animate-vertical"])
              dividerRefLoop.current?.classList.remove("animate-vertical");
          }
        });
      }, options);

      if (dividerRefLoop.current) observer.observe(dividerRefLoop.current);

      return () => {
        if (dividerRefLoop.current) observer.unobserve(dividerRefLoop.current);
      };
    }
  }, [props.animate, props["animate-vertical"]]);



  const dividerProps = {
    "--a-simple-divider-background": props.color,
    "--a-simple-divider-height": props.height,
    "--a-simple-divider-width": props.width,
    "--a-simple-divider-border-radius": props["border-radius"],
    "--a-simple-divider-animation-duration": props["animation-duration"],
    "--a-simple-divider-animation-delay": props["animation-delay"],
    ...props.style,
  };

  return (
    <>
      <div
          className="a-simple-divider"
          ref={props.loop ? dividerRefLoop : dividerRef}
          style={dividerProps}
      ></div>
    </>
  );
}

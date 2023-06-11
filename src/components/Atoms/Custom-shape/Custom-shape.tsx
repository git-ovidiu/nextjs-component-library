import React, {CSSProperties, ReactElement, ReactNode} from "react";
import "./Custom-shape.scss";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

interface CustomShapeStyle extends CSSProperties {
  "--a-custom-shape-margin-top"?: string;
  "--a-custom-shape-margin-bottom"?: string;
  "--a-custom-shape-margin-right"?: string;
  "--a-custom-shape-margin-left"?: string;
}

export interface CustomShapeProps {
  style?: CustomShapeStyle;
  children: ReactNode;

  "margin-top"?: string;
  "margin-bottom"?: string;
  "margin-right"?: string;
  "margin-left"?: string;
  shape?: ReactElement;
}

export default function CustomShape( {
    children,
    style,
    "margin-top": marginTop,
    "margin-bottom": marginBottom,
    "margin-right": marginRight,
    "margin-left": marginLeft,
  }: CustomShapeProps) {

  const customShapeStyle: CSSProperties = {
    "--a-custom-shape-margin-top": marginTop,
    "--a-custom-shape-margin-bottom": marginBottom,
    "--a-custom-shape-margin-right": marginRight,
    "--a-custom-shape-margin-left": marginLeft,
    ...style,
  };

  return (
    <div className="a-custom-shape" style={customShapeStyle}>
      {children}
    </div>
  );
}

// todo de facut un {children} la parallax si orice e in interior sa se aplice +++ sa aiba props de distante *

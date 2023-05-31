import React, { CSSProperties } from "react";
import "./Custom_shape.scss";
import Image from "next/image";

interface CustomShapeStyle extends CSSProperties {
	"--a-custom-shape-margin-top"?: string;
	"--a-custom-shape-margin-bottom"?: string;
	"--a-custom-shape-margin-right"?: string;
	"--a-custom-shape-margin-left"?: string;
}

export interface CustomShapeProps {
	style?: CustomShapeStyle;

	"margin-top"?: string;
	"margin-bottom"?: string;
	"margin-right"?: string;
	"margin-left"?: string;
}

export default function Custom_shape(props: CustomShapeProps) {
	const {
		style,
		"margin-top": marginTop,
		"margin-bottom": marginBottom,
		"margin-right": marginRight,
		"margin-left": marginLeft,
	} = props;

	const customShapeStyle: CSSProperties = {
		"--a-custom-shape-margin-top": marginTop,
		"--a-custom-shape-margin-bottom": marginBottom,
		"--a-custom-shape-margin-right": marginRight,
		"--a-custom-shape-margin-left": marginLeft,
		...style,
	};

	return (
		<div className="a-custom-shape" style={customShapeStyle}>
			<Image
				src="https://res.cloudinary.com/dxbivmheq/image/upload/v1685576370/Shapes_mlzoj0.svg"
				alt="Placeholder"
				width={200}
				height={200}
			/>
		</div>
	);
}


// todo de facut un {children} la parallax si orice e in interior sa se aplice
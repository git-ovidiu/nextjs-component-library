import React, { CSSProperties, useEffect, useRef } from "react";
import "./Simple_divider.scss";

interface SimpleDividerStyle extends CSSProperties {
	"--a-simple-divider-background"?: string;
	"--a-simple-divider-height"?: string;
	"--a-simple-divider-width"?: string;
	"--a-simple-divider-animation-duration"?: string;
	"--a-simple-divider-border-radius"?: string;
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
}

export default function SimpleDivider(props: SimpleDividerProps) {
	const dividerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5, // Adjust this value as per your requirement
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (props.animate) {
						dividerRef.current?.classList.add("animate");
					}
					if (props["animate-vertical"]) {
						dividerRef.current?.classList.add("animate-vertical");
					}
					observer.unobserve(entry.target); // Stop observing once animation is applied
				}
			});
		}, options);

		if (dividerRef.current) {
			observer.observe(dividerRef.current);
		}

		return () => {
			if (dividerRef.current) {
				observer.unobserve(dividerRef.current);
			}
		};
	}, [props.animate, props["animate-vertical"]]);

	return (
		<div
			className="a-simple-divider"
			ref={dividerRef}
			style={{
				"--a-simple-divider-background": props.color,
				"--a-simple-divider-height": props.height,
				"--a-simple-divider-width": props.width,
				"--a-simple-divider-border-radius": props["border-radius"],
				"--a-simple-divider-animation-duration": props["animation-duration"],
				...props.style,
			}}
		></div>
	);
}

// TODO trebuie pus la animatie la simple divider un width care sa poata fi schimbat

import React, {CSSProperties, ReactElement, ReactNode} from "react";



export interface CustomGridRowProps {
	children?: ReactNode;
	"vertical-alignment"?: string;
	"reverse-breakpoint"?: string;
	"row-background"?: string;
}
export default function CustomGridRow({children, "vertical-alignment": verticalAlignment, "reverse-breakpoint": reverseBreakpoint, "row-background": rowBackground}: CustomGridRowProps) {
	return (
		<section className={`row align-items-${verticalAlignment} ${reverseBreakpoint ? `flex-${reverseBreakpoint}-row-reverse` : ''}`} style={{background: rowBackground }} >
			{children}
		</section>
	);
}
import React, {ReactElement, ReactNode} from "react";

export interface CustomGridRowProps {
	children: ReactNode;
	"vertical-alignment": string;
	"reverse-breakpoint"?: string;
}
export default function CustomGridRow({children, "vertical-alignment": verticalAlignment, "reverse-breakpoint": reverseBreakpoint}: CustomGridRowProps) {
	return (
		<section className={`row align-items-${verticalAlignment} ${reverseBreakpoint ? `flex-${reverseBreakpoint}-row-reverse` : ''}`}>
			{children}
		</section>
	);
}
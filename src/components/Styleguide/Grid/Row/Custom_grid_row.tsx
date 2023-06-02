import React, {ReactElement, ReactNode} from "react";

export interface Custom_grid_rowProps {
	children: ReactNode;
	"vertical-alignment": string;
	"reverse-breakpoint"?: string;
}
export default function Custom_grid_row({children, "vertical-alignment": verticalAlignment, "reverse-breakpoint": reverseBreakpoint}: Custom_grid_rowProps) {
	return (
		<section className={`row align-items-${verticalAlignment} ${reverseBreakpoint ? `flex-${reverseBreakpoint}-row-reverse` : ''}`}>
			{children}
		</section>
	);
}
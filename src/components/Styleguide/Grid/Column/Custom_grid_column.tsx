import React, { ReactNode } from "react";

export interface CustomGridColumnProps {
	children: ReactNode;

	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
	xxl?: number;


	"xs-offset"?: number;
	"sm-offset"?: number;
	"md-offset"?: number;
	"lg-offset"?: number;
	"xl-offset"?: number;
	"xxl-offset"?: number;
}

export default function CustomGridColumn({
		 children,
		 xs,
		 sm,
		 md,
		 lg,
		 xl,
		 xxl,

		"xs-offset": xs_offset,
		"sm-offset": sm_offset,
		"md-offset": md_offset,
		"lg-offset": lg_offset,
		"xl-offset": xl_offset,
		"xxl-offset": xxl_offset,
	 }: CustomGridColumnProps) {
	return (
		<>
			<section
				className={`s-custom-grid-column ${xs ? `col-xs-${xs}` : ""} ${sm ? `col-sm-${sm}` : ""} ${md ? `col-md-${md}` : ""} ${lg ? `col-lg-${lg}` : ""} ${ xl ? `col-xl-${xl}` : "" } ${xxl ? `col-xxl-${xxl}` : ""} col-off ${xs_offset ? `offset-xs-${xs_offset}` : ""} ${sm_offset ? `offset-sm-${sm_offset}` : ""} ${md_offset ? `offset-md-${md_offset}` : ""} ${lg_offset ? `offset-lg-${lg_offset}` : ""} `}
			>
				{children}
			</section>
		</>
	);
}

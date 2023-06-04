import React, {CSSProperties, ReactNode} from "react";
import '../Column/Custom-grid-column.scss';

interface CustomGridColumnStyle extends CSSProperties{
	"--s-column-background-color"?: string;
	"--s-column-border-radius"?: string;
	"--s-column-background-opacity"?: string;
	"--s-column-padding-top"?: string;
	"--s-column-padding-bottom"?: string;
}
export interface CustomGridColumnProps {
	style?: CustomGridColumnStyle;

	children: ReactNode;

	"column-background"?: string;
	"column-border-radius"?: string;
	"column-background-opacity"?: string;
	"column-padding-top"?: string;
	"column-padding-bottom"?: string;
	"columns-equal-paddings"?: boolean;

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

		style,

		"column-background": columnBackground,
		"column-border-radius": columnBorderRadius,
		"column-background-opacity": columnBackgroundOpacity,
		"column-padding-top": columnPaddingTop,
		"column-padding-bottom": columnPaddingBottom,
		"columns-equal-paddings": columnEqualPaddings,

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

	const columnStyle: CSSProperties = {
		"--s-column-background-color": columnBackground,
		"--s-column-border-radius": columnBorderRadius,
		"--s-column-background-opacity": columnBackgroundOpacity,
		"--s-column-padding-top": columnPaddingTop,
		"--s-column-padding-bottom": columnPaddingBottom,
		...style
	};

	return (
		<>
			<section
				style={columnStyle}
				className={`s-custom-grid-column ${columnEqualPaddings ? "equal-paddings" : ""} ${xs ? `col-xs-${xs}` : ""} ${sm ? `col-sm-${sm}` : ""} ${md ? `col-md-${md}` : ""} ${lg ? `col-lg-${lg}` : ""} ${ xl ? `col-xl-${xl}` : "" } ${xxl ? `col-xxl-${xxl}` : ""} col-off ${xs_offset ? `offset-xs-${xs_offset}` : ""} ${sm_offset ? `offset-sm-${sm_offset}` : ""} ${md_offset ? `offset-md-${md_offset}` : ""} ${lg_offset ? `offset-lg-${lg_offset}` : ""} `}
			>
				<div className={`column-wrapper`} style={{padding: "10px"}}>
					{children}
				</div>
			</section>
		</>
	);
}

//todo de pus in fiecare snippet de molecula si snippet-ul de CustomGridColumn !!

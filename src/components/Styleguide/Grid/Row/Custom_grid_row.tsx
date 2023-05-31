import React, {ReactElement, ReactNode} from "react";
import "./Custom_grid_row.scss";
export interface Custom_grid_rowProps {
	children: ReactNode;
}
export default function Custom_grid_row({children}: Custom_grid_rowProps) {
	return (
		<>
			<section className={`row row`}>
				{children}
			</section>
		</>
	);
}
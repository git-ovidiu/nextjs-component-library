import React from "react";
import { render } from "@testing-library/react";
import {Custom_grid_column} from "../../../index"

describe("Custom_grid_column", () => {
	test("renders the Custom_grid_column", () => {
		render(
			<Custom_grid_column
				lg={6}
				md={6}
				sm={6}
				xl={6}
				xs={12}
				xxl={6}
			>
				<h1
					style={{
						border: '2px solid red'
					}}
				>
					offset-- & col--6
				</h1>
			</Custom_grid_column>
		);
	});
});
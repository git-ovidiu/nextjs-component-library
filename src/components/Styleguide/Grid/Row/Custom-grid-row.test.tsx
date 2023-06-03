import React from "react";
import { render } from "@testing-library/react";
import {CustomGridColumn, CustomGridRow} from "../../../index"

describe("CustomGridColumn", () => {
	test("renders the CustomGridColumn", () => {
		render(
			<CustomGridRow
				vertical-alignment="center"
			>
				<CustomGridColumn
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
				</CustomGridColumn>
				<CustomGridColumn
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
				</CustomGridColumn>
			</CustomGridRow>
		);
	});
});
import React from "react";
import { render } from "@testing-library/react";

import Title_and_description from "./Title_and_description";

describe("Title_and_description", () => {
	test("renders the Title_and_description", () => {
		render(<Title_and_description text="TESTING" />);
	});
});
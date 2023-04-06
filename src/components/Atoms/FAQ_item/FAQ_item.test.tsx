import React from "react";
import { render } from "@testing-library/react";

import FAQ_item from "./FAQ_item";

describe("FAQ_item", () => {
  test("renders the Button component", () => {
    render(<FAQ_item title={<h1>test</h1>} arrow={<h1>test</h1>} close={<h1>test</h1>} description="test" />);
  });
});
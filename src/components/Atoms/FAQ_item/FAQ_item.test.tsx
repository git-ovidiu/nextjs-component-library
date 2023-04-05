import React from "react";
import { render } from "@testing-library/react";

import FAQ_item from "./FAQ_item";

describe("FAQ_item", () => {
  test("renders the Button component", () => {
    render(<FAQ_item title="Title" arrow="test" close="test" description="test" />);
  });
});
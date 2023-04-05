 import React from "react";
import { render } from "@testing-library/react";

import Testing from "./Testing";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Testing test="Hello world!" />);
  });
});
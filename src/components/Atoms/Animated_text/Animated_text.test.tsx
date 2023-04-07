 import React from "react";
import { render } from "@testing-library/react";

import Animated_text from "./Animated_text";

describe("Animated_text", () => {
  test("renders the Animated_text component", () => {
    render(<Animated_text text="Hello world!" variant="h1" />);
  });
});
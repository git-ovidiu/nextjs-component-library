 import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button_Slide";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button text="Hello world!" hover_effect="slide-right" />);
  });
});
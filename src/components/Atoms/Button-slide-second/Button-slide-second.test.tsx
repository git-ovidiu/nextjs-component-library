 import React from "react";
import { render } from "@testing-library/react";

import Button_Slide_Second from "./Button_Slide_Second";

describe("Button_Slide_Second", () => {
  test("renders the Button_Slide_Second component", () => {
    render(<Button_Slide_Second text="Hello world!" hover_effect="slide-right" />);
  });
});
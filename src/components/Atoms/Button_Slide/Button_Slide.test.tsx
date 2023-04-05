 import React from "react";
import { render } from "@testing-library/react";

import Button_slide from "./Button_Slide";

describe("Button_slide", () => {
  test("renders the Button_slide component", () => {
    render(<Button_slide text="Hello world!" hover_effect="slide-right" />);
  });
});
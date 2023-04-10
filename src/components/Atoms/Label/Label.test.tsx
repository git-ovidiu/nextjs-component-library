import React from "react";
import { render } from "@testing-library/react";

import Label from "./Label";

describe("Label", () => {
  test("renders the Label component", () => {
    render(<Label text="Hello world!" hover_effect="slide-right" />);
  });
});

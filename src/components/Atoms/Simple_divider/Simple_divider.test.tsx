import React from "react";
import { render } from "@testing-library/react";

import Simple_divider from "./Simple_divider";

describe("Simple_divider", () => {
  test("renders the Simple_divider", () => {
    render(
        <>
          <Simple_divider
              animate
              animation-duration="1s"
              color="#4cbfa6"
              height="2px"
              width="100%"
          />
        </>
    );
  });
});

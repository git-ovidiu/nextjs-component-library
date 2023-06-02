import React from "react";
import { render } from "@testing-library/react";

import SimpleDivider from "./Simple-divider";

describe("SimpleDivider", () => {
  test("renders the SimpleDivider", () => {
    render(
        <>
          <SimpleDivider
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

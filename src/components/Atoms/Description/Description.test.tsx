import React from "react";
import { render } from "@testing-library/react";
import Description from "./Description";

describe("Description", () => {
  test("renders the Description component", () => {
    render(
      <Description
        color="black"
        underline
        italic
        text={
          <h1>
            Vel massa erat deseruisse eripuit aenean
            <Description color="red" text={<h4>second text</h4>} /> inimicus
            sadipscing proin
          </h1>
        }
      />
    );
  });
});

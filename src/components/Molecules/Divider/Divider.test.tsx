import React from "react";
import { render } from "@testing-library/react";

import Divider from "./Divider";
import { Simple_Divider } from "../../index";

describe("Divider", () => {
  test("renders the Divider", () => {
    render(
      <>
        <Divider
          divider={
            <div style={{ height: "100px", width: "100%" }}>
              <Simple_Divider width="3px" height="100%" color="blue" />
              <Simple_Divider width="3px" height="100%" color="red" />
              <Simple_Divider width="3px" height="100%" color="green" />
              <Simple_Divider width="3px" height="100%" color="yellow" />
              <Simple_Divider width="3px" height="100%" color="black" />
            </div>
          }
          vertical
          position="center"
        />
        <Divider
          divider={
            <>
              <Simple_Divider width="100%" height="5px" color="red" />
              <Simple_Divider width="100%" height="5px" color="blue" />
              <Simple_Divider width="100%" height="5px" color="green" />
            </>
          }
          position="center"
          vertical={false}
        />
      </>
    );
  });
});

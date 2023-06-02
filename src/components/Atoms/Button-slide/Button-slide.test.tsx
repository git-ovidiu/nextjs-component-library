 import React from "react";
import { render } from "@testing-library/react";

import ButtonSlide from "./Button-slide";
import {AiOutlineDownload} from "react-icons/ai"

describe("Button_slide", () => {
  test("renders the Button_slide component", () => {
    render(
        <>
          <ButtonSlide
              hover-effect="slide-right"
              icon={<AiOutlineDownload size={20} />}
              icon-position="right"
              padding="xs"
              text="Placeholder text"
          />
        </>
    );
  });
});
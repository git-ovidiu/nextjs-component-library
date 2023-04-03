import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button_Slide";
describe("Button", function () {
    test("renders the Button component", function () {
        render(React.createElement(Button, { text: "Hello world!", hover_effect: "slide-right" }));
    });
});
//# sourceMappingURL=Button_Slide.test.js.map
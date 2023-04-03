import { __assign } from "tslib";
import React from 'react';
import Button_Line_Drawing from './Button_Line_Drawing';
var Extra_Info = "\n<br>\n\n<h2><u>CSS VARIABLES</u></h2>\n<ul>\n  <li>--a-button-line-drawing-font-size</li>\n  <li>--a-button-line-drawing-padding</li>\n  <li>--a-button-line-drawing-line-height</li>\n  <li>--a-button-line-drawing-font-weight</li>\n  <li>--a-button-line-drawing-text-color</li>\n  <li>--a-button-line-drawing-line-color</li>\n  <li>--a-button-line-drawing-background-color</li>\n  <li>--a-button-line-drawing-animation-transition</li>\n  <li>--a-button-line-drawing-animation-transition-fast</li>\n  <li>--a-button-line-drawing-animation-transition-faster</li>\n  <li>--a-button-line-drawing-animation-transition-ultra-fast</li>\n</ul>\n\n<table>\n  <tr>\n    <td>--a-button-line-drawing-font-size</td>\n    <td>20px</td>\n  </tr>\n  <tr>\n    <td>--a-button-line-drawing-padding</td>\n    <td>20px 30px</td>\n  </tr>\n  <tr>\n    <td>--a-button-line-drawing-line-height</td>\n    <td>2</td>\n  </tr>\n  <tr>\n    <td>--a-button-line-drawing-font-weight</td>\n    <td>400</td>\n  </tr>\n  <tr>\n    <td>--a-button-line-drawing-text-color</td>\n    <td>$color-black</td>\n  </tr>\n  <tr>\n    <td>--a-button-line-drawing-line-color</td>\n    <td>$tertiary-color</td>\n  </tr>\n  <tr>\n    <td>--a-button-line-drawing-background-color</td>\n    <td>transparent</td>\n  </tr>\n  <tr>\n    <td>--a-button-line-drawing-animation-transition</td>\n    <td>$transition-duration-normal</td>\n  </tr>\n  <tr>\n    <td>--a-button-line-drawing-animation-transition-fast</td>\n    <td>$transition-duration-fast</td>\n  </tr>\n  <tr>\n    <td>--a-button-line-drawing-animation-transition-faster</td>\n    <td>$transition-duration-faster</td>\n  </tr>\n  <tr>\n    <td>--a-button-line-drawing-animation-transition-ultra-fast</td>\n    <td>$transition-duration-ultra-fast</td>\n  </tr>\n</table>\n";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Button_Line_Drawing',
    component: Button_Line_Drawing,
    argTypes: {
        line_effect: {
            control: "radio",
            options: ["line-below", "line-above", "line-side"]
        },
    },
    parameters: {
        actions: { disabled: true },
        docs: {
            description: {
                component: Extra_Info
            }
        }
    }
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) {
    return React.createElement(Button_Line_Drawing, __assign({}, args));
};
export var Button_Line_Drawing_story = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Button_Line_Drawing_story.args = {
    text: 'Hello world!',
    line_effect: "line-below"
};
//# sourceMappingURL=Button_Line_Drawing.stories.js.map
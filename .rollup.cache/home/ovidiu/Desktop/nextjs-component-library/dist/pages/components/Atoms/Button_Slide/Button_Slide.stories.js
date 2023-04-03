import { __assign } from "tslib";
import React from 'react';
import Button_slide from './Button_Slide';
var Extra_Info = "\n<br>\n\n<h2><u>CSS VARIABLES</u></h2>\n<ul>\n  <li>--a-button-slide-background</li>\n  <li>--a-button-slide-background-hover</li>\n  <li>--a-button-slide-animation-transition</li>\n  <li>--a-button-slide-border-radius</li>\n  <li>--a-button-slide-font-size</li>\n  <li>--a-button-slide-padding</li>\n  <li>--a-button-slide-line-height</li>\n  <li>--a-button-slide-font-weight</li>\n  <li>--a-button-line-drawing-text-color</li>\n</ul>\n";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Button_slide',
    component: Button_slide,
    argTypes: {
        hover_effect: {
            control: "radio",
            options: ["slide-up", "slide-down", "slide-right", "slide-left"]
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
    return React.createElement(Button_slide, __assign({}, args));
};
export var Button_slide_story = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Button_slide_story.args = {
    text: 'Hello world!',
    hover_effect: "slide-right"
};
//# sourceMappingURL=Button_Slide.stories.js.map
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button_Slide_Second from "./Button_Slide_Second";

const Extra_Info = `
<br>
<h2><u>CSS VARIABLES</u></h2>
<ul>
  <li>--a-button-slide-background</li>
  <li>--a-button-slide-background-hover</li>
  <li>--a-button-slide-animation-transition</li>
  <li>--a-button-slide-border-radius</li>
  <li>--a-button-slide-font-size</li>
  <li>--a-button-slide-padding</li>
  <li>--a-button-slide-line-height</li>
  <li>--a-button-slide-font-weight</li>
  <li>--a-button-line-drawing-text-color</li>
  <li>--a-button-slide-second-gap</li>
  <li>--a-button-slide-second-decoration-margin-left</li>
  <li>--a-button-slide-second-decoration-height</li>
  <li>--a-button-slide-second-decoration-width</li>
</ul>
<table>
  <tr>
    <td>--a-button-slide-second-background</td>
    <td>$tertiary-color</td>
  </tr>
  <tr>
    <td>--a-button-slide-second-background-hover</td>
    <td>$primary-color</td>
  </tr>
  <tr>
    <td>--a-button-slide-second-animation-transition</td>   
    <td>$transition-duration-normal</td>
  </tr>
  <tr>
    <td>--a-button-slide-second-animation-transition-fast</td>
    <td>$transition-duration-fast</td>
  </tr>
  <tr>
    <td>--a-button-slide-second-border-radius</td>
    <td>$border-radius-0</td>
  </tr>
  <tr>
    <td>--a-button-slide-second-font-size</td>
    <td>20px</td>
  </tr>
  <tr>
    <td>--a-button-slide-second-padding</td>
    <td>20px 30px</td>
  </tr>
  <tr>
    <td>--a-button-slide-second-line-height</td>
    <td>1</td>
  </tr>
  <tr>
    <td>--a-button-slide-second-font-weight</td>
    <td>400</td>
  </tr>
  <tr>
    <td>--a-button-slide-second-text-color</td>
    <td>$color-white</td>
  </tr>
  <tr>
    <td>--a-button-slide-second-gap</td>
    <td>14px</td>
  </tr>
  <tr>
    <td>--a-button-slide-second-decoration-margin-left</td>
    <td>10px</td>
  </tr>
  <tr>
    <td>--a-button-slide-second-decoration-height</td>
    <td>300px</td>
  </tr>
  <tr>
    <td>--a-button-slide-second-decoration-width</td>
    <td>140%</td>
  </tr>
</table>
`;

export default {
  title: "Atoms/Button_Slide_Second",
  component: Button_Slide_Second,
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof Button_Slide_Second>;

const Template: ComponentStory<typeof Button_Slide_Second> = (args) => (
  <Button_Slide_Second {...args} />
);

export const Button_Slide_Second_story = Template.bind({});

Button_Slide_Second_story.args = {
  text: "Placeholder text",
  hover_effect: "tertiary",
  iconPosition: "right",
};

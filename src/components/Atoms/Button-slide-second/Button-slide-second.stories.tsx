import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import ButtonSlideSecond from "./Button-slide-second";

const Extra_Info = `
<br>
<h2><u>CSS VARIABLES</u></h2>
<ul>
<li>--a-button-slide-second-background</li>
<li>--a-button-slide-second-background-hover</li>
<li>--a-button-slide-second-animation-transition</li>
<li>--a-button-slide-second-animation-transition-fast</li>
<li>--a-button-slide-second-border-radius</li>
<li>--a-button-slide-second-font-size</li>
<li>--a-button-slide-second-padding</li>
<li>--a-button-slide-second-line-height</li>
<li>--a-button-slide-second-font-weight</li>
<li>--a-button-slide-second-text-color</li>
<li>--a-button-slide-second-gap</li>
<li>--a-button-slide-second-decoration-margin-left</li>
<li>--a-button-slide-second-decoration-height</li>
<li>--a-button-slide-second-decoration-width</li>
<li>--a-button-slide-second-animation-transform-default-state</li>
<li>--a-button-slide-second-animation-transform-hover</li>
<li>--a-button-slide-second-min-width</li>
</ul>
<br>
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
<td>120%</td>
</tr>
<tr>
<td>--a-button-slide-second-animation-transform-default-state</td>
<td>translateX(-98%) translateY(-25%) rotate(45deg)</td>
</tr>
<tr>
<td>--a-button-slide-second-animation-transform-hover</td>
<td>translateX(-9%) translateY(-25%) rotate(45deg)</td>
</tr>
<tr>
<td>--a-button-slide-second-min-width</td>
<td>250px</td>
</tr>
</table>
`;

export default {
  title: "Atoms/Buttons/Slide Animation v2",
  component: ButtonSlideSecond,
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof ButtonSlideSecond>;

const Template: ComponentStory<typeof ButtonSlideSecond> = (args) => (
  <>
    <ButtonSlideSecond {...args} />
  </>
);

export const ButtonSlideSecond_story = Template.bind({});

ButtonSlideSecond_story.args = {
  text: "Placeholder text",
  hover_effect: "tertiary",
  iconPosition: "right",
};

import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import Button_Line_Drawing from "./Button_Line_Drawing";

const Extra_Info = `
<br/>
<h2><u>PROPS</u></h2>
<table>
  <tr>
    <td>name</td>
    <td>type</td>
    <td>can be:</td>
  </tr>
  <tr>
    <td>text</td>
    <td>string</td>
    <td>-</td>
  </tr>
  <tr>
    <td>line_effect</td>
    <td>string</td>
    <td>line-below, line-above, line-side</td>
  </tr>
  <tr>
    <td>padding</td>
    <td>string</td>
    <td>xs, s, m, l, xl, xxl</td>
  </tr>
</table>
<br>
<h2><u>CSS VARIABLES</u></h2>
<ol>
  <li>--a-button-line-drawing-font-size</li>
  <li>--a-button-line-drawing-line-height</li>
  <li>--a-button-line-drawing-font-weight</li>
  <li>--a-button-line-drawing-text-color</li>
  <li>--a-button-line-drawing-line-color</li>
  <li>--a-button-line-drawing-background-color</li>
  <li>--a-button-line-drawing-animation-transition</li>
  <li>--a-button-line-drawing-animation-transition-fast</li>
  <li>--a-button-line-drawing-animation-transition-faster</li>
  <li>--a-button-line-drawing-animation-transition-ultra-fast</li>
  <li>--a-button-line-drawing-padding-xs</li>
  <li>--a-button-line-drawing-padding-s</li>
  <li>--a-button-line-drawing-padding-m</li>
  <li>--a-button-line-drawing-padding-l</li>
  <li>--a-button-line-drawing-padding-xl</li>
  <li>--a-button-line-drawing-padding-xxl</li>
</ol>
<br>
<table>
  <tr>
    <td>--a-button-line-drawing-font-size</td>
    <td>20px</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-line-height</td>
    <td>2</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-font-weight</td>
    <td>400</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-text-color</td>
    <td>$color-black</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-line-color</td>
    <td>$tertiary-color</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-background-color</td>
    <td>transparent</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-animation-transition</td>
    <td>$transition-duration-normal</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-animation-transition-fast</td>
    <td>$transition-duration-fast</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-animation-transition-faster</td>
    <td>$transition-duration-faster</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-animation-transition-ultra-fast</td>
    <td>$transition-duration-ultra-fast</td>
  </tr>
  <br>
  <tr>
    <td>--a-button-line-drawing-padding-xs</td>
    <td>$padding-xs</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-padding-s</td>
    <td>$padding-s</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-padding-m</td>
    <td>$padding-m</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-padding-l</td>
    <td>$padding-l</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-padding-xl</td>
    <td>$padding-xl</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-padding-xxl</td>
    <td>$padding-xxl</td>
  </tr>
</table>
`;

export default {
  title: "Atoms/Buttons/Line Drawing",
  component: Button_Line_Drawing,
  argTypes: {
    line_effect: {
      control: "radio",
      options: ["line-below", "line-above", "line-side"],
    },
    padding: {
      control: "radio",
      options: ["xs", "s", "m", "l", "xl", "xxl"],
    },
  },
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof Button_Line_Drawing>;

const Template: ComponentStory<typeof Button_Line_Drawing> = (args) => (
  <>
    <Button_Line_Drawing {...args} />
  </>
);

export const Button_Line_Drawing_story = Template.bind({});
Button_Line_Drawing_story.args = {
  text: "Placeholder text",
  padding: "xs",
  line_effect: "line-below",
};

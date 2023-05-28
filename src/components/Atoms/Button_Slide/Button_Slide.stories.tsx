import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {AiOutlineDownload} from "react-icons/ai";
import Button_slide from "./Button_Slide";

const Extra_Info = `
<br>
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
    <td>hover-effect</td>
    <td>string</td>
    <td>slide_down, slide_left, slide_right, slide_up</td>
  </tr>
  <tr>
    <td>padding</td>
    <td>string</td>
    <td>xs, s, m, l, xl, xxl</td>
  </tr>
  <tr>
    <td>icon</td>
    <td>ReactElement</td>
    <td>use React Icons</td>
  </tr>
  <tr>
    <td>icon-position</td>
    <td>string</td>
    <td>left | right</td>
  </tr>
</table>
<br>
<h2><u>CSS VARIABLES</u></h2>
<ol>
  <li>--a-button-slide-background</li>
  <li>--a-button-slide-background-hover</li>
  <li>--a-button-slide-animation-transition</li>
  <li>--a-button-slide-border-radius</li>
  <li>--a-button-slide-font-size</li>
  <li>--a-button-slide-line-height</li>
  <li>--a-button-slide-font-weight</li>
  <li>--a-button-slide-text-color</li>
  <li>--a-button-slide-gap</li>
  
  <li>--a-button-slide-padding-xxs</li>
  <li>--a-button-slide-padding-xs</li>
  <li>--a-button-slide-padding-s</li>
  <li>--a-button-slide-padding-m</li>
  <li>--a-button-slide-padding-l</li>
  <li>--a-button-slide-padding-xl</li>
  <li>--a-button-slide-padding-xxl</li>
</ol>
<table>
  <tr>
    <td>--a-button-slide-background</td>
    <td>$tertiary-color</td>
  </tr>
  <tr>
    <td>--a-button-slide-background-hover</td>
    <td>$primary-color</td>
  </tr>
  <tr>
    <td>--a-button-slide-animation-transition</td>
    <td>0.3s</td>
  </tr>
  <tr>
    <td>--a-button-slide-border-radius</td>
    <td>$border-radius-0</td>
  </tr>
  <tr>
    <td>--a-button-slide-font-size</td>
    <td>20px</td>
  </tr>
  <tr>
    <td>--a-button-slide-line-height</td>
    <td>1</td>
  </tr>
  <tr>
    <td>--a-button-slide-font-weight</td>
    <td>400</td>
  </tr>
  <tr>
    <td>--a-button-slide-text-color</td>
    <td>$color-white</td>
  </tr>
  <tr>
    <td>--a-button-slide-text-color</td>
    <td>$color-white</td>
  </tr>
  <tr>
    <td>--a-button-slide-gap</td>
    <td>15px</td>
  </tr>
  <br>
  <tr>
    <td>--a-button-slide-padding-xs</td>
    <td>$padding-xs</td>
  </tr>
  <tr>
    <td>--a-button-slide-padding-s</td>
    <td>$padding-s</td>
  </tr>
  <tr>
    <td>--a-button-slide-padding-m</td>
    <td>$padding-m</td>
  </tr>
  <tr>
    <td>--a-button-slide-padding-l</td>
    <td>$padding-l</td>
  </tr>
  <tr>
    <td>--a-button-slide-padding-xl</td>
    <td>$padding-xl</td>
  </tr>
  <tr>
    <td>--a-button-slide-padding-xxl</td>
    <td>$padding-xxl</td>
  </tr>
</table>
`;

export default {
  title: "Atoms/Buttons/Slide Animation",
  component: Button_slide,
  argTypes: {
    "hover-effect": {
      control: "radio",
      options: ["slide-up", "slide-down", "slide-right", "slide-left"],
    },
    "icon-position": {
      control: "radio",
      options: ["left", "right"],
    },
    padding: {
      control: "radio",
      options: ["xxs", "xs", "s", "m", "l", "xl", "xxl"],
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
} as ComponentMeta<typeof Button_slide>;

const Template: ComponentStory<typeof Button_slide> = (args) => (
  <>
    <Button_slide {...args} icon={<AiOutlineDownload size={20} />} />
  </>
);

export const Button_slide_story = Template.bind({});

Button_slide_story.args = {
  text: "Placeholder text",
  "hover-effect": "slide-right",
  padding: "xs",
  "icon-position": "right",
};

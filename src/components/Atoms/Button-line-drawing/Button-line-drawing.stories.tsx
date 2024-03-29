import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ButtonLineDrawing from "./Button-line-drawing";
import { AiOutlineDownload } from "react-icons/ai";

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
<td>link-url</td>
<td>string</td>
<td>use website route '/' || URL (has next/link implemented)</td>
</tr>
<tr>
<td>open-in-new-tab</td>
<td>boolean</td>
<td>-</td>
</tr>
  <tr>
    <td>text</td>
    <td>string</td>
    <td>-</td>
  </tr>
  <tr>
    <td>line-effect</td>
    <td>string</td>
    <td>line-below, line-above, line-side</td>
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
  
  <li>--a-button-line-drawing-padding-xxs</li>
  <li>--a-button-line-drawing-padding-xs</li>
  <li>--a-button-line-drawing-padding-s</li>
  <li>--a-button-line-drawing-padding-m</li>
  <li>--a-button-line-drawing-padding-l</li>
  <li>--a-button-line-drawing-padding-xl</li>
  <li>--a-button-line-drawing-padding-xxl</li>
  <li>--a-button-line-drawing-gap</li>
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
  <td>--a-button-line-drawing-padding-xxs</td>
  <td>$padding-xxs</td>
</tr>
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
  <tr>
    <td>--a-button-line-drawing-gap</td>
    <td>15px</td>
  </tr>
</table>
`;

export default {
  title: "Atoms/Buttons/Line Drawing",
  component: ButtonLineDrawing,
  argTypes: {
    "line-effect": {
      control: "radio",
      options: ["line-below", "line-above", "line-side"],
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
} as ComponentMeta<typeof ButtonLineDrawing>;

const Template: ComponentStory<typeof ButtonLineDrawing> = (args) => (
  <>
    <ButtonLineDrawing
      {...args}
      open-in-new-tab={args["open-in-new-tab"]}
      link-url={args["link-url"]}
      icon-position={args["icon-position"]}
      icon={<AiOutlineDownload size={20} />}
    />
  </>
);

export const ButtonLineDrawing_story = Template.bind({});
ButtonLineDrawing_story.args = {
  "open-in-new-tab": true,
  "link-url": "https://www.google.com",
  text: "Placeholder text",
  padding: "xs",
  "line-effect": "line-below",
  "icon-position": "right",
};

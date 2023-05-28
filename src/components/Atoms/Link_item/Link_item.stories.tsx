import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link_item from "./Link_item";


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
    <td>link-type</td>
    <td>string</td>
    <td>main || secondary</td>
  </tr>
  <tr>
    <td>link</td>
    <td>ReactElement</td>
    <td>use Nextjs Link || regular < a / ></td>
  </tr>
</table>
<br>
<h2><u>CSS VARIABLES</u></h2>
<ol>
  <li>--a-link-item-main-link-font-weight</li>
  <li>--a-link-item-main-link-font-size</li>
  <li>--a-link-item-main-link-line-height</li>
  <li>--a-link-item-main-link-color</li>
  <li>--a-link-item-main-link-margin-botton</li>
  <li>--a-link-item-secondary-link-font-weight</li>
  <li>--a-link-item-secondary-link-font-size</li>
  <li>--a-link-item-secondary-link-line-height</li>
  <li>--a-link-item-secondary-link-color</li>
</ol>
<table>
  <tr>
    <td>--a-link-item-main-link-font-weight</td>
    <td>$font-weight-xl</td>
  </tr>
  <tr>
    <td>--a-link-item-main-link-font-size</td>
    <td>$font-size-main-link</td>
  </tr>
  <tr>
    <td>--a-link-item-main-link-line-height</td>
    <td>24px</td>
  </tr>
  <tr>
    <td>--a-link-item-main-link-color</td>
    <td>$primary-color</td>
  </tr>
  <tr>
    <td>--a-link-item-main-link-margin-botton</td>
    <td>5px</td>
  </tr>
  <tr>
    <td>--a-link-item-secondary-link-font-weight</td>
    <td>$font-weight-l</td>
  </tr>
  <tr>
    <td>--a-link-item-secondary-link-font-size</td>
    <td>$font-size-secondary-link</td>
  </tr>
  <tr>
    <td>--a-link-item-secondary-link-line-height</td>
    <td>24px</td>
  </tr>
  <tr>
    <td>--a-link-item-secondary-link-color</td>
    <td>$extra-color</td>
  </tr>
</table>

`;

export default {
  title: "Atoms/Text/Link Item",
  component: Link_item,
  argTypes:{
    "link-type": {
      control: "radio",
      options: ['main', 'secondary']
    }
  },
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof Link_item>;

const Template: ComponentStory<typeof Link_item> = (args) => <Link_item {...args} />;

export const Link_item_story = Template.bind({});

Link_item_story.args = {
  "link-type": 'main',
  link: 'nextjs-link'
};

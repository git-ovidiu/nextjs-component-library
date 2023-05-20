import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer_link from "./Footer_link";


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
    <td>link_type</td>
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
  <li>--a-footer-main-link-font-weight</li>
  <li>--a-footer-main-link-font-size</li>
  <li>--a-footer-main-link-line-height</li>
  <li>--a-footer-main-link-color</li>
  <li>--a-footer-main-link-margin-botton</li>
  <li>--a-footer-secondary-link-font-weight</li>
  <li>--a-footer-secondary-link-font-size</li>
  <li>--a-footer-secondary-link-line-height</li>
  <li>--a-footer-secondary-link-color</li>
</ol>
<table>
  <tr>
    <td>--a-footer-main-link-font-weight</td>
    <td>$font-weight-xl</td>
  </tr>
  <tr>
    <td>--a-footer-main-link-font-size</td>
    <td>$font-size-footer-main-link</td>
  </tr>
  <tr>
    <td>--a-footer-main-link-line-height</td>
    <td>24px</td>
  </tr>
  <tr>
    <td>--a-footer-main-link-color</td>
    <td>$primary-color</td>
  </tr>
  <tr>
    <td>--a-footer-main-link-margin-botton</td>
    <td>5px</td>
  </tr>
  <tr>
    <td>--a-footer-secondary-link-font-weight</td>
    <td>$font-weight-l</td>
  </tr>
  <tr>
    <td>--a-footer-secondary-link-font-size</td>
    <td>$font-size-footer-secondary-link</td>
  </tr>
  <tr>
    <td>--a-footer-secondary-link-line-height</td>
    <td>24px</td>
  </tr>
  <tr>
    <td>--a-footer-secondary-link-color</td>
    <td>$extra-color</td>
  </tr>
</table>

`;

export default {
  title: "Atoms/Text/Footer Link",
  component: Footer_link,
  argTypes:{
    link_type: {
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
} as ComponentMeta<typeof Footer_link>;

const Template: ComponentStory<typeof Footer_link> = (args) => <Footer_link {...args} />;

export const Footer_link_story = Template.bind({});

Footer_link_story.args = {
  link_type: 'main',
  link: 'nextjs-link'
};

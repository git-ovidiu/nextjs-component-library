import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer_link_list from "./Footer_link_list";
import Footer_link from "../../Atoms/Footer_link/Footer_link";

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
  <td>link_element</td>
  <td></td>
  </tr>
</table>
<br>
<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--m-footer-link-list-gap</li>
</ol>
<table>
<tr>
<td>--m-footer-link-list-gap</td>
<td>5px</td>
</tr>
</table> 

`;

export default {
  title: "Molecules/Footer Link List",
  component: Footer_link_list,
  argTypes: {
    position:{
      control: 'radio',
      options: ['left', 'center', 'right']
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
} as ComponentMeta<typeof Footer_link_list>;

const Template: ComponentStory<typeof Footer_link_list> = (args) => (
  <Footer_link_list {...args} />
);

export const Footer_link_list_story = Template.bind({});

Footer_link_list_story.args = {
  position: 'center',
  link_element: (
    <>
      <Footer_link link={<p>main</p>} link_type="main" />
      <Footer_link link={<p>secondary</p>} link_type="secondary" />
      <Footer_link link={<p>secondary</p>} link_type="secondary" />
      <Footer_link link={<p>secondary</p>} link_type="secondary" />
    </>
  ),
};

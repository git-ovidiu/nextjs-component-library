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
</table>
<br>


`;

export default {
  title: "Atoms/Footer_link",
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

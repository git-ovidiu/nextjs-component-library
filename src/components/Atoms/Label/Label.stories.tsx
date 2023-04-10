import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AiOutlineDownload } from "react-icons/ai";
import Label from "./Label";

const Extra_Info = `
<br>
<ul>
  <h2><u>CSS VARIABLES</u></h2>
  <li>--a-label-color</li>
  <li>--a-label-background-color</li>
  <li>--a-label-padding</li>
  <li>--a-label-border-radius</li>
</ul>
<table>
  <tr>
    <td>--a-label-color</td>
    <td>$color-white</td>
  </tr>
  <tr>
    <td>--a-label-background-color</td>
    <td>$color-black</td>
  </tr>
  <tr>
    <td>--a-label-padding</td>
    <td>5px</td>
  </tr>
  <tr>
    <td>--a-label-border-radius</td>
    <td>$border-radius-xxl</td>
  </tr>
</table>

`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Label",
  component: Label,
  argTypes: {
    hover_effect: {
      control: "radio",
      options: ["slide-up", "slide-down", "slide-right", "slide-left"],
    },
    iconPosition: {
      control: "radio",
      options: ["left", "right"],
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
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = (args) => (
    <Label {...args} />
);

export const Label_story = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Label_story.args = {
  text: "Placeholder text",
  color: 'white',
  backgroundColor: 'black',
};

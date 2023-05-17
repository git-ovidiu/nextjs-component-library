import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Description from "./Description";

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
    <td>color</td>
    <td>string</td>
    <td>hex || color name || rgb</td>
  </tr>
  <tr>
    <td>backgroundColor</td>
    <td>string</td>
    <td>hex || color name || rgb</td>
  </tr>
</table>
<br>
<ol>
  <li>--a-label-color</li>
  <li>--a-label-background-color</li>
  <li>--a-label-padding</li>
  <li>--a-label-border-radius</li>
</ol>
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

export default {
  title: "Atoms/Label",
  component: Description,
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = (args) => <Description {...args} />;

export const Label_story = Template.bind({});

Label_story.args = {
  text: "Placeholder text",
  color: "white",
  backgroundColor: "black",
};

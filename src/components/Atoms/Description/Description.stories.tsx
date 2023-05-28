import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
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
      <td>ReactElement</td>
      <td>-</td>
  </tr>
  <tr>
      <td>color</td>
      <td>string</td>
      <td>hex || color name || rgb</td>
  </tr>
  <tr>
      <td>underline</td>
      <td>boolean</td>
      <td>true / false</td>
  </tr>
  <tr>
      <td>italic</td>
      <td>boolean</td>
      <td>true / false</td>
  </tr>
</table>
<br>
<h2><u>CSS VARIABLES</u></h2>
<ol>
    <li>--a-description-color</li>
</ol>
<table>
  <tr>
    <td>--a-description-color</td>
  <td>$color-black</td>
</tr>
</table>
`;

export default {
  title: "Atoms/Text/Description",
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

const Template: ComponentStory<typeof Description> = (args) => (
    <>
      <h1>Vel massa erat deseruisse eripuit aenean  <Description text={<h4>{args.text}</h4>} color="red"/> deseruisse eripuit aenean</h1>
    </>
);

export const Description_story = Template.bind({});

Description_story.args = {
  underline: true,
  italic: true,
  color: "black",
  text: "lorem ipsum"
};


// TODO nu merg controalele in storybook
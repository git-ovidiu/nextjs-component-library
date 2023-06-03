import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import LinkList from "./Link-list";
import LinkItem from "../../Atoms/Link-item";

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
  <td>link-element</td>
  <td></td>
  </tr>
</table>
<br>
<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--m-link-list-gap</li>
</ol>
<table>
<tr>
<td>--m-link-list-gap</td>
<td>5px</td>
</tr>
</table> 

`;

export default {
  title: "Molecules/Link List",
  component: LinkList,
  argTypes: {
    Position: {
      control: "radio",
      options: ["left", "center", "right"],
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
} as ComponentMeta<typeof LinkList>;

const Template: ComponentStory<typeof LinkList> = (args) => (
  <LinkList
    {...args}
      position={args["position"]}
    link-element={
        //@ts-ignore
      <><LinkItem link={<p>{args["main-link"]}</p>} link-type="main" />
        <LinkItem link={<p>secondary</p>} link-type="secondary" />
        <LinkItem link={<p>secondary</p>} link-type="secondary" />
        <LinkItem link={<p>secondary</p>} link-type="secondary" />
      </>
    }
  />
);

export const LinkList_story = Template.bind({});

LinkList_story.args = {
  // @ts-ignore
  "position": "center",
  // @ts-ignore
  "main-link": "main"
}

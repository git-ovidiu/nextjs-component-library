import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Link_list from "./Link_list";
import Link_item from "../../Atoms/Link_item";

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
  component: Link_list,
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
} as ComponentMeta<typeof Link_list>;

const Template: ComponentStory<typeof Link_list> = (args) => (
  <Link_list
    {...args}
      position={args["position"]}
    link-element={
        //@ts-ignore
      <><Link_item link={<p>{args["main-link"]}</p>} link-type="main" />
        <Link_item link={<p>secondary</p>} link-type="secondary" />
        <Link_item link={<p>secondary</p>} link-type="secondary" />
        <Link_item link={<p>secondary</p>} link-type="secondary" />
      </>
    }
  />
);

export const Link_list_story = Template.bind({});

Link_list_story.args = {
  // @ts-ignore
  "position": "center",
  // @ts-ignore
  "main-link": "main"
}

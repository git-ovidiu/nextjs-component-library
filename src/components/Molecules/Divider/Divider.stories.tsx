import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Divider from "./Divider";
import { Simple_Divider } from "../../index";

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
</table>

<br>

<h2><u>CSS VARIABLES</u></h2>
<ol>
  <li>--a-test-component-right-column-background</li>
</ol>

<table>
  <tr>
    <td>--a-test-component-right-column-background</td>
    <td>gray</td>
  </tr>
</table>
`;

export default {
  title: "Molecules/Divider",
  component: Divider,
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <div style={{display: 'flex', flexDirection: 'column', width: "100vw", margin: "1000px 0px"}}>
    <Divider
      divider={
        <>
          <Simple_Divider border-radius="10px 0px 0px 10px" animate={true} animation-duration="1s" width="100%" height="5px" color="red" />
          <Simple_Divider border-radius="0px" animate={true} animation-duration="1s" width="100%" height="5px" color="blue" />
          <Simple_Divider border-radius="0px 10px 10px 0px" animate={true} animation-duration="1s" width="100%" height="5px" color="green" />
        </>
      }
      position="center"
      width="300px"
    />
    <Divider
      divider={
        <div style={{height: "100%"}}>
          <Simple_Divider animate-vertical={true} animation-duration="1s" width="3px" height="100%" color="red" />
          <Simple_Divider animate-vertical={true} animation-duration="1s" width="3px" height="100%" color="black" />
          <Simple_Divider animate-vertical={true} animation-duration="1s" width="3px" height="100%" color="orange" />
          <Simple_Divider animate-vertical={true} animation-duration="1s" width="3px" height="100%" color="red" />
        </div>
      }
      position="top"
      vertical={true}
    />
  </div>
);

export const Divider_STORY = Template.bind({});

Divider_STORY.args = {
};
